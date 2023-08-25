import "./styles.css";
import {
  form,
  projectForm,
  historyTabListener,
  projectTabListener,
  displayForm,
  hideForm,
} from "./dom";
import { getStoredArrays } from "./factoryfunct";

form();
getStoredArrays();

displayForm();

hideForm();

projectForm();

historyTabListener();

projectTabListener();
