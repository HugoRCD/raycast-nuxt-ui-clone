<script setup lang="ts">
interface Props {
  disabled: boolean
  items: any[]
}

defineProps<Props>()

const open = defineModel<boolean>('open', { required: true })
</script>

<template>
  <UDropdownMenu
    v-model:open="open" 
    :items
    :disabled
    :content="{ side: 'top', align: 'end' }"
    size="sm"
    :ui="{
      content: 'bg-default/70 backdrop-blur-xl ring ring-accented rounded-lg shadow-raycast-dropdown'
    }"
  >
    <UButton color="neutral" variant="ghost" label="Actions" class="text-dimmed" size="xs">
      <template #trailing>
        <UKbd value="meta" />
        <UKbd value="k" />
      </template>
    </UButton>
  </UDropdownMenu>
</template> 
