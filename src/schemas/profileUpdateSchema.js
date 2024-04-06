import * as Yup from 'yup';
import parse from 'date-fns/parse';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim('Cannot include leading and trailing spaces')
    .strict()
    .min(2, 'Too short name')
    .max(20, 'Too long name')
    .required('Name should be filled'),
  birthDate: Yup.date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .min('1900-01-01', 'Date is too early')
    .max(new Date(), 'Please enter a correct date')
    .typeError('Please enter a valid date DD.MM.YYYY')
    .required('Date of birth should be filled'),
  gender: Yup.string().oneOf(['male', 'female']).required(),
  height: Yup.number('Enter correct number')
    .positive('Height should be positive')
    .integer('Height should be integer')
    .min(140, 'Incorrect data for calculation')
    .max(250, 'Incorrect data for calculation')
    .required('Height should be filled'),
  weight: Yup.number('Enter correct number')
    .positive('Weight should be positive')
    .integer('Weight should be integer')
    .min(40, 'Incorrect data for calculation')
    .max(200, 'Incorrect data for calculation')
    .required('Weight should be filled'),
  activityLevel: Yup.number().oneOf([1.2, 1.375, 1.55, 1.725, 1.9]).required(),
  goal: Yup.string().oneOf(['Lose Fat', 'Maintain', 'Gain muscle']).required(),
});
