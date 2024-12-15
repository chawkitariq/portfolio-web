<template>
    <header class="container flex items-center justify-between py-4">
        <h1 class="font-bold text-xs">
            <NuxtLink to="/">
                CHAWKI Tariq
            </NuxtLink>
        </h1>
        <Button :as-child="true">
            <NuxtLink to="/contact">
                Me contacter
            </NuxtLink>
        </Button>
    </header>
</template>