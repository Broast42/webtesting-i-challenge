const enhancer = require('./enhancer.js');
// test away!
describe("enhancment unit tests", () => {
    it("repairs", () => {
        expect(enhancer.repair({name:"Sword", enhancement: 1, durability: 50}))
            .toMatchObject({name:"Sword", enhancement: 1, durability: 100})
        expect(() => enhancer.repair({name:"", enhancement: 1, durability: 50}))
            .toThrow()
        expect(() => enhancer.repair({name:"Sword", durability: 50}))
            .toThrow()
        expect(() => enhancer.repair({name:"Sword", enhancement: 1 }))
            .toThrow()
        expect(() => enhancer.repair({name: 0, enhancement: "", durability: "50"}))
            .toThrow()  
    })

    it("succeeds", () => {
        expect(enhancer.succeed({name:"Sword", enhancement: 1, durability: 50}))
            .toMatchObject({name:"Sword", enhancement: 2, durability: 50})
        expect(enhancer.succeed({name:"Sword", enhancement: 2, durability: 50}))
            .toMatchObject({name:"Sword", enhancement: 3, durability: 50})
        expect(enhancer.succeed({name:"Sword", enhancement: 20, durability: 100}))
            .toMatchObject({name:"Sword", enhancement: 20, durability: 100})
        expect(() => enhancer.succeed({name:"", enhancement: 2, durability: 100}))
            .toThrow()
        expect(() => enhancer.succeed({name:"Sword", enhancement: 2}))
            .toThrow()
        expect(() => enhancer.succeed({name:"Sword", durability: 100}))
            .toThrow()
    })
})
