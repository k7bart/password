import { Component } from '@angular/core';
import { PasswordStrengthService } from './../password-strength.service';
import { firstStyles, secondStyles, thirdStyles } from '../../constants';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
})
export class PasswordStrengthMeterComponent {
  password: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  getPasswordStrength() {
    return this.passwordStrengthService.getPasswordStrength(this.password);
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
