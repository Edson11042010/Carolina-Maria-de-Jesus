const perguntas = [
    {
        texto: "Qual ano do nascimento de Carolina Maria de Jesus?",
        opcoes: ["1900", "1910", "1914", "1915"],
        respostaCorreta: 2
    },
    {
        texto: "Qual o nome do livro mais famoso de Carolina Maria de Jesus?",
        opcoes: ["Casa de Alvenaria", "Quarto de Despejo: Diário de uma Favelada", "Pedaços da Fome", "Diário de Bitita"],
        respostaCorreta: 1
    },
    {
        texto: "Quais profissões Carolina Maria de Jesus exerceu?",
        opcoes: ["Escritora, Compositora e Catadora de papel", "Escritora, Compositora e Advogada", "Escritora, Compositora e Professora", "Escritora, Compositora"],
        respostaCorreta: 0
    },
    {
        texto:"'Além de denunciar as condições de vida nas favelas, Carolina Maria de Jesus deu voz às pessoas'. Ela deu voz ás pessoas:",
        opcoes:["Ricas", "Marginalizadas", "Pobres", "Faveladas"],
        respostaCorreta: 1
    },
    {
        texto:"Ela ficou conhecida por retratar a pobreza e a desigualdade social a partir de sua própria experiência vivendo na favela:",
        opcoes: ["Carapícuiba", "Osasco", "Canindé", "Complexo do Alemão"],
        respostaCorreta: 2
    },
    {
        texto:"Qual cidade que Carolina Maria de Jesus nasceu?",
        opcoes: ["São Paulo", "Fortaleza", "Rio de Janeiro", "Mina Gerais"],
        respostaCorreta: 3
    },
    {
        texto:"DESAFIO - Carolina Maria de Jesus foi uma escritora, compositora e catadora de papel, ela ficou conhecida por retratar a pobreza e a desigualdade social a partir de sua própria experiência vivendo na favela do Canindé, Sua obra mais famosa é Quarto de Despejo: Diário de uma Favelada, publicada em 1960. O livro reúne trechos de seus diários, nos quais descreve:",
        opcoes: ["O cotidiano de dificuldades, A fome, O preconceito e a luta para sustentar seus filhos", "O dia a dia, As dificuldades, A fome e a luta contra o preconceito", "A luta contra o racismo, preconceito, fome e a machismo"],
        respostaCorreta: 0
    }

];

const quiz = document.getElementById("quiz");

quiz.innerHTML = perguntas.map((pergunta, indice) => `
    <div class="questao">
        <h3>Pergunta ${indice + 1}: ${pergunta.texto}</h3>
        <form>
            ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                <input type="radio" name="pergunta${indice}" value="${opcaoIndex}" id="pergunta${indice}-opcao${opcaoIndex}">
                <label for="pergunta${indice}-opcao${opcaoIndex}">${opcao}</label><br>
            `).join('')}
        </form>
    </div>
`).join('') + `
    <button id="ver-pontuacao" type="button">Ver pontuação</button>
    <p id="resultado" aria-live="polite"></p>
`;

document.getElementById("ver-pontuacao").addEventListener("click", () => {
    let pontuacao = 0;

    perguntas.forEach((pergunta, indice) => {
        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );

        if (respostaSelecionada && Number(respostaSelecionada.value) === pergunta.respostaCorreta) {
            pontuacao++;
        }
    });

    document.getElementById("resultado").textContent =
        `Você fez ${pontuacao} de ${perguntas.length} pontos!`;
});