adicionarEventoClick();
adicionarPacientesPadrao();

function adicionarEventoClick(){
    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function (event) {
        event.preventDefault();
    
        var form = document.querySelector("#form-adiciona");
        var pacienteRetornado = obtemPacienteDoFormulario(form);
        var erros = validarPacienteForm(pacienteRetornado);
        if (erros.length > 0) {
            adicionarMensagensErro(erros);
            return;
        }
        adicionarPacienteNaTabela(pacienteRetornado);
        atualizarUlMensagemErro(true);
    
        form.reset();
    });
}

function adicionarPacientesPadrao(){
    let lista = [
        {
            nome: "Maria",
            peso: 1000,
            altura: "2.00",
            gordura: 10
        },
        {
            nome: "João",
            peso: 80,
            altura: "3.72",
            gordura: 40
        },
        {
            nome: "Pablo",
            peso: 54,
            altura: "1.64",
            gordura: 14
        },
        {
            nome: "Marli",
            peso: 85,
            altura: "1.73",
            gordura: 24
        },
        {
            nome: "Carlos",
            peso: 46,
            altura: "1.55",
            gordura: 19
        },
    ];

    for(let p of lista){
        adicionarPacienteNaTabela(p);
    }
};


					

function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montarTr(pacienteRetornado) {
     var pacienteTr = document.createElement("tr");
     pacienteTr.classList.add("paciente");
     pacienteTr.appendChild(montaTd(pacienteRetornado.nome, "info-nome"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.peso, "info-peso"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.altura, "info-altura"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.gordura, "info-gordura"));
     pacienteTr.appendChild(montaTd(pacienteRetornado.imc, "info-imc"));

     return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validarPacienteForm(paciente) {
    var erros = [];

    if (paciente.nome.length == 0 ) {
        erros.push("Informe o nome");
    }

    if (paciente.gordura.length == 0) {
        erros.push("Informe a gordura");
    }

    if (paciente.peso.length == 0) {
        erros.push("Informe o peso");
    }

    if (paciente.altura.length == 0) {
        erros.push("Informe a altura");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido!");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida!");
    }

    return erros;
}

function adicionarMensagensErro(erros) {
    var ul = atualizarUlMensagemErro(false);
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function atualizarUlMensagemErro(esconder) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    if(esconder){
        ul.classList.add("invisivel");
    }else{
        ul.classList.remove("invisivel");
    }
    return ul;
}

function adicionarPacienteNaTabela(paciente) {
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    validarPacienteTable(pacienteTr);
}