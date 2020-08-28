import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from '../app/movies/movies.component';
import { Top4MoviesComponent } from '../app/top4-movies/top4-movies.component';
import { MovieDetailsComponent } from '../app/movie-details/movie-details.component';
import { AddCustomerComponent } from '../app/add-customer/add-customer.component';
import { LoginComponent } from '../app/login/login.component';
import { from } from 'rxjs';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: "movies", component: MoviesComponent },
  { path: "top4", component: Top4MoviesComponent },
  { path: "", component: LoginComponent },
  { path: "ditails/:id", component: MovieDetailsComponent },
  { path: "add", component: AddCustomerComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
