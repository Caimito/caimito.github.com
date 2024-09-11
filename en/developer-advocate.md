---
layout: main-en
title:
---
<div class="two-columns">
  <div>
    {% capture left_column %}{% include_relative dev-advocate-body.md %}{% endcapture %}
    {{ left_column | markdownify }}
  </div>
  <div class="reference-projects">
    {% capture right_column %}{% include_relative dev-advocate-references.md %}{% endcapture %}
    {{ right_column | markdownify }}
  </div>
</div>