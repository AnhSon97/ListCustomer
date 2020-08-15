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

  public listcustomer: Customer[];

  constructor(private movieServiceService: MovieServiceService) { }

  ngOnInit(): void {
    this.movieServiceService.getData().subscribe(parameter => this.listcustomer = parameter);
  }

  delete(id: number) {
    this.movieServiceService.deleteData(id).subscribe(
      _ => this.listcustomer = this.listcustomer.filter(i => i.id !== id)
    )
  }

}
