<template>
  <div class="searchBox d-flex align-center">
    <a href="#" class="ml-12">
        <img src="../../assets/icon/search-2-line.svg" alt="" srcset="">
    </a>
    <input class="searchInput w-100 ml-12" type="text" name="" placeholder="Pesuisar cursos..." />
  </div>
</template>

<style scoped lang="scss">
.searchBox {
  width: 294px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid var(--stroke-soft-200, #e2e4e9);
  background: var(--bg-white-0, #fff);
  /* regular-shadow/x-small */
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
}

.searchBox input {
    background-color:transparent;
    border:none;
    height: 100%;
}

.searchBox input:focus {
    outline: none;
}
.searchBox button {
  position: relative;
  margin-left: 10px;
  float: right;
}
</style>
