import { Component } from '@angular/core';
import { regex, firstStyles, secondStyles, thirdStyles } from '../../constants';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
})
export class PasswordStrengthMeterComponent {
  password: string = '';

  getPasswordStrength() {
    const hasLetters = regex.letters.test(this.password);
    const hasDigits = regex.digits.test(this.password);
    const hasSymbols = regex.symbols.test(this.password);

    if (!this.password.length) return 'default';

    if (this.password.length < 8) return 'short';

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

  getFirstStyle() {
    return firstStyles[this.getPasswordStrength()];
  }

  getSecondStyle() {
    return secondStyles[this.getPasswordStrength()];
  }

  getThirdStyle() {
    return thirdStyles[this.getPasswordStrength()];
  }
}
