const enhancer = require('./enhancer.js');
// test away!

describe('repair function', () => {
    it('should set durability to 100', () => {
        const item = { name: 'bob', durability: 2, enhancement: 1 }
        const expected = { name: 'bob', durability: 100, enhancement: 1 } //(can use a ... (spread operator))
        const actual = enhancer.repair(item)
        expect(actual).toEqual(expected)

    })

})

describe('success function', () => {
    it('should add 1 to enhancment as long as the enhancment is less than 20', () => {
        const item = { name: 'bob', durability: 50, enhancement: 1 }
        const expected = { ...item, enhancement: item.enhancement + 1 }
        const actual = enhancer.success(item)
        expect(actual).toEqual(expected)
    })
    it('should do nada if enhancement is 20', () => {
        const item = { name: 'bob', durability: 50, enhancement: 20 }
        const expected = item
        const actual = enhancer.success(item)
        expect(actual).toEqual(expected)
    })

})

describe('fail function', () => {
    it('should decrease durability by 5 if enhancement is less than 15', () => {
        const item = { name: 'bob', durability: 50, enhancement: 10 }
        const expected = {...item, durability: item.durability -5}
        // const expected = {...item, durability: 45}
        const actual = enhancer.fail(item)
        expect(actual).toEqual(expected)

    })
    it('prevents a negative durability when it goes bellow 0, makes it 0', () => {
        const item = { name: 'bob', durability: 2, enhancement: 10 }
        const expected = {...item, durability: 0}
        const actual = enhancer.fail(item)
        expect(actual).toEqual(expected)
    })
    test('If the items enhancement is 15 or more, the durability of the item is decreased by 10.', () => {
        const item = { name: 'bob', durability: 50, enhancement: 16 }
        const expected = {...item, durability:40}
        const actual = enhancer.fail(item)
        expect(actual).toEqual(expected)

    })
    test('If the items enhancement level is greater than 16, the enhancement level decreases by 1 && durability goes down by 10', () => {
        const item = { name: 'bob', durability: 50, enhancement: 17 }
        const expected = {...item, durability: item.durability-10, enhancement: item.enhancement -1}
        const actual = enhancer.fail(item)
        expect(actual).toEqual(expected)
    })
})