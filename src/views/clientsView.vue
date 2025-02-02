<template>
    <main>
      <section class="container">
        <div class="my-5 d-flex gap-3 justify-content-center align-items-center">
          <!-- Loop through images array -->
          <div v-for="(image, index) in images" :key="index" class="card shadow-lg">
            <img :src="image.src" :alt="image.alt" class="img-fluid p-2" width="100">
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: "ImageGallery",
    data() {
      return {
      };
    },
  };
  </script>


<style scoped>
form input,
select {
    height: 45px !important;
}

.text-blue {
    color: blue !important;
}

.bg-blue {
    background: rgb(74, 74, 247) !important;
}

form input:focus,
select:focus,
textarea:focus {
    background: var(--text-900);
    border: 0.5px solid var(--accent-200);
    color: #fff !important;
}


.cards {
    border: 2px solid var(--accent-200);
}

form input,
select,
textarea {
    background: #fff;
    border: 0.5px solid var(--accent-200);
    color: #fff !important;
}

form input::placeholder,
textarea::placeholder {
    color: #222;
}

.btn-primary {
    background-color: var(--accent200) !important;
    color: #ffffff !important;
    border-color: var(--text-800) !important;
    padding-right: 5rem !important;
    padding-left: 5rem !important;
}
</style>