document.addEventListener('DOMContentLoaded', () => {
    function salvaTema(nomeTema) {
        const date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        const temaCorrente = document.querySelector('#tema-corrente');
        temaCorrente.href = `/css/${nomeTema}.css`;
        document.cookie = `tema=${nomeTema};expires=${date.toUTCString()};path=/;SameSite=Strict`;
    }

    const temi = document.querySelectorAll('#selettore-tema li a');

    const temaImpostato = document.cookie.split(';')[0].split('=')[1];
    if (temaImpostato !== undefined) {
        salvaTema(temaImpostato);
    }

    temi.forEach(tema => {
        tema.addEventListener('click', (event) => {
            salvaTema(tema.dataset.tema);            
        });

        tema.addEventListener('keyup', (event) => {
            salvaTema(tema.dataset.tema);            
        });
    });
});