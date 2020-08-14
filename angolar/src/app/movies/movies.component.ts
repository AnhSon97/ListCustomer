import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { MovieServiceService } from '../movie-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  listcustomer: Customer[];

  constructor(private movieServiceService: MovieServiceService) { }

  ngOnInit(): void {
    this.movieServiceService.getData().subscribe(parameter => this.listcustomer = parameter);
  }

  add(FullName: string, Gender: string, Address: string, Department: string, Salary: string, Position: string): void {
    const newCustomer: Customer = new Customer();
    newCustomer.FullName = FullName;
    newCustomer.Gender = Gender;
    newCustomer.Address = Address;
    newCustomer.Department = Department;
    newCustomer.Salary = Salary;
    newCustomer.Position = Position;

    this.movieServiceService.addData(newCustomer).subscribe(insertedCustomer => this.listcustomer.push(insertedCustomer))
  }

  delete(id: number) {
    this.movieServiceService.deleteData(id).subscribe(
      _ => this.listcustomer = this.listcustomer.filter(i => i.id !== id)
    )
  }

}
