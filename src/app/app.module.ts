import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PaymentFormContainerComponent } from './components/payment-form-container/payment-form-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PaymentFormComponent,
    HomePageComponent,
    PaymentFormContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
