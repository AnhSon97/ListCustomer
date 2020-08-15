import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { MovieServiceService } from '../movie-service.service';
import { MoviesComponent } from '../movies/movies.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private movieServiceService: MovieServiceService,
              private moviesComponent: MoviesComponent) { }

  ngOnInit(): void {
  }

  add(FullName: string, Gender: string, Address: string, Department: string, Salary: string, Position: string): void {
    const newCustomer: Customer = new Customer();
    newCustomer.FullName = FullName;
    newCustomer.Gender = Gender;
    newCustomer.Address = Address;
    newCustomer.Department = Department;
    newCustomer.Salary = Salary;
    newCustomer.Position = Position;

    this.movieServiceService.addData(newCustomer).subscribe(insertedCustomer => this.moviesComponent.listcustomer.push(insertedCustomer))
  }
}
