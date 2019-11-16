jQuery(document).ready(function($) {

  // Append a close trigger for each block
  $('.box-tile .content').append('<span class="close">x</span>');
  // Show window
  function showContent(elem) {
    hideContent();
    elem.find('.content').addClass('expanded');
    elem.addClass('cover');
  }
  // Reset all
  function hideContent() {
    $('.box-tile  .content').removeClass('expanded');
    $('.box-tile  li').removeClass('cover');
  }

  // When a li is clicked, show its content window and position it above all
  $('.box-tile  li').click(function() {
    showContent($(this));
  });
  // When tabbing, show its content window using ENTER key
  $('.box-tile  li').keypress(function(e) {
    if (e.keyCode == 13) {
      showContent($(this));
    }
  });

  // When right upper close element is clicked  - reset all
  $('.box-tile  .close').click(function(e) {
    e.stopPropagation();
    hideContent();
  });
  // Also, when ESC key is pressed - reset all
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      hideContent();
    }
  });

  // Create the dropdown base
  $("<select />").appendTo("nav");

  // Create default option "Go to..."
  $("<option />", {
    "selected": "selected",
    "value": "",
    "text": "Go to..."
  }).appendTo("nav select");

  // Populate dropdown with menu items
  $("nav a").each(function() {
    var el = $(this);
    $("<option />", {
      "value": el.attr("href"),
      "text": el.text()
    }).appendTo("nav select");
  });

  // To make dropdown actually work
  // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
  $("nav select").change(function() {
    window.location = $(this).find("option:selected").val();
  });

  $("a[data-pretty^='prettyPhoto']").prettyPhoto();

  $(".gallery:first a[data-pretty^='prettyPhoto']").prettyPhoto({
    animation_speed: 'normal',
    theme: 'pp_default',
    slideshow: 3000,
    autoplay_slideshow: false
  });
  $(".gallery:gt(0) a[data-pretty^='prettyPhoto']").prettyPhoto({
    animation_speed: 'fast',
    slideshow: 10000,
    hideflash: true
  });

  $("#custom_content a[data-pretty^='prettyPhoto']:first").prettyPhoto({
    custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
    changepicturecallback: function() {
      initialize();
    }
  });

  $("#custom_content a[data-pretty^='prettyPhoto']:last").prettyPhoto({
    custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
    changepicturecallback: function() {
      _bsap.exec();
    }
  });



  $('iframe').each(function() { /*fix youtube z-index*/
    var url = $(this).attr("src");
    if (url.indexOf("youtube.com") >= 0) {
      if (url.indexOf("?") >= 0) {
        $(this).attr("src", url + "&wmode=transparent");
      } else {
        $(this).attr("src", url + "?wmode=transparent");
      }
    }
  });

  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
  });

  // tooltip
  $("a[data-rel^='tooltip']").tooltip();
  $('.tooltip').tooltip();

  if ($("#mainslider").length) {
    $('#mainslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
  }

  if ($(".flexslider").length) {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: false
    });
  }

  var homePageGlobalAssetStats_trans = {
    'GlobalBlockChains' : '<img src="assets/img/icons/blockchain.png" height="42" width="42">' + ' ' + 'Chains',
    'GlobalBlocks' : '<img src="assets/img/icons/block.png" height="42" width="42">' + ' ' + 'Unique blocks',
    'GlobalUniqueWallets' : '<img src="assets/img/icons/wallet.png" height="42" width="42">' + ' ' + 'Unique wallets',
    'GlobalBlockChainSize' : '<img src="assets/img/icons/package.png" height="42" width="42">' + ' ' + 'Global data size',
  }

  function result_homePageGlobalAssetStats_value(key, value, values) 
  {
    if(typeof(value)==='object' && value!==null)
      return value;

    switch(key) {
      case 'GlobalBlockChains':
        return value;
        break;
      case 'GlobalBlocks':
        var blocks_formated = parseFloat(value).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        blocks_formated = blocks_formated.substring(0, blocks_formated.length-2);
        return blocks_formated;
        break;
      case 'GlobalUniqueWallets':
        var wallets_formated = parseFloat(value).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        wallets_formated = wallets_formated.substring(0, wallets_formated.length-2);
        return wallets_formated;
        break;
      case 'GlobalBlockChainSize':
        var chainsize_formated = (parseFloat(value) / 1073741824) // Divide to GB
        var chainsize_formated2 = parseFloat(chainsize_formated).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return chainsize_formated2 + ' ' + 'GB';
        break;
      default:
        return value;
    } 
  }

  function result_homePageGlobalAssetStats(key, value, values) 
  {
    return '<div class="span'+values+'"><b>'+ homePageGlobalAssetStats_translate(key) + ':</b> ' + result_homePageGlobalAssetStats_value(key, value, values) +'</div>';
  }

  function homePageGlobalAssetStats_translate(key, def) {
    var name = key;
    if(name in homePageGlobalAssetStats_trans)
      name = homePageGlobalAssetStats_trans[name];
    return name;
  }

  $.ajax(
  {
    url: "/apidata/homePageGlobalAssetStats.json",
    dataType: "text", 
    success: function(json)
    {
      json = FixJson(json);

      if(!json) {
        console.log('homePageGlobalAssetStats Not found');
        return
      }

      $.each(json, function(i, stats)
      {
        var s = 1;
        var id = '#homePageGlobalAssetStats';
        var div = $(id);
        var span = 2;
        var count = Object.keys(stats).length;

        $(id).html("");

        $.each(stats, function(key, value)
        {
          if(key==='time')
            return;

          div.append(result_homePageGlobalAssetStats(key, value, span));

          span = 3;
        });
      });
    },
    error: function(xhr, ajaxOptions, thrownError) {
      console.log(thrownError);
    }
  });

});

$('body').on( "update_page", function() {

  //var $window = $(window);
//<ul class="nav nav-list bs-docs-sidenav affix-bottom" style="top: 4349px;">
  /*$('.bs-docs-sidenav').affix({
    offset: {
      top: function () { return $window.width() <= 980 ? 0 : 100 }
    , bottom: 800
    }
  });*/

});

$(document).scroll(function() 
{
  var top = $(this).scrollTop();
  var bottom = $(document).height() - $(window).height() - $(window).scrollTop();

  if(top>100)
    $('.bs-docs-sidenav').addClass('affix');
  else
    $('.bs-docs-sidenav').removeClass('affix');

  if(bottom<600)
    $('.bs-docs-sidenav').addClass('affix-bottom').removeClass('affix');
  else
    $('.bs-docs-sidenav').removeClass('affix-bottom');
});

function FixJson(json) 
{
  if(!json)
    return json;
  
  json = json.replace(/NumberLong\("(.*?)"\)/g, "$1");

  try {
      json = JSON.parse(json);
  } catch(e) {
      json = {};
  }

  return json;
}
