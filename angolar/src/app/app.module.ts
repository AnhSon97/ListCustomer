import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieServiceService } from '../app/movie-service.service';
import { Top4MoviesComponent } from './top4-movies/top4-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    Top4MoviesComponent,
    FooterComponent,
    NavbarComponent,
    AddCustomerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieServiceService,
    MoviesComponent,
    AddCustomerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
