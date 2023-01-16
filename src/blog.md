---
layout: base.njk
title: "Blog"
description: "This is where the blog archive lives! For real!"
tags: pages
---

# Blog

{{ description }}

<ul class="blog-list">
{% for blog in collections.blog %}
<li><a href="{{ blog.url }}">{{ blog.data.title }}</a> {{ blog.data.date | postDate}}</li>
{% endfor %}
</ul>
