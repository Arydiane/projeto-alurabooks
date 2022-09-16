async function buscaEndereco(cep) {

    var mensagemErro = document.getElementById('erro'); 
    mensagemErro.innerHTML = '';

    try {
        var consultaCEP =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }

        console.log(consultaCEPConvertida)

        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');
        let bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    }
    catch(erro) {
        mensagemErro.innerHTML = `<p>CEP inválido! Tente novamente. `
        console.log(erro);
    }

}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
