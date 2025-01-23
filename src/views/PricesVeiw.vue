<template>
    <main class="overflow-hidden">
        <div class="text-center mt-4">
            <h1 class="fw-bold lh-base">
                ابدأ <span class="text-success">مجاناً</span>
                <br>
                واختر خطتك لاحقاً
            </h1>
            <p class="fw-bold fs-4 text-black-50 mt-3">
                14 يوم فترة تجريبية، لا حاجة لبطاقة ائتمان، قم بإلغاء الحساب في أي وقت، طور خطتك مع نموك.
            </p>
        </div>
        <!-- SALES -->
        <section class="container mt-5">
            <div class="d-flex justify-content-center border-top border-bottom  align-items-center mt-4">
                <div class="d-flex align-items-center gap-2 border-end p-2 pe-3">
                    <h4 class="fw-bold">يُدفع
                        <p class="text-secondary fs-5 fw-bold mt-1">
                            شهري
                        </p>
                    </h4>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="toggleSwitch">
                    </div>
                    <h4 class="fw-bold">سنوي
                        <p class="text-warning fs-5 fw-bold mt-1">
                            خصم حتي %30
                        </p>
                    </h4>
                </div>
                <div class="d-flex align-items-center gap-2 border-end  pe-4 p-2">
                    <h2 class="fw-bold text-center">الأساسية
                        <p class="text-secondary fs-4 fw-bold mt-2">
                            <span class="fs-3 text-black fw-bold"> 489 .50</span> ج.م شهرياً
                        </p>
                        <span class="text-secondary fs-6 fw-bold">
                            يُدفع <span class="fs-3 text-black fw-bold">5874 ج.م</span>.مسنوياً
                        </span>
                    </h2>
                </div>
                <div class="d-flex align-items-center gap-2 border-end pe-4 p-2">
                    <h2 class="fw-bold text-center text-blue">المتقدمة
                        <p class="text-secondary fs-4 fw-bold mt-2">
                            <span class="fs-3 text-black fw-bold"> 997.50</span> ج.م شهرياً
                        </p>
                        <span class="text-secondary fs-6 fw-bold">
                            يُدفع <span class="fs-3 text-black fw-bold">11731 ج.م</span>.مسنوياً
                        </span>
                    </h2>
                </div>
                <div class="d-flex align-items-center gap-2  pe-4 p-2">
                    <h2 class="fw-bold text-center text-success">الشاملة <span class="fs-4 text-black-50">
                            القيمة الأفضل
                        </span>
                        <p class="text-secondary fs-4 fw-bold mt-2">
                            <span class="fs-1 text-black fw-bold">1960</span> ج.م شهرياً
                        </p>
                        <span class="text-secondary fs-6 fw-bold">
                            يُدفع <span class="fs-4 text-black fw-bold">23520 ج.م</span>.مسنوياً
                        </span>
                    </h2>
                </div>
            </div>
        </section>
        <!-- END-SALES -->
        <section class="container mt-4 ">
            <n-table :single-line="false" class="fw-bold">
                <thead>
                    <tr>
                        <th class="text-center fw-bold fs-4">إدارة المبيعات
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center fw-semibold fs-4">
                        <td>الفواتير وعروض الأسعار</td>
                        <td>100 /شهرياً</td>
                        <td>500 /شهرياً</td>
                        <td>غير محدود</td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            نقاط بيع سحابية
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            قائمة الأسعار
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            العروض على المبيعات
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>

                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            العمولات والمبيعات المستهدفة
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            إدارة أقساط المبيعات
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            نقاط الولاء
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            نقاط بيع بدون أنترنت
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <span class="text-start"> 1
                            </span> <br>
                            490 <span class="fw-bold fs-5  text-black-50">ج.م شهري/لكل إضافي </span>
                        </td>
                    </tr>
                </tbody>
            </n-table>
            <n-table :single-line="false" class="fw-bold mt-4">
                <thead>
                    <tr>
                        <th class="text-center fw-bold fs-4">إدارة علاقات العملاء
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center fw-semibold fs-4">
                        <td> العملاء
                        </td>
                        <td> 100</td>
                        <td>300 </td>
                        <td> غير محدود
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            متابعة العملاء
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            إدارة العضويات
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            ربط SMS
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                </tbody>
            </n-table>
            <n-table :single-line="false" class="fw-bold mt-4">
                <thead>
                    <tr>
                        <th class="text-center fw-bold fs-4">إدارة المخزون والمشتريات </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center fw-semibold fs-4">
                        <td> عدد لانهائي للأصناف
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            إدارة المشتريات
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            إدارة الموردين
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            تتبع المخزون
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            جرد المخزون
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            نظام تتبع المنتجات رقم مسلسل <br>/ رقم الشحنة / تاريخ الانتهاء
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>

                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            المنتجات المجمعة
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            دورة المشتريات
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            توزيع المصروفات
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            المستودعات
                        </td>
                        <td>
                            1 </td>
                        <td>
                            3 </td>
                        <td>
                            <span class="text-start"> 1
                            </span> <br>
                            490 <span class="fw-bold fs-5  text-black-50">ج.م شهري/لكل إضافي </span>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            التصنيع
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                </tbody>
            </n-table>
            <n-table :single-line="false" class="fw-bold mt-4">
                <thead>
                    <tr>
                        <th class="text-center fw-bold fs-4">
                            إدارة الحسابات
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            سندات الصرف والقبض
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            دليل الحسابات
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            القيود اليومية
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            مراكز التكلفة
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            الأصول والإهلاكات
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            حسابات الأستاذ
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            دورة الشيكات
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            الخزن النقدية و البنوك
                        </td>
                        <td>
                            2
                        </td>
                        <td>
                            5
                        </td>
                        <td>
                            غير محدود
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            تقارير الحسابات الختامية
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                </tbody>
            </n-table>
            <n-table :single-line="false" class="fw-bold mt-4">
                <thead>
                    <tr>
                        <th class="text-center fw-bold fs-4">
                            إدارة الموارد البشرية
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center fw-semibold fs-4">
                        <td> الموظفين
                            <span>
                                <i class="bi bi-info-circle ms-1"></i>
                            </span>
                        </td>
                        <td class="fs-5">
                            <span class="text-start"> 107.8 ج.م</span>
                            <span class="fw-bold fs-5  text-black-50"> شهري/لكل إضافي</span>
                        </td>
                        <td class="fs-5">
                            <span class="text-start"> 107.8 ج.م</span>
                            <span class="fw-bold fs-5  text-black-50"> شهري/لكل إضافي</span>
                        </td>
                        <td class="fs-5">
                            <span class="text-start"> 107.8 ج.م</span>
                            <span class="fw-bold fs-5  text-black-50"> شهري/لكل إضافي</span>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            الأجور والمرتبات
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            إدارة الحضور
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            العقود
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            الهيكل التنظيمي
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                </tbody>
            </n-table>
            <n-table :single-line="false" class="fw-bold mt-4">
                <thead>
                    <tr>
                        <th class="text-center fw-bold fs-4">
                            إدارة العمليات
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center fw-semibold fs-4">
                        <td>
                            دورة العمل
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <i class="bi bi-check"></i>
                        </td>
                    </tr>
                </tbody>
            </n-table>
            <n-table :single-line="false" class="fw-bold mt-4">
                <thead>
                    <tr>
                        <th class="text-center fw-bold fs-4">عام
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center fw-semibold fs-5">
                        <td> المستخدمين الإضافيين

                        </td>
                        <td>
                            <span class="text-start"> 294 ج.م</span>
                            <span class="fw-bold fs-5  text-black-50"> شهري/لكل إضافي</span>
                        </td>
                        <td>
                            <span class="text-start"> 294 ج.م</span>
                            <span class="fw-bold fs-5  text-black-50"> شهري/لكل إضافي</span>
                        </td>
                        <td>
                            <span class="text-start"> 294 ج.م</span>
                            <span class="fw-bold fs-5  text-black-50"> شهري/لكل إضافي</span>
                        </td>
                    </tr>
                    <tr class="text-center fw-semibold fs-5">
                        <td>
                            الفروع الإضافية
                        </td>
                        <td>
                            <i class="bi bi-x"></i>
                        </td>
                        <td>
                            <span class="text-start"> 980 ج.م</span>
                            <span class="fw-bold fs-5  text-black-50"> شهري/لكل إضافي</span>
                        </td>
                        <td>
                            <span class="text-start"> 980 ج.م</span>
                            <span class="fw-bold fs-5  text-black-50"> شهري/لكل إضافي</span>
                        </td>
                    </tr>
                </tbody>
            </n-table>
        </section>
        <div class="bg-color mb-5  mtt rounded-4">
            <div class="d-lg-flex align-items-center justify-content-evenly">
                <div>
                    <img src="../../public/Z4U_White.png" alt="" width="200" class="img-fluid">
                </div>
                <div class="d-flex flex-column text-sm-center justify-content-center g-3">
                    <h2 class="fw-bold text-white ">
                        احصل على تجربتك المجانية
                    </h2>
                    <p class="fw-bold text-white fs-4">
                        سجِّل حسابك في Z4U في خطوات بسيطة من دون الحاجة إلى بطاقة ائتمان
                    </p>
                    <a href="/"
                        class="btn btn-primary rounded-4 py-2 col-12  mt-3 fw-bold  animate__animated animate__slideInUp animate__slower 2s"
                        title="استشارة مجانية" aria-label="استشارة مجانية" target="_blank" rel="noopener noreferrer">
                        تواصل مع المبيعات </a>
                </div>
            </div>
        </div>
        <hr class="my-5">
        <section class="container mtt">
            <div class="text-center">
                <h1 class="fw-bold lh-base">
                    انضم إلى +70,000 نشاط مشترك
                    <br>
                    بالفعل مع <span class="text-blue">Z4U</span>.
                </h1>
                <p class="text-center fw-bold fs-5 text-black-50 mt-3">
                    أنت على وشك بدء تجربتك المجانية لمدة 14 يومًا!
                </p>
            </div>
            <div class="d-flex align-items-center justify-content-center gap-5 my-5">
                <img src="../assets/images/amazon.webp" alt="amazon" class="img-fluid" width="150">
                <img src="../assets/images/jotun.jpg" alt="jotun" class="img-fluid mb-2" width="150">
                <img src="../assets/images/azzam.webp" alt="azzam" class="img-fluid" width="150">
                <img src="../assets/images/coc.webp" alt="coc" class="img-fluid" width="120">
                <img src="../assets/images/iltizam.webp" alt="iltizam" class="img-fluid" width="150">
                <img src="../assets/images/smartco.webp" alt="smartco" class="img-fluid" width="150">
            </div>
            <div class="">
                <img src="../assets/images/pricing-landing-banner.webp" alt="pricing-landing-banner.webp"
                    class="w-100 ">
                <div class="bg-color mb-5 ">
                    <div class="d-md-flex align-items-center justify-content-between p-3">
                        <div>
                            <h3 class="text-white fw-bold mb-3">
                                ابدأ بالخطة المجانية، قم بالترقية في أي لحظة.
                            </h3>
                            <p class="fw-bold  text-white fs-4">
                                تقدم Z4U مجموعة متنوعة من الخطط السعرية لتناسب احتياجات كل عمل. يستغرق <br> التسجيل بضع
                                دقائق فقط، ويمكنك بدء إدارة عملك على الفور.
                            </p>
                        </div>
                        <a href="/"
                            class="btn btn-primary rounded-4 py-2 py-lg-3 py-md-1 mt-3  fw-bold text-center text-md-start animate__animated animate__slideInUp animate__slower 2s"
                            title="استشارة مجانية" aria-label="استشارة مجانية" target="_blank"
                            rel="noopener noreferrer">
                            ابدء الاستخدام مجانا
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import { NTable } from 'naive-ui'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Mousewheel, Keyboard, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import ContactUs from "../components/ContactUs.vue";
import PageTitle from "../utils/PageTitle";

