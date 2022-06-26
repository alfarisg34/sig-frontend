export const routes = {
  LANDING_PAGE: () => {
    return `/`;
  },
  MAPE_PAGE: () => {
    return `/map`;
  },
  LIST_BUDAYA: (idProvinsi) => {
    return `?id=${idProvinsi}`
  },
  DETAIL_BUDAYA: (idBudaya) => {
    return `?idBudaya=${idBudaya}`
  },
  LOGIN_PAGE: () => {
    return `/login`;
  },
  DASHBOARD: () => {
    return `/admin/dashboard`;
  },
}