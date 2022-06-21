<template>
  <div>
    <button @click="$emit('close-modal')"></button>
    <slot />
  </div>
</template>

<script>
export default {
}
</script>
