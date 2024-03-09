// Definição da classe base Funcionario
class Funcionario {
    // Construtor que recebe nome e idade como parâmetros
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    // Método para calcular o salário (será implementado nas subclasse Professor)
    calcularSalario(){
    }

    // Método para descrever as informações do funcionário
    descrever() {
        console.log(`O funcionário ${this.nome} tem ${this.idade} anos e o seu salário base é de ${this.salarioBase}`);
    }
}

// Definição da classe Professor, que herda da classe Funcionario
class Professor extends Funcionario {

    // Construtor que recebe nome, idade, disciplina, horasAula e valorHorasAula como parâmetros
    constructor(nome, idade, disciplina, horasAula, valorHorasAula) {
        // Chama o construtor da classe pai (Funcionario)
        super(nome, idade);

        // Atribui as propriedades específicas da classe Professor
        this.disciplina = disciplina;
        this.horasAula = horasAula;
        this.valorHorasAula = valorHorasAula; //Váriavel criada pelo desenvolvedor para propor uma forma de calcular o salário base
    }

    // Implementação do método para calcular o salário específico para professores
    calcularSalario(){
        //calcula o salário base conforme os parâmetros colocados
        this.salarioBase = this.horasAula * this.valorHorasAula;
    }

    // Sobrescreve o método descrever da classe pai para incluir informações específicas do Professor
    descrever() {
        console.log(`${this.nome} de ${this.disciplina} tem ${this.idade} anos e o seu salário base é de R$ ${this.salarioBase}, já que ele trabalha ${this.horasAula} horas por mês e ganha R$ ${this.valorHorasAula} por hora-aula.`);
    }
}

// Cria uma instância da classe Professor com os parâmetros pedidos
let minerva = new Professor("Minerva McGonagall", "96", "Transfiguração", "160", "150");

// Chama o método para calcular o salário
minerva.calcularSalario();

// Chama o método para descrever as informações do professor
minerva.descrever();