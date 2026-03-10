---
layout: custom
title: EMFANT - Embodied Model of Fetus And infaNT
nav: main
---

{% include section-hero.html %}
<!-- {% include section-stats-bar.html %} -->

<p class="release-notice">This page provides a technical overview of EMFANT. Source code and model assets are currently being prepared for public release and will be made available on GitHub upon publication of an associated manuscript.</p>

<div class="section" id="overview">
<h1>Overview</h1>
{% assign intro = site.data.section_intros.sections.overview %}
<p class="section-description">{{ intro.description }}</p>
{% include section-features.html %}
{% include section-publications.html %}
</div>

<div class="section" id="physical-model">
<h1>Physical Model</h1>
{% assign intro = site.data.section_intros.sections.physical %}
<p class="section-description">{{ intro.description }}</p>
{% include page-physical-model.html %}
</div>

<div class="section" id="neural-model">
<h1>Neural Model</h1>
{% assign intro = site.data.section_intros.sections.neural %}
<p class="section-description">{{ intro.description }}</p>
{% include page-neural-model.html %}
</div>

<div class="section" id="contributors">
{% include section-contributors.html %}
</div>

{% include footer-links.html %}

{% include nav-highlight.html %}
