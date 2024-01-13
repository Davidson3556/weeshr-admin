<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { Button } from '@/components/ui/button'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-vue-next'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'
import router from '@/router'


const loading = ref(false);


const backgroundImages = [
  'https://res.cloudinary.com/drykej1am/image/upload/v1703539604/weeshr_admin/cltgg7aorzfbku6tcodq.jpg',
  'https://res.cloudinary.com/drykej1am/image/upload/v1703539599/weeshr_admin/zwyzwma2zqddwczmvtrq.jpg',
  'https://res.cloudinary.com/drykej1am/image/upload/v1703539593/weeshr_admin/ovd0fdxnikreyt3ya2w3.jpg',
]

const quotes = [
  "Weehr App turns my ordinary moments into extraordinary 🌟 memories...",
  "Experiencing pure joy is just a 🎉 tap away with Weehr App...",
  "Weehr App has redefined the art of wish fulfillment, making 🎂 dreams come true effortlessly...",
  "Navigating life's wishes is a 🎁 breeze, thanks to the intuitive Weehr App...",
  "Every 🌈 wish feels like pure magic, courtesy of Weehr App's innovation and simplicity..."
];

const successMessages = [
  'Welcome, OliviaOps! Your daily dose of admin joy is here!',
  "Woohoo! OliviaOps just joined the admin party. Let's celebrate!",
  "Look up in the server room! It's OliviaOps – our superhero admin!",
  'Buckle up, OliviaOps! Your admin superpowers fueled by coffee are activated.',
  'Adventure awaits, OliviaOps! Ready to explore the admin universe?',
  'Abracadabra! OliviaOps, the Tech wizard, is in the house.',
  'Welcome, OliviaOps! The admin puzzle is ready for your genius touch.',
]



const authors = [
  "Chloe Thompson",
  "Mason Carter",
  "Isabella Scott",
  "Noah Adams",
  "Ava Miller"
];

const backgroundImage = ref(getRandomImage())

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length)
  return backgroundImages[randomIndex]
}



const quote = ref<string>("");
const author = ref<string>("");

onMounted(() => {
  // Choose a random index for variety
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Set the data properties
  quote.value = quotes[randomIndex];
  author.value = authors[randomIndex];
});




const formSchema = toTypedSchema(z.object({
  userEmail: z.string({
    required_error:'Please enter a valid email'
  })
    .email(),

  password: z.string(
    {
      required_error:"Please enter your password "
    }
  ).min(9)





}))


const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((
  // values    <--- soon to be used
) => {
  loading.value = true;

  const randomIndex = Math.floor(Math.random() * successMessages.length)
  const randomMessage = successMessages[randomIndex]
  toast({
    title: randomMessage,
    variant: 'success',

  })
  setTimeout(() => {
    router.push({ name: 'home' })
  },2000)
})

</script>

<template>



  <div

    class=" bg-[#f0f8ff] container flex  relative  w-full h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

    <div
      :style="{ 'background-image': 'url(' + backgroundImage + ') ' }"
      class="relative bg-center bg-no-repeat bg-cover hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class=" inset-0 h-full flex  text-center justify-center items-center w-full " >


        <a aria-current="page" class="flex items-center -translate-y-[120px] " >
          <img
            class="w-auto h-20"
            src="https://res.cloudinary.com/drykej1am/image/upload/v1697377875/weehser%20pay/Weeshr_Light_lrreyo.svg"
            alt=""
          />
          <span
            class=" self-center pl-2  font-semibold text-4xl whitespace-nowrap text-primary-700 -translate-y-[2px]"
          >
              Admin
            </span>
        </a>

        <div class="absolute w-[80%] z-20 mt-auto bottom-48">
          <blockquote class="space-y-2">
            <p class="text-lg">
              {{ quote }}
            </p>
            <footer class="text-sm text-end">
              {{ author }}
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
    <div  class="lg:p-8  w-full flex justify-center "

    >
      <div class="lg:p-8  w-[80%] ">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]  ">

        <div class="flex flex-col space-y-2 text-center ">

        <a aria-current="page" class="flex lg:hidden justify-center -translate-y-[60px]"  >
          <img
            class="w-auto h-16"
            src="https://res.cloudinary.com/drykej1am/image/upload/v1704590604/j7aiv2jdwuksre2bpclu.png"
            alt=""
          />
          <span
            class=" self-center pl-2  font-semibold text-3xl whitespace-nowrap text-primary-700 -translate-y-[2px]"
          >
              Admin
            </span>
        </a>
        </div>

        <Card class="py-3">
          <CardHeader class="space-y-1">
            <CardTitle class="text-2xl text-blue-900">
              Sign In
            </CardTitle>
            <CardDescription>
              Please sign in to your account.

            </CardDescription>
          </CardHeader>
          <CardContent class="grid gap-4">

            <form class="space-y-4 " @submit.prevent="onSubmit">
              <FormField v-slot="{ componentField }" name="userEmail">
                <FormItem v-auto-animate>
                  <FormLabel class=" text-blue-900">Username</FormLabel>
                  <FormControl>
                    <Input id="email" type="email" placeholder="weeshr@admin.com" class=" focus-visible:ring-blue-600 " v-bind="componentField" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="password">
                <FormItem>
                  <FormLabel class=" text-blue-900">Password</FormLabel>
                  <FormControl>
                    <Input id="password" type="password" placeholder="weeshr@admin.com" class=" focus-visible:ring-blue-600 " v-bind="componentField" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              </FormField>

            </form>


          </CardContent>
          <CardFooter>
            <Button
                    @click="onSubmit()"
                    type="submit" class="w-full bg-blue-900 hover:bg-blue-800" >

              <Loader2 v-if="loading" class="w-4 h-4 mr-2 animate-spin" />

              Sign In            </Button>
            <div class="pt-5 text-xs text-center text-gray-400">
            <span>
              Copyright © 2023
            </span>
            </div>

          </CardFooter>

        </Card>
      </div>
    </div>
    </div>
  </div>
</template>