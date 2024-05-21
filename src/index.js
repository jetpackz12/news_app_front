// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faPlusCircle,
  faEdit,
  faTrash,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Initialize Icons
library.add(faSearch, faPlusCircle, faEdit, faTrash, faXmark);

// Components
import SearchCard from "./components/SearchCard.vue"
import MainContent from "./components/MainContent.vue";
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";

// Axios
import axios from "axios";

export { library, faSearch, faPlusCircle, faEdit, faTrash, FontAwesomeIcon, MainContent, Navbar, SearchCard, Modal, axios };
