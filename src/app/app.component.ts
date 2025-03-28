import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { WeatherForecastService } from './weather-forecast.service';
import { EmployeeService } from './employee.service';
import { EmployeeDashBoardComponent } from './employee-dash-board/employee-dash-board.component';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeDashBoardComponent, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeManagementUI';
  weatherForecasts: any[] = [];

 // weatherForecastService = inject(WeatherForecastService);
  _employeeService: EmployeeService;
  constructor(private employeeService: EmployeeService, private authService: AuthServiceService, private router:Router){
    this._employeeService = employeeService;
     
    console.log('Inside app component constructor');

    this._employeeService.get().subscribe(weather =>{
      this.weatherForecasts = weather;
      console.log(weather);
    });

   
    // this.weatherForecastService.get().subscribe(weather =>{
    //   this.weatherForecasts = weather;
    // });

  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
