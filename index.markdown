---
title: Welcome!
date: 2017-05-07 21:17:00 +02:00
layout: home
---

{% for item in site.finds %}
  <li>
    {% assign date_format = site.date_format | default: "%b %-d, %Y" %}
    <h2>
      <a class="item-link" href="{{ item.url | relative_url | replace: '/index.html', '' }}">{{ item.title | escape }}</a>
    </h2>
    <span class="item-timestamp">{{ item.date | date: date_format }}</span>
  </li>
{% endfor %}