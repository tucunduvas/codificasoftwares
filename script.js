// espera o carregamento completo do DOM antes de executar os scripts
document.addEventListener('DOMContentLoaded', function() {

    /* 
    CARROSSEL
    navegação manual entre slides de conteúdo
    */

    const botoesDeNavegacao = document.querySelectorAll('.nav-item');
    const slidesDoCarrossel = document.querySelectorAll('.carrosel-slide');

    botoesDeNavegacao.forEach(function(botao) {
        botao.addEventListener('click', function() {

            // obtém o índice do slide a partir do atributo data-slide
            const indiceDoSlide = Number(botao.dataset.slide);
            
            // valida se o índice é um número válido
            if (isNaN(indiceDoSlide)) {
                return;
            }

            // remove a classe 'active' de todos os botões e slides
            botoesDeNavegacao.forEach(function(cadaBotao) {
                cadaBotao.classList.remove('active');
            });
            
            slidesDoCarrossel.forEach(function(cadaSlide) {
                cadaSlide.classList.remove('active');
            });

            // ativa o botão clicado e o slide correspondente
            botao.classList.add('active');
            
            const slideCorrespondente = slidesDoCarrossel[indiceDoSlide];
            if (slideCorrespondente) {
                slideCorrespondente.classList.add('active');
            }
        });
    });

});