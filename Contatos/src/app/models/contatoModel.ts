export class contatoModel{
    ID: any;
    ContatoNome: string;
    ContatoTelefone: any;
    ContatoEmail: string;

    constructor(){
        this.ID = 0;
        this.ContatoNome = "";
        this.ContatoTelefone = 0;
        this.ContatoEmail = "";
    };

    loadContato(response: any){
        this.ID = response.ID;
        this.ContatoNome = response.ContatoNome;
        this.ContatoEmail = response.ContatoEmail;
        this.ContatoTelefone = response.ContatoTelefone;
    };
};