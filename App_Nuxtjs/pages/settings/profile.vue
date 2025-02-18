<template>
    <HeaderComponent />
    <ProfileComponent />
    <FooterComponent/>
  </template>
  
  <script>
  import HeaderComponent from '~/components/header/HeaderComponent.vue'
  import ProfileComponent from '~/components/settings/ProfileComponent.vue'
  import FooterComponent from '~/components/footer/FooterComponent.vue'
  
  export default {
    components: {
      HeaderComponent,
      ProfileComponent,
      FooterComponent
    },
  };
  </script>