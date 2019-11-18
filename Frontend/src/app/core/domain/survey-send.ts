import { SurveyForm } from './survey-form';
export interface SurveySend {
  id?: string;
  surveyFormId: string;
  from: string;
  to: string;
  type: "SEND_COPY" | "TRANSFER";
  surveyForm?: SurveyForm;
}
