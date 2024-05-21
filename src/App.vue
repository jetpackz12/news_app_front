<template>
  <div class="relative">
    <Navbar @scrollToTarget="handleScrollToTarget" @actionAddModal="actionAddModal" @search="search" :is_modal_visible="is_modal_visible" />
    <template v-if="!is_modal_visible">
      <MainContent ref="mainContentRef" @actionEditModal="actionEditModal" @actionDeleteModal="actionDeleteModal" :search_data="search_data" />
    </template>
    <template v-else>
      <Modal @actionAddModal="actionAddModal" :modal_title="modal_title" :is_delete="is_delete" :id="id" />
    </template>
  </div>
</template>

<script>
import { Navbar, MainContent, Modal } from "./index.js";
export default {
  name: "App",
  components: { Navbar, MainContent, Modal },
  data() {
    return {
      is_modal_visible: false,
      is_delete: false,
      modal_title: '',
      id: null,
      search_data: null,
    };
  },
  methods: {
    handleScrollToTarget() {
      this.$refs.mainContentRef.scrollToTarget();
    },
    actionAddModal() {
      this.id = null;
      this.is_modal_visible = !this.is_modal_visible;
      this.is_delete = false;
      this.modal_title = 'Add News';
    },
    actionEditModal(id) {
      this.id = id;
      this.is_modal_visible = !this.is_modal_visible;
      this.is_delete = false;
      this.modal_title = 'Edit News';
    },
    actionDeleteModal(id) {
      this.id = id;
      this.is_modal_visible = !this.is_modal_visible;
      this.is_delete = !this.is_delete;
      this.modal_title = 'Delete News';
    },
    search(search) {
      this.search_data = search;
    },
  },
};
</script>
