import { defineStore } from 'pinia'

interface SuperAdminState {
  username: string;
  password: string;
}

export const useSuperAdminStore = defineStore({
  id: 'super-admin',
  state: (): SuperAdminState => ({
    username: '',
    password: ''
  }),
  actions: {
    setUsername(value: string) {
      this.username = value;
      console.log(value);            

    
    },
    setPassword(value: string) {
      this.password = value;
    }
  }
})
