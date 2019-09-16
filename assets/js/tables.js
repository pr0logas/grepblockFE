var ctablePageAssetList = $('#homePageAssetList').DataTable({
    bInfo: false,
    autoWidth: true,
    searching: true,
    ordering: true,
    responsive: true,
    lengthChange: true,
    processing: false,
    bLengthChange: false,
    pageLength: 50,
    bPaginate: false,
    order: [
        [1, "desc"]
    ],
    ajax: {
        url: '/apidata/homePageAssetList.json',
        dataSrc: function(json) {
            $.each(json, function(key, value) {
            
            /* Process asset name, logo, ticker */
            var img = '<img src="/assets/coins-logo/'+value['assetName']+'.png" height="24" width="24">';
            var ticker = value['assetTicker']

            var styleAssetType = ''
                if (value['assetType'] == 'coin')
                    styleAssetType = 'badge badge-warning';

                if (value['assetType'] == 'platform')
                    styleAssetType = 'badge badge-primary';

                if (value['assetType'] == 'token')
                    styleAssetType = 'badge badge-danger';
      
            json[key]['assetName'] = img + ' ' +value['assetName'] + ' (' + ticker + ')';
    		json[key]['assetType'] = '<span class="' + styleAssetType + '">' + value['assetType'] + '</span>';
    		json[key]['current_price'] = '$' + value['current_price'];
    		json[key]['market_cap'] = '$' + parseFloat(value['market_cap']).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    		json[key]['total_volume'] = '$' + parseFloat(value['total_volume']).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            json[key]['block'] = value['block'];
            json[key]['nTx'] = value['nTx'];
            });
            return json;
        },
        error: function(xhr, error, thrown) {
            console.log("homePageAssetList table err");
        }
    },
    columns: [{
	    data: 'assetName',
            width: '12%'
	    },
	    {
            data: 'assetType',
            width: '12%'
	    },
            {
            data: 'current_price',
            width: '12%'
            },
            {
            data: 'market_cap',
            width: '12%'
            },
            {
            data: 'total_volume',
            width: '12%'
            },
            {
            data: 'block',
            width: '12%'
            },
	    {
	    data: 'nTx',
	    width: '12%'	   
        },
    ]
});

setInterval(function() {
    ctablePageAssetList.ajax.reload(null, false); // user paging is not reset on reload
}, 29000);
