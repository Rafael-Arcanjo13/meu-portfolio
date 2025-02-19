const btnMobile = document.getElementById('btn_mobile')

btnMobile.addEventListener('click', () => {
    const navList = document.querySelector('.nav-itens');
    navList.classList.toggle('active');
})