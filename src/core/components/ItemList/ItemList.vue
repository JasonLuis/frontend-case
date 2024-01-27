<template>
  <div class="d-flex card-item align-center justify-between">
    <div class="d-flex">
      <div class="box-circle d-flex align-center justify-center">
        <img :src="getIcon" alt="" />
      </div>
      <div class="flex-column justify-center ml-18">
        <p class="title">{{ props.title }}</p>
        <p class="timer">{{ props.timer }}</p>
      </div>
    </div>
    <a href="#" class="ml-18">
      <img src="../../assets/icon/more-2-line.svg" alt="" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    icon: string;
    title: string;
    timer: string;
}>();

const getIcon = computed(() => {
    return new URL(props.icon, import.meta.url).href;
})

</script>

<style scoped lang="scss">
.card-item {
  width: 320px;
  height: 40px;
}

.box-circle {
  width: 40px;
  height: 40px;
  border-radius: 48px;
  border: 1px solid $stroke-soft-200;
  background: $bg-white-0;
}
.title {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.timer {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
}
</style>
