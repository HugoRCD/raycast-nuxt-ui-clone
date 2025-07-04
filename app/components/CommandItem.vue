<script setup lang="ts">
interface Props {
  item: {
    icon?: string
    label?: string
    suffix?: string
    type?: string
  }
}

const props = defineProps<Props>()

const emit = defineEmits<{
  rightClick: [event: MouseEvent]
  doubleClick: [item: any]
}>()

const handleRightClick = (event: MouseEvent) => {
  emit('rightClick', event)
}

const handleDoubleClick = () => {
  emit('doubleClick', props.item)
}
</script>

<template>
  <div 
    class="flex items-center justify-between w-full p-1" 
    @contextmenu="handleRightClick"
    @dblclick="handleDoubleClick"
  >
    <div class="flex items-center gap-2.5">
      <div class="flex items-center gap-2.5">
        <NuxtImg :src="item.icon!" class="size-5" />
        <span>{{ item.label }}</span>
      </div>
      <span class="text-muted font-medium">
        {{ item.suffix }}
      </span>
    </div>
    <span class="text-muted text-xs font-medium">
      {{ item.type }}
    </span>
  </div>
</template> 
