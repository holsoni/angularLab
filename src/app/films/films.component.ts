import { Component } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {
  movie ={poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VUMh0yO49-l2RTAGi_shjSrlYMkYUIrET9POY5JGJq0LkRN4pIsyjfPF5A&s',
      title:'Fast X',
      releaseDate:'19 May 2023',
      description:'Over many missions and against impossible odds, Dom Toretto (Vin Diesel) and his family have outsmarted, out-nerved and outdriven every foe in their path.'};

  films = [
    { title: 'Film 1', director: 'Director 1', releaseYear: 2020 },
    { title: 'Film 2', director: 'Director 2', releaseYear: 2021 },
    { title: 'Film 3', director: 'Director 3', releaseYear: 2022 },
    { title: 'Film 4', director: 'Director 4', releaseYear: 2023 },
  ];
}
