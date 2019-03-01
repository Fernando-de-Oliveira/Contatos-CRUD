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
  key = "Contato";
  contatoModel: ContatoModel = new ContatoModel;
  contatosModel: any = ContatoModel;
  

  constructor(
    // @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) {
     
  }

  ngOnInit() {
    // localStorage[this.contato] = new Array();
   
  } 

  postContato(){
  this.contatoModel.ContatoNome = this.contatosModel.ContatoNome;
  this.contatoModel.ContatoTelefone = this.contatosModel.ContatoTelefone;
  this.contatoModel.ContatoEmail = this.contatosModel.ContatoEmail;
  this.addToLocal();
  }

  addToLocal(){
  // Create item:
  this.contato = { Nome:this.contatoModel.ContatoNome , Telefone: this.contatoModel.ContatoTelefone , Email: this.contatoModel.ContatoEmail };
  localStorage.setItem(this.key, JSON.stringify(this.contato));
  console.log(this.contato);
  }

  getFromLocal(){
  // Read item:
  let item = JSON.parse(localStorage.getItem(this.key));
  console.log(this.key)
  }


  // localItering(){
  //   for (let i = 0; i < localStorage.length; i++){
  //     let key = localStorage.key(i);
  //     let value = localStorage.getItem(key);
  //     console.log(key, value);
  //   }
  // }
  }
