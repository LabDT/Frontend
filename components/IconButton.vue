<template>
  <div>
    <button @click="handleClick" class="button" :style="{ '--size': size }">
      <FontAwesomeIcon class="font-awesome-icon" :icon="icon"/>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';

const props = defineProps<{
  variant?: 'ok' | 'search' | 'next';
  size?: string,
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
  emit('click');
}

const icon = computed(() => {
  switch (props.variant) {
    case 'ok':
      return faCheck;
    case 'search':
      return faMagnifyingGlass;
    case 'next':
      return faChevronRight;
    default:
      return faCheck;
  }
})
</script>

<style lang="sass" scoped>
.button
  @include drop-shadow-soft
  margin: 5px
  position: relative
  padding: 5px
  width: var(--size, 50px)
  height: var(--size, 50px)
  cursor: pointer
  overflow: hidden
  background-color: $color-secondary
  border: none
  border-radius: 50%
  color: white

  &:hover
    background-color: $color-secondary-highlight

  &:focus
    @include outline

.font-awesome-icon
  font-size: calc(var(--size, 50px) / 2)

</style>