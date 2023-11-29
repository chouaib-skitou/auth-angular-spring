import { Component } from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css'
})
export class AuthContentComponent {
  data: string[] = [];
  constructor(
    private axiosService: AxiosService
  ) { }

  ngOnInit(): void {
    this.axiosService.request('GET', '/messages',null).then((response: any) => {
      this.data = response.data;
    }).catch((error: any) => {
      console.error(error);
    });
  }

}
