<template>
  <div class="box-perfil d-flex align-center justify-center">
    <img :src="getImg" alt="" />
    <div class="ml-12">
      <div class="name-status d-flex align-center">
        <span>{{ props.name }}</span>
        <img src="../../assets/icon/verified-fill.svg" alt="" />
      </div>
      <span class="email">{{ props.email }}</span>
    </div>
    <img class="ml-12" src="../../assets/icon/arrow-left.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    name: string;
    email: string;
    img: string;
}>();

const getImg = computed(() => {
    return new URL(props.img, import.meta.url).href
});

</script>

<style scoped lang="scss">
.box-perfil {
  max-width: 248px;
  padding: 12px;
}

.name-status {
    font-weight: 500;
    font-size: 14px;
}

.email {
    font-weight: 400;
    font-size: 12px;
}
</style>
