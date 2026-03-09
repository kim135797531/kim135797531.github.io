---
layout: custom
title: EMFANT - Embodied Model of Fetus And infaNT
---

<div class="nav-container">
  <nav class="nav-links">
    <a href="{{ '/' | relative_url }}" class="nav-logo">EMFANT</a>
    <a href="#overview" data-section="overview">Overview</a>
    <a href="#physical-model" data-section="physical-model">Physical Model</a>
    <a href="#neural-model" data-section="neural-model">Neural Model</a>
    <a href="#osim2mujoco" data-section="osim2mujoco">Osim2Mujoco</a>
    <a href="#applications" data-section="applications">Applications</a>
    <a href="#getting-started" data-section="getting-started">Getting Started</a>
  </nav>
</div>

{% include section-hero.html %}
<!-- {% include section-stats-bar.html %} -->

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

<div class="section" id="osim2mujoco">
<h1>Osim2Mujoco</h1>
{% assign intro = site.data.section_intros.sections.osim2mujoco %}
<p class="section-description">{{ intro.description }}</p>
{% include page-osim2mujoco.html %}
</div>

<div class="section" id="applications">
<h1>Applications</h1>
{% assign intro = site.data.section_intros.sections.applications %}
<p class="section-description">{{ intro.description }}</p>
{% include page-applications.html %}
</div>

<div class="section" id="getting-started">
<h1>Getting Started</h1>
{% assign intro = site.data.section_intros.sections.getting-started %}
<p class="section-description">{{ intro.description }}</p>
{% include page-getting-started.html %}
</div>

<div class="section" id="contributors">
{% include section-contributors.html %}
</div>

{% include footer-links.html %}

{% include nav-highlight.html %}
