'use strict'
var gPortfolios
const STORAGE_KEY = `portfolioDB`

const gLinks = [
    {
        name: `Mine Sweeper`,
        title: `My first game`,
        desc: `The Mine Sweeper game plus some bonuses`,
        url: `https://shakedgolan10.github.io/mineSweeper1/`,
        lables: [`web game`, `vanila`]

    },
    {
        name: `Mine Sweeper`,
        title: `My first game`,
        desc: `The Mine Sweeper game plus some bonuses`,
        url: `https://shakedgolan10.github.io/mineSweeper1/`,
        lables: [`web game`, `vanila`]

    },
    {
        name: `Mine Sweeper`,
        title: `My first game`,
        desc: `The Mine Sweeper game plus some bonuses`,
        url: `https://shakedgolan10.github.io/mineSweeper1/`,
        lables: [`web game`, `vanila`]

    },
    {
        name: `Mine Sweeper`,
        title: `My first game`,
        desc: `The Mine Sweeper game plus some bonuses`,
        url: `https://shakedgolan10.github.io/mineSweeper1/`,
        lables: [`web game`, `vanila`]

    },
    {
        name: `Mine Sweeper`,
        title: `My first game`,
        desc: `The Mine Sweeper game plus some bonuses`,
        url: `https://shakedgolan10.github.io/mineSweeper1/`,
        lables: [`web game`, `vanila`]

    },
    {
        name: `Mine Sweeper`,
        title: `My first game`,
        desc: `The Mine Sweeper game plus some bonuses`,
        url: `https://shakedgolan10.github.io/mineSweeper1/`,
        lables: [`web game`, `vanila`]

    },
]

function createPortfolio(name, title, desc, url, labels = []) {
    return {
        id: name,
        name,
        title,
        desc,
        url,
        publishedAt: Date.now(),
        labels,
    }

}

function createPortfolios() {
    gPortfolios = loadFromStorage(key)

    if (!gPortfolios) {
        var portfolios = []
        for (var i = 0; i < gLinks.length; i++) {
            portfolios.push(createPortfolio(gLinks.name, gLinks.title, gLinks.desc, gLinks.url, gLinks.labels))

        }
    }

    gPortfolios = portfolios
    saveToStorage(STORAGE_KEY, gPortfolios)
}

function getPortolios() {
    return gPortfolios
}


