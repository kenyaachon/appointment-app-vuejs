<template>
  <div id="main-app" class="container">
    <h4>{{ title }}</h4>
    <font-awesome-icon icon="plus" class="mr-2" />Add Appointment
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "MainApp",
  data() {
    return {
      title: "Appointment List",
    };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
<style scoped></style>
