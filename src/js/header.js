const btnMobile = document.getElementById('btn_mobile')

btnMobile.addEventListener('click', () => {
    const navList = document.querySelector('.nav-itens');
    btnMobile.classList.toggle('animation-btn')
    navList.classList.toggle('active');
})