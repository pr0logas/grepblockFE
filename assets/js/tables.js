var ctableTransactions = $('#home-tableAllBlockchains').DataTable({
    bInfo: false,
    autoWidth: false,
    searching: true,
    ordering: true,
    responsive: true,
    lengthChange: true,
    processing: false,
    bLengthChange: false,
    pageLength: 50,
    bPaginate: true,
    order: [
        [1, "desc"]
    ],
    ajax: {
        url: process.resourcesPath + '/apidata/TransactionsData.json',
        dataSrc: function(json) {
            $.each(json, function(key, value) {
                var styleCategory = ''
                if (value['category'] == 'receive')
                    styleCategory = 'badge badge-success';
                if (value['category'] == 'send')
                    styleCategory = 'badge badge-warning';
                var styleAmount = ''
                if (value['amount'] < 0)
                    styleAmount = 'badge badge-danger';
                else
                    styleAmount = 'badge badge-success';
                var styleConf = ''
                if (value['confirmations'] < 100)
                    styleConf = 'badge badge-warning';
                else
                    styleConf = 'badge badge-success';
                var styleTime = 'badge badge-light'
                var styleTxid = 'badge badge-light'
                json[key]['time'] = '<span class="' + styleTime + '">' + new Date((value['time']) * 1000).toLocaleString('lt-LT', {
                    hour12: false
                }) + '</span>';
                json[key]['category'] = '<span class="' + styleCategory + '">' + value['category'] + '</span>';
                json[key]['txid'] = '<span class="' + styleTxid + '">' + value['txid'] + '</span>';
                json[key]['amount'] = '<span class="' + styleAmount + '">' + value['amount'] + '</span>';
                json[key]['confirmations'] = '<span class="' + styleConf + '">' + value['confirmations'] + '</span>';
                json[key]['activity'] = '<span class="' + styleConf + '">' + value['activity'] + '</span>';
            });
            return json;
        },
        error: function(xhr, error, thrown) {
            console.log("transactions table err");
        }
    },
    columns: [{
            data: 'confirmations',
            width: '12%'
        },
        {
            data: 'time',
            width: '20%'
        },
        {
            data: 'category',
            width: '12%'
        },
        {
            data: 'txid',
            width: '12%'
        },
        {
            data: 'amount',
            width: '12%'
        },
        {
            data: 'activity',
            width: '12%'
        },
    ]
});
