<template>
  <section class="container grid place-items-center p-96">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      CHAWKI Tariq
    </h1>
    <h2 class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Développeur Full-Stack
    </h2>
  </section>

  <div v-if="services?.length" class="bg-zinc-50">
    <div class="container py-48">
      <NuxtLayout name="section" title="Services" subTitle="Mes Compétences">
        <ul class="grid grid-cols-3 gap-12">
          <li v-for="service in services">
            <Card>
              <CardHeader class="grid gap-4">
                <div v-if="service.icon" v-html="service.icon"></div>
                <CardTitle>{{ service.title }}</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="leading-7">
                  {{ service.description }}
                </p>
              </CardContent>
            </Card>
          </li>
        </ul>
      </NuxtLayout>
    </div>
  </div>

  <div v-if="false" class="container py-48">
    <NuxtLayout name="section" title="Projets" subTitle="Mes clients">
      <ul class="grid grid-cols-3 gap-12">
        <li v-for="i in [0, 1, 2, 3, 4, 5]">
          <PostCard imgSrc="https://picsum.photos/200/300" imgAlt="ds" :tags="['React', 'Vue']" title="Titre"
            url="/home">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Imped it possimus facere, quam ullam corrupti
              alias,
              porro molestias sit fugiat quas similique sint soluta! Dignissimos similique optio, iure ut illo tenetur!
            </p>
          </PostCard>
        </li>
      </ul>
    </NuxtLayout>
  </div>

  <div v-if="socialNetworks?.length">
    <div class="container py-48">
      <NuxtLayout name="section" title="Me retrouver" subTitle="Réseaux sociaux">
        <ul class="grid grid-cols-3 gap-12">
          <li v-for="socialNetwork in socialNetworks">
            <a :href="socialNetwork.url" target="_blank">
              <Card>
                <CardHeader class="flex flex-row items-center justify-between">
                  <div class="grid gap-2">
                    <CardTitle>{{ socialNetwork.title }}</CardTitle>
                    <CardDescription>{{ socialNetwork.description }}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </a>
          </li>
        </ul>
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TService, TSocialNetwork } from '~/types';

definePageMeta({
  layout: 'default'
})

const services: TService[] = []
const socialNetworks: TSocialNetwork[] = []
</script>