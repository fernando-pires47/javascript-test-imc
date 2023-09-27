 var urlWebHook = "https://webhook.site/6ef034c4-6d25-41bb-bb77-d254e6085dff"

var botaoPaciente = document.querySelector("#buscar-pacientes");

botaoPaciente.addEventListener("click", () => {
    var xhr = new XMLHttpRequest();

    console.log(" 1 - Abrindo a requisição com o Open!");
    xhr.open("GET", urlWebHook);
    
    console.log("2 - Chamando a requisição com o Send!");
    xhr.send();

    xhr.addEventListener("load", () => {
        console.log("3 - Requisição carregada com o Load!");
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.response;
            console.log(resposta);
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
    
            pacientes.forEach(paciente => {
                console.log(paciente);
                adicionarPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    console.log("4 - Página carregou com sucesso!");

});