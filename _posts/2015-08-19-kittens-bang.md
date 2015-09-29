---
layout: post
title:  "Kittens!"
date:   2015-08-19 23:06:58
category: projects
tags: javascript
---
Unfortunately the service I've used to replace images is no longer working reliably. It works with some image sizes but fails to serve others. I need to find a more reliable kitten based place holder image service, or create my own.

Replace images with kittens and lolcatify text by clicking this link:
[Kittens Bookmarklet](javascript:!function()%7Bvar%20a%3Ddocument.createElement(%22script%22)%3Ba.setAttribute(%22src%22%2C%22https%3A%2F%2Fdl.dropboxusercontent.com%2Fu%2F2769844%2Flolcats-v2.js%22)%2Cdocument.body.appendChild(a)%7D()%3B)

You can drag the link to your bookmarks and run this script on any page!

![example image](http://www.placecage.com/c/300/201)

Bookmarklet code:
{% highlight html %}
<a href="javascript:!function()%7Bvar%20a%3Ddocument.createElement(%22script%22)%3Ba.setAttribute(%22src%22%2C%22https%3A%2F%2Fdl.dropboxusercontent.com%2Fu%2F2769844%2Flolcats-v2.js%22)%2Cdocument.body.appendChild(a)%7D()%3B">Kittens Bookmarklet</a>
{% endhighlight %}

JavaScript from the bookmarklet:
{% highlight javascript %}
function () {
  var jsCode = document.createElement('script');
  jsCode.setAttribute('src', 'https://dl.dropboxusercontent.com/u/2769844/lolcats-v2.js');
  document.body.appendChild(jsCode);
}();
{% endhighlight %}

This is the script that is loaded and appended to to page:
{% highlight javascript %}
if (!($ = window.jQuery)) { // load jquery if not already on page
  script = document.createElement( 'script' );
  script.src = '//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'; 
  script.onload=kittens;
  document.body.appendChild(script);
} 
else {
  kittens();
}
 
function kittens() {
  (function($){

    // replace images
    (function() {
      var a = document.getElementsByTagName('img'),
          i = a.length;
      while(b = a[--i]){
        b.setAttribute('src','https://placekitten.com/g/'+b.width+'/'+b.height);
      }
    })();

    // set up text replacement
    (function(){
      var lolz = {
        'awesome' : 'awsum',
        'what'    : ['wut', 'whut'],
        'you\b'   : ['yu', 'yous', 'yoo', 'u'],
        'cture'   : 'kshur',
        'unless'  : 'unles',
        'the\b'   : 'teh',
        'more'    : 'moar',
        'my'      : ['muh', 'mah'],
        'are'     : ['r', 'is', 'ar'],
        'eese'    : 'eez',
        'ph'      : 'f',
        'as\b'    : 'az',
        'seriously': 'srsly',
        'er\b'    : 'r',
        'sion'    : 'shun',
        'just'    : 'jus',
        'ose\b'   : 'oze',
        'eady'    : 'eddy',
        'ome?\b'  : 'um',
        'of\b'    : ['uv', 'uf'],
        'question': 'kwesjun',
        'want'    : 'wants',
        'ead\b'   : 'edd',
        '\Bucke\B': ['ukki', 'ukke'],
        'sion'    : 'shun',
        '\Bage'   : 'uj',
        'like\b'  : ['likes', 'liek'],
        'love'    : ['loves', 'lub', 'lubs', 'luv'],
        '\bis\b'  : ['ar teh','ar'],
        'nd\b'    : 'n',
        'who'     : 'hoo',
        'ese\b'   : 'eez',
        'outh'    : 'owf',
        'scio'    : 'shu',
        'esque'   : 'esk',
        'ture'    : 'chur',
        '\btoo?\b': ['to', '2'],
        'tious'   : 'shus',
        'sure\b'  : 'shur',
        'tty\b'   : 'tteh',
        'were'    : 'was',
        '\ba\b'   : '',
        'ym'      : 'im',
        'thy\b'   : 'fee',
        '\wly\w'  : 'li',
        'que\w'   : 'kwe',
        'oth'     : 'udd',
        'ease'    : 'eez',
        'ing\b'   : ['in', 'ins', 'ng'],
        'can[ ]i[ ](?:ple(?:a|e)(?:s|z)e?)?[ ]?have([ ]a)?' : ['i can has', 'i can haz'],
        'have'    : ['has', 'hav', 'haz a'],
        "you'?re?": ['yur', 'ur'],
        '\bfor\b' : ['4', 'fr', 'fur', 'foar'],
        'thanks'  : ['thx', 'thnx'],
        'thank'   : ['fank', 'tank'],
        'good'    : 'gud',
        'really'  : 'rly',
        'world'   : 'wrld',
        "'s\\b"   : ["s", "'z"],
        'okay'    : ['k', 'kay'],
        "i'?m\\b"     : 'im',
        '(?!e)ight'   : 'ite',
        '(?!ues)tion' : 'shun',
        "you"     : 'u',
        '\boh\b(?!.*hai)'  : 'o',
        '(?:hello|\bhi\b|\bhey\b|howdy|\byo\b)'      : 'oh hai',
        '(?:god|allah|buddah?|diety)'                : 'ceiling cat'
      };

      $.fn.extend({
        lolcat : function(moar_lolz){
          lolz = $.extend(lolz, moar_lolz);

          var n = null;
          var lolify = function(text){
            for (var l in lolz) if (lolz.hasOwnProperty(l)) {
              text = text.replace(new RegExp(l, 'gi'), function() {
                if (typeof lolz[l] == 'object') {
                  return lolz[l][Math.floor(Math.random() * lolz[l].length)];
                }
                return lolz[l];
              });
            }
            return text;
          };

          return this.each(function(){
            n = this.firstChild;
            do {
              if (n.nodeType === 3) {
                n.nodeValue = lolify(n.nodeValue);
              }
              else if (n.hasChildNodes()) {
                $(n).lolcat();
              }
            } while (n = n.nextSibling);
          });
        }
      });
    })();

    // replace text
    $('body').lolcat();


  })(jQuery);
}
{% endhighlight %}
