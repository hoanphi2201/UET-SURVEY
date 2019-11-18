import { Component, OnInit } from '@angular/core';
import { I18nService } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  currentLanguage: any;
  LANGS: any = env.languages;
  langs = Object.keys(this.LANGS).map(code => {
    const item = this.LANGS[code];
    return { code, text: item.text, abbr: item.abbr };
  });
  constructor(private i18nService: I18nService) { }
  ngOnInit() {
    this.getCurrentLanguage();
  }
  getCurrentLanguage() {
    this.currentLanguage = this.langs.filter(o => o.code === this.i18nService.getCurrentLanguage())[0];
  }
  change(lang: string) {
    this.i18nService.language = lang;
    this.getCurrentLanguage();
  }
}
