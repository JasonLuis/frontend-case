<template>
  <div class="menu-item" :class="props.isSelect ? 'menu-background' : ''">
    <div class="item-details">
      <img
        class="menu-icon-item"
        :src="getIcon"
        alt=""
      />
      <p>{{ props.title }}</p>
    </div>
    <img src="../../assets/icon/arrow-left.svg" alt="" v-if="props.isSelect" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    icon: string;
    title: string;
    isSelect: boolean;
  }>(),
  {}
);

const getIcon = computed(() => {
  return new URL(props.icon, import.meta.url).href
});
</script>

<style scoped lang="scss">
@mixin font {
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}

@mixin hover {
  border-radius: 8px;
  background: $bg-weak-100;
}
.menu-item {
  @include font;
  width: 212px;
  height: 36px;
  display: flex;
  padding: 8px 12px 8px 12px;
  align-items: center;
  justify-content: space-between;
}

.menu-icon-item {
  width: 20px;
  height: 20px;
}

.item-details {
  display: flex;
  align-items: center;
}

.item-details p {
  margin-left: 8px;
}

.menu-background {
  @include hover;
}

.menu-item:hover {
  @include hover;
}
</style>
