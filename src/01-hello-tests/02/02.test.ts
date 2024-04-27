import {CityType, StydentType} from "./02";
import {addSkill, changeStudentLive, makeStudentActive} from "./02";

let city: CityType;
let student: StydentType;

beforeEach(() => {
//     student = {
//         id: 1,
//         name: "Dimych",
//         age: 32,
//         isActive: false,
//         address: {
//             streetTitle: "Surganova 2",
//             city: {
//                 title: "Minsk",
//                 countryTitle: "Belarus"
//             }
//         },
//         technologies: [
//             {
//                 id: 1,
//                 title: "HTML"
//             },
//             {
//                 id: 2,
//                 title: "CSS"
//             },
//             {
//                 id: 3,
//                 title: "React"
//             }
//         ]
//     }
// })

    city = {
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: "Hogwarts street"
                    }
                }
            },
        ],

        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 200,
                    street: {
                        title: "Central Str"
                    }
                }
            }, {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 1000,
                    street: {
                        title: "Souths park str"
                    }
                }
            },
        ]
    }
})

test("city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(200);
    expect(city.houses[2].address.street.title).toBe("Hogwarts street");
})

test("city should contains hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL")
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Str")

    expect(city.governmentBuildings[1].type).toBe("FIRE-STATION")
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe("Souths park str")
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})


test('does student live in city', () => {
    expect(student.address.city.title).toBe('Minsk')
    const result1 = changeStudentLive(student, 'Moscow')
    const result2 = changeStudentLive(student, 'Minsk')
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})

