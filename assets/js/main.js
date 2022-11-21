function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');

        document.querySelector('.logo-ham').src ="./assets/img/logos/hamburger.png"
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.logo-ham').src ='./assets/img/logos/remover.png';


    }
}
alert("oi")
