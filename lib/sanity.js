import { createClient } from "@sanity/client";
import ImageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'mb5lr9si',
    useCdn: false,
})

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source)
}