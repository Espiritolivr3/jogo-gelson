const gelsao = document.querySelectorAll('.gelsao')[0];
const boleto = document.querySelector('.boleto');

const jump = () => {
    gelsao.classList.add('jump');
        
setTimeout(() => {
    gelsao.classList.remove('jump');
    },500);
    }

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = boleto.offsetLeft;
    const marioPosition = window.getComputedStyle(gelsao).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        boleto.style.animation = 'none'
        boleto.style.left =`${pipePosition}px`;

        gelsao.style.animation = 'none'
        gelsao.style.bottom =`${marioPosition}px`;

        gelsao.src = './imagens/gersao.png';
        gelsao.style.width = '180px';
        gelsao.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10)
    
document.addEventListener('keydown', jump);