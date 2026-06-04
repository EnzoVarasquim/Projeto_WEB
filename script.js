// CONTADORES
let numeros = document.querySelectorAll(".counter");

numeros.forEach(numero => {

    let valorFinal = Number(numero.dataset.target);
    let valorAtual = 0;

    let intervalo = setInterval(() => {

        valorAtual++;

        numero.innerText = valorAtual;

        if(valorAtual >= valorFinal){
            clearInterval(intervalo);
        }

    }, 30);

});

// BOTÃO VOLTAR AO TOPO
let botaoTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        botaoTopo.style.display = "block";
    }
    else{
        botaoTopo.style.display = "none";
    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// COPIAR PIX
let botaoPix = document.getElementById("copiarPix");

if(botaoPix){

    botaoPix.addEventListener("click", () => {

        let chavePix = document.getElementById("pix").innerText;

        navigator.clipboard.writeText(chavePix);

        alert("Chave PIX copiada!");

    });

}