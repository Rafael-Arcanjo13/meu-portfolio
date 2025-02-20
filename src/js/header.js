const btnMobile = document.getElementById('btn_mobile')

btnMobile.addEventListener('click', () => {
    const navList = document.querySelector('.nav-itens');
    btnMobile.classList.toggle('animation-btn')
    navList.classList.toggle('active');
})
btnMobile.addEventListener('touchstart', (event) => {
    event.preventDefault();
    const navList = document.querySelector('.nav-itens');
    const active = navList.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    btnMobile.classList.toggle('animation-btn');
    navList.classList.toggle('active');
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
})