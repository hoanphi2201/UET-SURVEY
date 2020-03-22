import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "@app/core";
import { SharedModule, LoaderService } from "@app/shared";
import { AppComponent } from "./app.component";
import { LayoutsModule } from "./layouts/layouts.module";
import { AppRouting } from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    CoreModule,
    AppRouting,
    LayoutsModule
  ],
  declarations: [AppComponent],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
