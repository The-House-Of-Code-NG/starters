import Header from './layout/Header';
import Footer from './layout/Footer';
import React, { FC, PropsWithChildren, useMemo } from 'react';
import { PageProps } from '@/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NowPlaying from '@/components/layout/PlayingEpisode';

interface ExtendedProps extends PropsWithChildren<PageProps> {
  defaultTitle?: string;
}
export const PageWrapper: FC<ExtendedProps> = ({
  page,
  header,
  children,
  footer,
  defaultTitle,
}) => {
  const router = useRouter();
  const routePath = useMemo(() => router.asPath, [router.asPath]);

  const title =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    defaultTitle ?? page?.meta?.title ?? page?.meta.seo?.title ?? 'The Podium';

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const description =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    page.meta?.seo?.description ??
    'Jumpstart your Next project with this BCMS starter. Easily manage your content and scale your application without the backend hassle. Get started now!';
  const image = '/thumbnail.jpg';
  const domain = 'https://podcast-starter.thebcms.com';
  return (
    <div className="overflow-hidden">
      <Head>
        <title>{title} - The Podium</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={`${title} - The Podium`} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          name="ogUrl"
          property="og:url"
          content={`${domain}${routePath}`}
        />
        <meta property="og:title" content={`${title} - The Podium`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="twitter:url" content={`${domain}${routePath}`} />
        <meta property="twitter:title" content={`${title} - The Podium`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header data={header} />
      <main>{children}</main>
      <Footer data={footer} />
      {router.pathname !== 'now-playing' && <NowPlaying />}
    </div>
  );
};
