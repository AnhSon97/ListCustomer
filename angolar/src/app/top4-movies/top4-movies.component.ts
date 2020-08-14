import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-top4-movies',
  templateUrl: './top4-movies.component.html',
  styleUrls: ['./top4-movies.component.css']
})
export class Top4MoviesComponent implements OnInit {
  listCustomer: Customer[] = [];
  constructor(private movieServiceService:MovieServiceService ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void{
    this.movieServiceService.getData().subscribe((parameter) => {this.listCustomer = parameter.slice(1,5)});
  }

}
