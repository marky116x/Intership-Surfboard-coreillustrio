## Learned about @Input and @Output in Angular

In Angular, `@Input` and `@Output` are used for communication between parent and child components.

### @Input
Allows a parent component to pass data to a child component.

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Received: {{ data }}</p>`
})
export class ChildComponent {
  @Input() data!: string;
}
```

### @Output
Enables a child component to emit events to its parent component.

**Example:**

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendData()">Send Data</button>`
})
export class ChildComponent {
  @Output() notify = new EventEmitter<string>();

  sendData() {
    this.notify.emit('Hello from Child!');
  }
}
```

## API Integration in Angular using HTTP

Angular provides the `HttpClientModule` for making API requests. Steps to integrate APIs include:

### Importing HttpClientModule

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule]
})
export class AppModule { }
```

## Conclusion
- `@Input` and `@Output` are essential for component communication.
- API integration in Angular is done using `HttpClientModule` with `HttpClient`.
- Observables are used to handle asynchronous data from APIs.

and also installed flutter on my computer and learnt the  execution starts in main.dart file and got to get insights from joel on how to apporach mobile app development in flutter

