class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(
      "Olá, eu sou o " +
        this.nome +
        " Tenho " +
        this.idade +
        " anos e sou um " +
        this.cargo
    );
  }
  trabalhar() {
    console.log(this.nome + " Está trabalhando");
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }
  gerenciar() {
    console.log(this.nome + " Está gerenciando");
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }
  programar() {
    console.log(this.nome + " Está programando");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("BtnCadastrarFuncionario");
  btn.addEventListener("Click", function () {
    console.log("Clicado");
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("disabledTextInput").value;
    const idade = document.getElementById("disabledNumberInput").value;
    const cargo = document.getElementById("disabledSelect").value;
    const departamento = document.getElementById(
      "disabledTextInputDepartment"
    ).value;
    const linguagem = document.getElementById(
      "disabledTextInputProgrammingLanguage"
    ).value;

    let funcionario;
    if (cargo === "Gerente") {
      funcionario = new Gerente(nome, idade, cargo, departamento);
    } else if (cargo === "Desenvolvedor") {
      funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
    }

    funcionario.seApresentar();
    funcionario.trabalhar();
    if (funcionario instanceof Gerente) {
      funcionario.gerenciar();
    } else if (funcionario instanceof Desenvolvedor) {
      funcionario.programar();
    }
  });
});
