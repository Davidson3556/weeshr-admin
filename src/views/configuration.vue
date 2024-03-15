<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import UserNav from '@/components/UserNav.vue'

  import { useDateFormat, useNow } from "@vueuse/core";
  const formattedDate = useDateFormat(useNow(), "ddd, D MMM YYYY");
  </script>


  <template>
  <div class=" flex-col flex h-svh h-full bg-[#f0f8ff]">
    <div class="flex h-16 items-center px-4">

<div class="mx-6 text-1xl  tracking-tight text-gray-500">
{{ formattedDate }}

<p class="text-3xl font-bold tracking-tight text-gray-800">
          Configuration

        </p>
</div>

<div class="ml-auto flex items-center space-x-4">
  <p class="font-semibold tracking-tight text-gray-800">Abiola Waltz<UserNav/>
    <p class="font-normal text-xs tracking-tight ml-4 ">Adminstrator</p>
  </p>
  
  
</div>

</div>
    <div class="flex-1 space-y-4 p-8 pt-6 bg-[#f0f8ff]  ">

        <div class="flex items-center justify-between space-y-2 flex-col sm:flex-row">
           
          
       
         
        </div>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-20">
               
               
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold  text-gray-800">
                  Role Manager
                </div>
               
              </CardContent>
            </Card>
            <Card>
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-20">
               
               
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold  text-gray-800">
                  Weesh Category
                </div>
               
              </CardContent>
            </Card>

            <Card>
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-20">
               
               
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold  text-gray-800">
                  Weesh Gist
                </div>
               
              </CardContent>
            </Card>
            
            
             
              
      
          </div>
      </div>
      
       </div> 
    
 


  </template>