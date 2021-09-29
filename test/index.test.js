const calculateBirthyear 
describe('responseBuilder', () => {
    it('beispiel', ()=> {
        let actual = 10

        let expected = 5


        expect(actual).toBeGreaterThan(expected);

    })
    it('should return code 200 with message', () => {


    })
})


describe('calculateBirthyear', () =>{
      //it('should return NaN when parameter is Object', ()=> {
       // const actual = calculateBirthyear({})

        //expect(actual).toBe(NaN);
   // })

   it('should throw TypeError when parameter is NaN', () => {

        const actual = calculateBirthyear ('yeet')

        expect(actual).toThrow('TypeError')
   })
})