<template>
  <div>
    <button @click="handleClick" :class="['button', variantClass]"
    ref="buttonRef">
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';


const props = defineProps<{
  label: string,
  variant?: 'ok' | 'search' | 'next';
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
  emit('click');
}

const variantClass = computed(() => {
  switch (props.variant) {
    case 'ok':
      return 'button-ok';
    case 'search':
      return 'button-search';
    case 'next':
      return 'button-next';
    default:
      return 'button-ok';
  }
});
</script>

<style>

</style>