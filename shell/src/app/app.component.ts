import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from "./components/header/header";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, Header],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell';
}
