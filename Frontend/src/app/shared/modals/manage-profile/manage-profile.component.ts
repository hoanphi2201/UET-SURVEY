import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IValidators, User, AuthService, UserService, DCityService, DUserService } from '@app/core';
import { Helpers } from '@app/shared/helpers';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@env/environment';
import { map, debounceTime, switchMap, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ImageCropperComponent } from '@app/shared/components/image-cropper/image-cropper.component';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  searchChange$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  setLocation$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  listOfAllJobRole = environment.jobRole;
  listOfAllJobLevel = environment.jobLevel;
  listOfAllOrganizationType = environment.organizationType;
  listOfAllIndustry = environment.industry;
  listOfAllSize = environment.size;
  listOfAllLocation = [];
  current = 0;
  formProfile: FormGroup;
  formOrganization: FormGroup;
  userProfile: User;
  firstStepLoading: boolean;
  secondStepLoading: boolean;
  threeStepLoading: boolean;
  isLoading = false;
  uploadedBase64Image: string;
  cropMode = false;
  base64Images$: Observable<{ [key: string]: string }>;
  profileBase64Image: string;
  imagesChanged = false;
  @ViewChild(ImageCropperComponent, { static: false }) cropper: ImageCropperComponent;
  constructor(
    private translateService: TranslateService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dUserService: DUserService,
    private dCityService: DCityService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.base64Images$ = this.dUserService.getBase64Images().pipe(
      tap(res => {
        if (res.status.code === 200 && res.results[0].base64Image) {
          this.profileBase64Image = 'data:image/jpg;base64,' + res.results[0].base64Image;
        }
      }) 
    )

    this.buildForm();
    this.subscriptions.push(
      this.authService.getCurrentUser().subscribe(userData => {
        if (userData) {
          this.userProfile = userData;
          if (this.current === 1) {
            this.patchFormOrganization();
          } else {
            this.patchFormProfile();
          }
        }
      })
    );
    const getUserList = (cityName: string) =>
      this.dCityService.searchCitiesByName(cityName, 50).pipe(
        map((res: any) => {
          if (res.status.code === 200) {
            return res.results;
          }
          return [];
        })
      );
    const listOfAllLocation$: Observable<any[]> = this.searchChange$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(switchMap(getUserList));
    listOfAllLocation$.subscribe(locations => {
      this.isLoading = false;
      this.listOfAllLocation = this.mapViewLocation(locations);
    });

    this.subscriptions.push(
      this.setLocation$.subscribe(response => {
        if (response) {
          this.dCityService.getCityById(response).then(res => {
            if (res.status.code === 200) {
              this.listOfAllLocation = this.mapViewLocation(res.results);
            }
          });
          this.setLocation$.next(null);
        }
      })
    );
  }
  mapViewLocation(locations) {
    return locations.map(o => {
      return {
        id: o.id,
        name: `${o.name}, ${o.state.country.name}`
      };
    });
  }
  private buildForm() {
    this.formProfile = this.formBuilder.group({
      firstName: ['',
        [Validators.required, IValidators.spaceStringValidator()]
      ],
      lastName: ['', [Validators.required, IValidators.spaceStringValidator()]],
      jobRole: [''],
      jobLevel: ['']
    });
    this.formOrganization = this.formBuilder.group({
      organizationType: [''],
      industry: [''],
      location: [''],
      size: ['']
    });
  }

  private patchFormProfile() {
    if (!this.userProfile) {
      return;
    }
    this.formProfile.patchValue({
      firstName: this.userProfile.firstName,
      lastName: this.userProfile.lastName,
      jobRole: this.userProfile.jobRole,
      jobLevel: this.userProfile.jobLevel
    });
  }
  private patchFormOrganization() {
    if (!this.userProfile) {
      return;
    }
    this.formOrganization.patchValue({
      organizationType: this.getOrganizationValue('organizationType'),
      industry: this.getOrganizationValue('industry'),
      location: this.getOrganizationValue('location'),
      size: this.getOrganizationValue('size')
    });
  }
  private getOrganizationValue(key: string) {
    if (key === 'location' && this.userProfile.organization && this.userProfile.organization[key]) {
      const value = this.userProfile.organization[key];
      this.setLocation$.next(value);
    }
    return this.userProfile.organization && this.userProfile.organization[key] ? this.userProfile.organization[key] : null;
  }

  get fP() {
    return this.formProfile.controls;
  }
  get fO() {
    return this.formOrganization.controls;
  }
  pre(): void {
    this.current -= 1;
    if (this.current === 0) {
      this.patchFormProfile();
    } else if (this.current === 1) {
      this.patchFormOrganization();
    }
  }

  next() {
    switch (this.current) {
      case 0: {
        if (this.formProfile.dirty && this.formProfile.valid) {
          this.firstStepLoading = true;
          const formData: FormGroup = this.formProfile;
          Object.keys(formData.value).forEach(key => {
            if (Helpers.isString(formData.value[key])) {
              formData.value[key] = formData.value[key].trim();
            }
          });
          const { id: userId } = this.userProfile;
          const { userName } = this.userProfile;
          return this.dUserService.updateUser(Object.assign(formData.value, { userName }), userId).subscribe(res => {
            if (res.status.code === 200) {
              this.authService.setCurrentUser(
                Object.assign(this.userProfile, formData.value),
                true
              );
            }
          }, err => {
            this.firstStepLoading = false;
            this.nzMessageService.error(
              this.translateService.instant(err.message)
            );
          }, () => {
            this.firstStepLoading = false;
            this.current += 1;
            this.patchFormOrganization();
          }
          );
        }
        this.current += 1;
        this.patchFormOrganization();
        break;

      }
      case 1: {
        if (this.formOrganization.dirty && this.formOrganization.valid) {
          this.secondStepLoading = true;
          const formData: FormGroup = this.formOrganization;
          Object.keys(formData.value).forEach(key => {
            if (Helpers.isString(formData.value[key])) {
              formData.value[key] = formData.value[key].trim();
            }
          });
          const { id: userId } = this.userProfile;
          const { userName } = this.userProfile;
          return this.dUserService.updateUser(Object.assign({ organization: formData.value }, { userName }), userId).subscribe(res => {
            if (res.status.code === 200) {
              this.authService.setCurrentUser(Object.assign(this.userProfile, formData.value), true);
            }
          }, err => {
            this.secondStepLoading = false;
            this.nzMessageService.error(
              this.translateService.instant(err.message)
            );
          }, () => {
            this.secondStepLoading = false;
            this.current = 2;
          });
        }
        this.current = 2;
      }

      default:
        break;
    }

  }

  done() {
    if (this.imagesChanged) {
      this.threeStepLoading = true;
      this.dUserService.uploadAvatar(this.userProfile.id, this.profileBase64Image).subscribe(res => {
        if (res.status.code === 200) {
          this.authService.setCurrentUser(Object.assign(this.userProfile, { avatar: res.results[0].avatar }), true);
        }
      }, err => {
        this.threeStepLoading = false;
        this.nzMessageService.error(this.translateService.instant(err.message));
      }, () => {
        this.threeStepLoading = false;
        this.current = 3;
      });
    } else {
      this.current = 3;
    }
  }
  finish() {
    this.modalService.closeAll();
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).dirty;
  }
  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange$.next(value);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  loadAvatar(inputElementChangeEvent: Event) {
    const input = <HTMLInputElement>inputElementChangeEvent.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const isImage = event.target.result.substring("data:".length, event.target.result.indexOf(";base64")).startsWith('image');
        if (isImage) {
          this.uploadedBase64Image = event.target.result;
          this.cropMode = true;
        } else {
          this.cropMode = false;
          this.nzMessageService.warning(this.translateService.instant('default.layout.ONLY_IMAGE_FORMAT'));
        }
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
  crop() {
    this.imagesChanged = true;
    this.cropper.crop().then(croppedBase64Src => {
      this.profileBase64Image = croppedBase64Src;
      this.cropMode = false;
    });
  }
}
