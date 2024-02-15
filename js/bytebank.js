var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo.toString();
var elementoFormulario = document.querySelector(".block-nova-transacao form");
//evento do formulario
elementoFormulario.addEventListener("submit", function (event) {
    //essa função nao deixa a pagina carregar, porem execulta o evento.
    event.preventDefault();
    //se o formulario nao for preenchido corretamente ele da o alerta !!
    if (!elementoFormulario.checkValidity()) {
        alert("Esse formulario não foi preenchido corretamente");
        return;
    }
    //coletar os dados de cada elemnto
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    //em cada input vou coletar os valores que irao inserir pelo value;
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    //se o transação vai ser somar ou subtrair na conta do cliente 
    if (tipoTransacao === "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao === "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de Transação é invalida!");
        return;
    }
    //atulizando valor com a ferificação a cima 
    elementoSaldo.textContent = saldo.toString();
    //criando object com os novos valores que vamos inserir
    var valores = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(valores);
    //
    elementoFormulario.reset();
});
