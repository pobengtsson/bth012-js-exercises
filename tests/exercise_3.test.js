import { exercise_3_1, exercise_3_2, exercise_3_3, exercise_3_4, exercise_3_5, exercise_3_6, exercise_3_7, exercise_3_8, exercise_3_9, exercise_3_10 } from "exercise_3";
import { exercise_3_11, exercise_3_12, exercise_3_13, exercise_3_14, exercise_3_15, exercise_3_16, exercise_3_17, exercise_3_18, exercise_3_19, exercise_3_20 } from "exercise_3";


describe("exercise 3", () => {
   describe.skip("expression 1: 2 + 5 * 4 / 10", () => {
      it(`results in ${2 + 5 * 4 / 10}`, ()=> {
         expect(exercise_3_1()).toEqual(2 + 5 * 4 / 10)
      })
   })

   describe.skip("expression 2: 10 * 3 + 2", () => {
      it(`results in ${10 * 3 + 2}`, ()=> {
         expect(exercise_3_2()).toEqual(10 * 3 + 2)
      })
   })

   describe.skip("expression 3: (8 / 4) * 5", () => {
      it(`results in ${(8 / 4) * 5}`, ()=> {
         expect(exercise_3_3()).toEqual((8 / 4) * 5)
      })
   })

   describe.skip("expression 4: (15 % 4) + 3", () => {
      it(`results in ${(15 % 4) + 3}`, ()=> {
         expect(exercise_3_4()).toEqual((15 % 4) + 3)
      })
   })

   describe.skip("expression 5: 3 * 3 + 1 / 2", () => {
      it(`results in ${3 * 3 + 1 / 2}`, ()=> {
         expect(exercise_3_5()).toEqual(3 * 3 + 1 / 2)
      })
   })
   describe.skip("expression 6: 8 + 10 / 2", () => {
      it(`results in ${8 + 10 / 2}`, ()=> {
         expect(exercise_3_6()).toEqual(8 + 10 / 2)
      })
   })

   describe.skip("expression 7: 15 - (5 + 2)", () => {
      it(`results in ${15 - (5 + 2)}`, ()=> {
         expect(exercise_3_7()).toEqual(15 - (5 + 2))
      })
   })

   describe.skip("expression 8: 9 * 2 - 3", () => {
      it(`results in ${9 * 2 - 3}`, ()=> {
         expect(exercise_3_8()).toEqual(9 * 2 - 3)
      })
   })

   describe.skip("expression 9: (4 + 2) * 2", () => {
      it(`results in ${(4 + 2) * 2}`, ()=> {
         expect(exercise_3_9()).toEqual((4 + 2) * 2)
      })
   })

   describe.skip("expression 10: 3 * (2 + 3) - 4", () => {
      it(`results in ${3 * (2 + 3) - 4}`, ()=> {
         expect(exercise_3_10()).toEqual(3 * (2 + 3) - 4)
      })
   })
   describe.skip("expression 11: 8 + 2 * (6 / 3)", () => {
      it(`results in ${8 + 2 * (6 / 3)}`, ()=> {
         expect(exercise_3_11()).toEqual(8 + 2 * (6 / 3))
      })
   })

   describe.skip("expression 12: 5 * 2 - 4 / 2", () => {
      it(`results in ${5 * 2 - 4 / 2}`, ()=> {
         expect(exercise_3_12()).toEqual(5 * 2 - 4 / 2)
      })
   })

   describe.skip("expression 13: (10 - 3) * (2 + 1)", () => {
      it(`results in ${(10 - 3) * (2 + 1)}`, ()=> {
         expect(exercise_3_13()).toEqual((10 - 3) * (2 + 1))
      })
   })

   describe.skip("expression 14: 15 / 3 * 2", () => {
      it(`results in ${15 / 3 * 2}`, ()=> {
         expect(exercise_3_14()).toEqual(15 / 3 * 2)
      })
   })

   describe.skip("expression 15: 4 + 2 * 3", () => {
      it(`results in ${4 + 2 * 3}`, ()=> {
         expect(exercise_3_15()).toEqual(4 + 2 * 3)
      })
   })

   describe.skip("expression 16: (2 + 3) * 4", () => {
      it(`results in ${(2 + 3) * 4}`, ()=> {
         expect(exercise_3_16()).toEqual((2 + 3) * 4)
      })
   })

   describe.skip("expression 17: 7 * (3 + 2) - 5", () => {
      it(`results in ${7 * (3 + 2) - 5}`, ()=> {
         expect(exercise_3_17()).toEqual(7 * (3 + 2) - 5)
      })
   })

   describe.skip("expression 18: 10 / (5 - 2)", () => {
      it(`results in ${10 / (5 - 2)}`, ()=> {
         expect(exercise_3_18()).toEqual(10 / (5 - 2))
      })
   })

   describe.skip("expression 19: 3 * 3 + 2 * 2", () => {
      it(`results in ${3 * 3 + 2 * 2}`, ()=> {
         expect(exercise_3_19()).toEqual(3 * 3 + 2 * 2)
      })
   })

   describe.skip("expression 20: 5 * 2 - 3 / 3", () => {
      it(`results in ${5 * 2 - 3 / 3}`, ()=> {
         expect(exercise_3_20()).toEqual(5 * 2 - 3 / 3)
      })
   })
})
