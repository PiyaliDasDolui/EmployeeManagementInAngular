import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherForecastService } from './weather-forecast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeManagementUI';
  weatherForecasts: any[] = [];

  weatherForecastService = inject(WeatherForecastService);

  constructor(){
    this.weatherForecastService.get().subscribe(weather =>{
      this.weatherForecasts = weather;
    })
  }

}
