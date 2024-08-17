document.addEventListener('DOMContentLoaded', () => {
    function salvaTema(nomeTema) {
        const date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        const temaCorrente = document.querySelector('#tema-corrente');
        temaCorrente.href = `/css/${nomeTema}.css`;
        document.cookie = `tema=${nomeTema};expires=${date.toUTCString()};path=/`;
    }

    const temi = document.querySelectorAll('#selettore-tema li');

    const temaImpostato = document.cookie.split(';')[0].split('=')[1];
    if (temaImpostato !== undefined) {
        salvaTema(temaImpostato);
    }

    temi.forEach(tema => {
        tema.addEventListener('click', () => {
            salvaTema(tema.dataset.tema);            
        })
    });
});