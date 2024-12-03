import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ShippingShalomButtonComponent} from "./shipping-shalom-button/shipping-shalom-button.component";
import {ShippingShalomInputComponent} from "./shipping-shalom-input/shipping-shalom-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GeneralModalComponent} from "./modal/general-modal/general-modal.component";

const components = [
  GeneralModalComponent,
  ShippingShalomButtonComponent,
  ShippingShalomInputComponent,
]

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: components,
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ]
})
export class SharedComponentsModule {
}
