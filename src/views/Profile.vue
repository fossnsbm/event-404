<template>
  <div class="profile">
    <mdb-container fluid class="text-left">
      <mdb-row class="mx-5 my-5">
        <mdb-jumbotron
          class="mb-0 text-center hoverable p-4 mx-5 w-100"
          style="border-radius: 0.5em;"
        >
          <mdb-row>
            <mdb-col md="3" offsetMd="1" class="m-3">
              <mdb-avatar class="mx-auto white">
                <img
                  v-if="this.photoUrl"
                  :src="this.photoUrl"
                  class="rounded-circle img-fluid w-100"
                />
                <img
                  v-else
                  src="http://cdn.onlinewebfonts.com/svg/img_258083.png"
                  class="rounded-circle img-fluid w-100"
                />
              </mdb-avatar>
            </mdb-col>
            <mdb-col md="8" class="text-md-left ml-3 mt-3">
              <a href="#!" class="green-text">
                <h3 class="h3 light-green-text" v-if="isMorning()">
                  Good Morning
                </h3>
                <h3 class="h3 light-green-text" v-else>
                  Good Afternoon
                </h3>
              </a>
              <h1 class="h1 mb-3 font-weight-bold">
                {{ this.displayName }}
              </h1>
              <mdb-icon fab icon="facebook-f" size="1x" class="mr-3" />
              <mdb-icon fab icon="instagram" size="1x" class="mr-3" />
              <mdb-icon fab icon="twitter" size="1x" class="mr-3" />
              <mdb-icon fab icon="linkedin" size="1x" class="mr-3" />
              <mdb-icon fab icon="github" size="1x" />

              <!-- <mdb-row>
                <mdb-col col="12" class="mt-3">
                  <p class="font-weight-bold">Bio</p>
                  <p class="font-weight-normal">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur.
                  </p>
                </mdb-col>
              </mdb-row> -->

              <mdb-row>
                <mdb-col lg="4" class="mt-3">
                  <p class="font-weight-bold">Email address</p>
                  <p class="font-weight-normal">{{ this.email }}</p>
                </mdb-col>
                <mdb-col lg="4" class="mt-3">
                  <p class="font-weight-bold">Mobile number</p>
                  <p v-if="this.phoneNumber" class="font-weight-normal">
                    {{ this.phoneNumber }}
                  </p>
                  <p v-else class="font-weight-normal">-</p>
                </mdb-col>
              </mdb-row>

              <!-- <mdb-btn color="light-green mr-3" style="border-radius:1em;"
                >Edit Profile</mdb-btn
              >
              <a @click="deleteProfile">Delete Profile</a> -->
            </mdb-col>
          </mdb-row>
        </mdb-jumbotron>
      </mdb-row>
      <!-- <mdb-row class="mx-5 mt-5">
        <mdb-col md="11"
          ><p class="h3 blue-text font-weight-bold">
            Registered Events
          </p></mdb-col
        ><mdb-col md="1"
          ><router-link to="/allevents"
            ><p class="h5 blue-text font-weight-bold">
              See All
            </p></router-link
          ></mdb-col
        ></mdb-row
      ><mdb-container fluid
        ><mdb-row class="mt-4 mx-2 d-flex justify-content-start"></mdb-row
      ></mdb-container>
      <mdb-row class="mx-5 mt-5 d-flex justify-content-between">
        <mdb-col md="10"
          ><p class="h3 blue-text font-weight-bold">
            Attended Events
          </p></mdb-col
        ><mdb-col md="1"
          ><router-link to="/allevents"
            ><p class="h5 blue-text font-weight-bold">
              See All
            </p></router-link
          ></mdb-col
        ></mdb-row> -->
      <mdb-container fluid
        ><mdb-row class="mt-4 mx-2 d-flex justify-content-start"></mdb-row
      ></mdb-container>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbJumbotron,
  mdbRow,
  mdbCol,
  // mdbBtn,
  mdbIcon,
} from "mdbvue";
export default {
  name: "ProfilePage",
  props: ["user"],
  components: {
    mdbContainer,
    mdbJumbotron,
    mdbRow,
    mdbCol,
    // mdbBtn,
    mdbIcon,
  },
  data() {
    return {
      displayName: null,
      email: null,
      phoneNumber: null,
      bio: null,
      university: null,
      degree: null,
      academicYr: null,
      photoUrl: null,
      fbUrl: null,
      twitterUrl: null,
      githubUrl: null,
      linkedInUrl: null,
      instagramUrl: null,
    };
  },
  mounted() {
    if (this.user === null) {
      this.$router.push("/login");
    }
  },
  created() {
    this.getUserData();
  },
  methods: {
    isMorning() {
      return new Date().getHours() < 12 ? true : false;
    },
    getUserData() {
      this.displayName = this.user.displayName;
      this.email = this.user.email;
      this.phoneNumber = this.user.phoneNumber;
      this.photoUrl = this.user.photoURL;
    },
  },
};
</script>
