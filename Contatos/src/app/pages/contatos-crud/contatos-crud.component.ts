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

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
     
}

  ngOnInit() {

  } 

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }



}
