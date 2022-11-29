import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  searchText: "",
  characters: [],
  searchName: "",
});
