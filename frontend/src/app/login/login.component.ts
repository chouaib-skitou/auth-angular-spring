import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  active: string = 'login';
  login: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';

  onLoginClick(): void {
    this.active = 'login';
  }

  onRegisterClick(): void {
    this.active = 'register';
  }

  onSubmitLogin() {
    this.onSubmitLoginEvent.emit({login: this.login, password: this.password});
  }
  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({
      firstName: this.firstName,lastName: this.lastName,
      login: this.login, password: this.password
    });

  }

}
