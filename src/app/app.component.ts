import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GroupListComponent } from './components/group-list/group-list.component';


@Component({
  selector: 'app-root',
  imports: [ MatToolbarModule , RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secret-santa';
}
