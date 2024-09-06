function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// 
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]
    const som = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(som);
        console.log(som)
    };
    contador ++;
}
