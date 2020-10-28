import { FaImage as icon } from 'react-icons/md';

export default {
  name: 'photo',
  title: 'Photos',
  type: 'document',
  icon,
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Caption of the photo',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'caption',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
    prepare: ({ title, media }) => ({
      title,
      media,
    }),
  },
};
