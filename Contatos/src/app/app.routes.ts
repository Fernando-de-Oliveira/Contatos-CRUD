import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ContatosListComponent } from './pages/contatos-list/contatos-list.component';
import { ContatosCrudComponent } from './pages/contatos-crud/contatos-crud.component';
import { ContatosEditComponent } from './pages/contatos-edit/contatos-edit.component';

const appRoutes: Routes = [ 
    { path: 'contatos', component: ContatosCrudComponent
        // children: [
        //     { path: 'contatos', component: ContatosCrudComponent },
        //     { path: 'contatos-list', component: ContatosListComponent}
        // ]
    },
    {
        path: 'contatos-list', component: ContatosListComponent
    },
    {
        path: 'contatos-edit/:ID', component: ContatosEditComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });