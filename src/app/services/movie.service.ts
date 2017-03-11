import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
  apiKey:string;

  constructor(private _jsonp:Jsonp){
    this.apiKey = '00eb9e23cb7c847832f88ef03afb0af9';
    console.log('MovieService Initialized...');
  }

  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apiKey)
      .map(res => res.json());
  }

  getInTheaters(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-01-01&primary_release_date.lte=2017-03-15&api_key='+this.apiKey)
      .map(res => res.json());
  }

  searchMovies(searchStr: string){
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apiKey)
      .map(res => res.json());
  }

  getMovie(id:string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apiKey)
      .map(res => res.json());
  }
}
