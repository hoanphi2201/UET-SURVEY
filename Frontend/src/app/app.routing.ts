import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { AuthGuard, AdminGuard } from "./core";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { DefaultLayoutComponent } from "./layouts/default-layout/default-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/auth/login",
    pathMatch: "full"
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        canActivate: [AuthGuard],
        pathMatch: "full"
      },
      {
        path: "",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./modules/default/default.module").then(m => m.DefaultModule)
      }
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () =>
      import("./modules/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "publish",
    loadChildren: () =>
      import("./modules/publish/publish.module").then(m => m.PublishModule)
  },
  { path: "**", redirectTo: "/auth/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouting {}
