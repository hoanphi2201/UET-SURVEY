import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Setting } from '@app/core';

@Component({
  selector: 'app-setting-drawer',
  templateUrl: './setting-drawer.component.html',
  styleUrls: ['./setting-drawer.component.less']
})
export class SettingDrawerComponent implements OnInit {
  @Output() settingChange = new EventEmitter();
  @Input() innerClass: object = {};
  @Input()
  get setting(): Setting {
    return this.options;
  }
  set setting(val: Setting) {
    this.options = val;
    this.settingChange.emit(this.options);
  }

  isCollapsed = true;
  options = {
    theme: 'dark',
    color: 'daybreak',
    mode: 'side',
    fixedWidth: false,
    colorweak: false
  };

  themes = [
    {
      key: 'dark',
      image: './assets/images/theme-dark.svg',
      title: 'Dark menu style'
    },
    {
      key: 'light',
      image: './assets/images/theme-light.svg',
      title: 'Light menu style'
    }
  ];

  colors = [
    {
      key: 'dust',
      color: '#F5222D',
      title: 'dusk'
    },
    {
      key: 'volcano',
      color: '#FA541C',
      title: 'volcanic'
    },
    {
      key: 'sunset',
      color: '#FAAD14',
      title: 'Sundial'
    },
    {
      key: 'cyan',
      color: '#13C2C2',
      title: 'Mingqing'
    },
    {
      key: 'green',
      color: '#52C41A',
      title: 'Aurora green'
    },
    {
      key: 'daybreak',
      color: '#1890FF',
      title: 'Xiao Xiaolan (default)'
    },
    {
      key: 'geekblue',
      color: '#2F54EB',
      title: 'Geek blue'
    },
    {
      key: 'purple',
      color: '#722ED1',
      title: 'Sauce purple'
    }
  ];

  modes = [
    {
      key: 'side',
      image: './assets/images/menu-side.svg',
      title: 'Side menu layout'
    },
    {
      key: 'top',
      image: './assets/images/menu-top.svg',
      title: 'Top menu layout'
    }
  ];

  layouts = [
    {
      key: 'fixedWidth',
      title: 'header.sidebar.FIXED_WIDTH',
      disabled: function(setting: any) {
        return setting.mode == 'side';
      }
    }
  ];

  others = [
    {
      key: 'colorweak',
      title: 'header.sidebar.WEAK_MODE'
    }
  ];
  ngOnInit() {
    if (!localStorage.getItem('options')) {
    }
  }
  setStorageOption() {
    localStorage.setItem('options', JSON.stringify(this.options));
  }
}
