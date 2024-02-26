export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [{
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: "title"
            }
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'excertp',
            title: 'Excertp',
            type: 'text',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {type: "block"},
                {
                    type: "image",
                    fields: [{type: "text", name: "alt", title: "Alt"}]
                }
            ]
        },

        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'tag'}]}]
        }


    ]
}