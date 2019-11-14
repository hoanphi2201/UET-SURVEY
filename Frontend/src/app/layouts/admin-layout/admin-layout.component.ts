import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NzModalService } from 'ng-zorro-antd';
import { AuthService, User } from '@app/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.less']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  layout = {
    collapsed: true,
    siderMode: 'side',
    topMode: function () {
      return this.siderMode != 'over' && this.setting.mode == 'top';
    },
    setting: {
      theme: 'light',
      color: 'daybreak',
      mode: 'side',
      fixedWidth: false,
      colorweak: false
    }
  };

  menu = [
    {
      title: 'header.sidebar.DASHBOARD',
      icon: 'dashboard',
      path: '/admin/dashboard'
    },
    {
      title: 'header.sidebar.USER_MANAGERMENT',
      icon: 'user',
      children: [
        {
          title: 'header.sidebar.USERS',
          path: '/admin/users'
        },
        {
          title: 'header.sidebar.ROLES',
          path: '/admin/roles'
        }
      ]
    },
    {
      title: 'header.sidebar.PERMISSION_MANAGERMENT',
      icon: 'lock',
      children: [
        {
          title: 'header.sidebar.USER_GRANT',
          path: '/admin/user-grants'
        },
        {
          title: 'header.sidebar.ROLE_GRANT',
          path: '/admin/role-grants'
        }
      ]
    },
    {
      title: 'header.sidebar.SURVEY_MANAGERMENT',
      icon: 'form',
      children: [
        {
          title: 'Survey Folder',
          path: '/admin/survey-folders'
        },
        {
          title: 'Survey Form',
          path: '/admin/survey-forms'
        },
        {
          title: 'Survey Response',
          path: '/admin/survey-responses'
        }
      ]
    }
  ];
  notice = {
    spinning: false,
    data: [
      {
        id: '000000001',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '你收到了 14 份新周报',
        datetime: '2017-08-09',
        type: 'notification'
      },
      {
        id: '000000002',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        title: '你推荐的 曲妮妮 已通过第三轮面试',
        datetime: '2017-08-08',
        type: 'notification'
      },
      {
        id: '000000003',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
        title: '这种模板可以区分多种通知类型',
        datetime: '2017-08-07',
        read: true,
        type: 'notification'
      },
      {
        id: '000000004',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
        title: '左侧图标用于区分不同的类型',
        datetime: '2017-08-07',
        type: 'notification'
      },
      {
        id: '000000005',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '内容不要超过两行字，超出时自动截断',
        datetime: '2017-08-07',
        type: 'notification'
      },
      {
        id: '000000006',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '曲丽丽 评论了你',
        description: '描述信息描述信息描述信息',
        datetime: '2017-08-07',
        type: 'message'
      },
      {
        id: '000000007',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '朱偏右 回复了你',
        description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
        datetime: '2017-08-07',
        type: 'message'
      },
      {
        id: '000000008',
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
        title: '标题',
        description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
        datetime: '2017-08-07',
        type: 'message'
      },
      {
        id: '000000009',
        title: '任务名称',
        description: '任务需要在 2017-01-12 20:00 前启动',
        extra: '未开始',
        status: 'todo',
        type: 'event'
      },
      {
        id: '000000010',
        title: '第三方紧急代码变更',
        description:
          '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
        extra: '马上到期',
        status: 'urgent',
        type: 'event'
      },
      {
        id: '000000011',
        title: '信息安全考试',
        description: '指派竹尔于 2017-01-09 前完成更新并发布',
        extra: '已耗时 8 天',
        status: 'doing',
        type: 'event'
      },
      {
        id: '000000012',
        title: 'ABCD 版本发布',
        description:
          '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
        extra: '进行中',
        status: 'processing',
        type: 'event'
      }
    ],
    clear: function (type: any) {
      this.data = this.data.filter((x: any) => x.type != type);
    },
    visibleChange: function (status: any) {
      if (status) {
        this.spinning = true;
        setTimeout(() => (this.spinning = false), 1000);
      }
    }
  };
  currentUser: User;
  constructor(
    breakpointObserver: BreakpointObserver,
    private translateService: TranslateService,
    private authService: AuthService,
    private modal: NzModalService,
    router: Router
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
    // get user login
    this.authService.getCurrentUser().subscribe(userData => {
      if (userData) {
        this.currentUser = userData;
      }
    });
  }
  ngOnInit() { }

  logout() {
    this.modal.confirm({
      nzTitle: this.translateService.instant('admin.layout.LOGOUT_CONFIRM'),
      nzMaskClosable: true,
      nzOnOk: () => this.authService.logout()
    });
  }
  ngOnDestroy() { }
}
