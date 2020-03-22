import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivationStart, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { NzModalService } from "ng-zorro-antd";
import { AuthService, User } from "@app/core";
import { TranslateService } from "@ngx-translate/core";
import { environment as env } from "@env/environment";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.less"]
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  avatarUrl: string;
  viewFullName: string;
  layout = {
    collapsed: true,
    siderMode: "side",
    topMode: function() {
      return this.siderMode != "over" && this.setting.mode == "top";
    },
    setting: {
      theme: "light",
      color: "daybreak",
      mode: "side",
      fixedWidth: false,
      colorweak: false
    }
  };

  menu = [
    {
      title: "header.sidebar.DASHBOARD",
      icon: "dashboard",
      path: "/admin/dashboard"
    },
    {
      title: "header.sidebar.USERS",
      path: "/admin/users",
      icon: "user"
    },
    {
      title: "header.sidebar.ROLES",
      path: "/admin/roles",
      icon: "team"
    },
    {
      title: "header.sidebar.USER_GRANT",
      path: "/admin/user-grants",
      icon: "idcard"
    },
    {
      title: "header.sidebar.ROLE_GRANT",
      path: "/admin/role-grants",
      icon: "lock"
    },
    {
      title: "header.sidebar.SURVEY_FOLDER",
      path: "/admin/survey-folders",
      icon: "folder-open"
    },
    {
      title: "header.sidebar.SURVEY_FORM",
      path: "/admin/survey-forms",
      icon: "form"
    },
    {
      title: "header.sidebar.SURVEY_COLLECTOR",
      path: "/admin/survey-collectors",
      icon: "link"
    },
    {
      title: "header.sidebar.SURVEY_RESPONSE",
      path: "/admin/survey-responses",
      icon: "inbox"
    },
    {
      title: "header.sidebar.SURVEY_SEND",
      path: "/admin/survey-sends",
      icon: "tag"
    },
    {
      title: "header.sidebar.SURVEY_RECIPIENT",
      path: "/admin/survey-recipients",
      icon: "mail"
    }
  ];
  notice = {
    spinning: false,
    data: [],
    clear: function(type: any) {
      this.data = this.data.filter((x: any) => x.type != type);
    },
    visibleChange: function(status: any) {
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
    breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        this.layout.siderMode = result.matches ? "over" : "side";
        this.layout.collapsed = result.matches;
      });

    router.events
      .pipe(filter(event => event instanceof ActivationStart))
      .subscribe(() => {
        if (this.layout.siderMode == "over") {
          this.layout.collapsed = true;
        }
      });
  }
  ngOnInit() {
    // get user login
    this.authService.getCurrentUser().subscribe(userData => {
      if (userData) {
        this.currentUser = userData;
        this.avatarUrl =
          env.serverRootUrl + "/uploads/users/" + this.currentUser.avatar;
        this.viewFullName =
          this.currentUser.firstName + " " + this.currentUser.lastName;
      }
    });
  }

  logout() {
    this.modal.confirm({
      nzTitle: this.translateService.instant("admin.layout.LOGOUT_CONFIRM"),
      nzMaskClosable: true,
      nzOnOk: () => this.authService.logout()
    });
  }
  ngOnDestroy() {}
}
