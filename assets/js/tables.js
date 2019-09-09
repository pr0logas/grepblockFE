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
      
            json[key]['assetName'] = value['assetName'];
    		json[key]['assetType'] = value['assetType'];
    		json[key]['current_price'] = value['current_price'];
    		json[key]['market_cap'] = value['market_cap'];
    		json[key]['total_volume'] = value['total_volume'];
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
}, 30000);