<template>
    <Card>
        <img v-if="imgSrc || imgAlt" :src="imgSrc" alt="{{ imgAlt }}" class="h-[350px] w-full object-cover rounded-t">


        <CardHeader>

            <CardDescription v-if="tags?.length">
                <ul class="flex flex-wrap items-center gap-2">
                    <li v-for="tag in tags">
                        <Badge variant="secondary">{{ tag }}</Badge>
                    </li>
                </ul>
            </CardDescription>

            <CardTitle>{{ title }}</CardTitle>
        </CardHeader>

        <CardContent>
            <slot />
        </CardContent>

        <CardFooter>
            <Button v-if="url" variant="outline">
                <a href="{{ url }}">En savoir plus</a>
            </Button>
        </CardFooter>
    </Card>
</template>

<script setup lang="ts">
import Badge from './ui/badge/Badge.vue';

const { imgSrc, imgAlt = "", tags, title, url } = defineProps<{
    imgSrc?: string,
    imgAlt?: string,
    tags?: string[],
    title?: string,
    url?: string,
}>()
</script>