import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  url_api: string = 'http://localhost:8080/item';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.url_api);
  }

}
