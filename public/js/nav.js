$(document).ready(() => {
    var page = window.location.hash.substr(1);
    if (page == '') page = 'home';
    loadPage(page);

    function loadPage(page) {
        $.get('pages/' + page + '.html', data => {
            $('#body-content').html(data);
            loadPageJs(page);
        });
    }

    function loadPageJs(page) {
        switch (page) {
            case 'home':
                pageTim();
                break;
            case 'favorit':
                pageFavorit();
                break;
        }
    }


    M.Sidenav.init($('.sidenav'));

    $('.topnav, .sidenav').click((e) => {
        M.Sidenav.getInstance($('.sidenav')).close();

        const page = $(e.target).attr('href').substr(1);
        loadPage(page);
    });
});