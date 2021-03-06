const pagePemain = (id) => {
    let nama = '';


    $.ajax({
        url: `https://api.football-data.org/v2/players/${id}`,
        beforeSend: xhr => {
            xhr.setRequestHeader('X-Auth-Token', 'b8f7df6699b4420c99dd6840e3561522');
            $('#preloading-wrapper, #break-preloading').css('display','');
        },
        success: data => {
            isiData(data);
            nama = data.name;
            $('#preloading-wrapper, #break-preloading').css('display','none');
        }
    });

    function isiData(data) {
        const el = `
                    <table class="striped">
                        <tr>
                            <td width="180">Nama</td>
                            <td> : </td>
                            <td>${data.name}</td>
                        </tr>
                        <tr>
                            <td>Tanggal Lahir</td>
                            <td> : </td>
                            <td>${data.dateOfBirth}</td>
                        </tr>
                        <tr>
                            <td>Negara Kelahiran</td>
                            <td> : </td>
                            <td>${data.countryOfBirth}</td>
                        </tr>
                        <tr>
                            <td>Kebangsaan</td>
                            <td> : </td>
                            <td>${data.nationality}</td>
                        </tr>
                        <tr>
                            <td>Posisi</td>
                            <td> : </td>
                            <td>${data.position}</td>
                        </tr>
                    </table>
        `;

        $('#data-pemain').append(el);
    }
    $('#save').click(() => {
        saveForLaterPlayer({
            id: id,
            name: nama
        });
        $('.fixed-action-btn').css('display', 'none');
    });
    getPlayer(id).then((team) => {
        if (team) {
            $('.fixed-action-btn').css('display', 'none');
        } else {
            $('.fixed-action-btn').css('display', '');
        }
    });
};