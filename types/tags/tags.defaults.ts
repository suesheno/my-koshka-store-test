import { STRAPI_TAG } from './tags'

export const tagDefaults: STRAPI_TAG = {
    tag: 'Loading ...',
    active: true,
    claimed: false,
    createdAt: null,
    updatedAt: null,
    id: 0,
    pet: {
        name: 'Loading . . .',
        age: '99',
        description: 'Loading description',
        image: {
            url: '',
            alternativeText: 'Loading image'
        },
        vaccinated: false,
        sterilized: false,
        contact: '',
        cityLicense: undefined,
        microchip: undefined,
        diseases: ['none'],
        tags: [],
    }
}