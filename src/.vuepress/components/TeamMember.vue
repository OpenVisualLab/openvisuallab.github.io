<template>
  <div class="team-member">
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <img 
        :src="currentAvatar" 
        :alt="name + ' Avatar'" 
        class="avatar" 
        aria-label="Team member's avatar" 
        @mouseover="changeAvatar" 
        @mouseleave="resetAvatar">
      <h6 v-html="name"></h6> <!-- 使用 v-html 使换行生效 -->
    </a>
    <p v-html="formattedBio"></p> <!-- 使用 v-html 使换行生效 -->
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Unnamed Member",
    },
    avatar: {
      type: String,
      default: "default-avatar.png",
    },
    bio: {
      type: String,
      default: "No biography available.",
    },
    link: {
      type: String,
      default: "#",
    },
    hoverAvatar: {
      type: String, // hoverAvatar可以为空
      default: null,
    },
  },
  data() {
    return {
      currentAvatar: this.avatar,
    };
  },
  computed: {
    formattedBio() {
      // 将换行符转换为 <br> 标签以支持多行文本
      return this.bio.replace(/\n/g, "<br>");
    },
  },
  methods: {
    changeAvatar() {
      // 当 hoverAvatar 未设置时，使用 avatar 作为悬停图片
      this.currentAvatar = this.hoverAvatar || this.avatar;
    },
    resetAvatar() {
      this.currentAvatar = this.avatar;
    },
  },
};
</script>

<style scoped>
.team-member {
  text-align: center;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
}

.team-member h6 {
  margin: 5px 0; /* 控制 h6 标签的上下间距 */
}

.team-member p {
  margin: 5px 0; /* 控制 p 标签的上下间距 */
  padding: 0; /* 移除内边距 */
  font-family: "Times New Roman", Times, serif; /* 设置字体 */
}

.avatar {
  width: 120px;
  height: 160px;
  object-fit: cover;
  margin-bottom: 0px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.avatar:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  opacity: 1.0;
}

.team-member {
  width: calc(25% - 20px);
}

@media (max-width: 1024px) {
  .team-member {
    width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .team-member {
    width: 100%;
  }
}
</style>
