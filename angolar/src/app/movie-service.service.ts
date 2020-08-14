import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap, retry } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private customerURL = "http://localhost:3000/Listcustommer";

  constructor(
    private http: HttpClient
  ) {}

  
  getData(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerURL).pipe(
      tap(receiveMovie => console.log(`receiveMovie = ${JSON.stringify(receiveMovie)}`)),
      catchError(error => of(([])))
    );
  }

  getDataFromId(id: number): Observable<Customer> {
    const urlGetById = `${this.customerURL}/${id}`;
    return this.http.get<Customer>(urlGetById).pipe(
      tap(selected => console.log(`selected = ${JSON.stringify(selected)}`)),
      catchError(error => of(new Customer()))
    )
  }

  updateData(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.customerURL}/${customer.id}`, customer, this.httpOptions).pipe(
      tap(update => console.log(`update = ${JSON.stringify(update)}`)),
      catchError(error => of(customer))
    )
  }

  addData(newMovie: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerURL, newMovie, this.httpOptions).pipe(
      tap((movie: Customer) => console.log()),
      catchError(error => of(new Customer()))
    )
  }

  deleteData(id: number) {
    const urlGetById = `${this.customerURL}/${id}`;
    return this.http.delete<Customer>(urlGetById).pipe(
      tap(deleted => console.log(`deleted = ${JSON.stringify(deleted)}`)),
      catchError(error => of(null))
    )
  }
}

