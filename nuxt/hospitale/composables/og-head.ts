export interface HeadTags {
  setOgHead(data: {
    title?: string;
    description?: string;
    image?: string;
  }): any;
}

export function useHeadTags(): HeadTags {
  const route = useRoute();
  const routePath = computed(() => {
    return route.path;
  });

  return {
    setOgHead({ title, description, image }) {
      if (!title) title = '';
      if (!description) description = '';
      if (!image) image = '/thumbnail.jpg';
      const domain = 'https://hospitale-nuxt.thebcms.com';
      return {
        title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `${description}`,
          },
          {
            property: 'og:site_name',
            content: `${title} - Hospitale`,
          },
          { property: 'og:type', content: 'website' },
          { property: 'twitter:card', content: 'summary_large_image' },
          {
            hid: 'ogUrl',
            property: 'og:url',
            content: `${domain}${routePath.value}`,
          },
          {
            hid: 'ogTitle',
            property: 'og:title',
            content: `${title} - Hospitale`,
          },
          {
            hid: 'ogDescription',
            property: 'og:description',
            content: `${description}`,
          },
          {
            hid: 'ogImage',
            property: 'og:image',
            content: `${image}`,
          },
          {
            hid: 'twitterUrl',
            property: 'twitter:url',
            content: `${domain}${routePath.value}`,
          },
          {
            hid: 'twitterTitle',
            property: 'twitter:title',
            content: `${title} - Hospitale`,
          },
          {
            hid: 'twitterDescription',
            property: 'twitter:description',
            content: `${description}`,
          },
          {
            hid: 'twitterImage',
            property: 'twitter:image',
            content: `${image}`,
          },
        ],
        link: [
          {
            hid: 'canonical',
            rel: 'canonical',
            href: `${domain}${routePath.value}`,
          },
        ],
        htmlAttrs: {
          lang: 'en',
        },
      };
    },
  };
}
