<template>
    <header class="container flex items-center justify-between absolute top-0 left-0 right-0 py-4">
        <h1 class="font-bold text-xs">
            <NuxtLink :to="{ name: 'home' }">
                CHAWKI Tariq
            </NuxtLink>
        </h1>
        <Button :as-child="true">
            <NuxtLink :to="{ name: 'contact' }">
                Me contacter
            </NuxtLink>
        </Button>
    </header>
</template>