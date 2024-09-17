---
layout: main-en
title:
---
<div class="two-columns">
  <div>
    {% capture left_column %}{% include_relative dev-advocate-body.md %}{% endcapture %}
    {{ left_column | markdownify }}
  </div>
  <div class="sidebar reference-projects">
    <h2>Reports from Practice</h2>
    <ul class="posts">
      {% for post in site.tags.dev-advocate-en limit:10 %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%d.%m.%Y" }})</li>
      {% endfor %}
    </ul>

    {% capture right_column %}{% include_relative dev-advocate-references.md %}{% endcapture %}
    {{ right_column | markdownify }}
  </div>
</div>