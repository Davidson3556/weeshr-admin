<script setup lang="ts">
import Overview from '@/components/UseOverview.vue'
import DateRangePicker from '@/components/DateRangePicker.vue'
import MainNav from '@/components/MainNav.vue'
import Search from '@/components/UseSearch.vue'
import UserNav from '@/components/UserNav.vue'

import { Button } from '@/components/ui/button'
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
    
    <div class="flex-1 space-y-4 p-8 pt-6 bg-[#f0f8ff]  ">
      <div class="flex items-center justify-between space-y-2 flex-col sm:flex-row">
        <h2 class="text-3xl font-bold tracking-tight text-blue-900">
          Permission page
        </h2>
        <div class="flex items-center space-x-2">
          <Button>Back to Home</Button>
        </div>
      </div>
      <Tabs default-value="overview" class="space-y-4">
        <TabsList class="text-blue-900">
          <TabsTrigger value="overview" class="text-blue-900 active:text-blue-900">
            Read
          </TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Create
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Update
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Delete
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" class="space-y-4">
         
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card class="col-span-4">
              <CardHeader>
                <CardTitle><input type="checkbox" id="checkbox5" name="checkbox5" />
            <label for="checkbox5">View Employees</label></CardTitle>
                
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum

                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardTitle><input type="checkbox" id="checkbox5" name="checkbox5" />
            <label for="checkbox5">View Subscription History</label></CardTitle>
                
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardTitle><input type="checkbox" id="checkbox5" name="checkbox5" />
            <label for="checkbox5">View Warehouse Zone</label></CardTitle>
                
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardTitle><input type="checkbox" id="checkbox5" name="checkbox5" />
            <label for="checkbox5">View Warehouse Bin Location</label></CardTitle>
                
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardTitle><input type="checkbox" id="checkbox5" name="checkbox5" />
            <label for="checkbox5">View Inventory Items</label></CardTitle>
                
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card class=" flex w-full col-span-full grid sm:col-span-3">
              <CardHeader>
                <CardTitle><input type="checkbox" id="checkbox5" name="checkbox5" />
            <label for="checkbox5">View Roles</label></CardTitle>
                
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.   You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardHeader>
                <CardTitle><input type="checkbox" id="checkbox5" name="checkbox5" />
            <label for="checkbox5">View Warehouse</label></CardTitle>
                
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              
              <CardHeader>
                <CardTitle><input type="checkbox" id="checkbox5" name="checkbox5" />
            <label for="checkbox5">View Warehouse Shelves</label></CardTitle>
                
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.  You made 265 sales this month.
                </CardDescription>
              </CardHeader>

              <CardHeader>
                <CardTitle><input type="checkbox" id="checkbox5" name="checkbox5" />
            <label for="checkbox5">View Item Categories</label></CardTitle>
                
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.  You made 265 sales this month.
                </CardDescription>
              </CardHeader>

              <CardContent>
              </CardContent>
            </Card>
            
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

