import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationBarComponent } from './components/side-navigation-bar/side-navigation-bar.component';
import { SideNavigationBarItemComponent } from './components/side-navigation-bar/side-navigation-bar-item/side-navigation-bar-item.component';
import { NavigationService } from './services/navigation.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/header/search-item/search-item.component';
import { HeaderNavigationComponent } from './components/header/header-navigation/header-navigation.component';
import { SearchFormComponent } from './components/header/search-item/search-form/search-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { StoreModule } from '@ngrx/store';
import { DemoStoreModule } from '../store';



@NgModule({
  declarations: [
    AppComponent,
    SideNavigationBarComponent,
    SideNavigationBarItemComponent,
    HeaderComponent,
    SearchItemComponent,
    HeaderNavigationComponent,
    SearchFormComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    DemoStoreModule,
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
