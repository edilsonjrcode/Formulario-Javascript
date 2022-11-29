const dados = {};

function novoObjeto(){
    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email');
    const idade = document.querySelector('#idade');
    const mensagem = document.querySelector('#mensagem');
    const maiorIdadeSim = document.querySelector('#maior-idade');
    const maiorIdadeNao = document.querySelector('#maior-idade2');
    const checkbox = document.querySelector('#newslatter');
    const limpar = document.querySelector('#limpar');
    const enviar = document.querySelector('#enviar');

    const limpaEspacos = () => {
        nome.value = '';
        email.value = '';
        idade.value = '';
        maiorIdadeSim.checked = false;
        maiorIdadeNao.checked = false;
        checkbox.checked = false;
        mensagem.value = '';
    }

    idade.addEventListener('change', () => {
        idade.value >= 18? maiorIdadeSim.checked = true : maiorIdadeNao.checked = true
    })


     enviar.addEventListener('click', () => {

        if (nome.value == '' || idade.value == '' || email.value == '' ||
        mensagem.value == '' || !Number(idade.value) ){
            if (!Number(idade.value)){
                alert("Esta idade é inválida")}
            else{
                alert("Existem campos vazios, preencha corretamente")
            }
        } else{
            dados.nome = nome.value;
            dados.email = email.value;
            dados.idade = Number(idade.value);
            dados.maiorIdade = maiorIdadeSim.checked == true? true : false;
            dados.desejaReceberNewsletter = checkbox.checked == true? true : false;
            dados.mensagem = mensagem.value;

            console.log(dados)

            limpaEspacos()
        }
    })  
    
    limpar.addEventListener('click', () => {
        limpaEspacos()
    })
}

novoObjeto();