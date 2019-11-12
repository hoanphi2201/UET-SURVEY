import {
  Component,
  OnInit,
  SimpleChanges,
  OnChanges,
  Input
} from '@angular/core';
import {
  DSurveyFormService,
  AuthService,
  Pagging,
  SurveyForm,
  Filter
} from '@app/core';
import { NzMessageService, NzModalService, NzModalRef } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '@app/shared';
import * as _ from 'lodash';
import { PreviewCopyComponent } from '@app/shared/modals/preview-copy/preview-copy.component';
type ViewTab = 'all' | 'favorites';
type ViewType = 'grid' | 'list';
@Component({
  selector: 'app-past-survey',
  templateUrl: './past-survey.component.html',
  styleUrls: ['./past-survey.component.scss', './../../styles/style.scss']
})
export class PastSurveyComponent implements OnInit, OnChanges {
  @Input('searchValue') searchValue: string = '';
  currentTab: ViewTab = 'all';
  viewType: ViewType = 'grid';
  listOfRecentData: SurveyForm[] = [];
  listOfAllData: SurveyForm[] = [];
  listOfFavoriteData: SurveyForm[] = [];
  listOfSearchData: SurveyForm[] = [];
  folderSelectId = 'all';
  filterAll: Filter = {
    sortField: 'createdAt',
    sortType: 'desc',
    searchKey: 'title',
    searchValue: ''
  };
  filterRecent: Filter = {
    sortField: 'updatedAt',
    sortType: 'desc',
    searchKey: 'title',
    searchValue: ''
  };
  filterFavorite: Filter = {
    sortField: 'updatedAt',
    sortType: 'desc',
    searchKey: 'title',
    searchValue: '',
    filterKey: 'isFavorite',
    filterValue: [true]
  };
  filterSearch: Filter = {
    sortField: 'createdAt',
    sortType: 'desc',
    searchKey: 'title',
    searchValue: ''
  };
  paggingAll: Pagging = { page: 1, total: 0, pageSize: 8 };
  paggingRecent: Pagging = { page: 1, total: 0, pageSize: 4 };
  paggingFavorite: Pagging = { page: 1, total: 0, pageSize: 4 };
  paggingSearch: Pagging = { page: 1, total: 0, pageSize: 4 };
  modalForm: NzModalRef;
  searching = false;
  constructor(
    private dSurveyFormService: DSurveyFormService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private loaderService: LoaderService,
    private modalService: NzModalService
  ) {}

  ngOnInit() {
    this.getDataForPageAll();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listOfSearchData = [];
    this.searching = false;
    if (
      changes.searchValue &&
      changes.searchValue.currentValue &&
      changes.searchValue.currentValue !== ''
    ) {
      this.filterSearch.searchValue = changes.searchValue.currentValue;
      this.searching = true;
      this.getListSurvey(
        this.paggingSearch,
        this.listOfSearchData,
        this.filterSearch
      );
    }
  }

  getDataForPageAll() {
    this.listOfAllData = [];
    this.listOfRecentData = [];
    this.paggingAll.page = 1;
    this.paggingRecent.page = 1;
    this.getListSurvey(this.paggingAll, this.listOfAllData, this.filterAll);
    this.getListSurvey(
      this.paggingRecent,
      this.listOfRecentData,
      this.filterRecent
    );
  }
  getDataForPageFavorite() {
    this.listOfFavoriteData = [];
    this.paggingFavorite.page = 1;
    this.getListSurvey(
      this.paggingFavorite,
      this.listOfFavoriteData,
      this.filterFavorite
    );
  }

  getListSurvey(pagging: Pagging, listOfData: SurveyForm[], filter: Filter) {
    this.loaderService.display(true);
    this.dSurveyFormService
      .getDefaultSurveyFormList(
        pagging.page,
        pagging.pageSize,
        filter.sortField,
        filter.sortType,
        filter.searchKey,
        filter.searchValue || '',
        filter.filterKey || '',
        JSON.stringify(filter.filterValue || [])
      )
      .subscribe(
        res => {
          if (res.status.code === 200) {
            res.results.forEach(o => {
              listOfData.push(o);
            });
            pagging.total = res.paging.total;
          }
        },
        err => {
          this.loaderService.display(false);
          this.nzMessageService.error(
            this.translateService.instant(err.message)
          );
        },
        () => {
          this.loaderService.display(false);
        }
      );
  }

  loadMore($event: {
    pagging: Pagging;
    filter: Filter;
    listOfData: SurveyForm[];
  }) {
    this.getListSurvey($event.pagging, $event.listOfData, $event.filter);
  }

  onChangeTab(tab: ViewTab) {
    switch (tab) {
      case 'all':
        this.getDataForPageAll();
        break;

      default:
        this.getDataForPageFavorite();
        break;
    }
    this.currentTab = tab;
  }
  onChangeViewType(type: ViewType) {
    this.viewType = type;
  }
  openModalPreview(survey: SurveyForm) {
    this.modalForm = this.modalService.create({
      nzTitle: null,
      nzFooter: null,
      nzContent: PreviewCopyComponent,
      nzCancelDisabled: true,
      nzClosable: false,
      nzClassName: 'modal-preview-copy-survey',
      nzComponentParams: { surveyFormDetail: survey }
    });
  }
}
