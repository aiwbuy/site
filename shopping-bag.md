---
title: Mon panier
date: 2017-05-07 21:17:00 +02:00
permalink: "/mon-panier/index.html"
layout: page
---

Retrouvez ici toutes les trouvailles que j'ai fini par acheter.

N'hésitez pas à [m'envoyer les vôtres](#) !

{% assign finds_in_bag = site.finds | where: "is_in_bag", "yes" %}
{% for item in finds_in_bag %}
  {% include partials/item.html item=item %}
{% endfor %}
