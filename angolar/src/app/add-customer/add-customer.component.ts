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

  constructor(private movieServiceService: MovieServiceService, private moviesComponent: MoviesComponent) { }
  newCustomer = new Customer;
  submited = false;

  ngOnInit(): void {
  }

  onsubmit() {
    this.submited = true;
  }

  add() {
    this.movieServiceService.addData(this.newCustomer).subscribe(insertedCustomer => this.moviesComponent.listcustomer.push(insertedCustomer))
  }

}
