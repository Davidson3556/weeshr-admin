<script setup lang="ts">
import Search from '@/components/UseSearch.vue'
import UserNav from '@/components/UserNav.vue'
import { ref } from 'vue';
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useDateFormat, useNow } from "@vueuse/core";



const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    userEmail: z.string().email(),
    category: z.enum(['Vendor', 'Admin']).optional(),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})
interface NewUser {
  username: string;
  userEmail: string;
  category: 'Vendor' | 'Admin';
}

const newUser = ref({
  username: '',
  userEmail: '',
  category: '',
});


const users = ref([
  {
    username: '@horrison',
    userEmail: 'alisha@gmail.com',
    category: 'Vendor',
    dateJoined: '01 Nov 2011',
    status: true,
  },
]);



import {
  Select,
  SelectContent,
  SelectGroup,

  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet'

import {
  Table, TableRow, TableBody, TableHeader,
  TableCaption,
  TableCell,
  TableHead,
} from '@/components/ui/table'



import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'







const onSubmit = handleSubmit(async (values) => {
  const user = {
    username: values.username,
    userEmail: values.userEmail,
    category: (newUser.value.category as 'Vendor' | 'Admin'),
    dateJoined: formattedDate.value,
    status: true,
  };

  users.value.push(user);

  toast({
    title: 'You submitted the following values:',
    description: JSON.stringify(values, null, 2),
  });

  newUser.value = {
    username: '',
    userEmail: '',
    category: '',
  };
});

const toggleStatus = (user: { status: boolean; }) => {
  user.status = !user.status;
};
const formattedDate = useDateFormat(useNow(), "ddd, D MMM YYYY");



</script>


<template>
  <div class=" flex-col flex h-svh min-h-[600px] bg-[#f0f8ff]">
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
      <Sheet>
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
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Add a new profile here. Click submit when you're done.
            </SheetDescription>
          </SheetHeader>
          <CardContent class="grid gap-4">

            <form class="space-y-4" @submit="onSubmit">

              <FormField v-slot="{ componentField }" name="username">
                <FormItem v-auto-animate>
                  <FormLabel class="text-blue-900">Username</FormLabel>
                  <FormControl>
                    <Input id="text" type="text" placeholder="username" class="focus-visible:ring-blue-600"
                      v-bind="componentField" />
                  </FormControl>

                  <FormMessage for="username" />
                </FormItem>
              </FormField>


              <FormField v-slot="{ componentField }" name="userEmail">
                <FormItem v-auto-animate>
                  <FormLabel class="text-blue-900">Email</FormLabel>
                  <FormControl>
                    <Input id="email" type="email" placeholder="weeshr@admin.com" class="focus-visible:ring-blue-600"
                      v-bind="componentField" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" name="category">
                <FormItem v-auto-animate>
                  <FormLabel class="text-blue-900">User Category</FormLabel>
                  <FormControl>
                    <select v-model="newUser.category" id="categories"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      v-bind="componentField"
                      <option value="Vendor">Vendor</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <Button type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </SheetContent>
      </Sheet>
    </div>




    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 bg-[#f0f8ff]">

      <div class="flex  justify-between items-center py-4 px-6 bg-[#FFFFFF] rounded-lg">
        <div class="text-2xl font-bold tracking-tight text-[#020721]">App Users
          <p class="text-xs   text-[#02072199]">List of Admins & Users</p>
        </div>

        <Search />





      </div>

      <div class="bg-white overflow-auto rounded-lg shadow ">
        <Table>
          <TableHeader>
            <TableRow class="text-xs sm:text-sm md:text-base text-[#02072199] font-semibold bg-gray-200">
              <TableHead> Users </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>User's Category</TableHead>
              <TableHead>Onboarded</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <svg width="20" height="50" viewBox="0 0 20 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 31L12.5118 26.0606C13.1627 25.4773 13.1627 24.5227 12.5118 23.9394L7 19" stroke="#54586D"
                    stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in users" :key="user.username">
              <TableCell class="font-medium">{{ user.username }}</TableCell>
              <TableCell>{{ user.userEmail }}</TableCell>
              <TableCell>{{ user.category }}</TableCell>
              <TableCell>{{ user.dateJoined }}</TableCell>
              <TableCell>
                <button @click="toggleStatus(user)"
                  :class="{ 'bg-[#00C37F]': user.status, 'bg-[#020721]': !user.status }"
                  class="text-white text-sm px-4 py-2 rounded-md">
                  {{ user.status ? 'Active' : 'Non-Active' }}
                </button>

              </TableCell>
              <TableCell>
                <svg width="20" height="50" viewBox="0 0 20 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 31L12.5118 26.0606C13.1627 25.4773 13.1627 24.5227 12.5118 23.9394L7 19" stroke="#54586D"
                    stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <!-- Add any action button or link here -->
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </div>



    </div>

  </div>




</template>