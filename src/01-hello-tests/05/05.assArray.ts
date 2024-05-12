// const studentsObj = {
//     'id100': {id: 'id100', title: 'Andrew'},
//     'id2': {id: 'id2', title: 'Anna'},
//     'id4': {id: 'id4', title: 'Sasha'},
//     'id1000': {
//         id: 'id100',
//         title: 'Marina',
//         technologies: {
//             '1': {id : 1, title: "CSS"},
//             2: {id : 2, title: "HTML"},
//             3: {id : 3, title: "JS"},
//             4: {id : 4, title: "Reac"},
//         }
//     }
// }
//
// let tech4 = studentsObj["id1000"]['technologies']["4"].title = "React"
//
// console.log(tech4)
// console.log(studentsObj)
//
// export const studentsObj = {
//     'id1': {id: 'id1', title: 'Andrew'},
//     'id2': {id: 'id2', title: 'Anna'},
//     'id3': {id: 'id3', title: 'Sasha'},
//     'id4': {
//         id: 'id4',
//         title: 'Marina',
//         technologies: [
//             {'primary': ['react','js']},
//             {'secondary': ['html','css']},
//         ]
//     }
// }
//
// let sth = studentsObj['id4']['technologies'][0]['primary']
// console.log(sth[1])
//
// let userObj = {
//     '0': 'Dimych',
//     '1': 'a',
//     '2': 'Dimych',
//     '3': 'Dimych',
// }

export type UsersType = {
    [key: string] : {id: number, name: string}
}

const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}

let user = {id: 100500, name: 'Igor'}
users[user.id] = user

console.log(users)

let user1 = 100

let user2 = user1

user2++

console.log(user1)