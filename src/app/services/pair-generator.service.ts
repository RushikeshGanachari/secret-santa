import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PairGeneratorService {
  constructor() {}

  /**
   * Generate unique Secret Santa pairs, ensuring no one is assigned to themselves.
   * @param participants - Array of participants with name and email.
   * @returns Array of pairs with 'giver' and 'receiver'.
   */
  generatePairs(participants: { name: string; email: string }[]): { giver: string; receiver: string; email: string }[] {
    const names = [...participants];
    const pairs: { giver: string; receiver: string; email: string }[] = [];
    let receivers = [...names];

    for (let giver of names) {
      // Filter out the current giver from the list of receivers
      let validReceivers = receivers.filter(r => r !== giver);
      
      // If there's only one receiver left and it’s the same as the giver, restart the process
      if (validReceivers.length === 0) {
        return this.generatePairs(participants);  // Retry the pairing process
      }

      // Randomly select a valid receiver
      let receiverIndex = Math.floor(Math.random() * validReceivers.length);
      let receiver = validReceivers[receiverIndex];

      // Push the pairing (include the receiver's email for sending later)
      pairs.push({ giver: giver.name, receiver: receiver.name, email: receiver.email });

      // Remove the assigned receiver from the list
      receivers = receivers.filter(r => r !== receiver);
    }

    return pairs;
  }
}
