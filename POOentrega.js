class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    alert(
      "Olá, eu sou o " +
        this.nome +
        " Tenho " +
        this.idade +
        " anos e sou um " +
        this.cargo
    );
  }
  trabalhar() {
    alert(this.nome + " Está trabalhando");
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }
  gerenciar() {
    alert(this.nome + " Está gerenciando");
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }
  programar() {
    alert(this.nome + " Está programando");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  //Botões
  const btn = document.getElementById("btn");
  const btnClose = document.getElementsByClassName("btn-close")[0];
  const submitBtn = document.getElementById("submitBtn");
  const card = document.getElementById("cardForm");
  var cardSetter = 0;
  btn.addEventListener("click", function () {
    card.style.display = "flex";
    btn.style.display = "none";
  });
  btnClose.addEventListener("click", function () {
    card.style.display = "none";
    btn.style.display = "flex";
  });
  submitBtn.addEventListener("click", function () {
    card.style.display = "none";
    btn.style.display = "flex";
  });

  //ALTERNAR ENTRE CAMPOS
  const disabledSelect = document.getElementById("disabledSelect");
  disabledSelect.addEventListener("change", function () {
    const departamento = document.getElementById("departamentoArea");
    const programacao = document.getElementById("linguagemArea");
    if (disabledSelect.value === "Gerente") {
      departamento.style.display = "flex";
      programacao.style.display = "none";
    } else if (disabledSelect.value === "Desenvolvedor") {
      departamento.style.display = "none";
      programacao.style.display = "flex";
    }
  });

  //FORMULARIO
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
