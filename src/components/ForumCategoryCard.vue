<template>
  <mdb-col md="4">
    <mdb-card style="border-radius: 0.5em;" class="mb-5">
      <!-- <router-link :to="'/events/' + category.url" class="black-text"> -->
      <mdb-card-body class="p-4">
        <mdb-card-title class="h1 font-weight-bold">{{
          category.title
        }}</mdb-card-title>
        <mdb-card-text class="h1 mb-3">{{ category.content }}</mdb-card-text>
        <mdb-card-text class="h1 blue-text"
          ><mdb-badge
            pill
            class="mr-2"
            v-for="tag in category.tags"
            :key="tag.id"
            color="primary"
            >{{ tag.name }}</mdb-badge
          ></mdb-card-text
        >
        <!-- <mdb-card-title class="h4 font-weight-bold"></mdb-card-title> -->
        <a :href="'//' + category.url" target="_blank" class="white-text"
          ><mdb-btn color="light-green" style="border-radius:1em;"
            >Visit</mdb-btn
          ></a
        >
      </mdb-card-body>
      <!-- </router-link> -->
    </mdb-card></mdb-col
  >
</template>

<script>
import {
  mdbCard,
  mdbCardTitle,
  mdbCardText,
  mdbCardBody,
  mdbBtn,
  mdbCol,
  mdbBadge,
} from "mdbvue";
export default {
  name: "ForumCategoryCard",
  props: ["category"],
  components: {
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbBtn,
    mdbCol,
    mdbBadge,
  },
};
</script>
