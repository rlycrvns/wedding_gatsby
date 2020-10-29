import { MdInsertPhoto as icon } from 'react-icons/md';

export default {
  name: 'photos',
  title: 'Photos',
  type: 'document',
  icon,
  fields: [
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
      media: 'image',
    },
    prepare: ({ media }) => ({
      media,
    }),
  },
};
