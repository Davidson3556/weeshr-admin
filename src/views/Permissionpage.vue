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
  <div class="grid grid-cols-2 gap-4">
    
    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700">View Employees</span>
        
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700">View Subscription History</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700">View warehouse Zone</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700">View warehouse zone</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </div>
    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700">View Warehouse Bin Location</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700">View Inventory Items</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700">View Warehouse Bin Location</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700">View Inventory Items</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700">View Roles</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <label class="flex items-center space-x-2">
        <input type="checkbox" class="form-checkbox">
        <span class="text-gray-700">View Roles</span>
      </label>
      <p class="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
      </p>
    </div>

  
  </div>




    
  
</TabsContent>

      </Tabs>
    </div>
  </div>
</template>

