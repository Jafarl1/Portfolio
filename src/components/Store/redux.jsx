const initState = {
    projects: [
        {
            id: 1,
            heading: 'JavaScript',
            type: 'js',
            name: 'Tods',
            link: 'https://tods-lilac.vercel.app/',
            image: './public/screenshots/tods.png'
        },
        {
            id: 2,
            type: 'js',
            heading: 'JavaScript',
            name: 'Color Selector',
            link: 'https://random-color-selector.vercel.app/',
            image: './public/screenshots/colors.png'
        },
        {
            id: 3,
            type: 'js',
            heading: 'JavaScript',
            name: 'Exchange',
            link: 'https://exchange-hazel-five.vercel.app/',
            image: './public/screenshots/exchange.png'
        },
        {
            id: 4,
            type: 'react',
            heading: 'React Js',
            name: 'Gloriosa',
            link: 'https://gloriosa.vercel.app/',
            image: 'https://lh3.googleusercontent.com/o5eMtj3vCuOUpqZGQ9BT6ny_XDI5j7VcM5akFyeOGxbge2lafWX-Iz7QJKwFYXrHVq7buB903wsUIeN_psiXCjxinLOKYUuzuagGlOpeaDs-5nd_rSWfReFYbn1658m-Z1215lyHuffyI3fPoJE2A5N4SlTQ8sCX_qJgeb-AzrU6V9GNx42zyFr3QYueVnBT1FGWzaDBL90g2KGEsxm9Dl_UcIuvAWPCM-bRMUvwBnr5drnStTXC5qGGcaJfqKDUJXmX-vepWO3-xRETmxHMSZfx0vg1oH7Dj7CZ-DbUijH_9Cg4wzw3qAIkkJi3V5J3g-cZov3QdzFDlPkBqWsEXYiLrhW1RfqYsjdztWxQDhTwOJGvWc2q36x2Dvh2JmiIcqjdw6dDfBQ4MgxmA6ESZKK60zchMOTYbw3tWbRIBumNbqc7YsE7EXc5yaHn7O30iT2bgG8wbkbotqd7PpzUrUwisTXSNZSFAnypZ4QEs0R9Cw5m-uoackPmhPte-UmkyVARzcyV9cyyih0s8N9lGscDpDOOkw5Ubsk25Y3ct_dy0FWNAOKkO8vtz5zHTwNZI3388axAPGQWobGip4jVW1nd-Q7ch_QfUnr9EJhlfSZ5eNlBV2qxn-ZgcgsNpw9owzWEV0nYdX6mXCfN10ahmhRKQ5XYQSQyNtV-IfPdZNEwWYlwNkDIQ3mEAxPcY1cbYzLkDzv3DVT9nRPmZwUKMYrJNeeQXutD8TKZYAlOsMR2vsmpSZg2GGWCFUWqzKifceFn1DrF5O81vQMdyjffThAMVund2A-i1MxtAljiz0kNlTpAVHZLcRuVu1tGubDizUrw8djpUkHZ3_86HvJ14VDFjXbrMg2XKy0-E3OT_pWZDjGnOykIPdmQwyE9oG-ijDwUL6zPsk-VnNgNrd9ilnPWK-9Ur56TvqgqKA=w1891-h898-no?authuser=0'
        },
        {
            id: 5,
            type: 'react',
            heading: 'React Js',
            name: 'Tickets Filter',
            link: 'https://tickets-filter-sooty.vercel.app/',
            image: './public/screenshots/tickets.png'
        },
        {
            id: 6,
            type: 'react',
            heading: 'React Js',
            name: 'Portfolio',
            link: 'https://portfolio-two-umber-76.vercel.app/',
            image: './public/screenshots/portfolio.png'
        },
        {
            id: 7,
            type: 'angular',
            heading: 'Angular Js',
            name: 'Currency Converter',
            link: 'https://github.com/Jafarl1/Currency-Converter-Angular/tree/main/converter',
            image: './public/screenshots/angular.png'
        },
        {
            id: 8,
            type: 'vue',
            heading: 'Vue Js',
            name: 'Money Transfer',
            link: 'https://github.com/Jafarl1/Money-Transfer/tree/main/transfer/transfer-app',
            image: './public/screenshots/vue.png'
        }
    ]
};

export default function reducer(state = initState) {
    return state
}