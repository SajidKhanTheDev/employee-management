import { DatePipe } from '@angular/common';
import { NodeJSPathManipulation } from '@angular/compiler-cli/src/ngtsc/file_system/src/node_js_file_system';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[] = [
   
    {
    EmployeeID:45,
    FirstName: "Sajid",
    LastName: "Khan",
    Salary: 80000,
    DOB: new Date,
    Email: "sajidkhan@gmail.com",
    Action: "open"
  },
   
   
];
  showEdit:boolean=false;
  currentIndex:any;
  constructor() { }

  ngOnInit(): void {
  }

  EditEmp():void{
    this.showEdit=true;
  }

  UpdateEmp():void{
    this.showEdit=false;
  }

}

