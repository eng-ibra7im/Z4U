import i18n from "../i18n";

// Function To Set Title of Page
export default function PageTitle(titleAr, titleEn) {
  return (document.title =
    i18n.locale == "ar"
      ? "Z4U ERP    | " + titleAr
      : "Z4U ERP | " + titleEn);
}
