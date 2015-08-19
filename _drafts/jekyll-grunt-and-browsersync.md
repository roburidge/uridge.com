---
layout:   post
title:    "Jekyll + Grunt.js + Browsersync"
date:     2015-07-31 22:27:10
category: blog
tags:     jekyll browsersync build-tools
---
How I set up my workflow for building uridge.com with a local Browsersync server using Grunt.js build tools.

{% highlight javascript %}
browserSync: {
  bsFiles: {
    src : ['_site/css/*.css']
  },
  options: {
    watchTask: true,
    ghostMode: {
      clicks: true,
      scroll: true,
      links: true,
      forms: true
    },
    server: {
      baseDir: '_site'
    }
  }
}
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. [Grunt.js docs][grunt] and [Browsersync docs][browsersync]

[jekyll]:      http://jekyllrb.com
[grunt]:       http://gruntjs.com/
[browsersync]: http://www.browsersync.io
