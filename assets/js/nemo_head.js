    var svg = {
      "home":"<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>",
      "tv":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>",
      "monitor":"<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>",
      "film":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>",
      "youtube":"<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>",
      "star":"<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>","stop-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>",
      "file-text":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>",
      "user":"<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>",
      "settings":"<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>",
      "upload":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>",
      "plus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>",
      "calendar":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>",
      "play":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>",
    }
    function secondsToHms(d) {
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);

      var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      if(hDisplay)
        return hDisplay;
      else if(mDisplay)
        return mDisplay;
      else
        return sDisplay;
    }
    function clock(){
      var date = new Date();
      var time = id('clock'); 
      time.innerHTML = date.toLocaleTimeString();
    }
    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */
    function id(id) {
      return document.getElementById(id);
    }
    function img(url, style = '', attr = undefined) {
      var img = document.createElement("img");
      img.setAttribute('src', url);
      if(attr!==undefined)
      img.setAttribute('style', attr);
      img.setAttribute('class', style);
      img.setAttribute('onload', "img_loaded(this)");
      return img;
    }
    function img_loaded(el) {
      if(el.previousSibling)
        el.previousSibling.remove();
    }
    function url(url) {
        if(url !== undefined)
          location.hash = url;
        return location.hash;
    }
    function getUrlParamByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    function trim(str) {
      var str = str.replace(/^\s\s*/, ''),
        ws = /\s/,
        i = str.length;
      while (ws.test(str.charAt(--i)));
      return str.slice(0, i + 1);
    }
    function text(el,space) {
      t = el.textContent || el.innerText;
      return space!==undefined?trim(t):t;
    }
    function elem(el, data) {
      var elem = document.createElement(el);
      for (var k in data)  {
        elem.setAttribute(k, data[k]);
      }
      return elem;
    }
    function div(data) {
      return elem("div",data);
    }
    function hide(el) {
      //el.style.display = "none";
      el.setAttribute('style', 'display:none !important');
    }
    function show(el,display='') {
      el.style.display = display;
    }
    function copyAttributes(to, from) {
      attr = from.attributes;
      for(var k in attr){
        if(!attr.hasOwnProperty(k)) continue;
        to.setAttribute(attr[k].name, attr[k].value);
      }
    }
    function changeTag(el, tag) {
      var d = elem(tag);

      d.innerHTML = el.innerHTML;

      copyAttributes(d, el);

      el.parentNode.replaceChild(d, el);
    }
    function eachAttribute(el, func) {
      for (var key in el.attributes) {
        if (!el.attributes.hasOwnProperty(key)) continue;
        func(el.attributes[key]);
      }
    }
    function eachChild(el, func) {
      for (var key in el.children) {
        if (!el.children.hasOwnProperty(key)) continue;
        func(el.children[key]);
      }
    }
    function removeClass(el, text) {
      el.className = el.className.replace(text,'');
    }
    function removeChilds(el) {
      while (el.firstChild) {
          el.removeChild(el.firstChild);
      }
    }
    function hideChilds(el) {
      eachChild(el,function(child){
        hide(child);
      });
    }
    function attrsToString(attrs) {
        var r = ''
        for (var key in attrs) {
          r += key + '="' + attrs[key] + '"';
        }
        return r;
    }
    function getIcon(key, attr) {
      var attrs = {};

      var _class = attrs.class !== undefined && attr.class !== undefined ? { class: attrs.class +' '+ attr.class } : {};

      var combinedAttrs = _extends({}, attrs, attr, _class);

      return '<i ' + attrsToString(combinedAttrs) + '></i>';
    }
    function getSvg(key, attr) {
      var attrs = {"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};

      var _class = attrs.class !== undefined && attr.class !== undefined ? { class: attrs.class +' '+ attr.class } : {};

      var combinedAttrs = _extends({}, attrs, attr, _class);

      return '<svg ' + attrsToString(combinedAttrs) + '>' + svg[key] + '</svg>';
    }
    function cloneAndAppend(clone, append, data) {
      eachChild(clone,function(child){
        var children = child.cloneNode(true);

        for (var k in data) {
            children.innerHTML=children.innerHTML.replace('{'+k+'}',data[k]);

            eachAttribute(children,function(attr){
              children.setAttribute(attr.name, attr.value.replace('{'+k+'}',data[k]));
            });
        }

        var remove = ['{file}', '{class}', '{class_1}', '{class_2}', '{onclick}', '{target}'];

        for (var r in remove) {
            children.innerHTML=children.innerHTML.replace(remove[r],'');
        }

        append.appendChild(children)
      });
    }
    function replaceText(el, text) {
      removeChilds(el);
      var text = document.createTextNode(text);
      el.appendChild(text);
    }