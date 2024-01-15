import { tagDefaults } from '../tags'

const disease = {
    code: "NONE",
    name: "None",
    locale: "en"
}
export const defaultPetDetails = {
    name: '',
    age: '',
    description: '',
    image: {},
    vaccinated: false,
    sterilized: false,
    contact: '',
    cityLicense: "Not Licenced",
    microchip: "Not Microchiped",
    diseases: [{disease}],
    tags: undefined,
}

export const defaultPet = {
    name: 'Loading . . .',
    age: '99',
    description: 'Loading description',
    image: null,
    vaccinated: false,
    sterilized: false,
    contact: '',
    cityLicense: "Not Licenced",
    microchip: "Not Microchiped",
    diseases: [disease],
    tags: undefined,
}