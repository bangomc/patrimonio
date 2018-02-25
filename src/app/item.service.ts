import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  //url_api: string = 'http://localhost:8080/item';
  url_api: string = 'https://patrimonio-api.herokuapp.com/item'
  //url_api: string = 'https://8080-dot-3005825-dot-devshell.appspot.com/item';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.url_api);
  }

  adicionar(item: any) {
    return this.http.post(this.url_api, item)
  }

}
