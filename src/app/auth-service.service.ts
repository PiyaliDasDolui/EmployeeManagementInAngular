import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  _httpClient: HttpClient;
  private apiUrl = environment.apiURL + '/Authentication'
  constructor(private httpClient: HttpClient, private router: Router) { 
    this._httpClient = httpClient;
  }

  public get(): Observable<any>{
        console.log('Inside employee service');
        return this._httpClient.get(this.apiUrl);
 }

 login(t: string) {
  debugger;
  this._httpClient.post(this.apiUrl, {
    username: 'admin',
    password: 'admin'
  }).subscribe((res: any) => {
    localStorage.setItem('token', res.token);
    this.router.navigate(['/employee-dashboard']);
  }, error => {
    alert('Login failed');
  });
}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // or however you track login
  }

  login1(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
