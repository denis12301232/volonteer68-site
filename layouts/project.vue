<script setup lang="ts">
const { goBack } = useNavigation();
</script>

<template>
  <header
    :class="[
      'rounded-md',
      'border',
      'border-gray-300',
      'bg-gray-100',
      'p-3',
      'dark:border-blue-900/40',
      'dark:bg-gray-900',
    ]"
  >
    <Button class="ml-2 !p-2" text rounded severity="secondary" aria-label="back" @click="goBack">
      <Icon name="prime:arrow-left" size="35" />
    </Button>
  </header>
  <main>
    <slot />
  </main>
</template>
