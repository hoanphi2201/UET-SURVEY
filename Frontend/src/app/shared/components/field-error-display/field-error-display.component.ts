import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "field-error-display",
  templateUrl: "./field-error-display.component.html",
  styleUrls: ["./field-error-display.component.scss"]
})
export class FieldErrorDisplayComponent {
  @Input() set errors(errors: any) {
    if (errors) {
      if (errors.required) {
        this.errorMsg = "This field is not empty";
      } else if (errors.minlength) {
        this.errorMsg =
          "Min length is " + errors.minlength.requiredLength + " character";
      } else if (errors.maxlength) {
        this.errorMsg =
          "Max length is " + errors.maxlength.requiredLength + " character";
      } else if (errors.validatePhone) {
        this.errorMsg = "Invalid phonenumber format";
      } else if (errors.email) {
        this.errorMsg = "Invalid email format: john@gmail.com";
      } else if (errors.min) {
        this.errorMsg = "Number and min is " + errors.min.min;
      } else if (errors.NoPassswordMatch) {
        this.errorMsg = "Confirm password is not match";
      } else if (errors.validateEmail) {
        this.errorMsg = "Invalid email format: john@gmail.com";
      } else if (errors.validateIncludeSpaceString) {
        this.errorMsg = "Not include space";
      } else if (errors.validatespaceString) {
        this.errorMsg = "Not is space string";
      } else if (errors.validatePositiveInteger) {
        this.errorMsg = "Must be positive integer";
      } else {
        this.errorMsg = "Invalid value";
      }
    }
  }

  @Input() displayError: boolean;
  errorMsg: string;
}
