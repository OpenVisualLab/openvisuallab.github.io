<template>
    <div>
      <h1>{{ greeting }}</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        greeting: 'Hello, World!',
        message: 'Welcome to my Vue app.'
      };
    }
  };
  </script>
  
  <style scoped>
  /* 可选的组件样式 */
  h1 {
    color: #333;
  }
  
  p {
    font-size: 1.2em;
    margin-top: 10px;
  }
  </style>