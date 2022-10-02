<template>
  <h4>{{ title }}</h4>
  <div id="main-app" class="container">
    <button class="btn btn-sm btn-primary">
      <FontAwesomeIcon icon="plus" class="mr-2" /></button
    >Add Appointment

    <div class="row justify-content-center">
      <AppointmentList
        :appointments="appointments"
        @delete="deleteItem"
        @edit="editItem"
      />
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
  data() {
    return {
      title: "Appointment List",
      appointments: [],
      aptIndex: 0,
    };
  },
  components: {
    AppointmentList,
    FontAwesomeIcon,
  },
  mounted() {
    axios
      .get("./data/appointments.json")
      .then(
        (response) =>
          (this.appointments = response.data.map((item) => {
            item.aptId = this.aptIndex;
            this.aptIndex++;
            return item;
          }))
      )
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
    editItem: function (id: Number, field: String, text: String) {
      const aptIndex = _.findIndex(this.appointments, {
        aptId: id,
      });
      this.appointments[aptIndex][field] = text;
    },
  },
};
</script>
<style scoped></style>
