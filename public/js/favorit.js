const pageFavorit = () => {
    const tampilToast = toast => {
        return new Promise((resolve, reject) => {
            M.toast({
                html: toast
            });
            resolve();
        });
    };


    getAllTeam().then(teams => {
        teams.forEach(team => {
            const el = `<a href="${team.id}" class="collection-item collection-item-team"><span id="${team.id}" class="hapus-team new badge red" data-badge-caption="">hapus</span>${team.name}</a>`;
            $('#tim').append(el);
        });
    }).then(() => {
        $('.hapus-team').click((e) => {
            e.preventDefault();
            const id = e.target.getAttribute('id');
            hapusTeam(id);
            tampilToast('Berhasil Dihapus').then(() => location.reload());
        });
    }).then(() => {
        $('.collection-item-team').click((e) => {
            e.preventDefault();
            const id = $(e.target).attr('href');
            $.get('pages/detail_tim.html', data => {
                $('#body-content').html(data);
            }).then(() => {
                pageDetailTim(id);
            });
        });
    });


    getAllPlayer().then(players => {
        players.forEach(player => {
            const el = `<a href="${player.id}" class="collection-item collection-item-player"><span id="${player.id}" class="hapus-player new badge red" data-badge-caption="">hapus</span>${player.name}</a>`;
            $('#pemain').append(el);
        });
    }).then(() => {
        $('.hapus-player').click((e) => {
            e.preventDefault();
            const id = e.target.getAttribute('id');
            hapusPlayer(id);
            tampilToast('Berhasil Dihapus').then(() => location.reload());
        });
    }).then(() => {
        $('.collection-item-player').click((e) => {
            e.preventDefault();
            const id = $(e.target).attr('href');
            $.get('pages/pemain.html', data => {
                $('#body-content').html(data);
            }).then(() => {
                pagePemain(id);
            });
        });
    });

}