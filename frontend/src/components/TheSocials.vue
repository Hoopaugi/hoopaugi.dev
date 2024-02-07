<script setup>
import SocialItem from './SocialItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <SocialItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <a href="https://github.com/Hoopaugi/" target="_blank" rel="noopener">GitHub</a>
    </template>

    My project repositories
  </SocialItem>

  <SocialItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <a href="https://www.linkedin.com/in/hoopaugi/" target="_blank" rel="noopener">LinkedIn</a>
    </template>

    Work Facebook
  </SocialItem>
</template>
