import { exercise_4_1, exercise_4_2, exercise_4_3, exercise_4_4, exercise_4_5, exercise_4_6, exercise_4_7, exercise_4_8 } from 'exercise_4'

describe.skip('Exercise 4_1', () => {
   const examples = [[1, 2], [3, 9], [0, 0], [100, 98]]
   for (let ex of examples) {
      describe(`foo ${ex[0]} greater than bar ${ex[1]}`, () => {
         it(`is ${ex[0] > ex[1]}`, () => {
            expect(exercise_4_1(ex[0], ex[1])).toEqual(ex[0] > ex[1])
         })
      })
   }
})

describe.skip('Exercise 4_2', () => {
   const examples = [[5, 5], [10, 3], [-5, -5], [123, 120]]
   for (let ex of examples) {
      describe(`alpha ${ex[0]} greater than or equal to beta ${ex[1]}`, () => {
         it(`is ${ex[0] >= ex[1]}`, () => {
            expect(exercise_4_2(ex[0], ex[1])).toEqual(ex[0] >= ex[1])
         })
      })
   }
})


describe.skip('Exercise 4_3', () => {
   const examples = [[-2, 0], [11, 15], [0, 1], [90, 100]]
   for (let ex of examples) {
      describe(`kappa ${ex[0]} less than lambda ${ex[1]}`, () => {
         it(`is ${ex[0] < ex[1]}`, () => {
            expect(exercise_4_3(ex[0], ex[1])).toEqual(ex[0] < ex[1])
         })
      })
   }
})

describe.skip('Exercise 4_4', () => {
   const examples = [[5, 5], [-3, 0], [7, 8], [50, 50]]
   for (let ex of examples) {
      describe(`mu ${ex[0]} less than or equal to nu ${ex[1]}`, () => {
         it(`is ${ex[0] <= ex[1]}`, () => {
            expect(exercise_4_4(ex[0], ex[1])).toEqual(ex[0] <= ex[1])
         })
      })
   }
})

describe.skip('Exercise 4_5', () => {
   const examples = [[1, 1], [0, 0], [-5, -5], [77, 77]]
   for (let ex of examples) {
      describe(`xi ${ex[0]} equal to omicron ${ex[1]}`, () => {
         it(`is ${ex[0] == ex[1]}`, () => {
            expect(exercise_4_5(ex[0], ex[1])).toEqual(ex[0] == ex[1])
         })
      })
   }
})

describe.skip('Exercise 4_6', () => {
   const examples = [[1, 2], [3, 4], [5, 6], [7, 8]]
   for (let ex of examples) {
      describe(`p ${ex[0]} not equal to q ${ex[1]}`, () => {
         it(`is ${ex[0] != ex[1]}`, () => {
            expect(exercise_4_6(ex[0], ex[1])).toEqual(ex[0] != ex[1])
         })
      })
   }
})

describe.skip('Exercise 4_7', () => {
   const examples = [[1, 2], ['1', 1], [true, 1], [0, false]]
   for (let ex of examples) {
      describe(`r ${ex[0]} strictly not equal to s ${ex[1]}`, () => {
         it(`is ${ex[0] !== ex[1]}`, () => {
            expect(exercise_4_7(ex[0], ex[1])).toEqual(ex[0] !== ex[1])
         })
      })
   }
})

describe.skip('Exercise 4_8', () => {
   const examples = [['1', 1], [true, 1], [0, '0'], [false, 'false']]
   for (let ex of examples) {
      describe(`t ${ex[0]} strictly equal to u ${ex[1]}`, () => {
         it(`is ${ex[0] === ex[1]}`, () => {
            expect(exercise_4_8(ex[0], ex[1])).toEqual(ex[0] === ex[1])
         })
      })
   }
})
