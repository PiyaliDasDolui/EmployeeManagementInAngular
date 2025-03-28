import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {AgGridModule} from 'ag-grid-angular';
import { ClientSideRowModelModule, ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-employee-dash-board',
  standalone: true,
  imports: [AgGridModule, CommonModule, RouterModule],
  templateUrl: './employee-dash-board.component.html',
  styleUrl: './employee-dash-board.component.css'
})
export class EmployeeDashBoardComponent {
  _employeeService: EmployeeService;
  _employees: any[] = [];

  columnDefsEmp: ColDef[] = [
    { field: 'id'},
    { field: 'firstName' },
    { field: 'lastName' },
    { field: 'email' },
    { field: 'department' }
  ];

  rowDataEmp = [
    {id:'1', firstName: 'Piyali', lastName: 'Das', email: 'p@g', department: 'CS'}
  ];


  constructor(private employeeService: EmployeeService){
    this._employeeService = employeeService;
    employeeService.get().subscribe(employees=>{
     this.rowDataEmp = employees;
    this._employees = employees;
    })
  }



}
