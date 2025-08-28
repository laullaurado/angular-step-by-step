import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Customer } from './CustomerApp.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './CustomerApp.CUstomerView.html',
  // styleUrl: './app.component.css'
})
export class CustomerComponent {
  title = 'CustomerApp';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); // clear UI
  }
}
