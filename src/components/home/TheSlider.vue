<template>
  <div class="slideshow-container">
    <div class="mySlides">
      <img class="slide" src="..\..\assets\slides\cover.png" alt="cover" />
    </div>
    <div class="mySlides">
      <img class="slide" src="..\..\assets\slides\light.jpg" alt="light" />
    </div>
    <div class="mySlides">
      <img class="slide" src="..\..\assets\slides\dark.jpg" alt="dark" />
    </div>
    <div class="mySlides">
      <img class="slide" src="..\..\assets\slides\out.jpg" alt="out" />
    </div>

    <a class="prev" @click="plusslides(-1)"
      ><i class="fa-solid fa-arrow-left"></i
    ></a>
    <a class="next" @click="plusslides(1)"
      ><i class="fa-solid fa-arrow-right"></i
    ></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1,
    };
  },
  methods: {
    plusslides(n) {
      this.showSlides((this.slideIndex += n));
    },
    showSlides(n) {
      let slides = document.getElementsByClassName("mySlides");

      //slides on cycle
      if (n > slides.length) {
        this.slideIndex = 1;
      } //first slide after last one
      if (n < 1) {
        this.slideIndex = slides.length;
      } //last slide before first one

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "flex";
    },
  },
  mounted() {
    this.showSlides(1);
  },
};
</script>

<style scoped>
.slideshow-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.mySlides {
  position: relative;
  display: none;
  width: 100%;
  height: 100%;
}
.slide {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  animation: slider 0.5s linear;
}
@keyframes slider {
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

@media screen and (max-width: 800px) {
  .prev,
  .next {
    font-size: small;
  }
}

@media screen and (max-width: 450px) {
  .slideshow-container {
    height: 200px;
  }
}
</style>