<script setup lang="ts">
import Search from '@/components/UseSearch.vue'
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useDateFormat, useNow } from '@vueuse/core'
import MainNav from '@/components/MainNav.vue'




import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTrigger
} from '@/components/ui/sheet'

import {
  Table,
  TableRow,
  TableBody,
  TableHeader,
  TableCell,
  TableHead
} from '@/components/ui/table'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'



const formSchema = toTypedSchema(
  z.object({
    firstName: z.string({
        required_error: 'Please enter user first name'
      }).min(2).max(50),
      lastName: z.string({
        required_error: 'Please enter user last name'
      }).min(2).max(50),
    userEmail: z.string().email(),
    dob: z.string(),
    gender: z.enum(['Male', 'Female']),
    
  })
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})


const newUser = ref({
  firstName: '',
  userEmail: '',
  lastName: '',
  gender: '',
  dob: '',
})

const users = ref([
  {
    firstName: '@horrison',
    userEmail: 'alisha@gmail.com',
    gender: 'Vendor',
    dateJoined: '01 Nov 2011',
    status: true
  }
])






const onSubmit = handleSubmit(async (values) => {
  const user = {
    firstName: values.firstName,
    userEmail: values.userEmail,
    gender: newUser.value.gender as 'Vendor' | 'Admin',
    dateJoined: formattedDate.value,
    status: true
  }

  users.value.push(user)


  toast({
    title: 'You submitted the following values:',
    description: JSON.stringify(values, null, 2)
  })

  newUser.value = {
    firstName: '',
    lastName: '',
    userEmail: '',
    gender: '',
    dob: '',
  }
})

const toggleStatus = (user: { status: boolean }) => {
  user.status = !user.status
}
const formattedDate = useDateFormat(useNow(), 'ddd, D MMM YYYY')
</script>

<template>
  <div class="flex-col flex bg-[#f0f8ff] min-h-[100vh] px-4 sm:px-10">
    <MainNav class="mx-6" headingText="User" />
    <div class="px-10 py-10 ml-auto">
      <Sheet>
        <SheetTrigger as-child>
          <button class="bg-[#020721] px-4 py-2 rounded-xl w-50 h-12">
            <div class="text-base text-[#F8F9FF] text-center flex items-center">
              Add New User
              <svg
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-6"
              >
                <path
                  d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                  fill="#F8F9FF"
                />
              </svg>
            </div>
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <h3 class="text-2xl font-medium">Create User profile</h3>
            <SheetDescription>
              Add a new profile here. Click submit when you're done.
            </SheetDescription>
          </SheetHeader>
          <CardContent class="grid gap-4 pt-10">
            <form class="space-y-4" @submit="onSubmit">
              <FormField v-slot="{ componentField }" name="firstName">
                <FormItem v-auto-animate>
                  <FormLabel class="text-blue-900">First Name</FormLabel>
                  <FormControl>
                    <Input
                      id="text"
                      type="text"
                      placeholder="First Name"
                      class="focus-visible:ring-blue-600"
                      v-bind="componentField"
                    />
                  </FormControl>

                  <FormMessage for="firstName" />
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" name="lastName">
                <FormItem v-auto-animate>
                  <FormLabel class="text-blue-900">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      id="text"
                      type="text"
                      placeholder="Last Name"
                      class="focus-visible:ring-blue-600"
                      v-bind="componentField"
                    />
                  </FormControl>

                  <FormMessage for="lastName" />
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" name="userEmail">
                <FormItem v-auto-animate>
                  <FormLabel class="text-blue-900">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="weeshr@admin.com"
                      class="focus-visible:ring-blue-600"
                      v-bind="componentField"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              </FormField>

              <!-- <FormField v-slot="{ componentField }" name="dob">
                <FormItem v-auto-animate>
                  <FormLabel class="text-blue-900">Email</FormLabel>
                  <FormControl>
                    <useSuperAdminStore></useSuperAdminStore>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              </FormField> -->
              
<!-- 
              <FormField v-slot="{ componentField }" name="gender">
                <FormItem v-auto-animate>
                  <FormLabel class="text-blue-900">User gender</FormLabel>
                  <FormControl>
                    <select
                      v-model="newUser.gender"
                      id="gender"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      v-bind="componentField"
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField> -->

              <Button type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </SheetContent>
      </Sheet>
    </div>

    <Card class="container px-4 pt-6 pb-10 mx-auto sm:px-6 lg:px-8 bg-[#FFFFFF] rounded-2xl">
      <div class="flex items-center justify-between px-6 py-4">
        <div class="text-2xl font-bold tracking-tight text-[#020721]">
          Back Office Users
          <p class="text-xs text-[#02072199] py-2">List of Admin Users</p>
        </div>

        <Search />
      </div>

      <div class="overflow-auto bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow
              class="text-xs sm:text-sm md:text-base text-[#02072199] font-semibold bg-gray-200"
            >
              <TableHead> Users </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>gender</TableHead>
              <TableHead>Onboarded</TableHead>
              <TableHead>Status</TableHead>
              <TableHead> </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in users" :key="user.firstName">
              <TableCell class="font-medium">{{ user.firstName }}</TableCell>
              <TableCell>{{ user.userEmail }}</TableCell>
              <TableCell>{{ user.gender }}</TableCell>
              <TableCell>{{ user.dateJoined }}</TableCell>
              <TableCell>
                <button
                  @click="toggleStatus(user)"
                  :class="{ 'bg-[#00C37F]': user.status, 'bg-[#020721]': !user.status }"
                  class="px-4 py-2 text-sm text-white rounded-md"
                >
                  {{ user.status ? 'Active' : 'Inactive' }}
                </button>
              </TableCell>
              <TableCell>
                <!-- <svg width="20" height="50" viewBox="0 0 20 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 31L12.5118 26.0606C13.1627 25.4773 13.1627 24.5227 12.5118 23.9394L7 19" stroke="#54586D"
                    stroke-opacity="0.8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg> -->
                <!-- Add any action button or link here -->
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Card>
  </div>
</template>
@/stores/super-admin/super-admin@/stores/super-admin/super-admin