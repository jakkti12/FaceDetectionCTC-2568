<template>
  <RegisterComponent />
  <FooterComponent/>
</template>

<script>
import RegisterComponent from '~/components/auth/RegisterComponent.vue'
import FooterComponent from '~/components/footer/FooterComponent.vue'

export default {
  components: {
    RegisterComponent,
    FooterComponent
  },
};
</script>