import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  private url = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}
  getCharacter(myExt: string = '') {
    return this.getListApi(this.url + myExt);
  }
  getListApi(myUrl: string) {
    return this.http.get(myUrl);
  }
}
