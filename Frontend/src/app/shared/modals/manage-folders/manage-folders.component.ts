import { Component, OnInit } from '@angular/core';
import { SurveyFolder, DSurveyFolderService, IValidators } from '@app/core';
import { LoaderService } from '@app/shared/services';
import { NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Helpers } from '@app/shared/helpers';
import * as _ from 'lodash';

@Component({
  selector: 'app-manage-folders',
  templateUrl: './manage-folders.component.html',
  styleUrls: ['./manage-folders.component.scss']
})
export class ManageFoldersComponent implements OnInit {
  listOfAllFolder: SurveyFolder[] = [];
  newFolder = false;
  editFolderForm: FormGroup;
  addFolderForm: FormGroup;
  constructor(
    private dSurveyFolderService: DSurveyFolderService,
    private loaderService: LoaderService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getListSurveyFolder();
  }
  buildForm() {
    this.editFolderForm = this.formBuilder.group({
      folders: this.formBuilder.array([])
    });
    this.addFolderForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(120),
        IValidators.spaceStringValidator()
      ]
      ]
    });
  }
  getListSurveyFolder() {
    const control = <FormArray>this.editFolderForm.get('folders');
    this.dSurveyFolderService.getAllSurveyFolderList().subscribe(res => {
      if (res.status.code === 200) {
        this.listOfAllFolder = res.results;
        this.listOfAllFolder.map((o: any) => {
          o.state = 'info';
        });
        for (const folder of this.listOfAllFolder) {
          const group = this.buildGroupFolder(folder);
          control.push(group);
        }
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  buildGroupFolder(folder: any) {
    const group = this.formBuilder.group({
      title: [folder.title, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(120),
        IValidators.spaceStringValidator()
      ]
      ]
    });
    return group;
  }
  updateFolderState(state: 'edit' | 'delete' | 'info', folderId: string) {
    const folder: any = this.findFolderById(folderId);
    folder.state = state;
  }
  findFolderById(folderId: string) {
    return this.listOfAllFolder.filter(o => o.id === folderId)[0];
  }
  updateNewFolder(value: boolean) {
    this.newFolder = value;
  }
  onUpDateFolder(folderId: string, group: FormGroup) {
    if (group.valid) {
      const folder = group.value;
      this.loaderService.display(true);
      this.dSurveyFolderService.updateFolderTitle(folderId, folder).subscribe(res => {
        if (res.status.code === 200) {
          this.dSurveyFolderService.setRefreshList(true);
          const folderUpdate = this.findFolderById(folderId);
          folderUpdate.title = folder.title;
          this.nzMessageService.success(
            this.translateService.instant(res.status.message)
          );
        }
      }, err => {
        this.loaderService.display(false);
        this.nzMessageService.error(
          this.translateService.instant(err.message)
        );
      }, () => {
        this.loaderService.display(false);
      }
      );
    } else {
      group.get('title').markAsDirty({ onlySelf: true });
    }
  }
  onAddNewFolder(formData: FormGroup) {
    if (this.addFolderForm.invalid) {
      Helpers.validateAllFormFields(formData);
      return;
    }
    const control = <FormArray>this.editFolderForm.get('folders');
    this.loaderService.display(true);
    Object.keys(formData.value).forEach(key => {
      if (Helpers.isString(formData.value[key])) {
        formData.value[key] = formData.value[key].trim();
      }
    });
    this.dSurveyFolderService.addSurveyFolder(formData.value).subscribe(res => {
      if (res.status.code === 200) {
        this.dSurveyFolderService.setRefreshList(true);
        const folder = {...res.results[0], totalForm: 0, state: 'info' };
        this.listOfAllFolder.push(folder);
        const group = this.buildGroupFolder(folder);
        control.push(group);
        formData.reset();
        this.updateNewFolder(false);
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  onDeleteFolder(folderId: string) {
    this.loaderService.display(true);
    const control = <FormArray>this.editFolderForm.get('folders');
    this.dSurveyFolderService.deleteSurveyFolder(folderId).subscribe(res => {
      if (res.status.code === 200) {
        this.dSurveyFolderService.setRefreshList(true);
        const indexFolder = _.findIndex(this.listOfAllFolder, {
          id: folderId
        });
        _.remove(this.listOfAllFolder, { id: folderId });
        control.removeAt(indexFolder);
      }
    }, err => {
      this.loaderService.display(false);
      this.nzMessageService.error(this.translateService.instant(err.message));
    }, () => {
      this.loaderService.display(false);
    }
    );
  }
  get getFormData(): FormArray {
    return <FormArray>this.editFolderForm.get('folders');
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }
  get f() {
    return this.addFolderForm.controls;
  }
}
