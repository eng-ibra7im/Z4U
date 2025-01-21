<template>
  <main>
    <nav>
      <div class="container">
        <div class="align-items-center d-flex justify-content-between ">
          <a href="/" title="nav.home" aria-label="nav-home">
            <img src="../../public/Z4U_White.png" width="110" height="80" class="img-fluid" alt="logo" style="max-width: 200px;" />
          </a>

          <div class="d-lg-flex justify-content-between  d-none col-xl-8 col-lg-9">
            <ul class="list-unstyled d-flex align-items-center mb-0 fw-bold me-auto gap-3">
              <li>
                <RouterLink to="/fatura" class="ms-3 cursor-pointer" exact-active-class="text-primary" title="blog"
                  aria-label="blog">
                  البرامج
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/sales" class="ms-3 cursor-pointer" exact-active-class="text-primary" title="works"
                  aria-label="works">
                  مجالات العمل
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/salary" class="ms-3 cursor-pointer" exact-active-class="text-primary" title="price"
                  aria-label="price">
                  الأسعار
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact-us" class="ms-2 cursor-pointer" exact-active-class="text-primary"
                  title="contactUs" aria-label="contactUs">
                  اتصل بنا
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/us" class="ms-1 cursor-pointer fs-5" exact-active-class="text-primary"
                  title="menu-bar" aria-label="menu-bar">
                  <i class="bi bi-list"></i>
                </RouterLink>
              </li>
              <li>
                <!-- Language Toggle -->
                <button type="button"
                  class="btn bg-black text-white d-flex align-items-center rounded-pill border-1 py-1 border-white btn-sm"
                  data-bs-toggle="modal" data-bs-target="#modal_language">
                  <span class="rounded-sm" v-if="$i18n.locale === 'ar'">
                    <img src="../assets/images/egypt.png" alt="Egypt flag" width="20" height="20" class="m-0 p-0" />
                  </span>
                  <span class="rounded-sm" v-else>
                    <img src="../assets/images/united-states-of-america.png" alt="USA flag" width="20" height="20"
                      class="m-0 p-0" />
                  </span>
                  <span class="mx-1 text-light">|</span>
                  <span class="text-light">
                    {{ $i18n.locale === "en" ? "EN" : "عربي" }}
                  </span>
                </button>
              </li>
                <div class="d-flex align-items-center gap-2">
                  <a href="/" class="btn btn-outline-primary fw-bold rounded-1 py-1 px-2 text-center text-md-start"
                    title="دخول" aria-label=" دخول" target="_blank" rel="noopener noreferrer">
                    دخول </a>
                  <a href="/" class="btn btn-success rounded-1 py-1 px-3 fw-bold text-light text-center text-md-start"
                    title="دخول" aria-label=" دخول" target="_blank" rel="noopener noreferrer">ابدء التسجيل مجانا</a>
                </div>
            </ul>

          </div>
          <!-- Modal -->
          <div class="modal fade" id="modal_language" tabindex="-1" role="dialog" aria-labelledby="modalTitleId"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="p-4 border-bottom d-flex align-items-center justify-content-between">
                  <h5 class="modal-title main-text fw-bold" id="modalTitleId">اللغة</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="container-fluid d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <label for="ar" class="cursor-pointer text-dark fw-bold d-flex align-items-center gap-2">
                        <img src="../assets/images/egypt.png" alt="Egypt flag" width="20" height="20" />
                        العربية
                      </label>
                      <input type="radio" id="ar" class="form-check-input mx-2 cursor-pointer" name="radio-lang"
                        value="ar" v-model="selectedLanguage" />
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <label for="radio" class="cursor-pointer text-dark fw-bold d-flex align-items-center gap-2">
                        <img src="../assets/images/united-states-of-america.png" alt="USA flag" width="20"
                          height="20" />
                        English
                      </label>
                      <input type="radio" id="radio" class="form-check-input mx-2 cursor-pointer" name="radio-lang"
                        value="en" v-model="selectedLanguage" />
                    </div>
                  </div>
                </div>
                <div class="modal-footer border-0">
                  <button type="button" class="btn btn-primary form-control fw-bold w-100" @click="toggleLanguage">
                    ok
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Offcanvas toggle button -->
          <button class="btn btn-primary text-white d-flex d-lg-none p-1 px-2 btn-sm" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" name="menu">
            <i class="bi bi-list fs-4"></i>
          </button>
          <!-- Offcanvas menu -->
          <div class="offcanvas offcanvas-end custom-offcanvas d-lg-none" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header border-bottom">
              <h5 class="offcanvas-title mt-0 text-light" id="offcanvasNavbarLabel">
                {{ $t("nav.menu") }}
              </h5>
              <button type="button" class="btn-close text-reset text-light" data-bs-dismiss="offcanvas"
                aria-label="Close" name="close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav fw-bold mb-2 mb-lg-0 me-auto gap-3 mt-2">
                <li>
                <RouterLink to="/blogs" class="ms-3 cursor-pointer text-light" exact-active-class="text-primary" title="blog"
                  aria-label="blog">
                  البرامج
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact-us" class="ms-3 cursor-pointer text-light" exact-active-class="text-primary" title="works"
                  aria-label="works">
                  مجالات العمل
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact-us" class="ms-3 cursor-pointer text-light" exact-active-class="text-primary" title="price"
                  aria-label="price">
                  الأسعار
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact-us" class="ms-2 cursor-pointer text-light" exact-active-class="text-primary"
                  title="contactUs" aria-label="contactUs">
                  اتصل بنا
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact-us" class="ms-3 cursor-pointer text-light fs-5" exact-active-class="text-primary"
                  title="menu-bar" aria-label="menu-bar">
                  <i class="bi bi-list"></i>
                </RouterLink>
              </li>
              <li>
                <!-- Language Toggle -->
                <button type="button"
                  class="btn bg-black text-white d-flex align-items-center rounded-pill border-1 py-1 border-white btn-sm"
                  data-bs-toggle="modal" data-bs-target="#modal_language">
                  <span class="rounded-sm" v-if="$i18n.locale === 'ar'">
                    <img src="../assets/images/egypt.png" alt="Egypt flag" width="20" height="20" class="m-0 p-0" />
                  </span>
                  <span class="rounded-sm" v-else>
                    <img src="../assets/images/united-states-of-america.png" alt="USA flag" width="20" height="20"
                      class="m-0 p-0" />
                  </span>
                  <span class="mx-1 text-light">|</span>
                  <span class="text-light">
                    {{ $i18n.locale === "en" ? "EN" : "عربي" }}
                  </span>
                </button>
              </li>
                <div class="d-flex align-items-center gap-2">
                  <a href="/" class="btn btn-outline-primary text-light fw-bold rounded-1 py-1 px-2 text-center text-md-start"
                    title="دخول" aria-label=" دخول" target="_blank" rel="noopener noreferrer">
                    دخول </a>
                  <a href="/" class="btn btn-success rounded-1 py-1 px-3 fw-bold text-light text-center text-md-start"
                    title="دخول" aria-label=" دخول" target="_blank" rel="noopener noreferrer">ابدء التسجيل مجانا</a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </main>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleLanguage() {
      const lang = this.$i18n.locale === "en" ? "ar" : "en";

      if (this.$i18n.locale === lang) {
        return;
      }
      window.location.reload();
      sessionStorage.clear();
      localStorage.setItem("language", lang);
    },
  },
  // when click any link in canvas close the canvas
  mounted() {
    const offcanvasElementList = [].slice.call(
      document.querySelectorAll(".offcanvas")
    );
    const offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
      return new bootstrap.Offcanvas(offcanvasEl);
    });

    offcanvasList.forEach((offcanvas) => {
      offcanvas._element.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          offcanvas.hide();
        }
      });
    });
  },
};
</script>

<style scoped>
.header-fixed {
  background: #fff;
}

.custom-offcanvas {
  background-color: #1e1e30;
}

a {
  color: #222;
  font-weight: bold !important;
}
</style>
