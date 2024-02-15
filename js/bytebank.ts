
//Primeiro codigo feito

var  saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor")as HTMLElement;

elementoSaldo.textContent = saldo.toString()

var elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
//evento do formulario
elementoFormulario.addEventListener("submit", (event)=>{
    //essa função nao deixa a pagina carregar, porem execulta o evento.
    event.preventDefault();
    //se o formulario nao for preenchido corretamente ele da o alerta !!
   if(!elementoFormulario.checkValidity()){
    alert("Esse formulario não foi preenchido corretamente");
    return;
   }
  

   //segunda etapa do codigo 

   //coletar os dados de cada elemnto
   const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao")as HTMLSelectElement;
   const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
   const inputData = elementoFormulario.querySelector("#data")as HTMLInputElement;

//em cada input vou coletar os valores que irao inserir pelo value;
   let tipoTransacao:string = inputTipoTransacao.value;
   let valor:number = inputValor.valueAsNumber;
   let data:Date = new Date (inputData.value);


   //terceira etapa 
    //se o transação vai ser somar ou subtrair na conta do cliente 
    if(tipoTransacao === "Depósito"){
        saldo += valor;
    }else if(tipoTransacao === "Transferência" || tipoTransacao == "Pagamento de Boleto"){
        saldo -= valor; 
    } else{
        alert("Tipo de Transação é invalida!");
        return;
    }
      //ultima etapa 
     //atulizando valor com a ferificação a cima 
    elementoSaldo.textContent = saldo.toString();
   //criando object com os novos valores que vamos inserir
   const valores = {
       tipoTransacao: tipoTransacao,
       valor: valor,
       data: data
   }
   console.log(valores)
   //
   elementoFormulario.reset()

})