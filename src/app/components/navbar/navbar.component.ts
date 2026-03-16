import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService, User } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('loginComponent', { static: false }) loginComponent!: LoginComponent;

  currentUser: User | null = null;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn = !!user;
    });
  }

  showLogin(): void {
    this.loginComponent.show();
  }

  logout(): void {
    this.authService.logout();
  }

  onLoginSuccess(): void {
    // Handle successful login if needed
  }

  onLoginClose(): void {
    // Handle login modal close if needed
  }
}