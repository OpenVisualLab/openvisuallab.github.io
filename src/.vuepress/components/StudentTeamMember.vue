<template>
  <div class="student-member">
    <a :href="link" target="_blank" rel="noopener noreferrer">
      <img 
        :src="currentAvatar" 
        :alt="name + ' Avatar'" 
        class="avatar" 
        aria-label="Student member's avatar" 
        @mouseover="changeAvatar" 
        @mouseleave="resetAvatar">
    </a>
    <div class="info">
      <a :href="link" target="_blank" rel="noopener noreferrer">
        <h6>{{ name }}</h6> <!-- 英文名字 -->
        <h6>{{ chineseName }}</h6> <!-- 中文名字 -->
      </a>
      <p>{{ researchDirection }}</p> <!-- 英文研究方向 -->
      <p>{{ chineseResearchDirection }}</p> <!-- 中文研究方向 -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Unnamed Student",
    },
    chineseName: {
      type: String,
      default: "未命名学生",
    },
    avatar: {
      type: String,
      default: "default-avatar.png",
    },
    researchDirection: {
      type: String,
      default: "No research direction provided.",
    },
    chineseResearchDirection: {
      type: String,
      default: "未提供研究方向。",
    },
    hoverAvatar: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: "#",
    },
  },
  data() {
    return {
      currentAvatar: this.avatar,
    };
  },
  methods: {
    changeAvatar() {
      this.currentAvatar = this.hoverAvatar || this.avatar;
    },
    resetAvatar() {
      this.currentAvatar = this.avatar;
    },
  },
};
</script>

<style scoped>
.student-member {
  display: flex;
  align-items: center;
  margin: 20px;
}

.avatar {
  width: 75px; /* 设置更小的宽度 */
  height: 100px; /* 设置更小的高度 */
  object-fit: cover;
  margin-right: 15px; /* 图像和文本之间的间距 */
  border-radius: 5px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.avatar:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.info {
  font-family: "Times New Roman", Times, serif; /* 设置字体 */
}

.info h6 {
  margin: 5px 0; /* 控制 h6 标签的上下间距 */
}

.info p {
  margin: 5px 0; /* 控制 p 标签的上下间距 */
  padding: 0;
}

/* 链接样式 */
.student-member a {
  text-decoration: none; /* 默认不显示下划线 */
  color: inherit; /* 保持文字颜色 */
}

/* 鼠标悬浮时，头像、英文名、中文名都显示下划线 */
.student-member a:hover {
  text-decoration: underline; /* 悬浮时显示下划线 */
  opacity: 0.9; /* 可选：悬浮时稍微变暗 */
}
</style>
