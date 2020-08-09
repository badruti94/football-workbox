const pageTim = () => {
    const ambilData = $.ajax({
        url: 'https://api.football-data.org/v2/competitions/2021/standings',
        beforeSend: xhr => {
            xhr.setRequestHeader('X-Auth-Token', 'b8f7df6699b4420c99dd6840e3561522');
            $('#preloading-wrapper, #break-preloading').css('display','');
        },
        success: data => {
            isiDataTim(data.standings[0].table);
            $('#preloading-wrapper, #break-preloading').css('display','none');
        }
    });

    function isiDataTim(data) {
        data.forEach(dt => {
            const tim = dt.team;
            const el = `<a href="${tim.id}" class="collection-item">${tim.name}</a>`;
            $('.collection').append(el);
        });
    }

    ambilData.then(()=>{
        $('.collection-item').click((e)=>{
            e.preventDefault();
            const id = $(e.target).attr('href');
            $.get('pages/detail_tim.html', data => {
                $('#body-content').html(data);
            }).then(()=>{
                pageDetailTim(id);
            });
        });
    });
};