import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../../models/contatoModel';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contatos-edit',
  templateUrl: './contatos-edit.component.html',
  styleUrls: ['./contatos-edit.component.css']
})
export class ContatosEditComponent implements OnInit {
  contatoModel: ContatoModel = new ContatoModel;
  contatosModel: any = ContatoModel;
  key = "Contatos";
  contato;
  item: any = new Array();  
  telefone = this.route.snapshot.params['ID'];
  contatoUp={
    Nome: String,
    Telefone: Number,
    Email: String
  };
  // teste2:any = new Array;
  teste2 = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
  this.teste();
  this.getContato();
  }
  teste(){
    console.log(this.route.snapshot.params['ID']);
  }

  getContato(){
    this.item = JSON.parse(sessionStorage.Contatos);    
    console.log(this.item);
  
  for(var i=0; i<this.item.length; i++) {
    if(this.item[i].ID == this.route.snapshot.params['ID']) {
        console.log("ufakkkkk");
        this.contato = this.item[i];
        console.log(this.contato)
    }
  }  

}

update(){
  this.contatosModel = this.contato;
  // this.teste2 = sessionStorage.getItem(this.key);


  // this.teste2 = JSON.parse(this.teste2); 
  
  console.log(this.teste2);  
    for(var i=0; i<this.item.length; i++) {
    if(this.item[i].ID != this.route.snapshot.params['ID']) {
        console.log("ufakkkkk");
        console.log(this.item[i]);
        this.contato = this.item[i];
        this.teste2.push(this.contato);
        console.log(this.teste2)
        
    }
  }
  if(this.contato != this.contatosModel){
  this.contato = this.contatosModel;
  console.log(this.contato);
  this.teste2.push(this.contato);
  console.log(this.teste2)
  sessionStorage.setItem(this.key, JSON.stringify(this.teste2));
  this.router.navigate(['/contatos-list']);
  } else{
    console.log("que")
  }
}

}
