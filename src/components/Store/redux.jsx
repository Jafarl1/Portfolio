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
            image: './public/screenshots/gloriosa.png'
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