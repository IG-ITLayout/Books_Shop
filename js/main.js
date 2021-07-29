
let menuBtn = document.querySelector('.header__button');
let menuList = document.querySelector('.header__menu');
let searchButton = document.querySelector('.search__icon');
let searchInput = document.querySelector(".header__input");
let searchButtonShow =document.querySelector('.header__search-ikon');




// burger menu
activeMenu =function(){
    menuBtn.classList.toggle('show');

    if(menuBtn.classList.contains('show')){
        menuList.classList.add('showMenu');           
    } else{
           menuList.classList.remove('showMenu');
       };
};

// search button
showSearch =function(){
searchButton.classList.toggle('show_input');
if(searchButton.classList.contains('show_input')){
    searchInput.classList.add('input_show');
    searchButtonShow.classList.add('search-visibile');
}else{
    searchInput.classList.remove('inout_show');
    searchButtonShow.classList.remove('search-visibile');
};

};




menuBtn.addEventListener('click', activeMenu);
searchButton.addEventListener('click', showSearch);