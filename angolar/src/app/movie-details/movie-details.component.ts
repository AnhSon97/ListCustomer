import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../model/customer';
import {Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() customer: Customer;

  constructor(
    private activatedRoute:ActivatedRoute,
    private movieServiceService:MovieServiceService,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.getDataFromRoute();
  }

  getDataFromRoute(){
    // take id from paramMap
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    // set value property movie
    this.movieServiceService.getDataFromId(id).subscribe(item => this.customer = item);
  }

  save(): void{
    this.movieServiceService.updateData(this.customer).subscribe(() => this.goback())
  }

  goback(): void{
    this.location.back();
  }
}
