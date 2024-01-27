<template>
  <div class="sideBar d-flex">
    <div class="profile d-flex align-center">
      <div class="profile-icon">
        <img src="../../assets/icon/jurisoft-icon.svg" alt="" />
      </div>
      <div class="profile-info">
        <div class="name">Jurisoft</div>
        <div class="responsibility">Maketing Jurídico</div>
      </div>
      <div>
        <img src="../../assets/icon/arrow-down.svg" alt="" />
      </div>
    </div>
    <div class="hr mt-18 mb-12"></div>

    <div class="main">
      <span class="title"> MAIN </span>
      <ul>
        <li v-for="item in itemMenu">
          <UiMainItemList :icon="item.icon" :title="item.title" :isSelect="item.isSelect"/>
        </li>
      </ul>
    </div>

    <div class="favs">
      <span class="title"> FAVS </span>
      <ul>
        <li v-for="item in favMenu">
          <UiFavItemList :icon="item.icon" :index="item.index" :title="item.title"/>
        </li>
      </ul>
    </div>

    <div class="settings-help">
      <ul>
        <li>
          <UiSettingHelper title="Configurações" icon="../../assets/icon/settings-2-line.svg" />
        </li>
        <li class="mt-20">
          <UiSettingHelper title="Suporte" icon="../../assets/icon/headphone-line.svg" />
        </li>
      </ul>
    </div>

    <div class="hr mt-18"></div>

    <div class="mt-18">
      <UiBoxPerfil name="Sophia Williams" email="sophia@jurisoft.com" img="../../assets/icon/Avatar.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import UiMainItemList from "../MainItemList/MainItemList.vue";
import UiFavItemList from "../FavItemList/FavItemList.vue";
import UiSettingHelper from "../SettingHelper/SettingHelper.vue";
import UiBoxPerfil from "../BoxPerfil/BoxPerfil.vue";

const itemMenu = [
  {
    index: 0,
    icon: '../../assets/icon/icon-dashboard.svg',
    title: 'Dashboard',
    isSelect: true
  },
  {
    index: 1,
    icon: '../../assets/icon/calendar-line.svg',
    title: 'Calendário',
    isSelect: false
  },
  {
    index: 2,
    icon:  '../../assets/icon/timer-line.svg',
    title: 'Descanso',
    isSelect: false
  },
  {
    index: 3,
    icon: '../../assets/icon/folders-line.svg',
    title: 'Projetos',
    isSelect: false
  },
  {
    index: 4,
    icon: '../../assets/icon/group-line.svg',
    title: 'Times',
    isSelect: false
  },
  {
    index: 5,
    icon: '../../assets/icon/equalizer-line.svg',
    title: 'Integrações',
    isSelect: false
  },
  {
    index: 6,
    icon: '../../assets/icon/star-smile-line.svg',
    title: 'Beneficios',
    isSelect: false
  },
  {
    index: 7,
    icon: '../../assets/icon/file-cloud-line.svg',
    title: 'Documentos',
    isSelect: false
  }
]

const favMenu = [
  {
    title: 'Loom Mobile App',
    icon: '../../assets/icon/chart-blue.svg',
    index: 1
  },
  {
    title: 'Monday Redesign',
    icon: '../../assets/icon/chart-red.svg',
    index: 2
  },
  {
    title: 'Udemy Courses',
    icon: '../../assets/icon/chart-purple.svg',
    index: 3
  },
]

</script>

<style scoped lang="scss">

@mixin styleList {
  list-style: none;
  padding: 0px;
}

.sideBar {
  width: 272px;
  height: 100%;
  padding: 12px;
  flex-direction: column;
  border-right: 1px solid var(--stroke-soft-200, #e2e4e9);
  background: var(--bg-white-0, #fff);
}

.profile {
  justify-content: space-around;
  // align-items: center;
}

.profile-info .name {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: #0a0d14;
}

.profile-info .responsibility {
  color: $text-sub-500;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.hr {
  width: 245px;
  height: 1px;
  background: $stroke-soft-200;
  margin-left: auto;
  margin-right: auto;
}

.main, .favs, .settings-help {
  padding: 12px;
}

.main ul {
  @include styleList;  
}

.main ul li {
  color: var(--text-main-900, #0a0d14);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
}

.favs ul {
  @include styleList;
}

.title {
  color: var(--text-soft-400, #868c98);
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}

.settings-help ul {
  @include styleList;
}
</style>
