<template>
    <div>

    </div>
</template>

<script setup>
import axios from 'axios';

const logout = async () => {
  try {
    await axios.post('http://localhost:7000/auth/logout',
      {},
    )
      localStorage.removeItem('token')
      router.push('/auth/login')
    } catch (error) {
      console.error('Error during logout:', error)
    }
};

onMounted(() => {
  logout();
});
</script>

<style lang="scss" scoped>

</style>