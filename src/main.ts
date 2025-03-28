import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { EmployeeDashBoardComponent } from './app/employee-dash-board/employee-dash-board.component';
import { EmployeeDetailsComponent } from './app/employee-details/employee-details.component';
import { LoginComponent } from './app/login/login.component';
import { authGuard } from './app/auth.guard';


const routes: Routes = [
  { path: '', component: EmployeeDashBoardComponent, canActivate:[authGuard] },
  { path: 'employee/:id', component: EmployeeDetailsComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' } // fallback
];

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));
