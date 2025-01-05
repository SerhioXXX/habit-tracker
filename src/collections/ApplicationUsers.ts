import type { CollectionConfig } from 'payload'

export const ApplicationUsers: CollectionConfig = {
  slug: 'application-users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
