import { Component, OnInit } from "@angular/core";
import { LayoutComponent } from "../layout/layout.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
  get setting() {
    return this.layout.setting;
  }

  get topMode() {
    return this.layout.topMode;
  }

  constructor(private layout: LayoutComponent) {}
  ngOnInit() {}
}
