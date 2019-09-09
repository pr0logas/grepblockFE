var ctableTransactions = $('#homePageAssetList').DataTable({
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
    ]
});
