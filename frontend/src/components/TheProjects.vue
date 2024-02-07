<script setup>
import ProjectItem from './ProjectItem.vue'
</script>

<template>
  <ProjectItem>
    <template #heading>Personal Website</template>

    The website you are currently visiting. Built with Vue.js as is apparent from the logo to the
    left. For now, I want the website to stay mostly static to cut down on complexity (and on
    hosting related costs). Repository hosted on GitHub. The app itself hosted using AWS Amplify.
    Used to host using Lightsail, but the costs for a small mostly static app were getting out of
    proportion (5€ per month just to entertain some bots and crawlers? No thanks)
    <br /><br />
    Biggest change compared to the last version would be not involving docker. On the CI/CD side,
    any merges lead to a new docker image being published to DockerHub and then being pulled by
    watchtower on the lightsail instance. Now, when a new development branch is merged, Amplify will
    automatically build the app from the master branch, and get the changes up within minutes. This
    cuts down a lot of the different services involved, and simplifies any debugging and other
    problem solving. Getting more involved with AWS also made all the DNS and https related things
    easier. AWS Route53 handles the dns and by extension makes HTTPS pretty much automatic.
  </ProjectItem>
</template>
