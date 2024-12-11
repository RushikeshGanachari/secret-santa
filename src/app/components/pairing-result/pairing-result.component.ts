import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { PairStorageService } from '../../services/pair-storage.service';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-pairing-result',
  imports: [MatButtonModule],
  templateUrl: './pairing-result.component.html',
  styleUrl: './pairing-result.component.css'
})
export class PairingResultComponent implements OnInit{
  
  pairs: {
    giver: string
    receiver: string
    email: string
  }[] = [];

  constructor(
    private emailService: EmailService,
    private router: Router,
    private pairStorageService: PairStorageService,

    ) {}
  ngOnInit(): void {
    this.pairs = this.pairStorageService.getPairs(); // Get pairs from service

  }
    
  sendEmails(): void {
    this.pairs.forEach(pair => {
      this.emailService.sendEmail(pair.email, pair.receiver , pair.giver)
        .then(() => {
          console.log(`Email sent to ${pair.receiver}`);
        })
        .catch(error => {
          console.error(`Error sending email to ${pair.receiver}:`, error);
        });
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

}
