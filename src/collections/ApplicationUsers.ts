import { isAdminOrSelf } from '@/access/isAdminOrSelf'
import type { CollectionConfig } from 'payload'

export const ApplicationUsers: CollectionConfig = {
  slug: 'application-users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    create: () => true,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: ['admin', 'user'],
      defaultValue: 'user',
    },
    // Email added by default
    // Add more fields as needed
  ],
}
