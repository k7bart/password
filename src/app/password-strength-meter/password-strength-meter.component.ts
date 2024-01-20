import { Component } from '@angular/core';
import { PasswordStrengthService } from './../password-strength.service';
import { styles, StrengthType } from '../../constants';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
})
export class PasswordStrengthMeterComponent {
  password: string = '';

  styles = styles;

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  getPasswordStrength() {
    return this.passwordStrengthService.getPasswordStrength(this.password);
  }

  getStyle(style: Record<StrengthType, { 'background-color': string }>): {
    'background-color': string;
  } {
    return style[this.getPasswordStrength()];
  }
}
