import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { MarcaTextoDirective } from './shared/directives/marca-texto.directive';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';
import { RickyMortyComponent } from './ricky-morty/ricky-morty.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    MarcaTextoDirective,
    ListPeopleComponent,
    RickyMortyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
