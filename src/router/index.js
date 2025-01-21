import { createRouter, createWebHistory } from "vue-router";
import Homeveiw from "../views/Homeveiw.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Homeveiw",
      component: Homeveiw,
    },
    {
      name: "contact-us",
      path: "/contact-us",
      component: () => import("../views/ContactView.vue"),
    },
    {
      name: "sales",
      path: "/sales",
      component: () => import("../views/SalesView.vue"),
    },
    {
      name: "fatura",
      path: "/fatura",
      component: () => import("../views/fauterVeiw.vue"),
    },
    {
      name: "salary",
      path: "/salary",
      component: () => import("../views/salaryVeiw.vue"),
    },
    {
      name: "payment",
      path: "/payment",
      component: () => import("../views/paymentVeiw.vue"),
    },
    {
      name: "taqset",
      path: "/taqset",
      component: () => import("../views/taqsetView.vue"),
    },
    {
      name: "hesap",
      path: "/hesap",
      component: () => import("../views/hesapatVeiw.vue"),
    },
    {
      name: "safty",
      path: "/safty",
      component: () => import("../views/saftyView.vue"),
    },
    {
      name: "الفاتورة-الإلكترونية-السعودية",
      path: "/soudifatura",
      component: () => import("../views/soudifaturaVIiew.vue"),
    },
    {
      name: "الفاتورة-الإلكترونية-المصريه",
      path: "/egyptfatura",
      component: () => import("../views/egyptfaturaVIiew.vue"),
    },
    // not found
    {
      name: "not-found",
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
