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

  constructor(
  ) {
     
  }

  ngOnInit() {
    this.valueToLocal();
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
    //  JSON.stringify(this.contato);
    this.teste = JSON.stringify(sessionStorage.getItem(this.key));
    this.teste.push(contato);
    sessionStorage.setItem(this.key, JSON.stringify(this.teste));
}

  addToLocal(){
    this.contato = { /*ID:this.contatoModel.ID ,*/ Nome:this.contatoModel.ContatoNome , Telefone: this.contatoModel.ContatoTelefone , Email: this.contatoModel.ContatoEmail };
    if(!sessionStorage.Contatos){
  sessionStorage.setItem(this.key, this.contato);
    } else if(sessionStorage.Contatos){ 
    this.updateSession(this.contato);
    }

  }
    valueToLocal(){
      this.teste = [];
    }



  // localItering(){
  //   for (let i = 0; i < localStorage.length; i++){
  //     let this.key = localStorage.this.key(i);
  //     let value = localStorage.getItem(this.key);
  //     console.log(this.key, value);
  //   }
  // }
  }
