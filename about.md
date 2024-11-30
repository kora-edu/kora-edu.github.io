---
layout: page
title: About KORA
description: Learn more about KORA and our development process.
---

## About KORA
KORA is an AI-driven educational tool designed to enhance learning experiences through personalized and engaging content. This blog documents our journey as we develop and improve KORA.

## Features
- Adaptive learning tools powered by AI
- Seamless integration with existing educational platforms
- Insights and analytics for personalized education
- Open-source components for community contributions

## Blog Posts
Below, you'll find a complete list of blog posts about our development progress:

<ul>
  {% for post in site.posts %}
    <li>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p><i>{{ post.date | date: "%B %d, %Y" }}</i></p>
      <p>{{ post.excerpt | strip_html }}</p>
    </li>
  {% endfor %}
</ul>
