// import {
//     upgrateUserLaptop,
//     UserWithBooksType,
//     UserType,
//     UserWithLaptopType,
//     moveUserToOtherHouse,
//     addNewBooksToUser, updateBook, removeBook, WithCompaniesType, updateCompanyTitle, updateCompanyTitle2
// } from "./10";
// import {moveUser} from "./10";
//
// test('reference type test', () => {
//     let user: UserType = {
//         name: 'Dimych',
//         hair: 32,
//         address: {
//             city: 'Minsk',
//         }
//     }
// })
//
// test('update laptop to macbook', () => {
//     let user: UserWithLaptopType = {
//         name: 'Dimych',
//         hair: 32,
//         address: {
//             city: 'Minsk'
//         },
//         laptop: {
//             title: 'Zenbook'
//         }
//     }
//
//
//     const movedUser = moveUser(user, 'Kiev')
//     const changeLaptop = upgrateUserLaptop(user, 'Macbook')
//
//
//     // expect(user).not.toBe(movedUser)
//     // expect(user.address).not.toBe(movedUser.address)
//     // expect(user.laptop).toBe(movedUser.laptop)
//     // expect(movedUser.address.title).toBe('Kiev')
//
//     expect(user.laptop.title).toBe('Zenbook')
//     expect(changeLaptop.laptop.title).toBe('Macbook')
// })
//
//
// test('update house', () => {
//     let user: UserWithLaptopType & UserWithBooksType = {
//         name: 'Dimych',
//         hair: 32,
//         address: {
//             city: 'Minsk'
//         },
//         laptop: {
//             title: 'Zenbook'
//         },
//         books: ['css', 'html', 'js', 'react']
//     }
//
//
//     const userCopy = moveUserToOtherHouse(user, 99)
//
//     expect(user).not.toBe(userCopy)
//     expect(user.books).toBe(userCopy.books)
//     expect(user.laptop).toBe(userCopy.laptop)
//     expect(user.address).not.toBe(userCopy.address)
//     expect(userCopy.address.house).toBe(99)
// })
//
// test('update js to ts', () => {
//     let user: UserWithLaptopType & UserWithBooksType = {
//         name: 'Dimych',
//         hair: 32,
//         address: {
//             city: 'Minsk'
//         },
//         laptop: {
//             title: 'Zenbook'
//         },
//         books: ['css', 'html', 'js', 'react']
//     }
//
//
//     const userCopy = updateBook(user, 'js', 'ts')
//
//     expect(user).not.toBe(userCopy)
//     expect(user.laptop).toBe(userCopy.laptop)
//     expect(user.address).toBe(userCopy.address)
//     expect(user.books).not.toBe(userCopy.books)
//
//     expect(userCopy.books[2]).toBe('ts')
// })
//
// test('remove js book', () => {
//     let user: UserWithLaptopType & UserWithBooksType = {
//         name: 'Dimych',
//         hair: 32,
//         address: {
//             city: 'Minsk'
//         },
//         laptop: {
//             title: 'Zenbook'
//         },
//         books: ['css', 'html', 'js', 'react'],
//
//     }
//
//
//     const userCopy = removeBook(user, 'js')
//
//     expect(user).not.toBe(userCopy)
//     expect(user.laptop).toBe(userCopy.laptop)
//     expect(user.address).toBe(userCopy.address)
//     expect(user.books).not.toBe(userCopy.books)
//     expect(userCopy.books[2]).toBe('react')
// })
//
// test('add new company', () => {
//     let user: UserWithLaptopType & WithCompaniesType= {
//         name: 'Dimych',
//         hair: 32,
//         address: {
//             city: 'Minsk'
//         },
//         laptop: {
//             title: 'Zenbook'
//         },
//         companies: [{id:1, title: 'Epam'}, {id:2, title: 'IT-INKUBATOR'}]
//
//     }
//
//
//     const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType
//
//     expect(user).not.toBe(userCopy)
//     expect(user.address).toBe(userCopy.address)
//     expect(user.companies).not.toBe(userCopy.companies)
//     expect(userCopy.companies[0].title).toBe('EPAM')
//
// })
//
// test('update company', () => {
//
//     let companies = {
//         'Dimych': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INKUBATOR'}],
//         'Artem': {id: 2, title: 'IT-INKUBATOR'}
//     }
//
//     const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'EPAM')
//
//     expect(copy['Dimych']).not.toBe(companies['Dimych'])
//     expect(copy['Artem']).toBe(companies['Artem'])
//     expect(copy['Dimych'][0].title).toBe('EPAM')
//
//
// })
//
//
//
