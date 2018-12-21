import { Component, OnInit } from '@angular/core';
import { AppState, GetMovieList } from '../../../store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private movieList = this.store.select(s => s.demo.movieList);
   
  private errorMessage = this.store.select(s => s.demo.error);

  private isProcessing = this.store.select(s => s.demo.isProcessing);

  public constructor(private store: Store<AppState>,  
    ) {}

  ngOnInit() {
    this.store.dispatch(new GetMovieList());
  }

}
