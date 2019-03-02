import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-list',
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.css']
})
export class ContatosListComponent implements OnInit {
  contatoName: any;
  Contato:any;
  item: any = new Array();
  teste: any = new Array();
  teste2:any= new Array(); 
  prafude: any = new Array();
  nome = "Nome";
  key2 = "Contador"
  key22 = sessionStorage.getItem(this.key2);

  constructor() { }

  ngOnInit() {
    this.valueToLocal();
    this.list();
  }


  list(){
    console.log(this.key22);
    // this.item = [];
    this.item = JSON.parse(sessionStorage.Contatos);
    console.log(this.item);
  }

  valueToLocal(){
    this.teste = [{
      Nome:"Testekk",
      Telefone:11949723063,
      Email:"fefe@emailkkkk"
    },{
      Nome:"Fernando",
      Telefone:11999999999,
      Email:"fefe@lalala"
    }];
    // console.log(this.teste.length);
    for(var i = 0; i < this.teste.length; i++){
    this.teste2[i] = (this.teste[i]);
    // console.log(this.teste2);
    }    
    this.vamoVer();
  }

  vamoVer(){
    this.prafude = {
      Nome: "testenékkkk",
      Telefone: 99999999,
      Email: "KKKKKKKKKK"
    }
    this.teste2.push(this.prafude);
    // console.log(this.teste2);
  }
}
