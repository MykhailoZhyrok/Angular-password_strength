import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  calculateStrength(password: string): string {
    if (password.length <= 5) {
      return 'gray';
    } else if (password.match(/[a-zA-Z]/) && password.match(/[0-9]/) && password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
 
      return 'green';
    } else if ((password.match(/[a-zA-Z]/) && password.match(/[0-9]/)) || 
               (password.match(/[a-zA-Z]/) && password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) || 
               (password.match(/[0-9]/) && password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/))) {
      return 'yellow';
    } else {
      return 'red';
    }
  }
}
