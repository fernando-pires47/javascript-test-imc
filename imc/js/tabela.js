removerEventoDoubleClick();

function removerEventoDoubleClick(){
    var tabela = document.querySelector("table");
    tabela.addEventListener("dblclick", (event) => {
        var linhaTabela = event.target.parentNode;

        if (linhaTabela.id != "cabecalho-pacientes") {
            linhaTabela.classList.add("fadeOut");
            setTimeout(() => {
                linhaTabela.remove();
            }, 500);
        }

    });
}

function validarPacienteTable(paciente){
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
   
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("aluno-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("aluno-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}

