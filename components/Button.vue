<template>
  <button @click="handleClick" :class="['button', variantClass]" ref="buttonRef">
    {{ label }}
    <span class="ripple"></span>
  </button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps<{
  label: string,
  variant?: 'header' | 'big';
}>();

const emit = defineEmits<{
  (e: 'click'): void,
}>();

const buttonRef = ref<HTMLElement | null>(null);

const handleClick = (event: MouseEvent | TouchEvent) => {
  emit('click');
  
  if (buttonRef.value) {
    // Create ripple element
    const ripple = buttonRef.value.querySelector('.ripple') as HTMLElement;

    ripple.classList.remove('ripple-active');
    void ripple.offsetWidth;
    
    // Find ripple size
    const diameter = Math.max(buttonRef.value.clientWidth, buttonRef.value.clientHeight);
    const radius = diameter / 2;
    ripple.style.width = ripple.style.height = `${diameter}px`;
    
    // Calculate ripple position
    let x: number, y: number;
    const rect = buttonRef.value.getBoundingClientRect();
    
    if (event instanceof MouseEvent) {
      // Mouse click position
      x = event.clientX - rect.left - radius;
      y = event.clientY - rect.top - radius;
    } else if (event instanceof TouchEvent) {
      // Touch position
      x = event.touches[0].clientX - rect.left - radius;
      y = event.touches[0].clientY - rect.top - radius;
    } else {
      // Fallback just in case
      x = buttonRef.value.offsetWidth / 2 - radius;
      y = buttonRef.value.offsetHeight / 2 - radius;
    }

    x += window.scrollX;
    y += window.scrollY;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add('ripple-active');
    
    // Remove ripple after animation completes
    ripple.addEventListener('transitionend', function removeClass() {
      ripple.classList.remove('ripple-active');
      ripple.removeEventListener('transitioned', removeClass);
    });
  }
};

const variantClass = computed(() => {
  switch (props.variant) {
    case 'header':
      return 'button-header';
    case 'big':
      return 'button-big';
    default:
      return 'button-big';
  }
});
</script>

<style lang="sass" scoped>
.button
  position: relative
  padding: 24px 48px
  cursor: pointer
  overflow: hidden

  &:active
    transform: scale(0.98)

.button-big
  @include font-primary(500)
  font-size: 20px
  color: white
  background-color: $color-primary
  border: none
  border-radius: 35px

.button-header
  @include font-primary(700)
  font-size: 20px
  color: white
  background-color: transparent
  border: 2px solid white
  border-radius: 5px

.ripple
  position: absolute
  border-radius: 50%
  width: 50px
  height: 50px
  transform: scale(0)
  opacity: 1
  pointer-events: none

.ripple-active
  transform: scale(4)
  opacity: 0
  transition: transform 600ms ease, opacity 600ms ease

.button-big .ripple
  background-color: $color-secondary

.button-header .ripple
  background-color: #FFFFFF44
</style>