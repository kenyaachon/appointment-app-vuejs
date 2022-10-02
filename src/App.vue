<template>
  <h4>{{ title }}</h4>
  <div id="main-app" class="container">
    <div class="row justify-content-center">
      <AddAppointment @add="addItem" />
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
import _ from "lodash";
import AddAppointment from "./components/AddAppointment.vue";
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
    AddAppointment,
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
      this.appointments = _.without(this.appointments, appointment);
    },
    editItem: function (id: Number, field: String, text: String) {
      const aptIndex = _.findIndex(this.appointments, {
        aptId: id,
      });
      this.appointments[aptIndex][field] = text;
    },
    addItem: function (newApt: any) {
      newApt.aptId = this.aptIndex;
      this.aptIndex++;
      this.appointments.push(newApt);
    },
  },
};
</script>
<style scoped></style>
