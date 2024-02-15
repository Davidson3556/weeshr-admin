<script setup lang="ts">
import MainNav from '@/components/MainNav.vue'
import Search from '@/components/UseSearch.vue'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

</script>

<template>


  <div class=" flex-col flex h-svh h-full bg-[#f0f8ff]">
    <div class="border-b">
      <div class="flex h-16 items-center px-4">

        <MainNav class="mx-6" />
        <div class="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
    <div class="flex-1 space-y-4 p-8 pt-6 bg-[#f0f8ff]  ">
      <div class="flex items-center justify-between space-y-2 flex-col sm:flex-row">
        <h2 class="text-3xl font-bold tracking-tight text-blue-900">
          Permission page
        </h2>
        <div class="flex items-center space-x-2">
        </div>
      </div>
      <Tabs default-value="overview" class="space-y-4">
        <TabsList class="text-blue-900">
          <TabsTrigger value="overview" class="text-blue-900 active:text-blue-900">
            Read
          </TabsTrigger>
          <TabsTrigger value="analytics" >
            Create
          </TabsTrigger>
          <TabsTrigger value="reports" >
            Update
          </TabsTrigger>
          <TabsTrigger value="notifications" >
            Delete
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" class="space-y-4">
  <div class="grid grid-cols-2 ">
    
   

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700 md:text-lg lg:text-xl font-bold text-center md:block lg:inline-block">History</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700 md:text-lg lg:text-xl font-bold text-center md:block lg:inline-block">Subcription Historty</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </p>
    </div>

    
    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700 md:text-lg lg:text-xl font-bold text-center md:block lg:inline-block">View Inventory Items</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700 md:text-lg lg:text-xl font-bold text-center md:block lg:inline-block">View Roles</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
  <label class="flex items-center space-x-2">
    <input type="checkbox" class="form-checkbox">
    <span class="text-gray-700 md:text-lg lg:text-xl font-bold text-center md:block lg:inline-block">View Employees</span>
  </label>
  <p class="text-gray-600 mt-2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  </p>
</div>


    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700 md:text-lg lg:text-xl font-bold text-center md:block lg:inline-block">View Inventory Items</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700 md:text-lg lg:text-xl font-bold text-center md:block lg:inline-block">View Inventory Items</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700 md:text-lg lg:text-xl font-bold text-center md:block lg:inline-block">View Roles</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      </p>
    </div>

  
  </div>




    
  
</TabsContent>

      </Tabs>
    </div>
  </div>
</template>

