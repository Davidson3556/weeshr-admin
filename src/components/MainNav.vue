<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
  <nav :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')">
    <a class="text-sm font-medium transition-colors hover:text-primary cursor-pointer" href="/"
      >Overview</a
    >

    <a
      aria-disabled="true"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
    >
      Customers
    </a>

    <a
      aria-disabled="true"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
    >
      Products
    </a>

    <a
      aria-disabled="true"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
      href="/permissionpage"
    >
      Permission
    </a>
    
  </nav>
</template>
