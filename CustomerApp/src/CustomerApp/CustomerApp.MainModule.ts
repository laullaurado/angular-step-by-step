import { NgModule } from '@angular/core';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';

@NgModule({
  imports: [CustomerComponent],
  exports: [CustomerComponent],
})
export class MainModule {}
