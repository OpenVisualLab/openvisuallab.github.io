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
    margin: 20px;
    width: calc(25% - 40px); /* 每个成员占据的宽度，假设一行显示三个成员 */
    display: inline-block; /* 设置为内联块级元素，实现并排显示 */
    vertical-align: top; /* 垂直对齐方式，可根据需要调整 */
  }
  
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%; /* 设置超圆角矩形 */
    object-fit: cover;
    margin-bottom: 10px;
  }
  </style>