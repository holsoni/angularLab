import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  ngOnInit(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  users = [
    {
      id: 1,
      name: 'Victor',
      lastname: 'Velichko',
      dateOfBirth: new Date("2/1/1990"),
      salary: 50000,
      workingHours: 123456789
    },
    {
      id: 2,
      name: 'Anna',
      lastname: 'Kovalenko',
      dateOfBirth: new Date("10/12/1985"),
      salary: 70000,
      workingHours: 987654321
    },
    {
      id: 3,
      name: 'Max',
      lastname: 'Ivanov',
      dateOfBirth: new Date("4/22/1992"),
      salary: 55000,
      workingHours: 123456
    },
    {
      id: 4,
      name: 'Julia',
      lastname: 'Petrova',
      dateOfBirth: new Date("1/5/1988"),
      salary: 80000,
      workingHours: 456789123
    },
    {
      id: 5,
      name: 'Alex',
      lastname: 'Kuznetsov',
      dateOfBirth: new Date("9/15/1995"),
      salary: 65000,
      workingHours: 789123456
    },
    {
      id: 6,
      name: 'Maria',
      lastname: 'Sidorova',
      dateOfBirth: new Date("7/30/1984"),
      salary: 90000,
      workingHours: 321654987
    },
    {
      id: 7,
      name: 'Ivan',
      lastname: 'Fedorov',
      dateOfBirth: new Date("3/14/1991"),
      salary: 60000,
      workingHours: 159487263
    },
    {
      id: 8,
      name: 'Olga',
      lastname: 'Kovaleva',
      dateOfBirth: new Date("12/9/1983"),
      salary: 75000,
      workingHours: 753951456
    },
    {
      id: 9,
      name: 'Dmitry',
      lastname: 'Klimov',
      dateOfBirth: new Date("8/7/1989"),
      salary: 85000,
      workingHours: 246813579
    },
    {
      id: 10,
      name: 'Kate',
      lastname: 'Doe',
      dateOfBirth: new Date("6/6/1980"),
      salary: 88000,
      workingHours: 12345
    }];
}
