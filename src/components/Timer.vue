<script>
export default {
  //  el: '#app',
  data() {
    return {
      timer: null,
      totalTime: 5 * 60,
      resetButton: false,
    };
  },
  methods: {
    startTimer: function () {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    stopTimer: function () {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    // resetTimer: function () {
    //   clearInterval(this.timer);
    //   this.totalTime = 5 * 60;
    //   this.resetButton = false;
    //   this.timer = null;
    // },
    padTime: function (time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function () {
      this.totalTime--;
    },
  },
  computed: {
    minutes: function () {
      return this.padTime(Math.floor(this.totalTime / 60));
    },
    seconds: function () {
      return this.padTime(this.totalTime - this.minutes * 60);
    },
  },
};
</script>
<template>
  <!-- <section id="app" class=""> -->
  <div>
    <div id="timer" class="text-center">
      <span id="minute">{{ minutes }}</span>
      <span id="colon">:</span>
      <span id="seconds">{{ seconds }}</span>
    </div>

    <div id="buttons" class="justify-content-center">
      <!--  START BUTTON    -->
      <button
        id="start"
        class="btn btn-lg btn-primary"
        v-if="!timer"
        @click="startTimer"
      >
        Bắt Đầu
        <i class="far fa-play-circle" aria-hidden="true"></i>
      </button>

      <!--   PAUSE BUTTON   -->
      <button
        id="stop"
        class="btn btn-lg btn-warning"
        v-if="timer"
        @click="stopTimer"
      >
        Dừng
        <i class="far fa-pause-circle"></i>
      </button>
    </div>
  </div>
</template>
<style scoped>
#timer {
  margin-top: 50%;
  font-size: 60px;
  color: rgb(250, 3, 3);
  transform: translateY(-50%);
}
#buttons {
  display: flex;
}
button {
  margin: 2px;
}
</style>
