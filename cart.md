---
title: Mon panier
date: 2017-05-07 21:17:00 +02:00
permalink: "/mon-panier/index.html"
layout: page
---

Retrouvez ici toutes les trouvailles que j'ai fini par acheter.

N'hésitez pas à [m'envoyer les vôtres](#) !

{% assign finds_in_bag = site.finds | where: "is_in_bag", "true" %}
{% for item in finds_in_bag %}
  <li>
    {% assign date_format = site.date_format | default: "%b %-d, %Y" %}
    <h2>
      <a class="item-link" href="{{ item.url | relative_url | replace: '/index.html', '' }}">{{ item.title | escape }}</a>
    </h2>
    <span class="item-timestamp">{{ item.date | date: date_format }}</span>
  </li>
{% endfor %}
