import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'bxyu60jv',
  dataset: 'production',
  apiVersion: '2022-02-20',
  useCdn: true,
  token: process.env.PROJECT_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);