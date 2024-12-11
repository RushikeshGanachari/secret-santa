import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { MatDialogModule, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-add-participant-dialog',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDialogContent,
    MatDialogClose,
    FormsModule
  ],
  templateUrl: './add-participant-dialog.component.html',
  styleUrl: './add-participant-dialog.component.css'
})
export class AddParticipantDialogComponent {
  name: string = '';
  email: string = '';

  isValidEmail(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.email);
  }

}
