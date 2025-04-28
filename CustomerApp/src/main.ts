import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './CustomerApp/CustomerApp.component';
import { FormsModule } from '@angular/forms';

bootstrapApplication(CustomerComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FormsModule
    )
  ]
})
  .catch((err) => console.error(err));
