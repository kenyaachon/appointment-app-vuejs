<template>
  <div id="main-app" class="container">
    <h4>{{ title }}</h4>
    <font-awesome-icon icon="plus" class="mr-2" />Add Appointment
    <div v-for="(appointment, index) in appointments" :key="index">
      <h4>{{ appointment.petName }}</h4>
      <p>{{ appointment.aptNotes }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AppointmentList",
  props: ["appointments"],
  components: [FontAwesomeIcon],
  data() {},
};
</script>

<style scope=""></style>
