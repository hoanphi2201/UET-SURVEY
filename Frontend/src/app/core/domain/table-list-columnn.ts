import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
export interface TableListColumn {
  id: string;
  td_two?: string;
  className?: string;
  header: string;
  headerTemplateRef?: TemplateRef<any>;
  hidden?: boolean;
  checkbox?: boolean;
  templateRef?: TemplateRef<any>;
  type?: 'text' | 'number' | 'date' | 'select' | 'checkbox' | 'action' | 'icon' | 'status';
  sortable?: boolean;
  filter?: any;
  filterKey?: string;
  search?: boolean;
  action?: any;
}
