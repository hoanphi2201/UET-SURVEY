import { SurveyCollector } from "./survey-collector";
import { SurveyForm } from "./survey-form";
export interface SurveyResponse {
  id: string;
  surveyFormId: string;
  surveyCollectorId: string;
  totalTime: number;
  ipAddress: string;
  json: any;
  geoLocation: any;
  surveyForm: SurveyForm;
  surveyCollector: SurveyCollector;
  startTime: Date;
  endTime: Date;
}
