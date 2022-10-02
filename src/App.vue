<template>
  <div id="main-app" class="container">
    <h4>{{ title }}</h4>

    <div class="row justify-content-center">
      <AddAppointment @add="addItem" />
      <SearchAppointment
        @searchRecords="searchAppointments"
        :searchKey="filterKey"
        :searchDir="filterDir"
        @requestDir="updateSortDir"
        @requestKey="updateSortKey"
      />

      <AppointmentList
        :appointments="filteredApts"
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
import SearchAppointment from "./components/SearchAppointment.vue";
export default {
  name: "MainApp",
  data() {
    return {
      title: "Appointment List",
      appointments: [],
      aptIndex: 0,
      searchTerms: "",
      filterKey: "petName",
      filterDir: "asc",
    };
  },
  components: {
    AppointmentList,
    AddAppointment,
    SearchAppointment,
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
    searchAppointments: function (searchTerm: String) {
      this.searchTerms = searchTerm;
    },
    updateSortKey: function (param: String) {
      this.filterKey = param;
    },
    updateSortDir: function (direction: String) {
      this.filterDir = direction;
    },
  },
  computed: {
    searchedApts: function () {
      return this.appointments.filter((item) => {
        return (
          item.petName.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.petOwner.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.aptNotes.toLowerCase().match(this.searchTerms.toLowerCase())
        );
      });
    },
    filteredApts: function () {
      return _.orderBy(
        this.searchedApts,
        (item) => {
          return item[this.filterKey].toLowerCase();
        },
        this.filterDir
      );
    },
  },
};
</script>
<style scoped></style>
