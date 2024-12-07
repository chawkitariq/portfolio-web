<template>
    <section class="grid gap-8">
        <div>
            <p v-if="subTitle" class="text-sm text-muted-foreground uppercase">{{ subTitle }}</p>
            <h1 v-if="title"
                class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{{
                    title }}</h1>
        </div>
        <slot />
    </section>
</template>

<script setup lang="ts">
const { title, subTitle } = useAttrs()
</script>
