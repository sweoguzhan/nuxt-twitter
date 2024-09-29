<template>
  <span
      :class="[
      textClass,
      fontClass,
      boldClass,
      alignmentClass,
    ]"
      :style="customStyle"
  >
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'text--secondary',
  },
  fontSize: {
    type: String,
    default: '16px',
  },
  noUnderline:{
    type: Boolean,
    default: false,
  },
  bold: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'center', 'right'].includes(value),
  },
  fontFamily: {
    type: String,
    default: 'Helvetica Neue, Arial, sans-serif',
  },
});

const textClass = computed(() => props.color);
const fontClass = computed(() => ({
  fontFamily: props.fontFamily,
  'text-decoration-none': props.noUnderline,
}));
const boldClass = computed(() => (props.bold ? 'font-weight-bold' : 'font-weight-normal'));
const alignmentClass = computed(() => ({
  'text-left': props.align === 'left',
  'text-center': props.align === 'center',
  'text-right': props.align === 'right',
}));

const customStyle = computed(() => ({
  fontSize: props.fontSize,
}));
</script>

<style scoped>
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.font-weight-bold {
  font-weight: 700;
}
.font-weight-normal {
  font-weight: 400;
}
span{
  text-transform: none;
}
</style>
