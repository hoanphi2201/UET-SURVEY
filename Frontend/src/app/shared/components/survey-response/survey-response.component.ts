import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import * as Survey from "survey-angular";
import "inputmask/dist/inputmask/phone-codes/phone.js";

@Component({
  selector: "app-survey-response",
  template: `
    <div id="surveyResponseElement"></div>
  `
})
export class SurveyResponseComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input("json") json: any;
  @Input("data") data: any;
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.json &&
      changes.json.currentValue &&
      changes.data &&
      changes.data.currentValue
    ) {
      this.setTheme();
      const surveyModel = new Survey.Model(this.json);

      if (this.data && Object.keys(this.data).length > 0) {
        surveyModel.data = this.data;
      }
      if (this.disabled) {
        surveyModel.mode = "display";
      }
      surveyModel.showTitle = false;
      Survey.SurveyNG.render("surveyResponseElement", { model: surveyModel });
    }
  }
  ngOnInit() {}

  setTheme() {
    const mainColor = "#00bf6f";
    const mainHoverColor = "#6fe06f";
    const textColor = "#4a4a4a";
    const headerColor = "#001629";
    const headerBackgroundColor = "#4a4a4a";
    const bodyContainerBackgroundColor = "#f8f8f8";

    const defaultThemeColorsSurvey =
      Survey.StylesManager.ThemeColors["default"];
    defaultThemeColorsSurvey["$main-color"] = mainColor;
    defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
    defaultThemeColorsSurvey["$text-color"] = textColor;
    defaultThemeColorsSurvey["$header-color"] = headerColor;
    defaultThemeColorsSurvey[
      "$header-background-color"
    ] = headerBackgroundColor;
    defaultThemeColorsSurvey[
      "$body-container-background-color"
    ] = bodyContainerBackgroundColor;

    Survey.StylesManager.applyTheme();
  }
}
