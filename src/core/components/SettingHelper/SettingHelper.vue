<template>
  <div class="setting">
    <img :src="getIcon" alt="icon" />
    <p>{{ props.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    title: string;
    icon: string;
}>();

const getIcon = computed(() => {
    return new URL(props.icon, import.meta.url).href
})
</script>

<style scoped lang="scss">
.setting {
  display: flex;
  align-items: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}

.setting p {
  margin-left: 8px;
}
</style>
