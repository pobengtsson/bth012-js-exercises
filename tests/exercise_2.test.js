import { exercise_2_1, exercise_2_2, exercise_2_3, exercise_2_4, exercise_2_5, exercise_2_6, exercise_2_7, exercise_2_8, exercise_2_9, exercise_2_10 } from 'exercise_2'
import { exercise_2_11, exercise_2_12, exercise_2_13 } from 'exercise_2'

describe.skip("exercise 2.1 ", () => {
   const examples = [[1,2],[3,4],[5,4]]
   for (var ex of examples) {
      describe(`when adds ${ex[0]} to ${ex[1]}`, () => {
         it(`results in ${ex[0]+ex[1]}`, ()=> {
            expect(exercise_2_1(ex[0],ex[1])).toEqual(ex[0]+ex[1])
         })
      })
   }
})

describe.skip("exercise 2.2", () => {
   const examples = [[5,2],[10,4],[15,7]]
   for (var ex of examples) {
      describe(`when subtracts ${ex[1]} from ${ex[0]}`, () => {
         it(`results in ${ex[0]-ex[1]}`, ()=> {
            expect(exercise_2_2(ex[0],ex[1])).toEqual(ex[0]-ex[1])
         })
      })
   }
})

describe.skip("exercise 2.3", () => {
   const examples = [[3,2],[5,4],[6,3]]
   for (var ex of examples) {
      describe(`when multiplies ${ex[0]} with ${ex[1]}`, () => {
         it(`results in ${ex[0]*ex[1]}`, ()=> {
            expect(exercise_2_3(ex[0],ex[1])).toEqual(ex[0]*ex[1])
         })
      })
   }
})

describe.skip("exercise 2.4", () => {
   const examples = [[6,3],[20,4],[30,6]]
   for (var ex of examples) {
      describe(`when divides ${ex[0]} by ${ex[1]}`, () => {
         it(`results in ${ex[0]/ex[1]}`, ()=> {
            expect(exercise_2_4(ex[0],ex[1])).toEqual(ex[0]/ex[1])
         })
      })
   }
})

describe.skip("exercise 2.5", () => {
   const examples = [[10,3],[17,5],[20,6]]
   for (var ex of examples) {
      describe(`when computes modulus of ${ex[0]} and ${ex[1]}`, () => {
         it(`results in ${ex[0]%ex[1]}`, ()=> {
            expect(exercise_2_5(ex[0],ex[1])).toEqual(ex[0]%ex[1])
         })
      })
   }
})

describe.skip("exercise 2.6", () => {
   const examples = [5,10,15]
   for (var ex of examples) {
      describe(`when increments ${ex}`, () => {
         it(`results in ${ex+1}`, ()=> {
            expect(exercise_2_6(ex)).toEqual(ex+1)
         })
      })
   }
})

describe.skip("exercise 2.7", () => {
   const examples = [10,20,30]
   for (var ex of examples) {
      describe(`when decrements ${ex}`, () => {
         it(`results in ${ex-1}`, ()=> {
            expect(exercise_2_7(ex)).toEqual(ex-1)
         })
      })
   }
})

describe.skip("exercise 2.8", () => {
   const examples = [5,10,15]
   for (var ex of examples) {
      describe(`when negates ${ex}`, () => {
         it(`results in ${-ex}`, ()=> {
            expect(exercise_2_8(ex)).toEqual(-ex)
         })
      })
   }
})

describe.skip("exercise 2.9", () => {
   const examples = [[2,3],[3,2],[5,3]]
   for (var ex of examples) {
      describe(`when raises ${ex[0]} to the power of ${ex[1]}`, () => {
         it(`results in ${ex[0]**ex[1]}`, ()=> {
            expect(exercise_2_9(ex[0],ex[1])).toEqual(ex[0]**ex[1])
         })
      })
   }
})

describe.skip("exercise 2.10", () => {
   const examples = [["Hello", "World"], ["abc", "def"], ["123", "456"]]
   for (var ex of examples) {
      describe(`when concatenates ${ex[0]} with ${ex[1]}`, () => {
         it(`results in ${ex[0]+ex[1]}`, ()=> {
            expect(exercise_2_10(ex[0],ex[1])).toEqual(ex[0]+ex[1])
         })
      })
   }
})

describe.skip("exercise 2.11", () => {
   const examples = [[true, true], [true, false], [false, false]]
   for (var ex of examples) {
      describe(`when applies AND to ${ex[0]} and ${ex[1]}`, () => {
         it(`results in ${ex[0]&&ex[1]}`, ()=> {
            expect(exercise_2_11(ex[0],ex[1])).toEqual(ex[0]&&ex[1])
         })
      })
   }
})

describe.skip("exercise 2.12", () => {
   const examples = [[true, true], [true, false], [false, false]]
   for (var ex of examples) {
      describe(`when applies OR to ${ex[0]} and ${ex[1]}`, () => {
         it(`results in ${ex[0]||ex[1]}`, ()=> {
            expect(exercise_2_12(ex[0],ex[1])).toEqual(ex[0]||ex[1])
         })
      })
   }
})

describe.skip("exercise 2.13", () => {
   const examples = [true, false]
   for (var ex of examples) {
      describe(`when applies NOT to ${ex}`, () => {
         it(`results in ${!ex}`, ()=> {
            expect(exercise_2_13(ex)).toEqual(!ex)
         })
      })
   }
})
