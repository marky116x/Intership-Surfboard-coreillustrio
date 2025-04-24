import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormpageComponent } from "./component/formpage/formpage.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practiceform';
}