export default {
    components: { ContactUs, Swiper, SwiperSlide, NTable },

    setup() {
        return {
            modules: [Navigation, Mousewheel, Keyboard, Autoplay],
        };
    },
    mounted() {
        PageTitle("الرئيسية", "Home");
    },
};


</script>

<style scoped>
.text-home {
    background: #efe8e8;
}

.mtt-3 {
    margin-top: 15rem !important;
}

.text-blue {
    color: blue !important;
    font-weight: bold;
}

.mtt {
    margin-top: 10rem !important;
}

.bg-color2 {
    padding: 5rem;
    margin: auto;
    background: blue;
    background-image: url("../assets/images/pattern1.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.bg-color {
    width: 100%;
    padding: 2rem;
    margin: auto;
    background: blue;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    background-image: url("../assets/images/pattern1.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

form input,
select {
    height: 45px !important;
}

.circles {
    position: absolute;
    contain: "";
    left: -250px;
    top: -90px;
}

.circles3 {
    position: absolute;
    contain: "";
    left: -130px;
    top: 5px;
}

.circles2 {
    position: absolute;
    contain: "";
    right: -260px;
    top: -10px;
}

.progress-bar {
    width: 80%;
    height: 5px;
    background-color: #e0e0e0;
    border-radius: 3px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    width: 75%;
    background-color: #3f5940;
    transition: width 0.5s ease-in-out;
}

.bg-settings {
    background: url("../assets/images/pattern1.webp") no-repeat;
    background-size: cover;
    background-position: top 50%;
    margin: auto;
}


#progress-fill2 {
    height: 100%;
    width: 55%;
    background-color: #3f5940;
    transition: width 0.5s ease-in-out;
}

form input:focus,
select:focus,
textarea:focus {
    background: var(--primary-100);
    border: 0.5px solid var(--accent-300);
    color: #fff;
}

.parent {
    position: relative;
    cursor: pointer;
    overflow: hidden;
}
.card-hover {
    background: blue;
    position: absolute;
    top: 100%;
    right: 0px;
    border-top-right-radius: 1.5rem !important;
    border-bottom-left-radius: 1.5rem !important;
    cursor: pointer;
    z-index: 1;
    transition: 0.2s;
}

.parent:hover>.card-hover{
    top: 0;
}


form input,
select,
textarea {
    background: var(--secondary);
    border: 0.5px solid var(--accent-300);
    color: #fff;
}

form input::placeholder,
textarea::placeholder {
    color: #fff;
}


.btn-primary {
    background-color: rgb(64, 180, 64) !important;
    color: #fff !important;
    font-weight: 900 !important;
    padding-right: 5rem !important;
    padding-left: 5rem !important;
    transition: 0.2s all linear;
    border-radius: 0.8rem;
}

/* hover */
.btn-primary:hover {
    background-color: green !important;
    color: #ffffff !important;
}

.head:hover {
    text-decoration: underline;
    cursor: pointer;
}

.btn_visit {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s;
}

/* text-ellipsed */
.text-ellipsed {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>