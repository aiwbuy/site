---
title: Carnet de bord
date: 2017-05-07 21:17:00 +02:00
layout: page
permalink: /carnet-de-bord/index.html
---

Un endroit où je vous parle de mes trouvailles, centres d'intérêts et aventures.

{% for post in site.posts %}
  <li>
    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    <span class="post-meta">{{ post.date | date: date_format }}</span>

    <h2>
      <a class="post-link" href="{{ post.url | relative_url | replace: '/index.html', '' }}">{{ post.title | escape }}</a>
    </h2>
  </li>
{% endfor %}