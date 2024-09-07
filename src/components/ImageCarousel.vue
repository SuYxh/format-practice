<template>
  <div class="carousel-container" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
    <div class="carousel" :style="{ transform: `translateX(${translateX}px)` }">
      <img v-for="(image, index) in images" :key="index" :src="image" class="carousel-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      startX: 0,
      endX: 0,
      translateX: 0,
      isSwiping: false
    };
  },
  methods: {
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
      this.isSwiping = true;
    },
    handleTouchMove(event) {
      if (!this.isSwiping) return;
      this.endX = event.touches[0].clientX;
      this.translateX = -this.currentIndex * 100 + (this.endX - this.startX);
    },
    handleTouchEnd() {
      this.isSwiping = false;
      const deltaX = this.endX - this.startX;
      const threshold = 50;

      if (deltaX > threshold) {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      } else if (deltaX < -threshold) {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++;
        }
      }

      this.translateX = -this.currentIndex * 100;
    }
  }
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-image {
  width: 100%;
  flex-shrink: 0;
}
</style>