<template>
    <Card>
        <CardHeader>
            <CardTitle v-if="title">{{ title }}</CardTitle>
            <CardDescription v-if="description">{{ description }}</CardDescription>
        </CardHeader>
        <CardContent v-if="$slots.default">
            <slot />
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
const { title, description } = defineProps<{
    title?: string,
    description?: string
}>()
</script>