import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MediaItemService {
  constructor(private http: Http){}

  get(medium) {
    // use searchParams to help packaging search query data
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    //append: "&medium={{medium}}"
    //http get mothod returns an observable of http responses
    //use map function to unwrap the observable sending back by http get request;
    //import 'rxjs/add/operator/map'
    return this.http.get('mediaitems', {search: searchParams}).map(response => {
      return response.json().mediaItems;
    });
  }
  
  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem).map(response=>{});
  }
  
  delete(mediaItem) {
      return this.http.delete(`mediaitems/${mediaItem.id}`);
  }
  watch(mediaItem) {
    let index = this.mediaItems.indexOf(mediaItem);
    if(index >= 0) {
      this.mediaItems[index].watchedOn = new Date().getTime();
    }
  }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];
}
