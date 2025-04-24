import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two',
  imports: [],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {

  // Input property to receive data from one
  @Input() message: string = '';

  // Output event to emit data to one
  @Output() notify = new EventEmitter<string>();

  // to emit event when click
  sendNotification() {
    this.notify.emit('Hello from Child i.e two!');
  }

}
