---
title: Hello World
layout: "base.njk"
---

<h2>Hello JAM2 with TS!</h2>

<ul>
  {% for post in collections.posts %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
  {% endfor %}
</ul>
