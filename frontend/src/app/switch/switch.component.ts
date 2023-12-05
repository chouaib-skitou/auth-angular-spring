import { Component } from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  componentToShow: string = 'welcome';

  showComponent(componentName: string): void {
    this.componentToShow = componentName;
  }

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
    ).then(
      response => {
        this.axiosService.setToken(response.data.token);
        this.componentToShow = "messages";
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
    ).then(
      response => {
        this.axiosService.setToken(response.data.token);
        this.componentToShow = "messages";
      }
      );
  }

}
