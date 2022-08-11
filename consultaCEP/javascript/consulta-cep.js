const $campoCep = document.querySelector('[name="cep"]');
const $campoCidade = document.querySelector('[name="cidade"]');
const $campoBairro = document.querySelector('[name="bairro"]');
const $campoRua = document.querySelector('[name="rua"]');
const $campoEstado = document.querySelector('[name="estado"]');

$campoCep.addEventListener("blur", infosDoEvento => {
    const cep = infosDoEvento.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(respostaDoServer => {
          return respostaDoServer.json();
      })
      .then(dadosDoCep => {
          console.log(dadosDoCep);
          $campoCidade.value = dadosDoCep.localidade;
          $campoBairro.value = dadosDoCep.bairro;
          $campoRua.value = dadosDoCep.logradouro;
          $campoEstado.value = dadosDoCep.uf;
      });
});