import { Injectable } from '@angular/core';
import { regex } from './../constants';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrength(password: string) {
    const hasLetters = regex.letters.test(password);
    const hasDigits = regex.digits.test(password);
    const hasSymbols = regex.symbols.test(password);

    if (!password.length) return 'default';

    if (password.length < 8) return 'short';

    if (
      (hasLetters && !hasSymbols && !hasDigits) ||
      (!hasLetters && hasSymbols && !hasDigits) ||
      (!hasLetters && !hasSymbols && hasDigits)
    ) {
      return 'easy';
    }

    if (
      (!hasLetters && hasSymbols && hasDigits) ||
      (hasLetters && !hasSymbols && hasDigits) ||
      (hasLetters && hasSymbols && !hasDigits)
    ) {
      return 'medium';
    }

    return 'strong';
  }
  constructor() {}
}
