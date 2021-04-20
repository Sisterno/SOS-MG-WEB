interface medic {
    id:number
    name:string
    title:string
    cmp:string
    img:string
}
interface insurance {
    id:string
    name:string
    img:string
}

const medicalStaff:Array<medic>=[
    {
        id:1,
        name:'Dr. Rodolfo Quispe Orihuela',
        title:'Médico Cirujano',
        cmp:'44155',
        img:'44155.jpg'
    },
    {
        id:2,
        name:'Dr. Grover Quispe Orihuela',
        title:'Médico Cirujano',
        cmp:'44194',
        img:'44194.jpg'
    },
    {
        id:3,
        name:'Dr. Paul Emilio Olivera Mayo',
        title:'Médico Emergenciologo',
        cmp:'25198',
        img:'25198.jpg'
    },
    {
        id:4,
        name:'Dra. Lizbeth Quispe Orihuela',
        title:'Médico Cirujano',
        cmp:'83585',
        img:'83585.jpg'
    },
    {
        id:5,
        name:'Dr. Henry Jeronimo Perez Sierra',
        title:'Médico Nefrólogo',
        cmp:'34953',
        img:'34953.jpg'
    },
    {
        id:6,
        name:'Dr. José Antonio Fuentes Vega;Medico Oftalmólogo',
        title:'Medico Oftalmólogo',
        cmp:'43930',
        img:'43930.jpg'
    },
    {
        id:7,
        name:'Dr. Lenin Manuel  Gutierrez  Valencia',
        title:'Medico Ginecólogo',
        cmp:'57374',
        img:'57374.jpg'
    },
    {
        id:8,
        name:'Dr. Flor de Maria Rodriguez Mendoza',
        title:'Odontóloga',
        cmp:'26624',
        img:'26624.jpg'
    },
    {
        id:9,
        name:'Dra. Fiorella Karol Uscachi Sarmiento',
        title:'Odontóloga',
        cmp:'35279',
        img:'35279.jpg'
    },
    {
        id:10,
        name:'Dr. Charles Pither Mojonero Merma',
        title:'Médico Odontólogo',
        cmp:'21545',
        img:'21545.jpg'
    },
    {
        id:11,
        name:'Dr. Luis Alberto Rosas Molina',
        title:'Medico Traumatólogo',
        cmp:'9007',
        img:'9007.jpg'
    },
    {
        id:12,
        name:'Dra. Gina Zenchenka Serrano Guillen',
        title:'Dermatóloga',
        cmp:'43773',
        img:'43773.jpg'
    },
    {
        id:13,
        name:'Dra. Tania Vitorino Villegas',
        title:'Endocrinólogo',
        cmp:'44732',
        img:'44732.jpg'
    },
]
const insurances:Array<insurance>=[{'id': 'insu0', 'name': 'ADAC (ARC) Insurance', 'img': 'adac.jpg'}, {'id': 'insu1', 'name': 'Assured Assistance', 'img': 'AssuredAssistance.jpg'}, {'id': 'insu2', 'name': 'Blue Cross Blue Shield', 'img': 'blue.jpg'}, {'id': 'insu3', 'name': 'ANWB Alarmcentrale', 'img': 'anwb.jpg'}, {'id': 'insu4', 'name': 'Intemational Medical Group', 'img': 'InternationalMedicalGroup.jpg'}, {'id': 'insu5', 'name': 'Cover More Insurance', 'img': 'CoverMore.jpg'}, {'id': 'insu6', 'name': 'Universal Assistance', 'img': 'universalAssistance.jpg'}, {'id': 'insu7', 'name': 'Coris Brasil', 'img': 'coris.jpg'}, {'id': 'insu8', 'name': 'First Assist', 'img': 'Firstassist.jpg'}, {'id': 'insu9', 'name': 'Mundial Assistance ', 'img': 'mondial.jpg'}, {'id': 'insu10', 'name': 'Europea de Seguros', 'img': 'europea.jpg'}, {'id': 'insu11', 'name': 'Cardinal Assistance', 'img': 'CardinalAssistance.jpg'}, {'id': 'insu12', 'name': 'American Assistance', 'img': 'AmericanAssist.jpg'}, {'id': 'insu13', 'name': 'Harel Insurance Company', 'img': 'HarelInsuranceCompany.jpg'}, {'id': 'insu14', 'name': 'UNIQA AG', 'img': 'Unica.jpg'}, {'id': 'insu15', 'name': 'Worldwide Assistance', 'img': 'WorldWideAssistance.jpg'}, {'id': 'insu16', 'name': 'QBE Travel Insurance', 'img': 'qbe.jpg'}, {'id': 'insu17', 'name': 'Inter Mutuelles Assistance', 'img': 'interMutuelles.jpg'}, {'id': 'insu18', 'name': 'Inter Assistance', 'img': 'interassist.jpg'}, {'id': 'insu19', 'name': 'International SOS', 'img': 'InterantionalSOS.jpg'}, {'id': 'insu20', 'name': 'AIG Travel Insurance', 'img': 'aig.jpg'}, {'id': 'insu21', 'name': 'Gouda Travel Insurance', 'img': 'gouda.jpg'}, {'id': 'insu22', 'name': 'Eurocross Asistance', 'img': 'eurocross.jpg'}, {'id': 'insu23', 'name': 'Travel Guard', 'img': 'TravelGuard.jpg'}, {'id': 'insu24', 'name': 'Travel Guard Chartis', 'img': 'travel.jpg'}]

// const insurances:Array<insurance>=[
//     {
//         id:1,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:2,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:3,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:4,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:5,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:6,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:7,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:8,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:9,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
//     {
//         id:10,
//         name:'Blue Cross Blue Shield',
//         img:'BCBS.png'
//     },
// ]

export { medicalStaff,insurances }
export type { medic, insurance }
