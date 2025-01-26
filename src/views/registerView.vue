<template>
    <main>
        <div class="account-pages">
            <div class="container">
                <div class="row ">
                    <div class="col-md-6 col-12 ms-5">
                        <a href="/">
                            <img src="../assets/images/logo.png" alt="" class="img-fluid" width="150">
                        </a>
                        <h2 class="text-secondary mt-3 lh-base">
                            كل ما تحتاجه لإدارة أعمالك <br> في برنامج واحد!
                        </h2>
                        <p class="fw-semibold fs-3 lh-base mt-3 ms-2">
                            يدعم أكثر من 50 مجالا مختلفا وأكثر من <br> 20 تطبيق لإدارة الأعمال بإحترافية!
                        </p>
                        <p class="fw-semibold fs-5 mt-2">
                            جميع هذه الميزات مخصصَّة حسب مجال عملك!
                        </p>
                        <div class="d-flex align-items-center   g-0 gap-4">
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center gap-1">
                                    <img src="../assets/images/small-logo.png" alt="small-logo.png" class="img-fluid"
                                        width="20">
                                    <p class="mt-2 fs-4 fw-bold text-black">
                                        المبيعات ونقاط البيع
                                    </p>
                                </div>
                                <div class="d-flex align-items-center gap-1">
                                    <img src="../assets/images/small-logo.png" alt="small-logo.png" class="img-fluid"
                                        width="20">
                                    <p class="mt-2 fs-4 fw-bold text-black">
                                        الفاتورة الإلكترونية
                                    </p>
                                </div>
                                <div class="d-flex align-items-center gap-1">
                                    <img src="../assets/images/small-logo.png" alt="small-logo.png" class="img-fluid"
                                        width="20">
                                    <p class="mt-2 fs-4 fw-bold text-black">
                                        الحسابات العامة
                                    </p>
                                </div>
                                <div class="d-flex align-items-center gap-1">
                                    <img src="../assets/images/small-logo.png" alt="small-logo.png" class="img-fluid"
                                        width="20">
                                    <p class="mt-2 fs-4 fw-bold text-black">
                                        المخزون
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center gap-1">
                                    <img src="../assets/images/small-logo.png" alt="small-logo.png" class="img-fluid"
                                        width="20">
                                    <p class="mt-2 fs-4 fw-bold text-black">
                                        إدارة العملاء </p>
                                </div>
                                <div class="d-flex align-items-center gap-1">
                                    <img src="../assets/images/small-logo.png" alt="small-logo.png" class="img-fluid"
                                        width="20">
                                    <p class="mt-2 fs-4 fw-bold text-black">
                                        الفروع
                                    </p>
                                </div>
                                <div class="d-flex align-items-center gap-1">
                                    <img src="../assets/images/small-logo.png" alt="small-logo.png" class="img-fluid"
                                        width="20">
                                    <p class="mt-2 fs-4 fw-bold text-black">
                                        الموارد البشرية
                                    </p>
                                </div>
                                <div class="d-flex align-items-center gap-1">
                                    <img src="../assets/images/small-logo.png" alt="small-logo.png" class="img-fluid"
                                        width="20">
                                    <p class="mt-2 fs-4 fw-bold text-black">
                                        دورة العمل
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-5 col-xl-5 m-auto mt">
                        <div class="card shadow-lg ms-lg-0 mt-5 mt-lg-0 mt-md-0">
                            <div class="card-body p-4">
                                <div class="text-start mb-4">
                                    <h2 class="text-uppercase mt-0 text-blue fw-bold">
                                        إنشاء حساب جديد
                                    </h2>
                                    <p class="fs-5 fw-bold">
                                        دقيقتين فقط لبدأ الإستخدام
                                    </p>
                                </div>

                                <form action="#">
                                    <div class="mb-3">
                                        <input class="form-control" type="password" required="" id="password"
                                            placeholder=" الاسم التجاري ">
                                    </div>

                                    <div class="mb-3">
                                        <input class="form-control" type="email" id="emailaddress" required=""
                                            placeholder="ادخل البريد الالكتروني">
                                    </div>
                                    <div class="mb-3">
                                        <input class="form-control" type="number" id="emailaddress" required=""
                                            placeholder=" رقم الجوال ">
                                    </div>

                                    <div class="mb-3">
                                        <input class="form-control" type="password" required="" id="password"
                                            placeholder="أدخل كلمة المرور">
                                    </div>

                                    <div class="mb-4">
                                        <input class="form-control" type="password" required="" id="password"
                                            placeholder="اعد ادخال كلمة المرور ">
                                    </div>

                                    <div class="mb-3 d-grid text-center">
                                        <button class="btn btn-secondary py-2" type="submit">
                                            ابدأ الاستخدام مجاناً
                                        </button>
                                    </div>

                                    <div class="text-center">
                                        <p class="text-dark">
                                            لديك حساب؟ <a href="auth-register.html" class="text-blue  fw-bold">
                                                تسجيل الدخول </a>
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

.mt {
    margin-top: 6rem !important;
}
.bg-blue {
    background: rgb(74, 74, 247) !important;
}

form input:focus,
select:focus,
textarea:focus {
    background: var(--text-900);
    border: 0.5px solid var(--accent-200);
    color: #222 !important;
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