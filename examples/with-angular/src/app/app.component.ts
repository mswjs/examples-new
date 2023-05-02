import { Component } from '@angular/core'
import { Movie, User } from './models'
import { MovieService } from './movie.service'
import { UserService } from './user.service'
import { NgFor, NgIf } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgIf, NgFor]
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private movieService: MovieService,
  ) {}

  user$: User | undefined
  movies$: Array<Movie> = []

  ngOnInit() {
    this.userService.getUser().subscribe((userData) => {
      this.user$ = userData
    })
  }

  onFetchMoviesClick() {
    this.movieService.listMovies().subscribe((response) => {
      if (response.data) {
        this.movies$ = response.data.movies
      }
    })
  }
}
