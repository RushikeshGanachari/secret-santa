import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
        // Initialize EmailJS with the public key from the environment file

    emailjs.init(environment.emailJsPublicKey);

  }

   /**
   * Send an email using the EmailJS service.
   * @param toEmail - Recipient's email address.
   * @param assignedName - Name of the person assigned for Secret Santa.
   * @returns Promise<void>
   */

    sendEmail(toEmail: string, assignedName: string, SenderName:string): Promise<void> {
      const templateParams = {
        to_email: toEmail,         // Recipient email
        assigned_name: assignedName, // Name of the assigned person
        to_name: SenderName
      };  
  
      return emailjs
        .send(environment.emailJsServiceId, environment.emailJsTemplateId, templateParams)
        .then((response) => {
          console.log('Email sent successfully:', response.status, response.text);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
}
