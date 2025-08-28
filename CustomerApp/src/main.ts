import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { MainModule } from './CustomerApp/CustomerApp.MainModule';
import { MasterPageComponent } from './CustomerApp/Home/CustomerApp.MasterPageComponent';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

bootstrapApplication(MasterPageComponent, {
  providers: [
    importProvidersFrom(
      MainModule,
      BrowserModule,
      FormsModule
    )
  ]
})
  .catch((err) => console.error(err));
