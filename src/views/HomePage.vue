<template>
  <div class="home-page">
    <header class="header-menu">
      <HeaderMenu />
    </header>
    <div class="main-content">
      <aside class="side-menu">
        <SideMenu />
      </aside>
      <main class="kanban-area">
        <KanbanBoard />
      </main>
    </div>
  </div>
</template>

<script setup>
import HeaderMenu from '../components/HeaderMenu.vue';
import SideMenu from '../components/SideMenu.vue';
import KanbanBoard from '../components/KanbanBoard.vue';
</script>
