<template>
  <h4>{{ title }}</h4>
  <div id="main-app" class="container">
    <button class="btn btn-sm btn-primary">
      <FontAwesomeIcon icon="plus" class="mr-2" /></button
    >Add Appointment

    <div class="row justify-content-center">
      <AppointmentList :appointments="appointments" @delete="deleteItem" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import AppointmentList from "./components/AppointmentList.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import _ from "lodash";
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
    FontAwesomeIcon,
  },
  mounted() {
    axios
      .get("./data/appointments.json")
      .then((response) => (this.appointments = response.data))
      .catch((error) => console.log(error));
  },
  methods: {
    deleteItem: function (appointment: any) {
      // this.appointments = this.appointments.filter((item) => {
      //   if (item.petName == appointment.petName) {
      //     return false;
      //   }
      //   return true;
      // });
      this.appointments = _.without(this.appointments, appointment);
    },
  },
};
</script>
<style scoped></style>
