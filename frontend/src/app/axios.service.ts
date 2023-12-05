import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080/api/v1';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  getToken(): string | null {
    return window.localStorage.getItem('auth_token');
  }

  setToken(token: string | null): void {
    if (token != null) {
      window.localStorage.setItem('auth_token', token);
    } else {
      window.localStorage.removeItem('auth_token');
    }
  }
  request(method: string, url:string, data:any): Promise<any> {
    let headers: any = {};
    if(this.getToken() != null) {
      headers = {"Authorization": "Bearer " + this.getToken()};
    }
    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers,
    })
  }
}
