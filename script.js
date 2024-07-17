function saudacaoPersonalizada(nome, horario) {
    let saudacao = '';
    if (horario >= 0 && horario < 12) {
        saudacao = 'Bom dia, ' + nome + '!';
    } else if (horario >= 12 && horario < 18) {
        saudacao = 'Boa tarde, ' + nome + '!';
    } else if (horario >= 18 && horario <= 23) {
        saudacao = 'Boa noite, ' + nome + '!';
    } else {
        saudacao = 'Horário inválido!';
    }
    return saudacao;
}

function exibirSaudacao() {
    const nome = document.getElementById('nome').value;
    const horario = parseInt(document.getElementById('horario').value);
    const mensagem = saudacaoPersonalizada(nome, horario);
    document.getElementById('mensagem').innerText = mensagem;
}