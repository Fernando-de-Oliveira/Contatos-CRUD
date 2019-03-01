import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-list',
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.css']
})
export class ContatosListComponent implements OnInit {
  contatoName: any;
  Contato:any;
  item = JSON.parse(localStorage.Contato);

  constructor() { }

  ngOnInit() {
    console.log(localStorage);
    // this.getValue();
  }

}
