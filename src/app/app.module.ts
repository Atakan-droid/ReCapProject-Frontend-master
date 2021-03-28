import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginComponent } from './components/login/login.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CustomerComponent,
    CarDetailComponent,
    FilterBrandPipe,
    FilterColorPipe,
    CarFilterComponent,
    PaymentComponent,
    LoginComponent,
    RentalAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
