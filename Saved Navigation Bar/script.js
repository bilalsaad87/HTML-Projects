/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // save status of sidebar in localstorage
    localStorage.setItem("mySidenav", 'open');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    // save status of sidebar in localstorage
    localStorage.setItem("mySidenav", 'close');
}

function btn_toggle(id) {
    var element = $("." + id);
    if (element.hasClass('hidden')) {
        element.removeClass('hidden');
        // save status of menu in localstorage
        localStorage.setItem(id, 'open');
    } else {
        element.addClass('hidden');
        localStorage.setItem(id, 'close');
    }
}

// check localstorage for open and close
$(function() {
    // list of id's that close or open
    var list = ['mySidenav', 'about', 'services', 'partners'];
    for (var i = 0; i < list.length; i++) {
        if (localStorage.getItem(list[i]) == 'open') {
            if (list[i] == 'mySidenav') {
                document.getElementById("mySidenav").style.width = "250px";
            } else {
                $('.' + list[i]).removeClass('hidden');
            }
        } else {
            if (list[i] == 'mySidenav') {
                document.getElementById("mySidenav").style.width = "0px";
            } else {
                $('.' + list[i]).addClass('hidden');
            }
        }
    }
});