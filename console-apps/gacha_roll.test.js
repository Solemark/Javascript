const { gachaRoll } = require('./gacha_roll')

const getData = () => ['FGO', 'AK', 'GI']

test('Check the roll succeeded', () => {
    let data = getData()
    data.forEach((game) => {
        expect(gachaRoll(game)).toContain(game)
    })
})
