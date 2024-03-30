type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}

type StreetNumber = {
    title: string
}

type AddressType = {
    number: number
    street: StreetNumber
}

type HousesType = {
    buildedAt: number
    repaired: false
    address: AddressType
}

export type CityType = {
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
}

type StudentCityType = {
    title: string
    countryTitle: string
}

type StudentAddressType = {
    streetTitle: string
    city: StudentCityType
}

type TechnologiesType = {
    id: number
    title: string
}

export type StydentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: StudentAddressType
    technologies: Array<TechnologiesType>
}

export const addSkill = (st: StydentType, js: string) => {
    st.technologies.push ({
        id: new Date().getTime(),
        title: "JS"
    })
}

export const makeStudentActive = (st: StydentType) => {
    st.isActive = true;
}

export const changeStudentLive = (st:StydentType, city: string) => {
    return st.address.city.title === city
}