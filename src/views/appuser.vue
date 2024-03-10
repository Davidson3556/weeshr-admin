<script setup lang="ts">
import Search from '@/components/UseSearch.vue'
import UserNav from '@/components/UserNav.vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,

} from '@/components/ui/sheet'

import { ref } from 'vue';

interface User {
  username: string;
  email: string;
  category: string;
  status: string;
  dateJoined: string;
}

const newUser = ref<User>({
  username: '',
  email: '',
  category: '',
  status: '',
  dateJoined: '',
});
const users = ref([
  {
    username: '@horrison',
    email: 'alisha@gmail.com',
    category: 'Vendor',
    dateJoined: '01 Nov 2011',
    status: 'Active',
  },
]);

const addUser = () => {
  // Check if username and email are not empty
  if (newUser.value.username && newUser.value.email) {
    newUser.value.dateJoined = useDateFormat(useNow(), "DD MMM YYYY").value;
    users.value.push({ ...newUser.value });
    console.log('New User:', newUser.value);
    // Clear the form after adding a new user
    Object.keys(newUser.value).forEach((key) => (newUser.value[key as keyof typeof newUser.value] = ''));
  }
};

const deleteUser = (index: number) => {
  users.value.splice(index, 1);
};

import { Button } from '@/components/ui/button'


import { useDateFormat, useNow } from "@vueuse/core";
const formattedDate = useDateFormat(useNow(), "ddd, D MMM YYYY");



</script>


<template>
  <div class=" flex-col flex h-svh h-full bg-[#f0f8ff]">
    <div class="flex h-16 items-center px-4">

      <div class="mx-6 text-1xl  tracking-tight text-gray-500">
        {{ formattedDate }}

        <p class="text-3xl font-bold tracking-tight text-gray-800">
          Add users

        </p>
      </div>

      <div class="ml-auto flex items-center space-x-4">
        <p class="font-semibold tracking-tight text-gray-800">Abiola Waltz
          <UserNav />
        <p class="font-normal text-xs tracking-tight ml-4 ">Adminstrator</p>
        </p>


      </div>

    </div>
    <div class="ml-auto py-4 px-10">
      <sheet>
        <SheetTrigger as-child>
          <button class="bg-[#020721] px-4 py-2 rounded-xl w-50 h-12">
            <div class="text-base text-[#F8F9FF] text-center flex items-center">
              Add New User
              <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="ml-6">
                <path
                  d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                  fill="#F8F9FF" />
              </svg>
            </div>
          </button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create user</SheetTitle>
            <SheetDescription>
              Make changes to the user's profile here. Click the button add when you're done.
            </SheetDescription>
          </SheetHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right">
                Username
              </Label>
              <Input v-model="newUser.username" id="username" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="email" class="text-right">Email</Label>
              <Input v-model="newUser.email" type="email" id="email" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="category" class="text-right">Category</Label>
              <select v-model="newUser.category" id="category" class="col-span-3">
                <option value="Vendor">Vendor</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="status" class="text-right">Status</Label>
              <select v-model="newUser.status" id="status" class="col-span-3">
                <option value="Active">Active</option>
                <option value="Non-Active">Non-Active</option>
              </select>
            </div>
          </div>
          <SheetFooter>
            <SheetClose as-child>
              <Button @click="addUser" type="button">
                Add user
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </sheet>
    </div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 bg-[#f0f8ff]">

      <div class="flex  justify-between items-center py-4 px-6 bg-[#FFFFFF] rounded-lg">
      <div class="text-2xl font-bold tracking-tight text-gray-800">App Users
        <p class="text-xs   text-gray-500">List of Admins & Users</p>
      </div>

        <Search />


      </div>

      <div class="bg-white   overflow-auto rounded-lg shadow  min-height:600px">
        <table class="w-full ">
          <thead class="text-xs sm:text-sm md:text-base font-semibold bg-gray-200">
            <tr>
              <th class="p-3 text-sm font-semibold tracking-wide text-left">Users</th>
              <th class="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
              <th class="p-3  text-sm font-semibold tracking-wide text-left">User's category</th>
              <th class="p-3 text-sm font-semibold tracking-wide text-left">Onboarded</th>
              <th class="p-3  text-sm font-semibold tracking-wide text-left">Status</th>
              <th class="p-3 w-24 text-sm font-semibold tracking-wide text-left">
              <svg width="20" height="50" viewBox="0 0 20 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 31L12.5118 26.0606C13.1627 25.4773 13.1627 24.5227 12.5118 23.9394L7 19" stroke="#54586D"
                  stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>

            </th>
              <!-- Added Actions column for Delete button -->
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100">
            <tr v-for="(user, index) in users" :key="index" class="border-b hover:bg-gray-100">
              <td class="p-3 text-sm whitespace-nowrap">{{ user.username }}</td>
              <td class="p-3 text-sm whitespace-nowrap">{{ user.email }}</td>
              <td class="p-3 text-sm whitespace-nowrap">{{ user.category }}</td>
              <td class="p-3 text-sm whitespace-nowrap">{{ user.dateJoined }}</td>
              <td> <button class="bg-[#00C37F] text-white text-sm px-4 py-2 rounded-md">
               {{ user.status }}</button></td>
              <td class="p-3 text-sm whitespace-nowrap">
             
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>




</template>