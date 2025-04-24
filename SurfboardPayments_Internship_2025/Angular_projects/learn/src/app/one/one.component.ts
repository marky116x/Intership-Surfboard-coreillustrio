import { Component } from '@angular/core';
import { TwoComponent } from "../two/two.component";

@Component({
  selector: 'app-one',
  imports: [TwoComponent],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {

  oneMessage = 'Hello from One!';
  receivedMessage = '';

  // Method to handle event from two
  notify(message: string) {
    this.receivedMessage = message;
  }

}
