import { SurveyFolder } from './survey-folder';
import { User } from './user';

export interface SurveyForm {
  id: string;
  surveyFolder?: SurveyFolder;
  title: string;
  description?: string;
  status: 'DRAFT' | 'OPEN' | 'CLOSED';
  isFavorite?: boolean;
  json: any;
  user: User;
}
