<template>
  <section class="py-8 lg:py-20 xl:pt-[128px] xl:pb-[120px]">
    <div class="container">
      <RecipesSearch
        :recipes="recipes"
        static
        class="relative z-10 mb-8 lg:hidden"
      />
      <h2
        class="leading-none font-semibold tracking-[-0.41px] text-appGray-700 mb-5 lg:text-2xl lg:mb-9 xl:text-4xl xl:mb-12"
      >
        {{ data.title }}
      </h2>
      <div
        class="grid grid-cols-2 gap-x-5 gap-y-8 mb-8 lg:grid-cols-3 lg:mb-16 xl:gap-x-12 xl:gap-y-16"
      >
        <RecipesCard
          v-for="(card, index) in recipes"
          :key="index"
          :card="card"
        />
      </div>
      <div class="flex justify-center">
        <Btn to="/recipes" theme="dark">
          <span class="mr-2">{{ data.cta_label }}</span>
          <ArrowIcon class="w-[14px] h-[14px] lg:w-5 lg:h-5" />
        </Btn>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { HomeRecipesGroup, RecipeEntryMeta } from '~~/bcms/types';
import ArrowIcon from '@/assets/icons/arrow-right.svg';

const props = defineProps({
  data: {
    type: Object as PropType<HomeRecipesGroup>,
    required: true,
  },
});

const recipes = computed(() => {
  return props.data.recipes.map((e) => {
    const meta = e.meta.en as RecipeEntryMeta;

    return {
      title: meta.title,
      slug: meta.slug,
      cover: meta.cover_image,
      categories: meta.categories.map((i) => i.meta.en?.title || ''),
      description: meta.description,
    };
  });
});
</script>
