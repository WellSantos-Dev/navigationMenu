function openCloseMenu() {
    let menu = document.getElementById('menu--area');

    if(menu.style.width == '0px'){
        menu.style.width = '200px';
    } else {
        menu.style.width = '0px';
    }
}