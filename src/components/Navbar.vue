<template>
  <div
    class="flex justify-center items-center py-4 px-2 shadow-md z-10 sticky top-0 bg-white md:justify-between"
  >
    <a
      href="#"
      class="hidden justify-center items-center space-x-2 md:flex"
      @click.prevent="$emit('scrollToTarget')"
    >
      <img class="w-[30px]" src="/logo.png" alt="logo" />
      <h1 class="font-bold">News Application</h1>
    </a>
    <div>
      <SearchCard @addModal="adding" @search="search" :is_modal_visible="is_modal_visible" />
    </div>
  </div>
</template>

<script>
import { SearchCard } from "../index.js";
export default {
  name: "Navbar",
  components: { SearchCard },
  props: {
    is_modal_visible: Boolean,
  },
  methods: {
    adding() {
      this.$emit("actionAddModal");
    },
    search(search) {
      this.$emit("search", search);
    },
  },
};
</script>