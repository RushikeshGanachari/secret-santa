import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { MatDialogModule, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-add-participant-dialog',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDialogClose,
    FormsModule
  ],
  templateUrl: './add-participant-dialog.component.html',
  styleUrl: './add-participant-dialog.component.css'
})
export class AddParticipantDialogComponent {
  name: string = '';

}
