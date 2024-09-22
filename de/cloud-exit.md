---
layout: main-de
title:
---
<div class="two-columns">
  <div>
    {% capture left_column %}{% include_relative cloud-exit-body.md %}{% endcapture %}
    {{ left_column | markdownify }}
  </div>
  <div class="sidebar reference-projects">
    <h2>Berichte aus der Praxis</h2>
    <ul class="posts">
      {% for post in site.tags.cloud-exit-de limit:10 %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%d.%m.%Y" }})</li>
      {% endfor %}
    </ul>

    <h2>Die eigene Cloud</h2>
    <p>Mit Erfahrung seit den 1990iger Jahren können wir Ihnen helfen die eigene Cloud-Infrastruktur aufzubauen.</p>
    {% include_relative contact.html %}
  </div>
</div>

