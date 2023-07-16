---
title: Hello World
layout: "layouts/base.njk"
---

<h2>Main page</h2>

<ul>
  {% for study in caseStudies %}
    <li><a href="/case-studies/{{ study.url }}">{{ study.title }}</a></li>
  {% endfor %}
</ul>
