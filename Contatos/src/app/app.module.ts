import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClient } from './services/http-client';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ContatosCrudComponent } from './pages/contatos-crud/contatos-crud.component';
import { ContatosListComponent } from './pages/contatos-list/contatos-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatosCrudComponent,
    ContatosListComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
