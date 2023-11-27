import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppApiServiceService {

  private baseUrl = 'http://localhost:8080/';
}
