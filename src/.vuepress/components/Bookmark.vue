<!-- .vuepress/components/MyBookmark.vue -->
<template>
    <div class="bookmark-card" :style="cardStyle" @click="navigate">
      <div class="bookmark-card-content">
        <h3 :style="{ color: textColor }">{{ title }}</h3>
        <p v-if="desc" :style="{ color: textColor }">{{ desc }}</p>
        <div class="tags" v-if="tags.length">
          <span v-for="tag in tags" :key="tag" :style="{ backgroundColor: calculateTagColor(backgroundColor), color: textColor }" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        required: true
      },
      tags: {
        type: Array,
        default: () => []
      },
      backgroundColor: {
        type: String,
        default: 'rgba(15, 18, 22, 0.85)'
      },
      image: {
        type: String,
        default: ''
      }
    },
    computed: {
      cardStyle() {
        return {
          backgroundImage: this.image ? `url(${this.image})` : 'none',
          backgroundSize: 'cover',
          backgroundBlendMode: this.image ? 'overlay' : 'normal',
          backgroundColor: this.image ? `${this.backgroundColor}` : this.backgroundColor,
          boxShadow: this.shadowColor,
        };
      },
      shadowColor() {
        const rgba = this.backgroundColor.match(/rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/);
        if (rgba) {
          const r = Math.max(0, rgba[1] - 50);
          const g = Math.max(0, rgba[2] - 50);
          const b = Math.max(0, rgba[3] - 50);
          const a = rgba[4] ? rgba[4] : 1;
          return `0 4px 8px rgba(${r}, ${g}, ${b}, ${a * 0.3})`;
        }
        return '0 4px 8px rgba(0, 0, 0, 0.3)';
      },
      textColor() {
        const rgba = this.backgroundColor.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);
        if (rgba) {
          const brightness = (parseInt(rgba[1]) * 299 + parseInt(rgba[2]) * 587 + parseInt(rgba[3]) * 114) / 1000;
          return brightness > 125 ? '#000' : '#fff';
        }
        return '#fff';
      }
    },
    methods: {
      navigate() {
        window.open(this.link, '_blank');
      },
      calculateTagColor(bgColor) {
        const rgba = bgColor.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);
        if (rgba) {
          const r = Math.min(255, parseInt(rgba[1]) + 30);
          const g = Math.min(255, parseInt(rgba[2]) + 30);
          const b = Math.min(255, parseInt(rgba[3]) + 30);
          const a = rgba[4] ? rgba[4] : 1;
          return `rgba(${r}, ${g}, ${b}, ${a})`;
        }
        return 'rgba(255, 255, 255, 0.1)';
      }
    }
  };
  </script>
  
  <style scoped>
  .bookmark-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px; /* 调整卡片之间的间距 */
    justify-content: space-between; /* 自适应排列 */
  }
  .bookmark-card {
    display: inline-block; /* 设置为内联块级元素，实现并排显示 */
    vertical-align: top; /* 垂直对齐方式 */
    border-radius: 12px;
    padding: 12px;
    margin: 8px;
    min-width: 100px;
    max-width: calc(25% - 16px); /* 每个卡片占据的最大宽度 */
    cursor: pointer;
    transition: box-shadow 0.3s;
    box-shadow: var(--shadow-color); /* 使用CSS变量 */
    background-size: cover; /* 背景图像覆盖 */
    background-blend-mode: overlay; /* 背景混合模式 */
    background-color: rgba(0, 0, 0, 0.3); /* 减少覆盖色的透明度 */
  }
  .bookmark-card:hover {
    box-shadow: var(--shadow-hover-color);
  }
  .bookmark-card-content {
    flex: 1;
  }
  .bookmark-card h3 {
    margin: 0 0 4px 0;
    font-size: 16px;
  }
  .bookmark-card p {
    margin: 0 0 8px 0;
    font-size: 12px;
  }
  .tags {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .tag {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 16px;
    font-size: 10px;
    /* text-transform: uppercase; */
    font-weight: 600;
  }
  
  /* Light theme variables */
  :root {
    --text-color: #333;
    --shadow-color: rgba(0, 0, 0, 0.2);
    --shadow-hover-color: rgba(0, 0, 0, 0.3);
  }
  
  /* Dark theme variables */
  @media (prefers-color-scheme: dark) {
    :root {
      --text-color: #b3b3b3;
      --shadow-color: rgba(0, 0, 0, 0.5);
      --shadow-hover-color: rgba(0, 0, 0, 0.7);
    }
  }
  </style>
  