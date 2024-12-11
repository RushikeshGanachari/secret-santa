import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule, MatListItem , MatListItemLine , MatListItemTitle} from '@angular/material/list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AddParticipantDialogComponent } from '../add-participant-dialog/add-participant-dialog.component';
import { CommonModule } from '@angular/common';
import { PairGeneratorService } from '../../services/pair-generator.service';
import { Router } from '@angular/router';
import { PairStorageService } from '../../services/pair-storage.service';

@Component({
  selector: 'app-group-list',
  imports: [MatButtonModule,
    MatListModule,
    MatListItem,
    MatListItemLine,
    MatDialogModule,
    MatIconModule,
    CommonModule,
  ],
  standalone: true,
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.css'
})
export class GroupListComponent {
  participants: { name: string; email: string }[] = [
   
  ];

  constructor(private dialog: MatDialog, private pairGeneratorService : PairGeneratorService, private router: Router ,  private pairStorageService: PairStorageService,
    ) { }

  openAddParticipantDialog() {
    const dialogRef = this.dialog.open(AddParticipantDialogComponent);
    dialogRef.afterClosed().subscribe((result: { name: string; email: string }) => {
      if (result) {
        this.participants.push(result);
      }
    });
  }

  removeParticipant(participant: { name: string; email: string }) {
    this.participants = this.participants.filter(p => p.email !== participant.email);
  }

  generatePairs(): void {
    try {
      const pairs = this.pairGeneratorService.generatePairs(this.participants);
      this.pairStorageService.setPairs(pairs); // Store pairs in the service
      this.router.navigate(['/pairing-result']);
    } catch (error) {
      console.error('Error generating pairs. Please try again.');
    }
  }
}
