<template>
  <div class="col-12 col-md-10 col-lg-7">
    <div class="input-group my-3">
      <input
        id="SearchApts"
        placeholder="Search"
        type="text"
        class="form-control"
        aria-label="Search Appointments"
        v-model="searchTerm"
      />

      <div class="input-group-append">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="toggleDropdown"
        >
          Sort by
          <span class="caret"></span>
        </button>

        <div class="dropdown-menu dropdown-menu-right" :class="dropDownState">
          <a
            href="#"
            class="dropdown-item d-flex justify-content-between"
            id="petName"
            @click="$emit('requestKey', 'petName')"
          >
            Pet Name
            <font-awesome-icon icon="check" v-if="filterParam('petName')" />
          </a>

          <a
            class="dropdown-item d-flex justify-content-between"
            href="#"
            id="aptDate"
            @click="$emit('requestKey', 'aptDate')"
          >
            Date
            <font-awesome-icon icon="check" v-if="filterParam('aptDate')" />
          </a>

          <a
            href="#"
            class="dropdown-item d-flex justify-content-between"
            id="petOwner"
            @click="$emit('requestKey', 'petOwner')"
          >
            Owner
            <font-awesome-icon icon="check" v-if="filterParam('petOwner')" />
          </a>

          <div class="dropdown-divider" role="separator"></div>

          <a
            class="dropdown-item d-flex justify-content-between"
            href="#"
            id="asc"
            @click="$emit('requestDir', 'asc')"
          >
            Asc
            <font-awesome-icon icon="check" v-if="searchOrder('asc')" />
          </a>

          <a
            class="dropdown-item d-flex justify-content-between"
            href="#"
            id="desc"
            @click="$emit('requestDir', 'desc')"
          >
            Desc
            <font-awesome-icon icon="check" v-if="searchOrder('desc')" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "SearchAppointment",
  props: {
    searchKey: String,
    searchDir: String,
  },
  data() {
    return {
      searchDropdownState: false,
      searchTerm: "",
    };
  },
  watch: {
    searchTerm: function () {
      this.$emit("searchRecords", this.searchTerm);
    },
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    toggleDropdown() {
      this.searchDropdownState = !this.searchDropdownState;
    },
    filterParam(param: String) {
      return param === this.searchKey;
    },
    searchOrder(param: String) {
      return param === this.searchDir;
    },
  },
  computed: {
    dropDownState() {
      return this.searchDropdownState ? "d-block" : "d-none";
    },
  },
};
</script>
<style></style>
