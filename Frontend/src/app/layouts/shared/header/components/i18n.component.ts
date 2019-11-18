import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { I18nService } from '@app/core';
import { environment as env } from '@env/environment';

@Component({
  selector: 'header-i18n',
  template: `
    <div nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight">
      <i nz-icon nzType="global"></i>
      {{ 'header.sidebar.MENU_LANG' | translate }}
      <i nz-icon nzType="down"></i>
    </div>
    <nz-dropdown-menu #langMenu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item *ngFor="let item of langs" (click)="change(item.code)">
          <span role="img" [attr.aria-label]="item.text" class="pr-xs">{{
            item.abbr
          }}</span>
          <span class="c-menu-item-text">
            <span class="menu-item-text">
              {{ item.text }}
            </span>
            <i
              style="float: right; color: #52c41a; padding-left: 10px;"
              *ngIf="item.code === currentLanguage.code"
              class="checked-icon fa fa-check"
            ></i>
          </span>
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class I18nComponent implements OnInit {
  LANGS: any = env.languages;
  langs = Object.keys(this.LANGS).map(code => {
    const item = this.LANGS[code];
    return { code, text: item.text, abbr: item.abbr };
  });
  currentLanguage: any;
  constructor(private i18nService: I18nService) {}
  ngOnInit() {
    this.getCurrentLanguage();
    this.change(this.currentLanguage.code);
  }
  getCurrentLanguage() {
    this.currentLanguage = this.langs.filter(o => o.code === this.i18nService.getCurrentLanguage())[0];
  }
  change(lang: string) {
    this.i18nService.language = lang;
    this.getCurrentLanguage();
  }
}
