---
layout: default
---

<div class="archive">

  <div class="masterhead">
    <div class="wrapper">
      <h1 class="page-heading">{{ page.title }}</h1>
    </div>
  </div>

  <div class="wrapper">

    <ul class="post-list">
      {% for post in site.categories.blog %}
        <li>
          <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

          <h2>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          </h2>
        </li>
      {% endfor %}
    </ul>

  </div>
