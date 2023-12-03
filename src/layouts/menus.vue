<template>
  <div>
    <div>我是menus layout</div>
    <div class="layout">
      <div class="sidebar">我是menus layout sidebar</div>
      <div class="content">
        <slot />
      </div>
    </div>
    <div>我是menus layout footer</div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  height: 200px;

  .sidebar {
    width: 200px;
    height: 200px;
    background: red;
    position: absolute;
  }

  .content {
    width: calc(100% - 200px);
    height: 200px;
    position: absolute;
    left: 200px;
    background-color: sandybrown;
  }
}
</style>