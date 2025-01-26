<template>
    <main>
        <div class="text-center my-3 p-5 pb-1 pt-4">
            <h1 class="fw-bold mb-2 text-blue">
                استعن بالخبراء لإدارة حسابات شركتك في دفترة
            </h1>
            <p class="fw-bold fs-3 text-black mt-3">
                أرسل بطلب الحصول على خدمات تجهيز وإدارة حسابك في دفترة أو الاستعانة بفريق المحاسبين الخاص للمساعدة
                <br>
                في تقديم الاستشارات المحاسبية ومراجعة وتدقيق العمليات المالية في شركتك
            </p>
            <hr class="w-25 mx-auto">
        </div>
        <div class="container mt-4 d-flex align-items-center justify-content-between">
            <n-tabs type="segment" animated>
                <n-tab-pane name="تهيئة الحساب" tab="تهيئة الحساب">
                    <n-table :bordered="false" :single-line="false">
                        <thead>
                            <tr class="text-start fw-bold fs-4">
                                <th>الـبـاقـات</th>
                                <th class="text-center">الأساسية</th>
                                <th class="text-center">المتقدمة</th>
                                <th class="text-center">الشاملة</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-start  fw-bold">
                                <td>عدد الجلسات </td>
                                <td class="text-center">4 جلسة </td>
                                <td class="text-center">8 جلسة </td>
                                <td class="text-center">12 جلسة </td>
                            </tr>
                            <tr class="text-start fw-bold">
                                <td>عدد الساعات </td>
                                <td class="text-center"> 8 ساعة </td>
                                <td class="text-center">16 ساعة </td>
                                <td class="text-center">24 ساعة </td>
                            </tr>
                            <tr class="text-start fw-bold fs-4">
                                <th>الخدمات
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">إدخال بيانات أساسية (عملاء + موردين + منتجات)
                                    <br>
                                    إرفاق 3000 سجل في الملف الواحد
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    تهيئة إعدادات الحساب (طرق الدفع + الخزائن والحسابات البنكية +المستودعات <br> + نقاط
                                    البيع
                                    + الفروع + الحقول المخصصة)
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    قواعد الإرسال الآلي + العمولات + CRM
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    الحسابات العامة (دليل الحسابات بحد أقصى 5 مستويات للفرع الواحد لمؤسسة واحدة + الأصول
                                    <br>
                                    بحد أقصى 30 أصلًا + مراكزالتكلفة 30 مركزًا بحد أقصى 5 مستويات + التوجيهات المحاسبية)
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-x-circle-fill text-secondary"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    الحجوزات والعضويات والاشتراكات
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-x-circle-fill text-secondary"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-x-circle-fill text-secondary"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start  fw-bold fs-5">
                                    الأسعار
                                </td>
                                <td class="text-center  fw-semibold fs-5">
                                    750 ريال
                                </td>
                                <td class="text-center fw-semibold fs-5">
                                    1500 ريال
                                </td>
                                <td class="text-center fw-semibold fs-5">
                                    2250 ريال
                                </td>
                            </tr>
                        </tbody>
                    </n-table>
                </n-tab-pane>
                <n-tab-pane name="خدمات محاسبية" tab="خدمات محاسبية">
                    <n-table :bordered="false" :single-line="false">
                        <thead>
                            <tr class="text-start fw-bold fs-4">
                                <th>الـبـاقـات</th>
                                <th class="text-center">الأساسية</th>
                                <th class="text-center">المتقدمة</th>
                                <th class="text-center">الشاملة</th>
                                <th class="text-center">محاسب</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-start  fw-bold">
                                <td>عدد الجلسات </td>
                                <td class="text-center">4 جلسة </td>
                                <td class="text-center">8 جلسة </td>
                                <td class="text-center">12 جلسة </td>
                                <td class="text-center">22 جلسة </td>
                            </tr>
                            <tr class="text-start fw-bold">
                                <td>عدد الساعات </td>
                                <td class="text-center"> 8 ساعة </td>
                                <td class="text-center">16 ساعة </td>
                                <td class="text-center">24 ساعة </td>
                                <td class="text-center">44 ساعة </td>
                            </tr>
                            <tr class="text-start fw-bold fs-4">
                                <th>الخدمات
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    إدخال فواتير المبيعات بشكل دوري	
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    إدخال فواتير المشتريات بشكل دوري	
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    إدخال التحصيلات والايرادات	
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    تصميم الدورة المحاسبية	
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    إدخال المصروفات والقيود اليومية والمشتريات	
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    مطابقة الحسابات البنكية وإجراء التسويات وجرد المخزون	
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    المراجعة على المدخلات بشكل دوري ومعالجة الفواتير الواردة من نقاط البيع والتسوق الإلكتروني	
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start fw-bold fs-5">
                                    إصدار التقارير المالية والختامية	
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                                <td class="text-center fs-4">
                                    <i class="bi bi-check-circle-fill text-blue"></i>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-start  fw-bold fs-5">
                                    الأسعار
                                </td>
                                <td class="text-center  fw-semibold fs-5">
                                    750 ريال
                                </td>
                                <td class="text-center fw-semibold fs-5">
                                    1500 ريال
                                </td>
                                <td class="text-center fw-semibold fs-5">
                                    2250 ريال
                                </td>
                                <td class="text-center fw-semibold fs-5">
                                    4100 ريال
                                </td>
                            </tr>
                        </tbody>
                    </n-table>
                 </n-tab-pane>
            </n-tabs>
        </div>
        <div class="container my-4 fw-bold fs-4 text-black">
            <p>
                * عدد الساعات الخاصة بكل جلسة لا تزيد عن 2 ساعة
            </p>
            <p>
                * تكلفة الجلسة الإضافية 375 ريال
            </p>
            <div class="mt-4 d-flex justify-content-center">
                <n-button type="primary" class="btn-lg py-3 px-5">
                    اطلب الأن
                </n-button>
            </div>
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