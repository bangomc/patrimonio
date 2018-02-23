import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css'],
  providers: [ItemService]
})
export class ItemCadastroComponent implements OnInit {

  itens = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
      this.itemService.listar().subscribe(itens => this.itens = itens);
  }

}
