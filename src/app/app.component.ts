import { Component } from '@angular/core';
import { PasswordStrengthService } from './password-strength.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  passwordStrength: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) { }

  calculateStrength(): void {
    this.passwordStrength = this.passwordStrengthService.calculateStrength(this.password);
  }
}
