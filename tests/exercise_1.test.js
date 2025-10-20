import { exercise_1_1 } from 'exercise_1'

describe("exercise 1.1 All javascript's types", () => {
   let answer
   beforeEach(()=>{
      answer = exercise_1_1()
   })
   it('should contain a number', () => {
      expect(answer.some((value) => typeof value === 'number')).toBe(true)
   })

   it.skip('should contain a string', () => {
      expect(answer.some((value) => typeof value === 'string')).toBe(true)
   })

   it.skip('should contain a boolean', () => {
      expect(answer.some((value) => typeof value === 'boolean')).toBe(true)
   })

   it.skip('should contain null', () => {
      expect(answer).toContain(null)
   })

   it.skip('should contain undefined', () => {
      expect(answer).toContain(undefined)
   })

   it.skip('should contain an object', () => {
      expect(answer.some((value) => typeof value === 'object' && !Array.isArray(value))).toBe(true)
   })

   it.skip('should contain an array', () => {
      expect(answer.some((value) => Array.isArray(value))).toBe(true)
   })

   it.skip('should contain a Set', () => {
      expect(answer.some((value) => value instanceof Set)).toBe(true)
   })

   it.skip('should contain a Map', () => {
      expect(answer.some((value) => value instanceof Map)).toBe(true)
   })

   it.skip('should contain a Typed Array', () => {
      expect(answer.some((value) => ArrayBuffer.isView(value))).toBe(true)
   })

   it.skip('should contain a RegExp', () => {
      expect(answer.some((value) => value instanceof RegExp)).toBe(true)
   })

   it.skip('should contain a Date', () => {
      expect(answer.some((value) => value instanceof Date)).toBe(true)
   })

   it.skip('should contain an Error', () => {
      expect(answer.some((value) => value instanceof Error)).toBe(true)
   })
})
