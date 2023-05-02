import  Validator from 'fastest-validator'
export class FastestValidatorAdapter { 
    validator = new Validator()  
    validate(params, rules) {   
        return this.validator.validate(params, rules)
    } 
}