<template>
  <div class="async-component">
    <h2>Async Component Loaded!</h2>
    <p>This component was loaded asynchronously.</p>
  </div>
</template>

<script>
export default {
  name: 'AsyncComponent'
};
</script>

<style scoped>
.async-component {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>