---
layout: base.njk
title: "Blog"
tags: pages
---

# Blog

<ul class="blog-list" role="list">
{% for blog in collections.blog %}
<li><a href="{{ blog.url }}">{{ blog.data.title }}</a></li>
{% endfor %}
</ul>