<template>
    <div class="bg-zinc-50">
        <div class="container py-48">
            <NuxtLayout name="section" title="Me retrouver" subTitle="Réseaux sociaux">
                <div class="grid grid-cols-3 gap-12">
                    <a v-for="url in [1, 2, 3]" href="https://github.com/chawkitariq" target="_blank">
                        <BasicCard title="Github" description="github.com/chawkitariq" />
                    </a>
                </div>
            </NuxtLayout>
        </div>
    </div>
</template>