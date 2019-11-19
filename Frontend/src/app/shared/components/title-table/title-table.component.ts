import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ContentChild
} from '@angular/core';
import { TableListColumn } from '@app/core';

@Component({
  selector: 'app-title-table',
  templateUrl: './title-table.component.html',
  styleUrls: ['./title-table.component.scss']
})
export class TitleTableComponent implements OnInit {
  @ContentChild('customerBottomActions', { static: false })
  customerBottomActions: TemplateRef<any>;
  @Input() numberOfChecked: number;
  @Input() results: number = 0;
  @Output() openForm = new EventEmitter<any>();
  @Output() export = new EventEmitter<string>();
  @Input() columns: TableListColumn[] = [];
  constructor() {}

  ngOnInit() {}
  onOpenForm() {
    this.openForm.emit(null);
  }
  onChangeHidden($event: any, column: TableListColumn) {
    column.hidden = !$event;
  }
  onExport(type: string) {
    this.export.emit(type)
  }
}
