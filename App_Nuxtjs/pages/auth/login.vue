<template>
  <LoginComponent />
  <FooterComponent/>
</template>

<script>
import LoginComponent from '~/components/auth/LoginComponent.vue'
import FooterComponent from '~/components/footer/FooterComponent.vue'

export default {
  components: {
    LoginComponent,
    FooterComponent
  },
};
</script>