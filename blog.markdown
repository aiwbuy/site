---
title: Carnet de bord
date: 2017-05-07 21:17:00 +02:00
permalink: "/carnet-de-bord/index.html"
layout: page
---

Un endroit où je vous parle de mes trouvailles, centres d'intérêts et aventures.

{% for item in site.posts %}
  <li>
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    <h2>
      <a class="item-link" href="{{ item.url | relative_url | replace: '/index.html', '' }}">{{ item.title | escape }}</a>
    </h2>
    <span class="item-timestamp">{{ item.date | date: date_format }}</span>
  </li>
{% endfor %}