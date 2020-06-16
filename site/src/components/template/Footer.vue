<template>
  <footer class="footer">
    <span>Desenvolvido <strong>5º ADS Fatec Franca</strong> &copy; 2020</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
  .footer {
    grid-area: footer;
    background-color: var(--color-gray-light);
    color: var(--color-black-light);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
  }
</style>