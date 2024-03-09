// Definição da classe SomadorDeNotas
class SomadorDeNotas {
    // Inicializa a propriedade total com 0
    total = 0;

    // Método para adicionar uma nota ao total
    adicionarNota(nota) {
        this.total += nota;
    }

    // Método para exibir o total de notas, formatando-o para uma casa decimal
    verTotal() {
        // Formata o total para uma casa decimal
        this.total = this.total.toFixed(1);

        // Exibe o total formatado
        console.log(`O total de notas é: ${this.total}`);
    }
}

// Cria uma instância da classe SomadorDeNotas
let somador = new SomadorDeNotas();

// Adiciona algumas notas à instância do somador
somador.adicionarNota(9.85);
somador.adicionarNota(8.14);
somador.adicionarNota(7.15);

// Exibe o total acumulado das notas
somador.verTotal();