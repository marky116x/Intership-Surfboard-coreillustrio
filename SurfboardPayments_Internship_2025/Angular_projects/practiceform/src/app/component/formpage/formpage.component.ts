import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formpage',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './formpage.component.html',
  styleUrl: './formpage.component.css',
})
export class FormpageComponent {

  city: string[] = ["Banglore", "Delhi", "Mumbai", "Chennai", "Kolkata"];
  state: string[] = ["Karnataka", "Delhi", "Maharashtra", "TamilNadu", "WestBengal"];
  country: string[] = ["India", "USA", "UK", "Canada", "Australia"];

  submitted = false;
 

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    

    email: new FormControl('', Validators.required),
    age: new FormControl(''),phone: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),country: new FormControl(''),
    zipCode: new FormControl(''),
    
    
  });




  onSubmit() {
    console.log(this.profileForm.value);

    this.submitted=true;
  }

  resetForm() {
    this.profileForm.reset();
    this.submitted = false;
  }
}
