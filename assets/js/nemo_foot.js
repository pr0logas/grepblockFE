
    function menu_create() {
      for (var key in menu) {
          var item_id = menu[key].id.replace('link-','page-');

          cloneAndAppend(id("menu-li"), id("menu"), menu[key]);

          create_page(item_id);

          //cloneAndAppend(id('page-default'), id(item_id));
      }
    }

    function menu_deactive() {
      for (var key in menu){
        removeClass(id(menu[key].id), 'active');
        removeClass(id(menu[key].id).parentNode, 'active');
      }
    }

    function pages_create() {
      for (var key in pages) {
          var item_id = pages[key].id.replace('link-','page-');

          cloneAndAppend(id("pages-li"), id("hide"), pages[key]);

          create_page(item_id);
      }
    }

    function current_page() {
      //var page = hash===undefined ? url().replace('#','') : hash.replace('#','');
      //var page = url().replace('#','');
      var page = getUrlParamByName('page');
      if(!id('link-'+page))
        page = '';
      return page;
    }

    function create_page(el_id) {
      id("pages").appendChild(div({
        id: el_id,
        class: '',
        style: 'display: none;'
      }));
    }

    function page_hide() {
      hideChilds(id("pages"));
    }

    function page_title(title) {
      replaceText(id("page-title"), title);
    }

    function show_page(el) {
      if(!el) return

      var link = '/?';
      if(el.id.replace('link-',''))
        link += 'page='+el.id.replace('link-','');
      if(getUrlParamByName('coin'))
        link += '&coin='+getUrlParamByName('coin');
      if(getUrlParamByName('type'))
        link += '&type='+getUrlParamByName('type');
      if(getUrlParamByName('query'))
        link += '&query='+getUrlParamByName('query');
      link += url();

      window.history.pushState('page2', 'Title', link);

      menu_deactive();

      var tmp = el;

      var type = ['coin','platform','token'].indexOf(getUrlParamByName('type'));

      if(type!==-1 && el.getAttribute("href")!=='#')
        tmp = id('link-'+getUrlParamByName('type')+'s');

      tmp.className += ' active';
      tmp.parentNode.className += ' active';

      page_title(text(el,true));

      page_hide();

      show(id(el.id.replace('link-','page-')));

      if(typeof update_page!=="undefined")
        update_page(el.hash);
    }

    function update_page(hash=undefined) {

      var PAGE = current_page();
      var PAGE_ITEM = 'page-'+PAGE;

       $.get('/pages/' + (PAGE ? PAGE : 'index') + '.html',function(response){ 

          if(response===undefined) return

          var PAGE = current_page();
          PAGE_ITEM = 'page-'+PAGE;

          $('#'+PAGE_ITEM).html(response); 

          $('html, body').animate({
              scrollTop: $(url()).offset().top
          }, 0);

          $('body').trigger("update_page");
       });
    }

    menu_create();

    pages_create();

    PAGE = current_page();
    PAGE_LINK = 'link-'+PAGE;

    show_page(id('link-'+PAGE));

    //update_page();

    for (var key in menu) {
        //update_page(menu[key].href);
    }
