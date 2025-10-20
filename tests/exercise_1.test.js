import { exercise_1_1 } from 'exercise_1'

describe.skip("exercise 1.1 All javascript's types", () => {
   var answer
   beforeEach(()=>{
      answer = exercise_1_1()
   })
   it('should contain a number', () => {
      expect(result.some((value) => typeof value === 'number')).toBe(true)
   })

   it('should contain a string', () => {
      expect(result.some((value) => typeof value === 'string')).toBe(true)
   })

   it('should contain a boolean', () => {
      expect(result.some((value) => typeof value === 'boolean')).toBe(true)
   })

   it('should contain null', () => {
      expect(result).toContain(null)
   })

   it('should contain undefined', () => {
      expect(result).toContain(undefined)
   })

   it('should contain an object', () => {
      expect(result.some((value) => typeof value === 'object' && !Array.isArray(value))).toBe(true)
   })

   it('should contain an array', () => {
      expect(result.some((value) => Array.isArray(value))).toBe(true)
   })

   it('should contain a Set', () => {
      expect(result.some((value) => value instanceof Set)).toBe(true)
   })

   it('should contain a Map', () => {
      expect(result.some((value) => value instanceof Map)).toBe(true)
   })

   it('should contain a Typed Array', () => {
      expect(result.some((value) => ArrayBuffer.isView(value))).toBe(true)
   })

   it('should contain a RegExp', () => {
      expect(result.some((value) => value instanceof RegExp)).toBe(true)
   })

   it('should contain a Date', () => {
      expect(result.some((value) => value instanceof Date)).toBe(true)
   })

   it('should contain an Error', () => {
      expect(result.some((value) => value instanceof Error)).toBe(true)
   })
})
