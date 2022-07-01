export const routes = {
  LANDING_PAGE: () => {
    return `/map`;
  },
  MAPE_PAGE: () => {
    return `/`;
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
  ADD_BUDAYA: () => {
    return `/admin/addBudaya`;
  },
  EDIT_BUDAYA: (id) => {
    return `/admin/dashboard?editBudaya=true&id=${id}`
  }
}