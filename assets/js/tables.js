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
        [8, "desc"]
    ],
    ajax: {
        url: '/apidata/homePageAssetList.json',
        dataSrc: function(json) {
            $.each(json, function(key, value) {
            
            /* Process asset name, logo, ticker */
            var img = '<img src="/assets/coins-logo/'+value['assetName']+'.png" height="24" width="24">';
            var ticker = value['assetTicker']
		
	    // Set color on assetType
            var styleAssetType = ''
                if (value['assetType'] == 'coin')
                    styleAssetType = 'black';

                if (value['assetType'] == 'platform')
                    styleAssetType = 'black';

                if (value['assetType'] == 'token')
                    styleAssetType = 'black';

	    // Set icon image base on assetType
	    var iconAssetType = ''
                if (value['assetType'] == 'coin')
                    iconAssetType = '<img src="assets/img/icons/coin.png" alt="coin" style="width:16px;height:16px;">';

                if (value['assetType'] == 'platform')
                    iconAssetType = '<img src="assets/img/icons/platform.png" alt="coin" style="width:16px;height:16px;">';

                if (value['assetType'] == 'token')
                    iconAssetType = '<img src="assets/img/icons/token.png" alt="coin" style="width:16px;height:16px;">';
	    
	    // Set asset Name and Ticker
            var coin_name = value['assetName'] + ' (' + ticker + ')';
            var coin_link = '<a href="?page=coin&coin='+value['assetTicker']+'" class="link-coin">'+coin_name+'</a>';
		
    	    // Format *block* value to see in nice shape
    	    var blocks_formated = parseFloat(value['block']).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    	    blocks_formated = blocks_formated.substring(0, blocks_formated.length-2);

    	    // Format *market_cap* value to see in nice shape
    	    var market_cap_formated = '$' + parseFloat(value['market_cap']).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    	    market_cap_formated = market_cap_formated.substring(0, market_cap_formated.length-2);
    		
    	    // Format *total_volume* value to see in nice shape
            var total_volume_formated = '$' + parseFloat(value['total_volume']).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            total_volume_formated = total_volume_formated.substring(0, total_volume_formated.length-2);

	    // Add + sign for Price change if value is greater than > 0

            // Format *price_change_percentage_24h* value to see in nice shape.
            var stylePrice_change_percentage_24h = ''
            
                if (value['price_change_percentage_24h'] < 0)
                    stylePrice_change_percentage_24h = 'red' 
                else
                    stylePrice_change_percentage_24h = 'green';
	    // At first reformat the number after decimal, later one add + sign if needed, otherwise first formatting ignores seconds one
        var price_change_percentage_24h_formated1 = parseFloat(value['price_change_percentage_24h']).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

	    var reformated_price_change_percentage_24h = ''

                if (price_change_percentage_24h_formated1 > 0)
                    reformated_price_change_percentage_24h = '+' + price_change_percentage_24h_formated1
                else
                    reformated_price_change_percentage_24h = price_change_percentage_24h_formated1

	    var price_change_percentage_24h_formated2 = '<font color="' + stylePrice_change_percentage_24h + '">' +  
            reformated_price_change_percentage_24h + '%' + '</font>';

	    

            json[key]['assetName'] = img + ' ' +coin_link;
            json[key]['assetType'] = iconAssetType + ' ' + '<font color="' + styleAssetType + '">' + value['assetType'] + '</font>';
            json[key]['current_price'] = '<a href="/?page=coin&coin='+ticker+'#assetPrice">'+'$' + value['current_price']+'</a>';
            json[key]['market_cap'] = '<a href="/?page=coin&coin='+ticker+'#assetMarketCap">'+ market_cap_formated+'</a>';
            json[key]['total_volume'] = '<a href="/?page=coin&coin='+ticker+'#assetVolume">'+ total_volume_formated +'</a>';
            json[key]['block'] = '<a href="/?page=coin&coin='+ticker+'#assetBlocks">'+ blocks_formated +'</a>';
            json[key]['nTx'] = '<a href="/?page=coin&coin='+ticker+'#assetTransactions">'+ value['nTx']+'</a>';
            json[key]['blockchainAge'] = parseFloat(value['blockchainAge'] / 2628002.88).toFixed(1) + ' mos'; // Converted seconds to months
	        json[key]['price_change_percentage_24h'] = price_change_percentage_24h_formated2;

            });
            return json;
        },
        error: function(xhr, error, thrown) {
            console.log("homePageAssetList table err");
        }
    },
    columns: [{
        data: 'assetName',
            width: '17%'
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

function homePageAssetListTableFormat() {
    var input = $('#homePageAssetList_filter input').clone(true, true);
    input.addClass('input-xxlarge search-query');
    input.attr('placeholder', 'Type assetName or ticker.');

    var search_box = '<div class="row"><div class="span7 input-prepend" id="homePageAssetList_input"><span class="add-on">Quick search:</span></div><div class="span5"></div></div>';

    $('#homePageAssetList_filter').html(search_box);

    $('#homePageAssetList_input').append(input);
}

function homePageAssetListTableCreate(table) {
    var table = $('#homePageAssetList').DataTable(homePageAssetList);
    homePageAssetListTableFormat();
    return table;
}

function homePageAssetListTableReload(table) {
    //table.ajax.reload(null, false); // user paging is not reset on reload
    table.ajax.reload(function(data) {
        console.log(data);
    }, true);
}

var ctablePageAssetList = homePageAssetListTableCreate();

$('body').on( "update_page", function() {

    if($('#homePageAssetList').hasClass('dataTable')) {
        
        homePageAssetListTableReload(ctablePageAssetList);

        return;

    } else {

        var create_table = homePageAssetListTableCreate();

        setInterval(function() {
            homePageAssetListTableReload(create_table); 
        }, 29000);

        var type = getUrlParamByName('type');

        if(type=='coin' || type=='platform' || type=='token')
            create_table.column(1).search(type).draw();
    }
});
