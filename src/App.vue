<template>
  <AppointmentList :appointments="appointments" />
</template>

<script lang="ts">
import axios from "axios";
import AppointmentList from "./components/AppointmentList.vue";
export default {
  name: "MainApp",
  data: function () {
    return {
      title: "Appointment List",
      appointments: [],
    };
  },
  components: {
    AppointmentList,
  },
  mounted() {
    axios
      .get("./data/appointments.json")
      .then((response) => (this.appointments = response.data))
      .catch((error) => console.log(error));
  },
};
</script>
<style scoped></style>
