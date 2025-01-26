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
        <div class="container">
            <n-tabs type="segment" animated>
                <n-tab-pane name="oasis" tab="Oasis">
                    Wonderwall
                </n-tab-pane>
                <n-tab-pane name="the beatles" tab="the Beatles">
                    Hey Jude
                </n-tab-pane>
                <n-tab-pane name="jay chou" tab="Jay Chou">
                    Qilixiang
                </n-tab-pane>
            </n-tabs>
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