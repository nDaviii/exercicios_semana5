// Definição da classe Animal
class Animal {
    // Construtor que recebe nome e idade
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método aplicado para descrever o animal
    descrever() {
        console.log(`O animal é um ${this.nome}. Ele tem ${this.idade} de idade.`);
    }
}

// Cria duas instâncias da classe Animal, representando um cachorro e um gato
let cachorro = new Animal("cachorro", "3 anos");
let gato = new Animal("gato", "5 meses");

// Chama o método descrever para exibir informações sobre o cachorro
cachorro.descrever();

// Chama o método descrever para exibir informações sobre o gato
gato.descrever();
