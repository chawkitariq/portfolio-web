<template>
  <section class="container grid place-items-center p-96">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      CHAWKI Tariq
    </h1>
    <h2 class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Développeur Full-Stack
    </h2>
  </section>

  <div class="bg-zinc-50">
    <div class="container py-48">
      <NuxtLayout name="section" title="Services" subTitle="Mes Compétences">
        <ul class="grid grid-cols-3 gap-12">
          <li v-for="i in [0, 1, 2, 3, 4]">
            <BasicCard title="Backend NodeJS (NestJS)">
              <p class="leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cumque eum ex laboriosam, voluptate ipsam.
                Dolores enim atque laborum tempora. Quisquam dolor minima earum dolore voluptates quia quaerat fugit
                facilis!
              </p>
            </BasicCard>
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

  <div class="">
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

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>