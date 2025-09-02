import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptProvider {
  encrypt(text: string): string {
    return CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
  }

  compare(text: string, hash: string): boolean {
    return this.encrypt(text) === hash;
  }
}
