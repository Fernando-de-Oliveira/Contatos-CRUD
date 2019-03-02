import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { ContatoModel } from '../../models/contatoModel';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-contatos-crud',
  templateUrl: './contatos-crud.component.html',
  styleUrls: ['./contatos-crud.component.css']
})
@Injectable()
export class ContatosCrudComponent implements OnInit {
  public data:any=[]
  contato: any = new Array();
  contatoModel: ContatoModel = new ContatoModel;
  contatosModel: any = ContatoModel;
  // item = JSON.parse(sessionStorage.Contato);
  key: any = new Array("Contatos");    
  existing = sessionStorage.getItem("Contatos");
  teste: any = new Array();
  a: any = new Array();
  testel: any = new Array();
  indicador = true;
  key2: any = "Contador";
  ultimo:any;
  item: any = new Array(); 
  primeiro =  [];
  key3: any = "primeiro";

  constructor(
  ) {
     
  }

  ngOnInit() {
    this.primeiro = [
      {
        ID: 1,
        Nome: "Fernando de Oliveira",
        Telefone: 11949723066,
        Email: "fernandolaurino20@gmail.com"
      },{
        ID: 2,
        Nome: "Jorge Bem",
        Telefone: 11942562547,
        Email: "jorge.bem@hotmail.com"
      },{
        ID: 3,
        Nome: "Matheus Silva",
        Telefone: 11985693214,
        Email: "matheussilva@outlook.com"
      },{
        ID: 4,
        Nome: "Gabriel Justo",
        Telefone: 11923615478,
        Email: "biel.justo@gmail.com"
      },{
        ID: 5,
        Nome: "Sérgio Souza",
        Telefone: 1199254798,
        Email: "serginhosouza@yahoo.com"
      },{
        ID: 6,
        Nome: "Marcos Junior",
        Telefone: 11933568475,
        Email: "marcosjuniot@gmail.com"
      }
    ];
    
    if (sessionStorage.getItem(this.key3) != "adjask"){
      this.addSessionOnInit();
      console.log("coloco");
      console.log(this.primeiro);
    }
    this.item = JSON.parse(sessionStorage.Contatos);
    for(var i=0; i<this.item.length; i++){
      this.ultimo = i;
      console.log(i)
    }
  }

  postContato(){
  //   console.log(this.existing);
  //   if(this.contatoModel.ID == 0){
  // this.contatoModel.ID = 1
  //   } else if(!this.contatoModel.ID){
  //     this.contatoModel.ID = 1; 
  //   }
  
  // for(var i=0; i<this.item.length; i++){
  //   this.ultimo = i;
  // }
  // console.log(this.ultimo);
  
  console.log(this.item)
  if(this.item.length == 0){
    console.log("1");
  this.contatoModel.ID = 1;
  }else if (this.item.ID == 1){
    console.log("2");    
    this.contatoModel.ID = this.item.ID + 1;
  } else {
    console.log("3");    
    this.contatoModel.ID = this.ultimo + 2;
  }
  this.contatoModel.ContatoNome = this.contatosModel.ContatoNome;
  this.contatoModel.ContatoTelefone = this.contatosModel.ContatoTelefone;
  this.contatoModel.ContatoEmail = this.contatosModel.ContatoEmail;
  this.addToLocal();
  }


   updateSession(contato){    
    this.testel = new Array();
    console.log(this.key2)      
    console.log(sessionStorage.getItem(this.key2));
    // if(sessionStorage.getItem(this.key2) == "Contador"){    
    //   this.teste.push(JSON.parse(sessionStorage.getItem(this.key)));
    //   console.log("entro");
    // }
    // else if (sessionStorage.getItem(this.key2) == "Acabou"){
      this.teste = JSON.parse(sessionStorage.getItem(this.key));
      console.log("entrou no else");
    // }
    console.log(typeof this.teste);  
    console.log(this.teste);  
    this.teste.push(contato);
    sessionStorage.setItem(this.key, JSON.stringify(this.teste));
    sessionStorage.setItem(this.key2, "Acabou");
}

defineOff(){
  sessionStorage.setItem(this.key2, "Acabou");  
}

  addToLocal(){

    this.contato = { ID:this.contatoModel.ID , Nome:this.contatoModel.ContatoNome , Telefone: this.contatoModel.ContatoTelefone , Email: this.contatoModel.ContatoEmail };
    if(!sessionStorage.Contatos){
      sessionStorage.setItem(this.key2, "Contador");
      sessionStorage.setItem(this.key, JSON.stringify(this.contato));
      console.log(this.contato)
      
    } else if(sessionStorage.Contatos){ 
      console.log(this.contato);
      this.updateSession(this.contato);
    }

  }

  addSessionOnInit(){
    sessionStorage.setItem("primeiro", "Verdadeiro");
    sessionStorage.setItem(this.key, JSON.stringify(this.primeiro));

    

  }

  // localItering(){
  //   for (let i = 0; i < localStorage.length; i++){
  //     let this.key = localStorage.this.key(i);
  //     let value = localStorage.getItem(this.key);
  //     console.log(this.key, value);
  //   }
  // }
  }
