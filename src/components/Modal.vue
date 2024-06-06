<template>
  <div class="flex justify-center items-center z-20 h-svh px-2">
    <div class="bg-white rounded-sm w-full shadow-2xl md:w-[60%] lg:w-[50%]">
      <div class="flex justify-between items-center border-b p-2">
        <h3 class="text-md">{{ modal_title }}</h3>
        <div>
          <button
            class="bg-red-500 p-1 w-[60px] rounded-md hover:bg-red-600"
            @click="triggerModal"
          >
            <FontAwesomeIcon class="text-white" icon="xmark" />
          </button>
        </div>
      </div>
      <template v-if="!is_delete">
        <div class="p-2 space-y-2">
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
              >Upload Image</label
            >
            <template v-if="!id">
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                accept="image/*"
                @change="onFilePicked"
                required
              />
            </template>
            <template v-else>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                accept="image/*"
                @change="onFilePicked"
              />
            </template>
          </div>
          <div>
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Title:</label
            >
            <input
              type="text"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
              v-model="title"
              required
            />
          </div>
          <div>
            <label
              for="link"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Link:</label
            >
            <input
              type="text"
              id="link"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Link"
              v-model="link"
              required
            />
          </div>
          <div>
            <label
              for="date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Date:</label
            >
            <input
              type="date"
              id="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Date"
              v-model="date"
              required
            />
          </div>
          <div>
            <label
              for="meta_tags"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Meta tags:</label
            >
            <input
              type="text"
              id="meta_tags"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Please enter tags ( Must be separated by comma ). e.g. Sport, Entertainment.."
              v-model="meta_tags"
              required
            />
          </div>
          <div>
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Description</label
            >
            <textarea
              id="description"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="News description..."
              v-model="description"
            ></textarea>
          </div>
          <div class="flex justify-center items-center p-2">
            <template v-if="!id">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="submit"
              >
                Submit
              </button>
            </template>
            <template v-else>
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="update"
              >
                Update
              </button>
            </template>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="p-2 space-y-2">
          <div class="flex justify-center items-center">
            <h1 class="text-red-500 font-bold">
              Are you sure you want to delete this news ?
            </h1>
          </div>
        </div>
        <div class="flex justify-center items-center p-2">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="deleteData"
          >
            Yes
          </button>
        </div>
      </template>
    </div>
  </div>
</template>
  
<script>
import { FontAwesomeIcon, axios } from "../index.js";
export default {
  name: "Addmodal",
  components: {
    FontAwesomeIcon,
  },
  emits: ["actionAddModal"],
  props: {
    modal_title: String,
    is_delete: Boolean,
    id: Number,
  },
  data() {
    return {
      title: "",
      link: "",
      date: "",
      meta_tags: "",
      description: "",
      image: null,
      image_name: null,
    };
  },
  mounted() {
    this.getNew();
  },
  methods: {
    triggerModal() {
      this.clearInputFields();
      this.$emit("actionAddModal");
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      this.upload();
    },
    async submit() {
      if (
        this.title == "" ||
        this.link == "" ||
        this.date == "" ||
        this.meta_tags == "" ||
        this.description == "" ||
        this.image_name == ""
      ) {
        alert("Please fill all input fields");
        return;
      }
      let render_data = {
        title: this.title,
        link: this.link,
        date: this.date,
        meta_tags: this.meta_tags,
        description: this.description,
        image_name: this.image_name,
      };

      await axios
        .post("/api/store", render_data)
        .then((response) => {
          this.clearInputFields();
          this.triggerModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async upload() {
      const formData = new FormData();
      formData.append("image", this.image);

      await axios
        .post("/api/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          this.image_name = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async update() {
      if (
        this.title == "" ||
        this.link == "" ||
        this.date == "" ||
        this.meta_tags == "" ||
        this.description == "" ||
        this.image_name == ""
      ) {
        alert("Please fill all input fields");
        return;
      }

      let render_data = {
        id: this.id,
        title: this.title,
        link: this.link,
        date: this.date,
        meta_tags: this.meta_tags,
        description: this.description,
        image_name: this.image_name,
      };

      await axios
        .post("/api/update", render_data)
        .then((response) => {
          this.triggerModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clearInputFields() {
      this.title = "";
      this.link = "";
      this.date = "";
      this.meta_tags = "";
      this.description = "";
      this.image = null;
    },
    async deleteData() {
      const render_data = {
        id: this.id,
      };

      await axios
        .post("/api/destroy", render_data)
        .then((response) => {
          this.triggerModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getNew() {
      if (!this.is_delete && this.id != null) {
        const render_data = {
          id: this.id,
        };

        await axios
          .post("/api/edit", render_data)
          .then((response) => {
            this.title = response.data.title;
            this.link = response.data.link;
            this.date = response.data.news_date;
            this.meta_tags = response.data.meta_tags;
            this.description = response.data.description;
            this.image_name = response.data.image;
          });
      }
    },
  },
};
</script>