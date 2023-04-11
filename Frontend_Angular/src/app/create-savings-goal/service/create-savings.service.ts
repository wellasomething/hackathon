import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CreateSavingsService {

  constructor() { }
  storeSavingGoals(data:any) {
    const storeSaving = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      "gtbt_#EDit"
    );
    localStorage.setItem("storeSave", storeSaving.toString());
   }
  //  getStoredSavings() {
  //   return JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem("storeSave"), 'gtbt_#EDit').toString(CryptoJS.enc.Utf8));
  //  }
getStoreSavings(){
  return JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem("storeSave")!, 'gtbt_#EDit').toString(CryptoJS.enc.Utf8))
}

   }
