<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div
          class="col-xl-4 col-bg-4 col-md-12 col-sm-12 pbelow"
          style="color: white;"
        >
          <span>© 2023 Copyright: <a style="color:aqua;" href="https://github.com/syarifmuhammad">Dayatsyarif</a></span>
        </div>

        <div class="col-xl-4 col-bg-4 col-md-12 col-sm-12 button-sosmed">
          <div class="text-center">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('linkedin')"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
            >
              <i class="fab fa-github"></i>
            </button>
          </div>
        </div>
        <div
          class="col-xl-4 col-bg-4 col-md-12 col-sm-12 pbelow"
          style="color: white; text-align: end;"
        >
          <span>Thanks to <a style="color:aqua;" href="https://github.com/mahy209/vuejs-portofolio.git">Mahy Mohab</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Footer",
  data() {
    return {
      linkedin: info.links.linkedin,
      github: info.links.github,
      behance: info.links.behance,
      resume: info.links.resume,
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "behance":
          window.open(this.behance, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 500;
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 768px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center !important;
  }

  .button-sosmed {
    padding-bottom: 20px;
  }
}
</style>
