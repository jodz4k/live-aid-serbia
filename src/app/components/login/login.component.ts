import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  email: string = '';
  password: string = '';
  isVisible: boolean = false;
  isLoading: boolean = false;

  constructor(private authService: AuthService) { }

  show(): void {
    this.isVisible = true;
  }

  close(): void {
    this.isVisible = false;
    this.closeModal.emit();
  }

  onSubmit(): void {
    if (this.email && this.password) {
      this.isLoading = true;
      this.authService.login(this.email, this.password).subscribe({
        next: (success) => {
          this.isLoading = false;
          if (success) {
            this.loginSuccess.emit();
            this.close();
          } else {
            alert('Invalid credentials');
          }
        },
        error: () => {
          this.isLoading = false;
          alert('Login failed');
        }
      });
    }
  }
}
