---
layout: page
title: blog posts
description: Learnskfnoinf more about KORA and our development process.
---

## Blog Posts
Below123456, you'll find a complete list of blog posts about our development progress:

<ul>
  {% for post in site.posts %}
    <li>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p><i>{{ post.date | date: "%B %d, %Y" }}</i></p>
      <p>{{ post.excerpt | strip_html }}</p>
    </li>
  {% endfor %}
</ul>
