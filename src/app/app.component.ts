import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password: string = '';
  passwordStrength: string = '';

  constructor() { }

  calculateStrength(): void {
    if (this.password.length <= 5) {
      this.passwordStrength = 'gray';
    }else if (this.password.match(/[a-zA-Z]/) && this.password.match(/[0-9]/) && this.password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
      this.passwordStrength = 'green';
    } else if ((this.password.match(/[a-zA-Z]/) && this.password.match(/[0-9]/)) || 
               (this.password.match(/[a-zA-Z]/) && this.password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) || 
               (this.password.match(/[0-9]/) && this.password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/))) {
      this.passwordStrength = 'yellow';
    } else {
      this.passwordStrength = 'red';
    }
  }

}
