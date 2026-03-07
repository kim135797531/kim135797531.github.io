---
layout: custom
title: EMFANT - Embodied Model of Fetus And infaNT
---

{% include nav-tab.html %}

{% include section-hero-compact.html %}
{% include section-stats-bar.html %}

<div class="content-section">
<h2>Overview</h2>

{% assign intro = site.data.section_intros.sections.overview %}
<p class="section-description">{{ intro.description }}</p>
{% include section-features.html %}
{% include section-publications.html %}
</div>

<div class="content-section">
<h2>Explore EMFANT</h2>

<div class="home-cards">
  <a href="tab-physical-model.html" class="home-card">
    <h3>Physical Model</h3>
    {% assign intro = site.data.section_intros.sections.physical %}
    <p class="section-description">{{ intro.description }}</p>
    <span class="arrow">Learn more →</span>
  </a>
  
  <a href="tab-neural-model.html" class="home-card">
    <h3>Neural Model</h3>
    {% assign intro = site.data.section_intros.sections.neural %}
    <p class="section-description">{{ intro.description }}</p>
    <span class="arrow">Learn more →</span>
  </a>
  
  <a href="tab-osim2mujoco.html" class="home-card">
    <h3>Osim2Mujoco</h3>
    {% assign intro = site.data.section_intros.sections.osim2mujoco %}
    <p class="section-description">{{ intro.description }}</p>
    <span class="arrow">Learn more →</span>
  </a>
  
  <a href="tab-applications.html" class="home-card">
    <h3>Applications</h3>
    {% assign intro = site.data.section_intros.sections.applications %}
    <p class="section-description">{{ intro.description }}</p>
    <span class="arrow">Learn more →</span>
  </a>
  
  <a href="tab-getting-started.html" class="home-card">
    <h3>Getting Started</h3>
    {% assign intro = site.data.section_intros.sections.getting-started %}
    <p class="section-description">{{ intro.description }}</p>
    <span class="arrow">Learn more →</span>
  </a>
</div>
</div>

{% include section-quick-start.html %}

<div class="content-section">
{% include section-contributors.html %}
</div>

{% include footer-links.html %}
