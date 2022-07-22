/* eslint-disable @next/next/no-script-component-in-head */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  url?: string;
  cat?: string;
  imgtype?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' key='charset' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1'
          key='viewport'
        />
        <link rel='icon' href='/favicon.ico' key='favicon' />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        facebook={{
          appId: '281985576166744',
        }}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.url ? props.url : AppConfig.prefix,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          type: 'article',
          article: {
            publishedTime: '2022-06-30T00:00:00+00:00',
            modifiedTime: '2022-06-30T00:00:00+00:00',
            section: props.cat ? props.cat : 'Разни',
            tags: ['Виц', props.cat ? props.cat : 'Разни'],
          },
          images: [
            {
              width: 2136,
              height: 1097,
              type: props.imgtype ? props.imgtype : 'image/png',
              alt: 'Виц',
              url: props.image
                ? props.image
                : `${AppConfig.prefix}/images/default.png`,
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
