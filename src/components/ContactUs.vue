<template>
  <main>
    <div class="my-3 p-5 pb-1 pt-4">
      <h1 class="fw-bold mb-2">
        Z4U الدعم الفني - دعم علي مدار اليوم
      </h1>
      <p class="fw-bold fs-4 mt-3">
        قسم الدعم الفني وخدمة العملاء مخصص لمساعدتك على مدار اليوم
      </p>
      <p class="fw-bold fs-4 ">
        إذا كان لديك سؤال عن خاصية في البرنامج يرجى البحث في <a href="">
          دليل المستخدم أولا
        </a>
      </p>
    </div>
    <!-- input contact -->
    <section class="form-content container  p-5 pt-4">
      <div class="row shadow-lg ">
        <div class="col-lg-5 p-3 justify-content-center">
          <h3 class="fw-bold">
            معلومات الاتصال
          </h3>
          <div class="d-flex flex-column mt-4">
            <span class="fw-bold fs-4">مصر</span>
            <span class="fw-bold fs-4">
              التواصل الهاتفى
            </span>
            <span class="fw-bold fs-4">
              <span class="fw-bold fs-4 mt-1">
                <i class="bi bi-telephone-fill"></i>
              </span>
              01068299805
            </span>
          </div>
          <div class="d-flex flex-column mt-4">
            <span class="fw-bold fs-4">خدمة الواتساب
            </span>
            <span class="fw-bold fs-4 mt-1">
              <span class="fw-bold fs-4 mt-1">
                <i class="bi bi-whatsapp"></i>
              </span>
              فريق المبيعات: 1068299805 20+
            </span>
            <span class="fw-semibold fs-5 mt-2 text-black-500">
              السبت - الخميس: 9 صباحًا - 6 مساءًا (بتوقيت القاهرة)
            </span>
            <span class="fw-bold fs-4 mt-2">
              <span class="fw-bold fs-4 mt-1">
                <i class="bi bi-whatsapp"></i>
              </span>
              الدعم الفنى: 1068299805 20+
            </span>
          </div>
          <div class="d-flex flex-column mt-4">
            <span class="fw-bold fs-4">الشرق الأوسط
            </span>
            <span class="fw-bold fs-4">
              التواصل الهاتفى
            </span>
            <span class="fw-bold fs-4">
              <span class="fw-bold fs-4 mt-1">
                <i class="bi bi-telephone-fill"></i>
              </span>
              01068299805
            </span>
          </div>
          <div class="d-flex flex-column mt-3">
            <span class="fw-bold fs-4">خدمة الواتساب
            </span>
            <span class="fw-bold fs-4 mt-1">
              <span class="fw-bold fs-4  mt-1">
                <i class="bi bi-whatsapp"></i>
              </span>
              فريق المبيعات: 1068299805 20+
            </span>
            <span class="fw-semibold fs-5 mt-2 text-black-500">
              السبت - الخميس: 9 صباحًا - 6 مساءًا (بتوقيت القاهرة)
            </span>
            <span class="fw-bold fs-4 mt-2">
              <span class="fw-bold fs-4 mt-1">
                <i class="bi bi-whatsapp"></i>
              </span>
              الدعم الفنى: 1068299805 20+
            </span>
          </div>
        </div>
        <div class="layout col-lg-7 shadow-lg p-3">
          <form>
            <div class="col-sm-12 mb-3">
              <label class="fw-bold fs-4 pb-2">
                الاسم
              </label>
              <input type="text" class="form-control w-100" id="inputPassword3" />
            </div>
            <div class="col-sm-12 mb-3">
              <label class="fw-bold fs-4 pb-2">
                البريد الإلكتروني
              </label>
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
            <div class="col-sm-12 mb-3">
              <label class="fw-bold fs-4 pb-2">
                العنوان
              </label>
              <input type="text" class="form-control" id="inputPassword3" />
            </div>
            <div class="col-sm-12 mb-3">
              <label class="fw-bold fs-4 pb-2">
                الهاتف
              </label>
              <input type="number" class="form-control" id="inputPassword3" />
            </div>
            <div class="col-sm-12 mb-3">
              <label class="fw-bold fs-4 pb-2">
                الرسالة
              </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn-secondary  col-12 py-2 rounded-3 text-center">ارسال</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
</script>

<style scoped>
form input,
select {
  height: 45px !important;
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
