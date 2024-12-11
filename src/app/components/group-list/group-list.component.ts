import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule, MatListItem } from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AddParticipantDialogComponent } from '../add-participant-dialog/add-participant-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-list',
  imports: [MatButtonModule,
    MatListModule,
    MatListItem,
    MatDialogModule,
    MatIconModule,
    CommonModule,
    AddParticipantDialogComponent
  ],
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.css'
})
export class GroupListComponent {
  participants: string[] = [];

  constructor(private dialog: MatDialog) { }

  openAddParticipantDialog() {
    const dialogRef = this.dialog.open(AddParticipantDialogComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.participants.push(result);
      }
    });
  }

  removeParticipant(participant: string) {
    this.participants = this.participants.filter(p => p !== participant);
  }
}
