// Definição da classe Animal
class Animal {
    // Construtor que recebe nome e idade
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para descrever o animal
    descrever() {
        console.log(`O animal é um ${this.nome}. Ele tem ${this.idade} anos.`);
    }
}

// Definição da classe Gato, que herda de Animal
class Gato extends Animal {

    tipo = "gato"; // Em vez do parâmetro dizer respeito ao tipo de animal, agora se adiciona uma padrão para todos os animais que são gatos

    // Construtor que recebe nome (apelido), idade e cor
    constructor(nome, idade, cor) {
        // Chama o construtor da classe pai (Animal)
        super(nome, idade);

        // Atribui propriedades específicas da classe Gato
        this.cor = cor;
        
    }

    // Sobrescreve o método descrever para incluir informações específicas do gato
    descrever() {
        console.log(`O animal a que nos referimos é um ${this.tipo}. Seu nome é ${this.nome} e ele tem ${this.idade}. Seu pelo é ${this.cor} :)` + `\n`);
    }

    // Método específico para gatos, fazendo o gato "miar"
    miar() {
        console.log("Miauuuu");
    }
}

// Cria uma instância da classe Gato
let gato = new Gato("Geraldinho", "5 meses", "preto");

// Chama o método para descrever as informações do gato
gato.descrever();

// Chama o método específico para gatos, fazendo o gato "miar"
gato.miar();