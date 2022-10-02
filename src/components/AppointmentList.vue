<template>
  <div class="col-12 col-md-10 col-lg-7">
    <div class="list-group list-group-flush">
      <div
        class="list-group-item"
        v-for="(appointment, index) in appointments"
        :key="index"
      >
        <button
          class="mr-2 btn btn-sm btn-danger"
          @click="deleteItem(appointment)"
        >
          <FontAwesomeIcon icon="trash" />
        </button>
        <div class="w-100">
          <div class="d-flex justify-content-between">
            <span class="h4 text-primary">{{ appointment.petName }}</span>
            <span class="float-right">{{
              formattedDate(appointment.aptDate)
            }}</span>
          </div>
          <div class="owner-name">
            <span class="font-weight-bold text-primary mr-1">Owner:</span>
            <span>{{ appointment.petOwner }}</span>
          </div>
          <div>{{ appointment.aptNotes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import moment from "moment";
export default {
  name: "AppointmentList",
  props: ["appointments"],
  data() {},
  components: { FontAwesomeIcon },
  methods: {
    formattedDate: function (date: any) {
      return moment(new Date(date)).format("MM-DD-YY, h:mm a");
    },
    deleteItem(appointment: any) {
      this.$emit("delete", appointment);
    },
  },
};
</script>

<style scope=""></style>
