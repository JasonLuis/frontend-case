<template>
  <div class="box">
    <div class="header d-flex justify-between">
      <div class="d-flex align-center ml-12 mt-12">
        <img src="../../assets/icon/book-3-line.svg" alt="" />
        <p class="ml-4">Cursos</p>
      </div>
      <div class="mr-12 mt-12 d-flex align-center">
        <UiInputSearch />
        <button class="ml-12">Ver Todos</button>
      </div>
    </div>
    <div class="d-flex justify-center mt-20">
      <table>
        <thead>
          <th>Professor</th>
          <th>Nome do curso</th>
          <th>Progresso</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>
              <UiItemPerfil />
            </td>
            <td>
              <div>
                <p class="course-title">Time Management</p>
                <p class="course-data">Ago 21 - Set 04</p>
              </div>
            </td>
            <td>
              <UiCourseProgress :progress="20" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiInputSearch from "../InputSearch/InputSearch.vue";
import UiItemPerfil from "../ItemPefil/ItemPerfil.vue"; 
import UiCourseProgress from "../CourseProgress/CourseProgress.vue";
</script>

<style scoped lang="scss">
.box {
  width: 728px;
  height: 380px;
  border-radius: 16px;
  border: 1px solid $stroke-soft-200;
  background: $bg-white-0;
  box-shadow: 0px 1px 2px 0px $box-shadow-color;
}

button {
  width: 84px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid $stroke-soft-200;
  background: $bg-white-0;
  box-shadow: 0px 1px 2px 0px $box-shadow-color-2;
  font-weight: 500;
}

table {
  width: 696px;
  // background: $bg-weak-100;
}

table thead {
  border-radius: 8px;
  background: $bg-weak-100;
  height: 36px;
}

table thead th {
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 12px;
  background: $bg-weak-100;
}

table tbody {
  background: $bg-white-0;
}

.course-title {
  font-size: 14px;
  font-weight: 400;
  color: $text-main-900;
}

.course-data {
  font-size: 12px;
  color: $text-sub-500;
}
</style>