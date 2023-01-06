---
layout: base.njk
title: "Blog"
tags: pages
---

# Blog

This is where the blog archive lives!

<ul class="blog-list">
{% for blog in collections.blog %}
<li><a href="{{ blog.url }}">{{ blog.data.title }}</a> {{ blog.data.date | postDate}}</li>
{% endfor %}
</ul>
