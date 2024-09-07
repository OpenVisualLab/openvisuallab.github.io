<template>
    <div class="team-member">
      <img :src="avatar" :alt="name + ' Avatar'" class="avatar">
      <h2>{{ name }}</h2>
      <p>{{ bio }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      avatar: String,
      bio: String,
    },
  };
  </script>
  
  <style scoped>
  .team-member {
    text-align: center;
    margin: 20px auto; /* 设置上下边距20px，左右自动居中 */
    width: 50%; /* 设置宽度为页面宽度的一半 */
    max-width: 600px; /* 设置最大宽度，可以根据实际需求调整 */
  }
  
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  </style>