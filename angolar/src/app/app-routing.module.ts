import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from '../app/movies/movies.component';
import { Top4MoviesComponent } from '../app/top4-movies/top4-movies.component';
import { MovieDetailsComponent } from '../app/movie-details/movie-details.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path:"movies", component: MoviesComponent},
  {path: "top4", component: Top4MoviesComponent},
  {path: "",component: MoviesComponent},
  {path: "ditails/:id", component: MovieDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
