import {GovernmentBuildingsType, HousesType} from "./03";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}



export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses:Array<HousesType>) => {
    let callbackfn = (h: HousesType) => `Hello guys from ${h.address.street.title}`;

    return houses.map(callbackfn)
}