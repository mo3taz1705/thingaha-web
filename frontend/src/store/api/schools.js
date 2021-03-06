import last from 'lodash/last'
import thingahaApiClient from '../../utils/thingahaApiClient'

const schoolsDb = [
  {
    id: 1,
    name: 'School1',
    contact_info: '+95090987654',
    address: {
      id: 2,
      division: 'yangon',
      district: 'hlaingtharyar',
      township: 'hlaingtharyar',
      street_address: 'nyaungdon Road',
    },
  },
  {
    id: 2,
    name: 'School2',
    contact_info: '+95090987653',
    address: {
      id: 1,
      division: 'ayeyarwaddy',
      district: 'Maubin',
      township: 'Nyaungdon',
      street_address: 'Bo Min Road',
    },
  },
  {
    id: 3,
    name: 'School3',
    contact_info: '+95090987655',
    address: {
      id: 5,
      division: 'ayeyarwaddy',
      district: 'Maubin',
      township: 'Nyaungdon',
      street_address: 'Bo Min Road',
    },
  },
  {
    id: 4,
    name: 'School4',
    contact_info: '+95090987657',
    address: {
      id: 6,
      division: 'ayeyarwaddy',
      district: 'Maubin',
      township: 'Nyaungdon',
      street_address: 'Bo Min Road',
    },
  },
]

export const fetchSchools = async () => {
  const response = await thingahaApiClient.get('/schools')
  return {
    data: {
      schools: response.data.data.schools,
    },
  }
}

export const createSchool = (values) => {
  // TODO call backend schools create endpoint
  const newSchool = {
    ...values,
    id: last(schoolsDb).id + 1,
  }
  schoolsDb.push(newSchool)
  return {
    data: newSchool,
  }
}

export const editSchool = (values) => {
  // TODO call backend schools edit endpoint
  return {
    data: [...schoolsDb.filter((school) => school.id !== values.id), values],
  }
}
