import { createPinia, defineStore } from 'pinia';

const permissionPinia = createPinia();

export const usePermissionStore = defineStore({
  id: 'permissionStore',
  state: () => ({
    isAdmin: false,
    canEdit: false,
    // other permissions...
  }),
  actions: {
    setAdmin(value: boolean) {
      this.isAdmin = value;
    },
    setCanEdit(value: boolean) {
      this.canEdit = value;
    },
    // other actions...
  },
});

export { permissionPinia };
