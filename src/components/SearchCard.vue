<template>
  <div>
    <input
      class="p-1 w-[100px] border-x-0 border-t-0 border-b focus:border-none xxs:w-auto xl:w-[350px]"
      type="text"
      name="search"
      id="search"
      placeholder="Search... ( Date | Title | Metatags )"
      v-model="input_search"
    />
    <button
      class="bg-blue-500 p-1 w-[70px] hover:bg-blue-600 md:w-[40px] xl:w-[60px]"
      @click="triggerSearch"
    >
      <FontAwesomeIcon class="text-white" icon="search" />
    </button>
    <template v-if="!is_modal_visible">
      <button
        class="bg-green-500 p-1 w-[70px] hover:bg-green-600 md:w-[100px] xl:w-[150px]"
        @click="triggerModal"
      >
        <FontAwesomeIcon class="text-white" icon="plus-circle" />
      </button>
    </template>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "../index.js";

export default {
  name: "SearchCard",
  components: {
    FontAwesomeIcon,
  },
  emits: ["addModal", "search"],
  props: {
    is_modal_visible: Boolean,
  },
  data() {
    return {
      input_search: "",
    };
  },
  watch: {
    is_modal_visible(newVal) {
      if (newVal === true) {
        this.input_search = "";
      }
    },
  },
  methods: {
    triggerModal() {
      this.$emit("addModal");
    },
    triggerSearch() {
      const search = this.input_search;
      this.$emit("search", search);
    },
  },
};
</script>
