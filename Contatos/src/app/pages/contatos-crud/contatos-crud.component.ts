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

  constructor(
  ) {
     
  }

  ngOnInit() {
  } 

  postContato(){
  //   console.log(this.existing);
  //   if(this.contatoModel.ID == 0){
  // this.contatoModel.ID = 1
  //   } else if(!this.contatoModel.ID){
  //     this.contatoModel.ID = 1; 
  //   }
  this.contatoModel.ContatoNome = this.contatosModel.ContatoNome;
  this.contatoModel.ContatoTelefone = this.contatosModel.ContatoTelefone;
  this.contatoModel.ContatoEmail = this.contatosModel.ContatoEmail;
  this.addToLocal();
  }


   updateSession(contato){    
    this.testel = new Array();
    console.log(this.key2)      
    console.log(sessionStorage.getItem(this.key2));
    if(sessionStorage.getItem(this.key2) == "Contador"){    
      this.teste.push(JSON.parse(sessionStorage.getItem(this.key)));
      console.log("entro");
    }
    else if (sessionStorage.getItem(this.key2) == "Acabou"){
      this.teste = JSON.parse(sessionStorage.getItem(this.key));
      console.log("entrou no else");
    }
    console.log(typeof this.teste);  
    console.log(this.teste);  
    this.teste.push(contato);
    sessionStorage.setItem(this.key, JSON.stringify(this.teste));
    sessionStorage.setItem(this.key2, "Acabou");
}

  addToLocal(){
    this.contato = { /*ID:this.contatoModel.ID ,*/ Nome:this.contatoModel.ContatoNome , Telefone: this.contatoModel.ContatoTelefone , Email: this.contatoModel.ContatoEmail };
    if(!sessionStorage.Contatos){
      sessionStorage.setItem(this.key2, "Contador");
      sessionStorage.setItem(this.key, JSON.stringify(this.contato));
      console.log(this.contato)
      
    } else if(sessionStorage.Contatos){ 
      console.log(this.contato);
      this.updateSession(this.contato);
    }

  }

  // localItering(){
  //   for (let i = 0; i < localStorage.length; i++){
  //     let this.key = localStorage.this.key(i);
  //     let value = localStorage.getItem(this.key);
  //     console.log(this.key, value);
  //   }
  // }
  }
