import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedComponentsModule} from "./shared/shared-components.module";
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeRoutingModule} from "./modules/home/home-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ModalModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    HomeRoutingModule,
    
    SharedComponentsModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
