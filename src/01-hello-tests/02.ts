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