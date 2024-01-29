<template>
  <div class="d-flex align-center">
    <div class="progress">
      <div class="d-flex progress-img" :style="getWidth"></div>
    </div>
    <span class="ml-8">{{ getProgress }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    progress: number;
  }>(),
  {
    progress: 0
  }
);

const getProgress = computed(() => {
  return `${props.progress}%`;
});

const getWidth = computed(() => {
  return `width: ${props.progress}%`;
});
</script>

<style scoped lang="scss">
.progress {
  width: 116px;
  height: 6px;
  border-radius: 999px;
  background: $bg-soft-200;
}
.progress .progress-img {
  height: 6px;
  border-radius: 999px;
  background: $primary-base;
}

.progress img {
  height: 6px;
}

span {
  font-size: 12px;
}
</style>
