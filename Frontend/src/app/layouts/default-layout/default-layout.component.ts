import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, ActivationStart } from '@angular/router';
import { AuthService, User, RealtimeService, Filter, Pagging, DSurveySendService, SurveySend, DSurveyFormService, DSurveyCollectorService } from '@app/core';
import { NzModalService, NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';
import { environment as env } from '@env/environment';
import { LoaderService } from '@app/shared';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.less'],
  providers: [DatePipe]
})
export class DefaultLayoutComponent implements OnInit {
  avatarUrl: string;
  viewFullName: string;
  layout = {
    collapsed: true,
    siderMode: 'side',
    topMode: function () {
      return this.siderMode != 'over' && this.setting.mode == 'top';
    },
    setting: {
      theme: 'green',
      color: 'daybreak',
      mode: 'top',
      fixedWidth: false,
      colorweak: false
    }
  };

  menu = [
    {
      title: 'header.sidebar.DASHBOARD',
      icon: 'dashboard',
      path: '/dashboard'
    },
    {
      title: 'header.sidebar.MYSURVEYS',
      icon: 'form',
      path: '/home'
    },
    {
      title: 'header.sidebar.PLANS_PRICING',
      icon: 'dollar',
      path: '/pricing'
    }
  ];
  notification = {
    spinning: false,
    data: [],
    visibleChange: function (status: any) {
      if (status) {
        this.spinning = true;
        setTimeout(() => (this.spinning = false), 200);
      }
    }
  };
  currentUser: User;
  filter: Filter = {
    sortField: 'createdAt',
    sortType: 'desc',
    searchKey: 'email',
    searchValue: '',
    filterKey: 'to',
    filterValue: []
  };
  pagging: Pagging = { page: 1, total: 0, pageSize: 5 };
  constructor(
    breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService,
    private modal: NzModalService,
    private realtimeService: RealtimeService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService,
    private dSurveySendService: DSurveySendService,
    private datePipe: DatePipe,
    private nzNotificationService: NzNotificationService,
    private dSurveyFormService: DSurveyFormService,
    private dSurveyCollectorService: DSurveyCollectorService
  ) {
    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      this.layout.siderMode = result.matches ? 'over' : 'side';
      this.layout.collapsed = result.matches;
    });

    router.events.pipe(filter(event => event instanceof ActivationStart)).subscribe(() => {
      if (this.layout.siderMode == 'over') {
        this.layout.collapsed = true;
      }
    });
  }
  ngOnInit() {
    // get user login
    this.authService.getCurrentUser().subscribe(userData => {
      if (userData) {
        this.currentUser = userData;
        this.avatarUrl = env.serverRootUrl + '/uploads/users/' + this.currentUser.avatar;
        this.viewFullName = this.currentUser.firstName + ' ' + this.currentUser.lastName;
        this.filter.filterValue = [this.currentUser.userName]
        this.getListSurveySend();
        this.initIoConnection();
      }
    });
  }
  private getListSurveySend(isPagging: boolean = false) {
    if (!isPagging) {
      this.pagging.page = 1;
    }
    this.notification.spinning = true;
    this.dSurveySendService.getSurveySendList(this.pagging.page, this.pagging.pageSize, this.filter.sortField, this.filter.sortType, this.filter.searchKey, this.filter.searchValue || '', this.filter.filterKey, JSON.stringify(this.filter.filterValue)).subscribe(res => {
      if (res.status.code === 200) {
        const notification = res.results.map(item => {
          let title = '';
          switch (item.type) {
            case 'SEND_COPY':
              title = `<b>${item.user.userName}</b> send a copy survey <b>${item.surveyForm.title}</b>`
              break;
            case 'TRANSFER':
              title = `<b>${item.user.userName}</b> send a transfer survey <b>${item.surveyForm.title}</b>`
              break;
            default:
              break;
          }
          return {
            id: item.id,
            avatar: env.serverRootUrl + '/uploads/users/' + item.user.avatar,
            title,
            datetime: this.datePipe.transform(item.createdAt, 'dd-MM-yyyy HH:ss'),
            type: 'notification',
            surveySend: item
          }
        })
        if (isPagging) {
          this.notification.data = [...this.notification.data, ...notification];
        } else {
          this.notification.data = notification;
        }

        this.pagging.total = res.paging.total;
      }
    }, err => {
      this.notification.spinning = false;
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.notification.spinning = false;
    });
  }

  initIoConnection() {
    if (!this.realtimeService.getSocket()) {
      this.realtimeService.initSocket();
      this.realtimeService.listenEvent('connect').subscribe(() => {
        const data = {
          userId: this.currentUser.id,
          firstName: this.currentUser.firstName,
          lastName: this.currentUser.lastName,
          userName: this.currentUser.userName,
          avatar: this.currentUser.avatar
        }
        this.realtimeService.sendEvent('USER_CONNECT', data);
      })
    }
    this.realtimeService.listenEvent('SERVER_SEND_NEW_A_COPY_SURVEY').subscribe((res) => {
      if (res) {
        let title = '';
        switch (res.type) {
          case 'SEND_COPY':
            title = `<b>${res.user.userName}</b> send a copy survey <b>${res.surveyForm.title}</b>`
            break;
          case 'TRANSFER':
            title = `<b>${res.user.userName}</b> send a transfer survey <b>${res.surveyForm.title}</b>`
            break;
          default:
            break;
        }
        this.nzNotificationService.create(
          'info',
          'Notification',
          title
        )
        this.getListSurveySend();
      }
    }
    );
  }

  logout() {
    this.modal.confirm({
      nzTitle: 'Dơ you want logout？',
      nzMaskClosable: true,
      nzOnOk: () => this.authService.logout()
    });
  }
  ngOnDestroy() {
    this.realtimeService.sendEvent('USER_DISCONNECT', {});
  }

  onHandleAction(data: any) {
    if (!data) {
      return
    }
    switch (data.accept) {
      case true:
        switch (data.surveySend.type) {
          case 'SEND_COPY':
            this.onAcceptSendCopy(data.surveySend);
            break;
          case 'TRANSFER':
            this.onAcceptTransfer(data.surveySend);
            break;
          default:
            break;
        }
        break;
      case false:
        this.onDenySendCopy(data.surveySend);
        break;
      default:
        break;
    }
  }
  private onAcceptSendCopy(surveySend: SurveySend) {
    const copySurvey = {
      json: surveySend.surveyForm.json,
      title: `Copy of ${surveySend.surveyForm.title}`,
      description: surveySend.surveyForm.description,
      userId: this.currentUser.id
    };
    this.loaderService.display(true);
    this.dSurveyFormService.addSurveyForm(copySurvey).subscribe(async res => {
      if (res.status.code === 200) {
        await this.dSurveySendService.deleteSurveySend(surveySend.id);
        this.getListSurveySend();
        this.nzMessageService.success(this.translateService.instant(res.status.message));
        this.router.navigate(['/create', 'design-survey', res.results[0].id]);
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    });
  }
  private onAcceptTransfer(surveySend: SurveySend) {
    const transferSurvey = {
      userId: this.currentUser.id,
      surveyFolderId: null
    }
    this.loaderService.display(true);
    this.dSurveyFormService.updateSurveyForm(transferSurvey, surveySend.surveyForm.id).subscribe(async res => {
      if (res.status.code === 200) {
        await this.dSurveySendService.deleteSurveySend(surveySend.id);
        await this.dSurveyCollectorService.transferSurveyCollector(surveySend.surveyForm.id);
        this.getListSurveySend();
        this.nzMessageService.success(this.translateService.instant(res.status.message));
        this.router.navigate(['/create', 'design-survey', res.results[0].id]);
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    });
  }
  private onDenySendCopy(surveySend: SurveySend) {
    this.loaderService.display(true);
    this.dSurveySendService.deleteSurveySend(surveySend.id).then(res => {
      if (res.status.code === 200) {
        this.loaderService.display(false);
        this.getListSurveySend();
        this.nzMessageService.success(this.translateService.instant(res.status.message));
      }
    }).catch(err => {
      this.loaderService.display(false);
    })
  }
  loadMore() {
    if (this.notification.data.length < this.pagging.total) {
      this.pagging.page += 1;
      this.getListSurveySend(true);
    }
  }
}
