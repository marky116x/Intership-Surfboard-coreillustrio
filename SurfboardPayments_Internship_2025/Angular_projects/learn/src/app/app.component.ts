import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OneComponent,ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn';
}
