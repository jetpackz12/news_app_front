<template>
  <template v-if="json_data.length == 0">
    <div class="flex justify-center items-center w-full h-screen px-2">
      <div class="bg-white rounded-sm w-full shadow-2xl p-2 md:w-[40%]">
        <h1 class="text-4xl text-center">No data!</h1>
      </div>
    </div>
  </template>
  <div
    ref="targetElement"
    class="flex flex-col space-y-2 justify-center items-center py-6 px-2"
  >
    <template v-for="(item, index) in json_data" :key="index">
      <div class="bg-white rounded-sm w-full xl:w-[1200px] shadow-2xl">
        <div class="flex justify-between items-center border-b p-2">
          <h3 class="text-md">{{ item.news_date }}</h3>
          <h1 class="text-2xl font-bold">{{ item.title }}</h1>
          <div>
            <button
              class="bg-yellow-500 p-1 w-[60px] rounded-s-md hover:bg-yellow-600"
              @click="triggerModal(item.id)"
            >
              <FontAwesomeIcon class="text-white" icon="edit" />
            </button>
            <button
              class="bg-red-500 p-1 w-[60px] rounded-e-md hover:bg-red-600"
              @click="triggerModalDelete(item.id)"
            >
              <FontAwesomeIcon class="text-white" icon="trash" />
            </button>
          </div>
        </div>
        <div class="p-2 space-y-2">
          <h4 class="hidden md:block">
            Link:
            <a
              :href="item.link"
              target="_blank"
              class="underline text-blue-800 hover:italic"
              >{{ item.link }}</a
            >
          </h4>
          <div class="flex justify-center items-center border">
            <img
              class="w-[800px]"
              :src="'http://127.0.0.1:8080/storage/' + item.image"
              alt="logo"
            />
          </div>
          <div class="flex justify-center items-center">
            <div class="flex flex-wrap justify-center items-center gap-2">
              <template
                v-for="(item, index) in item.meta_tags
                  .split(',')
                  .map((tag) => tag.trim())"
                :key="index"
              >
                <span
                  class="px-5 py-1 bg-gray-500 text-white rounded-full shadow-2xl hover:bg-gray-600"
                  >{{ item }}</span
                >
              </template>
            </div>
          </div>
          <p>
            {{ item.description }}
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { FontAwesomeIcon, axios } from "../index.js";

export default {
  name: "MainContent",
  components: {
    FontAwesomeIcon,
  },
  emits: ["actionEditModal", "actionDeleteModal"],
  props: {
    search_data: String,
  },
  data() {
    return {
      json_data: [],
    };
  },
  refs: {
    targetElement: null,
  },
  mounted() {
    this.getNews();
  },
  watch: {
    search_data(newVal) {
      if (newVal == "") {
        this.getNews();
      } else {
        this.getSearchResults(newVal);
      }
    },
  },
  methods: {
    scrollToTarget() {
      const target = this.$refs.targetElement;
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    },
    triggerModal(id) {
      this.$emit("actionEditModal", id);
    },
    triggerModalDelete(id) {
      this.$emit("actionDeleteModal", id);
    },
    getNews() {
      axios
        .get("http://127.0.0.1:8080/api/index")
        .then((response) => {
          this.json_data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSearchResults(search) {
      axios
        .get("http://127.0.0.1:8080/api/show/" + search)
        .then((response) => {
          this.json_data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>