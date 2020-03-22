import { SurveyCollector } from "./survey-collector";

export interface SurveyRecipient {
  id?: string;
  surveyCollector?: SurveyCollector;
  firstName?: string;
  lastName?: string;
  email: string;
  mailStatus?: string;
  message?: string;
  subject?: string;
  surveyCollectorId?: string;
}
