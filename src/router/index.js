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
      name: "Workperiods",
      path: "/Workperiods",
      component: () => import("../views/WorkperiodsView.vue"),
    },
    {
      name: "sales",
      path: "/sales",
      component: () => import("../views/SalesView.vue"),
    },
    {
      name: "all_features",
      path: "/all_features",
      component: () => import("../views/all_featuresView.vue"),
    },
    {
      name: "feature-category1",
      path: "/feature-category1",
      component: () => import("../views/feature-category1View.vue"),
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
      name: "Prices",
      path: "/Prices",
      component: () => import("../views/PricesVeiw.vue"),
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
    {
      name: "employeesettings",
      path: "/employeesettings",
      component: () => import("../views/employeesettingsVIiew.vue"),
    },
    {
      name: "Loyaltypoints",
      path: "/Loyaltpoints",
      component: () => import("../views/LoyaltypointsVIiew.vue"),
    },
    {
      name: "Pointscredits",
      path: "/Pointscredits",
      component: () => import("../views/PointscreditsVIiew.vue"),
    },
    {
      name: "Subscriptionsmemberships",
      path: "/Subscriptionsmemberships",
      component: () => import("../views/SubscriptionsmembershipsVIiew.vue"),
    },
    {
      name: "Inventorymanagement",
      path: "/Inventorymanagement",
      component: () => import("../views/InventorymanagementVIiew.vue"),
    },
    {
      name: "Productmanagement",
      path: "/Productmanagement",
      component: () => import("../views/ProductmanagementVIiew.vue"),
    },
    {
      name: "Purchasingmanagement",
      path: "/Purchasingmanagement",
      component: () => import("../views/PurchasingmanagementVIiew.vue"),
    },
    {
      name: "Procurementcycle",
      path: "/Procurementcycle",
      component: () => import("../views/ProcurementcycleVIiew.vue"),
    },
    {
      name: "Suppliermanagement",
      path: "/Suppliermanagement",
      component: () => import("../views/SuppliermanagementVIiew.vue"),
    },
    {
      name: "warehousepermissions",
      path: "/warehousepermissions",
      component: () => import("../views/warehousepermissionsVIiew.vue"),
    },
    {
      name: "Inventorymanagement2",
      path: "/Inventorymanagement2",
      component: () => import("../views/InventorymanagementVIieww.vue"),
    },
    {
      name: "Manufacturingmanagement",
      path: "/Manufacturingmanagement",
      component: () => import("../views/ManufacturingmanagementView.vue"),
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
