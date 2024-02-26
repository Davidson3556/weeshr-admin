<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-vue-next'

</script>
<template>
  <div class="max-w-full text-center">
    <img
      class="w-full h-auto"
      src="https://res.cloudinary.com/dufimctfc/image/upload/v1708972628/Container_rydkpd.svg"
      alt=""
    />
    <div class="flex justify-center items-center mt-4">

     <Button class="w-auto  sm:w-auto bg-lime-500 hover:bg-lime-600 ">
        <a href="/login" class="block p-4 text-black">
          Sign in
        </a>
      </Button>

    </div>
  </div>
</template>
