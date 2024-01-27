<template>
  <div class="box">
    <div class="header d-flex align-center justify-between">
      <div class="d-flex align-center">
        <img class="ml-12" src="../../assets/icon/Monday.com.svg" alt="" />
        <span class="ml-8">Track App</span>
      </div>
      <img class="mr-10" src="../../assets/icon/arrow-down.svg" alt="" />
    </div>
    <div class="box-body d-flex justify-center">
      <div class="flex-column align-center">
        <p class="status">AGUARDANDO</p>
        <p class="timer">{{ getTimer }}</p>
        <a
          href="#"
          class="d-flex align-center justify-center"
          @click="label === 'Iniciar' ? startChronometer() : stopChronometer()"
        >
          <img src="../../assets/icon/play-fill.svg" alt="" />
          {{ label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let chronometer:any;
const second = ref<number>(0);
const minute = ref<number>(0);
const hour = ref<number>(0);

const label = ref<string>('Iniciar')

const getTimer = ref<string>("00:00:00");

function startChronometer() {
  label.value = "Parar";
  chronometer = setInterval(() => {
    second.value++;

    if (second.value === 60) {
      second.value = 0;
      minute.value++;

      if (minute.value === 60) {
        minute.value = 0;
        hour.value++;
      }
    }

    updateChronometer();
  }, 1000);
}

function updateChronometer() {
  getTimer.value = `${hour.value.toString().padStart(2, "0")}:${minute.value
    .toString()
    .padStart(2, "0")}:${second.value.toString().padStart(2, "0")}`;
}

function stopChronometer() {
    label.value = "Iniciar";
    clearInterval(chronometer);
}
</script>

<style scoped lang="scss">
.box {
  width: 320px;
  height: 158px;
  border-radius: 10px;
  border: 1px solid $stroke-soft-200;
  background: $bg-white-0;
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
}

.header {
  width: 320px;
  height: 32px;
  border-bottom: $stroke-soft-200;
  background: $bg-weak-100;
}

.header img {
  margin-right: 10px;
}

.box-body {
  height: 126px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.box-body .status {
  color: $text-soft-400;
  font-size: 11px;
}

.box-body .timer {
  color: $text-main-900;
  font-size: 40px;
}

a {
  color: $primary-base;
  text-decoration: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
}
</style>
