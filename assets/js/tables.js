var homePageAssetList = {
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

            var coin_name = value['assetName'] + ' (' + ticker + ')';
            var coin_link = '<a href="?coin='+value['assetTicker']+'#coin" class="link-coin">'+coin_name+'</a>';
		
    	    // Format *block* value to see in nice shape
    	    var blocks_formated = parseFloat(value['block']).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    	    blocks_formated = blocks_formated.substring(0, blocks_formated.length-2);

    	    // Format *market_cap* value to see in nice shape
    	    var market_cap_formated = '$' + parseFloat(value['market_cap']).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    	    market_cap_formated = market_cap_formated.substring(0, market_cap_formated.length-2);
    		
    	    // Format *total_volume* value to see in nice shape
            var total_volume_formated = '$' + parseFloat(value['total_volume']).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            total_volume_formated = total_volume_formated.substring(0, total_volume_formated.length-2);

            // Format *price_change_percentage_24h* value to see in nice shape.
            var stylePrice_change_percentage_24h = ''
            
                if (value['price_change_percentage_24h'] < 0)
                    stylePrice_change_percentage_24h = 'alert alert-error' 
                else
                    stylePrice_change_percentage_24h = 'alert alert-success';

            var price_change_percentage_24h_formated = '<span class="' + stylePrice_change_percentage_24h + '">' + 
            parseFloat(value['price_change_percentage_24h']).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '%' + '</span>';
	    

            json[key]['assetName'] = img + ' ' +coin_link;
            json[key]['assetType'] = '<span class="' + styleAssetType + '">' + value['assetType'] + '</span>';
            json[key]['current_price'] = '$' + value['current_price'];
            json[key]['market_cap'] = market_cap_formated;
            json[key]['total_volume'] = total_volume_formated;
            json[key]['block'] = blocks_formated;
            json[key]['nTx'] = value['nTx'];
            json[key]['blockchainAge'] = parseFloat(value['blockchainAge'] / 2628002.88).toFixed(1) + ' mos'; // Converted seconds to months
	        json[key]['price_change_percentage_24h'] = price_change_percentage_24h_formated;

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
            data: 'price_change_percentage_24h',
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
            data: 'blockchainAge',
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
};

var ctablePageAssetList = $('#homePageAssetList').DataTable(homePageAssetList);

$('body').on( "update_page", function() {

    if($('#homePageAssetList').hasClass('dataTable')) {

        ctablePageAssetList.ajax.reload(null, false);

        return;

    } else {

        var create_table = $('#homePageAssetList').DataTable(homePageAssetList);

        setInterval(function() {
            create_table.ajax.reload(null, false); // user paging is not reset on reload
        }, 29000);

    }
});
