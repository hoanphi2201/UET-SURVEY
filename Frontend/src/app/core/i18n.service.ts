import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { vi_VN, zh_CN, fr_FR, en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { Logger } from './logger.service';

import enUS from '../../translations/en-US.json';
import frFR from '../../translations/fr-FR.json';
import vnVN from '../../translations/vi-Vn.json';
import zhCN from '../../translations/zh-CN.json';

const log = new Logger('I18nService');
const languageKey = 'language';

/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param s The string to extract for translation.
 * @return The same string.
 */
export function extract(s: string) {
  return s;
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  defaultLanguage!: string;
  supportedLanguages!: string[];

  private langChangeSubscription!: Subscription;

  constructor(
    private translateService: TranslateService,
    private nzI18nService: NzI18nService
  ) {
    // Embed languages to avoid extra HTTP requests
    translateService.setTranslation('en-US', enUS);
    translateService.setTranslation('fr-FR', frFR);
    translateService.setTranslation('zh-CN', zhCN);
    translateService.setTranslation('vi-VN', vnVN);
  }

  /**
   * Initializes i18n for the application.
   * Loads language from local storage if present, or sets default language.
   * @param defaultLanguage The default language to use.
   * @param supportedLanguages The list of supported languages.
   */
  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    // Warning: this subscription will always be alive for the app's lifetime
    this.langChangeSubscription = this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        localStorage.setItem(languageKey, event.lang);
      }
    );
  }

  getCurrentLanguage() {
    return localStorage.getItem(languageKey) ? localStorage.getItem(languageKey) : this.defaultLanguage;
  }

  /**
   * Cleans up language change subscription.
   */
  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param language The IETF language code to set.
   */
  set language(language: string) {
    language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = this.supportedLanguages.includes(language);

    // If no exact match is found, search without the region
    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }

    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    log.debug(`Language set to ${language}`);
    this.translateService.use(language);
    switch (language) {
      case 'en-US':
        this.nzI18nService.setLocale(en_US);
        break;
      case 'fr-FR':
        this.nzI18nService.setLocale(fr_FR);
        break;
      case 'vi-VN':
        this.nzI18nService.setLocale(vi_VN);
        break;
      case 'zh-CN':
        this.nzI18nService.setLocale(zh_CN);
        break;
      default:
        this.nzI18nService.setLocale(en_US);
        break;
    }
  }

  /**
   * Gets the current language.
   * @return The current language code.
   */
  get language(): string {
    return this.translateService.currentLang;
  }
}
