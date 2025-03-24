import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-dash-board',
  standalone: true,
  imports: [],
  templateUrl: './employee-dash-board.component.html',
  styleUrl: './employee-dash-board.component.css'
})
export class EmployeeDashBoardComponent {
  _employeeService: EmployeeService;
  _employees: any[] = [];

  constructor(private employeeService: EmployeeService){
    this._employeeService = employeeService;

    employeeService.get().subscribe(employees=>{
      this._employees = employees;
    })
  }



}
