import { SurveyForm } from "./survey-form";
import { User } from "./user";

export interface SurveyCollector {
  id?: string;
  name: string;
  user?: User;
  surveyForm?: SurveyForm;
  type: "WEBLINK" | "EMAIL";
  status?: "OPEN" | "CLOSED";
  url?: string;
  thankYouMessage?: string;
  allowMultipleResponses?: boolean;
  password?: string;
  responseLimitEnabled?: boolean;
  responseLimit?: number;
  closeDate?: Date;
  displaySurveyResults?: boolean;
  surveyFormId?: string;
  userId?: string;
  closedMessage?: string;
  fullUrl?: string;
  editResponseType?: "UNTILCOMPLETE" | "NEVER" | "ALWAYS";
  anonymousType?: boolean;
  closeDateEnabled?: boolean;
  passwordEnabled?: boolean;
  passwordLabel?: string;
  passwordRequiredMessage?: string;
  passwordRequiredErrorMessage?: string;
}
