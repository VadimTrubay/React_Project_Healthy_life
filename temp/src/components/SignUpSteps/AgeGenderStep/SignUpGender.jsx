import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import parse from 'date-fns/parse';
import image from '../../../assets/backgroundImages/genderAge.png';
import {
  GenderAgeWrapper,
  Image,
  GenderAgeContent,
  Title,
  Subtitle,
  RadioWrapper,
  Text,
  NextButton,
  BackButton,
  CustomLabel,
  CustomRadio,
  StyledInput,
  StyledErrorMessage,
  GenderWrap,
  StyledForm,
} from './SelectGenderAge.styled';

const genderBirthDateSchema = Yup.object().shape({
  gender: Yup.string().required('Gender is required'),
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
});

function SelectGender({ onForm, onBackPage }) {
  return (
    <GenderAgeWrapper>
      <Image src={image} alt="illustration-gender-and-age" />
      <GenderAgeContent>
        <Title>Select gender, Age</Title>
        <Subtitle>Choose a goal so that we can help you effectively</Subtitle>
        <Formik
          initialValues={{ gender: '', birthDate: '' }}
          validationSchema={genderBirthDateSchema}
          onSubmit={onForm}
        >
          {() => (
            <StyledForm>
              <RadioWrapper>
                <Text>Gender</Text>
                <GenderWrap>
                  <CustomLabel>
                    <CustomRadio type="radio" name="gender" value="male" />
                    Male
                  </CustomLabel>
                  <CustomLabel>
                    <CustomRadio type="radio" name="gender" value="female" />
                    Female
                  </CustomLabel>
                </GenderWrap>
                <ErrorMessage name="gender" component={StyledErrorMessage} />
              </RadioWrapper>
              <Text>Date of birth</Text>
              <StyledInput name="birthDate" placeholder="00.00.0000" />
              <ErrorMessage name="birthDate" component={StyledErrorMessage} />
              <NextButton type="submit">Next</NextButton>
              <BackButton type="button" onClick={onBackPage}>
                Back
              </BackButton>
            </StyledForm>
          )}
        </Formik>
      </GenderAgeContent>
    </GenderAgeWrapper>
  );
}

export default SelectGender;
