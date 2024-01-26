<template>
  <div class="fav">
    <img :src="getIcon" alt="icon" />
    <p>{{ props.title }}</p>
    <div class="box-icon">⌘ {{ props.index }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    icon: string;
    title: string;
    index: number
}>();

const getIcon = computed(() => {
  return new URL(props.icon, import.meta.url).href
})
</script>

<style scoped lang="scss">
.fav {
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}

.fav .box-icon {
  width: 37px;
  height: 20px;

  display: flex;
  padding: 0px 6px;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  border-radius: 4px;
  border: 1px solid $bg-weak-100;

  color: $text-soft-400;
  line-height: 20px;
  letter-spacing: -0.084px;
}
</style>
