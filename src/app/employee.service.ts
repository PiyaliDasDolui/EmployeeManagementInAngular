import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _httpClient: HttpClient;
  private apiUrl = environment.apiURL + '/EmployeeDashBoard'
  constructor(private httpClient: HttpClient) { 
    this._httpClient = httpClient;
  }
   public get(): Observable<any>{
       
      console.log('Inside employee service');
      return this._httpClient.get(this.apiUrl);
    }

}
