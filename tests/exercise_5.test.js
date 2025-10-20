import { jest } from '@jest/globals'

const mockFunctions = jest.mock('exercise_functions')
import { exercise_5_1, exercise_5_2 } from 'exercise_5'

let mockConsole = jest.spyOn(console, 'log')

describe("Exercise 5", () => {
   describe.skip('5.1 ', () => {
      const ignoredColors = ['black','white']
      for (let ignored of ignoredColors) {
         describe(`for ignored color ${ignored}`, () => {
            beforeEach(() => {
               mockConsole.mockReset()
               exercise_5_1(ignored)
            })
            it(`does not call console.log()`, () => {
               expect(mockConsole).not.toHaveBeenCalled()
            })
         })
      }
      const colorList = ['blue', 'yellow','green','pink']
      for (let color of colorList) {
         describe(`for logged color ${color}`, () => {
            beforeEach(() => {
               mockConsole.mockReset()
               exercise_5_1(color)
            })
            it(`calls console.log()`, () => {
               expect(mockConsole).toHaveBeenCalled()
            })
            it(`logs ${color}`, () => {
               expect(mockConsole.mock.calls[0][0]).toEqual(color)
            })
         })
      }
   })
   describe('5.2', () => {
      const exampleList = [
         {a: false, b: false, c: false, expected: true},
         // {a: false, b: false, c: true, expected: false},
         // {a: false, b: true, c: false, expected: true},
         // {a: false, b: true, c: true, expected: false},
         // {a: true, b: false, c: false, expected: false},
         // {a: true, b: false, c: true, expected: true},
         // {a: true, b: true, c: false, expected: false},
         // {a: true, b: true, c: true, expected: true},
      ]
      for (let ex of exampleList) {
         describe(`when a is ${ex.a}, b is ${ex.b} and c is ${ex.c}`, () => {
            beforeEach(()=> {
               exercise_5_2(ex.a, ex.b, ex.c)
            })
            if (ex.expected === true) {
               it(`calls conditionFulfilled with ${ex.b}`, () => {
                  expect(conditionFulfilled).toHaveBeenCalledWith(ex.b)
               })
            } else {
               it(`does not call conditionFulfilled`, () => {
                  expect(conditionFulfilled).not.toHaveBeenCalled()
               })
            }
         })
      }
   })
})