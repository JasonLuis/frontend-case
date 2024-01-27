<template>
  <div class="card flex-column align-center">
    <div class="header d-flex justify-around align-center">
      <div class="d-flex align-center">
        <img src="../../assets/icon/timer-flash-line.svg" alt="" />
        <p class="ml-2">Rastreador de Tempo</p>
      </div>
      <div>
        <button class="btn-history d-flex justify-center align-center">
          <img src="../../assets/icon/history-line.svg" alt="" />
          Histórico
        </button>
      </div>
    </div>
    <UiTraceApp />

    <div class="flex-column w-100 justify-around">
      <p class="ml-16 mt-18 label">Tarefas Anteriores</p>
      <ul class="ml-16">
        <li class="mt-18">
          <UiItemList icon="../../assets/icon/Loom.svg" title="Loom Rebranding" timer="1:23:05" />
        </li>
        <li class="mt-18">
          <UiItemList icon="../../assets/icon/Loom.svg" title="Loom Rebranding" timer="1:23:05" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiItemList from '../ItemList/ItemList.vue';
import UiTraceApp from "../TraceApp/TraceApp.vue";
</script>

<style scoped lang="scss">
.card {
  width: 352px;
  height: 380px;
  border-radius: 16px;
  border: 1px solid $stroke-soft-200;
  background: $bg-white-0;
  box-shadow: 0px 1px 2px 0px $box-shadow-color;
  padding: 16px;
}

.header {
  width: 100%;
  height: 50px;
}

.btn-history {
  width: 104px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid $stroke-soft-200;
  background: $bg-white-0;
  box-shadow: 0px 1px 2px 0px $box-shadow-color-2;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  gap: 2px;
}

.label {
  color: var(--text-soft-400, #868c98);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
}

ul {
  list-style: none;
}
</style>