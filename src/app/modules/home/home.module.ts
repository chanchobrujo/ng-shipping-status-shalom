import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeComponent} from './home.component';
import {SharedComponentsModule} from "../../shared/shared-components.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {FormInitComponent} from "./components/form-init/form-init.component";
import {TrackingsListComponent} from "./components/trackings-list/trackings-list.component";
import {DetailTrackingComponent} from "./components/modal/detail-tracking/detail-tracking.component";
import {DeleteTrackingComponent} from "./components/modal/delete-tracking/delete-tracking.component";
import {SetEmailTrackingComponent} from "./components/modal/set-email-tracking/set-email-tracking.component";

const components = [
  HomeComponent,
  FormInitComponent,
  TrackingsListComponent,
  DetailTrackingComponent,
  DeleteTrackingComponent,
  SetEmailTrackingComponent
]

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: components,
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    SharedComponentsModule
  ]
})
export class HomeModule {
}
