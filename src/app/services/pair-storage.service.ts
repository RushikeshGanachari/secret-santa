import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PairStorageService {

  constructor() { }

  private pairs: {
    giver: string
    receiver: string
    email: string
  }[] = [];

  setPairs(pairs: {
    giver: string
    receiver: string
    email: string
  }[]): void {
    this.pairs = pairs;

    console.log("pairs in service",this.pairs)
  }

  getPairs(): {
    giver: string
    receiver: string
    email: string
  }[] {
    return this.pairs;
  }
}
