export class ContatoModel{
    ID: any;
    _id: any;
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
        this._id = response._id;
        this.ContatoNome = response.ContatoNome;
        this.ContatoEmail = response.ContatoEmail;
        this.ContatoTelefone = response.ContatoTelefone;
    };
};