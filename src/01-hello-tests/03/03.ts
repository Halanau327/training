export type GovernmentBuildingsType = {
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

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
    id?: number
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
}

export const changeBudget = (building: GovernmentBuildingsType, budged: number) => {
    building.budget += budged;
}

export const repairHouse = (rep: HousesType) => {
    rep.repaired = true
}

export const toFireStaff = (fire: GovernmentBuildingsType, staffCnt: number) => {
    fire.staffCount -= staffCnt
}

export const toHireStaff = (hire: GovernmentBuildingsType, staffCnt: number) => {
    hire.staffCount += staffCnt
}