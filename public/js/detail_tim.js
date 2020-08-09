const pageDetailTim = (id) => {
    let nama = '';

    $.ajax({
        url: `https://api.football-data.org/v2/teams/${id}`,
        beforeSend: xhr => {
            xhr.setRequestHeader('X-Auth-Token', 'b8f7df6699b4420c99dd6840e3561522');
            $('#preloading-wrapper, #break-preloading').css('display','');
        },
        success: data => {
            isiData(data);
            nama = data.name;
            $('#preloading-wrapper, #break-preloading').css('display','none');
        }
    }).then(() => {
        $('.collection-item').click((e) => {
            e.preventDefault();
            const id = $(e.target).attr('href');
            $.get('pages/pemain.html', data => {
                $('#body-content').html(data);
            }).then(() => {
                pagePemain(id);
            });
        });
    });

    function isiData(data) {
        const el = `
                    <table class="striped">
                        <tr>
                            <td colspan="3"><center><img src="${data.crestUrl}" alt="" srcset=""></center></td>
                        </tr>
                        <tr>
                            <td width="180">Nama</td>
                            <td> : </td>
                            <td>${data.name}</td>
                        </tr>
                        <tr>
                            <td>Nama Pendek</td>
                            <td> : </td>
                            <td>${data.shortName}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td> : </td>
                            <td>${data.address}</td>
                        </tr>
                        <tr>
                            <td>Didirikan</td>
                            <td> : </td>
                            <td>${data.founded}</td>
                        </tr>
                    </table>
        `;
        $('#tim').append(el);

        data.squad.forEach(dt => {
            const elSquad = `<a href="${dt.id}" class="collection-item">${dt.name}</a>`;
            $('#squad').append(elSquad);
        });

    }

    $('#save').click(() => {
        saveForLaterTeam({
            id: id,
            name: nama
        });
        $('.fixed-action-btn').css('display', 'none');
        M.toast({
            html: 'Berhasil Disimpan'
        });
    });

    getTeam(id).then((team) => {
        if (team) {
            $('.fixed-action-btn').css('display', 'none');
        } else {
            $('.fixed-action-btn').css('display', '');
        }
    });
};