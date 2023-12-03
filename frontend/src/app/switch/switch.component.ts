import { Component } from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {

  constructor(
    private axiosService: AxiosService,
  ) { }

  onLogin(input: any): void {
    this.axiosService.request(
      'POST',
      '/login',
      {
        login: input.login,
        password: input.password,
      }
    );
  }
  onRegister(input: any): void {
    this.axiosService.request(
      'POST',
      '/register',
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password,
      }
    );
  }

}
