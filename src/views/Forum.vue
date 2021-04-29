<template>
  <div>
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="8">
          <p class="h3 light-green-text font-weight-bold">
            Forum
          </p>
          <p class="h1 font-weight-bold mb-3">
            FOSS Community NSBM Forum is the platform where you can engage with
            the ever-growing open source community
          </p>
          <p class="h5 font-weight-normal mb-4">
            <a href="https://forum.fossnsbm.org/"
              ><mdb-icon icon="external-link-alt" size="1x" class="mr-3" />Visit
              Our Forum</a
            >
          </p>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col md="12">
          <mdb-container fluid>
            <mdb-row class="mt-4 mx-2 d-flex justify-content-start"
              ><ForumCategoryCard
                v-for="category in categories"
                :key="category.id"
                :category="category"
              ></ForumCategoryCard></mdb-row></mdb-container
        ></mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon } from "mdbvue";
import ForumCategoryCard from "../components/ForumCategoryCard.vue";
// import axios from "axios";
export default {
  name: "ForumPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    ForumCategoryCard,
    mdbIcon,
  },
  data() {
    return {
      categories: [
        {
          id: "1",
          title: "General",
          content: `This is where you'll find answers to all the general questions about FOSS Community as a whole`,
          tags: [
            {
              id: "1",
              name: "Getting Started",
            },
            {
              id: "2",
              name: "World of FOSS",
            },
          ],
          url: "https://forum.fossnsbm.org/c/general/10",
        },
        {
          id: "2",
          title: "Women In FOSS",
          content: `Find everything related to Women In FOSS NSBM category and more`,
          tags: [
            {
              id: "1",
              name: "Meeting Minutes",
            },
            {
              id: "2",
              name: "Projects",
            },
            {
              id: "3",
              name: "Events",
            },
          ],
          url: "https://forum.fossnsbm.org/c/women-in-foss/72",
        },
        {
          id: "3",
          title: "Annoucements",
          content: `Find updates about events and sessions organized by FOSS Community of NSBM`,
          tags: [
            {
              id: "1",
              name: "Annoucements",
            },
            {
              id: "2",
              name: "Updates",
            },
          ],
          url: "https://forum.fossnsbm.org/c/announcement/6",
        },
        {
          id: "4",
          title: "Programming Tutorials",
          content: ``,
          tags: [
            {
              id: "1",
              name: "C",
            },
            {
              id: "2",
              name: "React",
            },
            {
              id: "3",
              name: "NodeJs",
            },
            {
              id: "4",
              name: "MongoDB",
            },
          ],
          url: "https://forum.fossnsbm.org/c/programming/38",
        },
        {
          id: "5",
          title: "Competitions Discussion",
          content: ``,
          tags: [
            {
              id: "1",
              name: "Hash Code 2021",
            },
            {
              id: "2",
              name: "Hack the Night '21",
            },
          ],
          url: "https://forum.fossnsbm.org/c/competitions-discussions/12",
        },
        {
          id: "6",
          title: "Open source discussion",
          content: ``,
          tags: [
            {
              id: "1",
              name: "Linux",
            },
            {
              id: "2",
              name: "Kubernetes",
            },
          ],
          url: "https://forum.fossnsbm.org/c/open-source-discussion/9",
        },
        {
          id: "7",
          title: "Cyber security",
          content: `Learn about everything from cyber space to cyber security`,
          tags: [
            {
              id: "1",
              name: "Encryption",
            },
          ],
          url: "https://forum.fossnsbm.org/c/cyber-security/20",
        },
        {
          id: "8",
          title: "FOSS Projects",
          content: `Find ongoing projects of FOSS Community NSBM`,
          tags: [
            {
              id: "1",
              name: "FOSS RSVP",
            },
            {
              id: "2",
              name: "Privacy Dashboard",
            },
          ],
          url: "https://forum.fossnsbm.org/c/foss-project/70",
        },
      ],
    };
  },
  mounted() {
    // fetch("https://forum.fossnsbm.org/categories.json", {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => (this.categories = data.category_list.categories))
    //   .catch((err) => console.log(err.message));
    // axios({
    //   method: "GET",
    //   url: "https://forum.fossnsbm.org/categories.json",
    //   // timeout: 180000,
    // })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // this.fetchCategories();
    // console.log(this.categories);
  },
  methods: {
    async fetchCategories() {
      const res = await fetch("https://forum.fossnsbm.org/categories.json");
      const data = await res.json();
      this.categories = data;
    },
  },
};
</script>
