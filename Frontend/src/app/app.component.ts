import { Component, OnInit, OnDestroy, HostListener, AfterContentInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Logger, I18nService, untilDestroyed, AuthService } from '@app/core';
import { WindowresizeService, LoaderService } from '@app/shared';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy, AfterContentInit {
  private subscriptions: Subscription[] = [];
  showLoader: boolean;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private windowresizeService: WindowresizeService,
    private i18nService: I18nService,
    private authService: AuthService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.windowresizeService.setSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    });
    this.subscriptions.push(
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
        let scrollToTop = window.setInterval(() => {
          let pos = window.pageYOffset;
          if (pos > 0) {
            window.scrollTo(0, pos - 50); // how far to scroll on each step
          } else {
            window.clearInterval(scrollToTop);
          }
        }, 16);
      })
    );
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(
      environment.defaultLanguage,
      environment.supportedLanguages
    );

    const onNavigationEnd = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd).pipe(
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      switchMap(route => route.data),
      untilDestroyed(this)
    ).subscribe(event => {
      const title = event.title;
      if (title) {
        this.titleService.setTitle(this.translateService.instant(title));
      }
    });
    this.authService.populate();
  }
  ngAfterContentInit(): void {
    this.loaderService.clear();
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
  @HostListener('window:resize', ['$event'])
  resizeHandler($event: any): void {
    this.windowresizeService.setSize({
      innerWidth: $event.target.innerWidth,
      innerHeight: $event.target.innerHeight
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.i18nService.destroy();
  }
}
