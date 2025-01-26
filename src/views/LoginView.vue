<template>
    <main>
        <div class="account-pages my-5">
            <div class="container-fluid">
                <div class="row ">
                    <div class="col-md-6 col-12 ms-5">
                        <a href="/">
                            <img src="../assets/images/logo.png" alt="" class="img-fluid" width="200">
                        </a>
                        <h2>
                            ما تحتاجه لإدارة أعمالك في برنامج واحد!
                        </h2>
                        <p class="fw-semibold fs-5 mt-2">
                            سجل الدخول وقم بإدارة حسابك
                        </p>
                    </div>
                    <div class="col-md-6 col-lg-5 col-xl-5 m-auto mt-4 mt-lg-0">
                        <div class="card shadow-lg me-4 ms-3 ms-lg-0 mt-5 mt-lg-0 mt-md-0">
                            <div class="card-body p-4">
                                <div class="text-center mb-4">
                                    <h2 class="text-uppercase mt-0 text-blue fw-bold">
                                        تسجيل الدخول
                                    </h2>
                                </div>

                                <form action="#">
                                    <div class="mb-3">
                                        <label for="emailaddress" class="form-label">
                                            البريد الالكتروني
                                        </label>
                                        <input class="form-control" type="email" id="emailaddress" required=""
                                            placeholder="ادخل البريد الالكتروني">
                                    </div>

                                    <div class="mb-3">
                                        <label for="password" class="form-label">
                                            كلمة المرور
                                        </label>
                                        <input class="form-control" type="password" required="" id="password"
                                            placeholder="أدخل كلمة المرور">
                                    </div>

                                    <div class="mb-2 d-flex align-items-center justify-content-between">
                                        <div class="form-check d-flex align-items-center gap-2">
                                            <input type="checkbox" class="" id="checkbox-signin" checked>
                                            <label class="form-check-label mb-1" for="checkbox-signin">
                                                تذكرني
                                            </label>
                                        </div>
                                        <div>
                                            <a href="auth-recoverpw.html" class="text-blue font-size-13 fw-semibold">
                                                نسيت كلمة المرور؟
                                            </a>
                                        </div>
                                    </div>

                                    <div class="mb-3 d-grid text-center">
                                        <button class="btn btn-secondary" type="submit">
                                            دخول
                                        </button>
                                    </div>

                                    <div class="text-center">
                                        <p class="text-dark">
                                            ليس لديك حساب؟ <a href="auth-register.html" class="text-blue fw-bold">
                                                سجل الآن
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div> <!-- end card-body -->
                        </div> <!-- end card -->
                    </div> <!-- end col -->
                </div> <!-- end row -->
            </div> <!-- end container-fluid -->
        </div>
    </main>
</template>

<script>
import { defineComponent } from 'vue'
import { NTabs } from 'naive-ui'

export default defineComponent({
    components: {
        NTabs,

    }
})
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