import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import { usePermissionStore } from './permission'; 

export const useCounterStore = defineStore('counter', () => {
  const permissionStore = usePermissionStore();

  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  // Access permission store properties and methods
  function setAdmin(value: boolean) {
    permissionStore.setAdmin(value);
  }

  function setCanEdit(value: boolean) {
    permissionStore.setCanEdit(value);
  }

  return { count, doubleCount, increment, setAdmin, setCanEdit };
});
