import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatosCrudComponent } from './pages/contatos-crud/contatos-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosCrudComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
