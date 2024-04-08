import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { validationSchema } from '../../../schemas/profileUpdateSchema';
import { selectUserData } from '../../../redux/auth/authSelectors';
import { updateUser } from '../../../redux/auth/authOperations';

import loseFat from '../../../assets/images/loseFat.png';
import maintain from '../../../assets/images/maintain.png';
import loseFat_girl from '../../../assets/images/loseFat_girl.png';
import maintain_girl from '../../../assets/images/maintain_girl.png';
import gainMuscle from '../../../assets/images/gainMuscle.png';
import sprite from '../../../assets/images/sprite.svg';
import {
  FormWrapper,
  LabelInput,
  FieldStyled,
  Avatar,
  formControlStyled,
  formLabelStyled,
  formControlLabel,
  radioStyled,
  buttonGroupStyled,
  buttonStyled,
  ErrorMessageStyled,
  InputWrapper,
  IconWrapper,
  DownloadButton,
  InputStyled,
  DownloadSpan,
  FormLabelText,
  DivImage,
  DivActiveImage,
  LoseFat,
} from './ProfileSettingsCardStyled';

Notify.init({
  showOnlyTheLastOne: true,
  cssAnimationStyle: 'from-bottom',
  clickToClose: true,
  messageMaxLength: 200,
  timeout: 5000,
  width: '300px',
});

let selectedImage;

export const ProfileSettingsCard = () => {
  const dispatch = useDispatch();

  const currentUserData = useSelector(selectUserData);
  const {
    name,
    avatar,
    birthDate,
    gender,
    height,
    weight,
    goal,
    activityLevel,
  } = currentUserData;

  const correctbirthDate =
    birthDate.slice(8, 10) +
    '.' +
    birthDate.slice(5, 7) +
    '.' +
    birthDate.slice(0, 4);

  const initialValues = {
    name,
    avatar: avatar,
    birthDate: correctbirthDate,
    gender,
    height,
    weight,
    goal,
    activityLevel,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formik.values.activityLevel = Number(values.activityLevel);

      const day = formik.values.birthDate.slice(0, 2);
      const month = formik.values.birthDate.slice(3, 5);
      const year = formik.values.birthDate.slice(6);
      const newBirthDate = `${year}.${month}.${day}`;

      let formData = new FormData();
      formData.append('avatar', formik.values.avatar);
      formData.append('name', formik.values.name);
      formData.append('birthDate', newBirthDate);
      formData.append('gender', formik.values.gender);
      formData.append('height', formik.values.height);
      formData.append('weight', formik.values.weight);
      formData.append('goal', formik.values.goal);
      formData.append('activityLevel', formik.values.activityLevel);

      dispatch(updateUser(formData)).then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          Notify.success(`Your profile was updated`);
        } else {
          Notify.failure('Oops! Something went wrong!');
        }
      });
    },
  });

  return (
    <Formik>
      <FormWrapper
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
        autoComplete="off"
      >
        <LabelInput htmlFor="name">
          Your name
          <FieldStyled
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <ErrorMessageStyled id="feedback" name="name">
              {formik.errors.name}
            </ErrorMessageStyled>
          )}
        </LabelInput>
        <LabelInput>
          Your photo
          <InputWrapper>
            <Avatar
              src={
                formik.values.avatar
                  ? avatar
                  : URL.createObjectURL(formik.values.avatar)
              }
              alt="user avatar"
              file={formik.values.avatar}
            />
            <DownloadButton type="button" htmlFor="avatar">
              <InputStyled
                id="avatar"
                name="avatar"
                type="file"
                accept="image/png, .svg, .jpg, .gif, .jpeg, .webp"
                onChange={(e) => {
                  if (!e.currentTarget.files) {
                    Notify.failure('Oops! No image selected');
                    return;
                  }
                  selectedImage = e.currentTarget.files[0];
                  formik.setFieldValue('avatar', selectedImage);
                }}
              />
              <IconWrapper>
                <use href={`${sprite}#icon-direct-inbox`} />
              </IconWrapper>
              <DownloadSpan>
                {selectedImage
                  ? formik.values.avatar.name
                  : 'Download new photo'}
              </DownloadSpan>
            </DownloadButton>
          </InputWrapper>
        </LabelInput>
        <LabelInput htmlFor="birthDate">
          Date of birth
          <FieldStyled
            id="birthDate"
            name="birthDate"
            placeholder="00.00.0000"
            value={formik.values.birthDate}
            onChange={formik.handleChange}
          />
          {formik.errors.birthDate && formik.touched.birthDate && (
            <ErrorMessageStyled id="feedback" name="birthDate">
              {formik.errors.birthDate}
            </ErrorMessageStyled>
          )}
        </LabelInput>
        <FormControl sx={formControlStyled}>
          <FormLabel id="gender" sx={formLabelStyled}>
            Gender
          </FormLabel>
          <RadioGroup
            row
            sx={{ gap: '16px' }}
            aria-labelledby="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="male"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="Female"
            />
            {formik.errors.gender && formik.touched.gender && (
              <ErrorMessageStyled id="feedback" name="gender">
                {formik.errors.gender}
              </ErrorMessageStyled>
            )}
          </RadioGroup>
        </FormControl>
        <LabelInput htmlFor="height">
          Height
          <FieldStyled
            id="height"
            name="height"
            type="number"
            value={formik.values.height}
            onChange={formik.handleChange}
          />
          {formik.errors.height && formik.touched.height && (
            <ErrorMessageStyled id="feedback" name="height">
              {formik.errors.height}
            </ErrorMessageStyled>
          )}
          <ErrorMessageStyled name="height" component="span" />
        </LabelInput>
        <LabelInput htmlFor="weight">
          Weight
          <FieldStyled
            id="weight"
            name="weight"
            type="number"
            value={formik.values.weight}
            onChange={formik.handleChange}
          />
          {formik.errors.weight && formik.touched.weight && (
            <ErrorMessageStyled id="feedback" name="weight">
              {formik.errors.weight}
            </ErrorMessageStyled>
          )}
          <ErrorMessageStyled name="weight" component="span" />
        </LabelInput>
        <FormControl sx={{ gap: '12px' }}>
          <FormLabel id="goal" sx={formLabelStyled}>
            Target selection
            <FormLabelText>
              The service will adjust your calorie intake to your goal
            </FormLabelText>
          </FormLabel>
          <RadioGroup
            row
            sx={{
              gap: '12px',
              '& .MuiFormControlLabel-root .MuiFormControlLabel-label': {
                fontFamily: 'Poppins400',
                fontSize: '14px',
                color: 'white.main',
                marginLeft: '12px',
              },
            }}
            aria-labelledby="goal"
            name="goal"
            value={formik.values.goal}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              sx={{ margin: '0px' }}
              value="Lose Fat"
              control={
                <Radio
                  sx={{ padding: '0px' }}
                  icon={
                    <DivImage>
                      <LoseFat
                        src={gender === 'male' ? loseFat : loseFat_girl}
                        alt="Lose fat"
                      />
                    </DivImage>
                  }
                  checkedIcon={
                    <DivActiveImage>
                      <LoseFat
                        src={gender === 'male' ? loseFat : loseFat_girl}
                        alt="Lose fat"
                      />
                    </DivActiveImage>
                  }
                />
              }
              label="Lose Fat"
            />

            <FormControlLabel
              sx={{ margin: '0px' }}
              value="Maintain"
              control={
                <Radio
                  sx={{ padding: '0px' }}
                  icon={
                    <DivImage>
                      <LoseFat
                        src={gender === 'male' ? maintain : maintain_girl}
                        alt="Maintain"
                      />
                    </DivImage>
                  }
                  checkedIcon={
                    <DivActiveImage>
                      <LoseFat
                        src={gender === 'male' ? maintain : maintain_girl}
                        alt="Maintain"
                      />
                    </DivActiveImage>
                  }
                />
              }
              label="Maintain"
            />

            <FormControlLabel
              sx={{ margin: '0px' }}
              value="Gain Muscle"
              control={
                <Radio
                  sx={{ padding: '0px' }}
                  icon={
                    <DivImage>
                      <LoseFat src={gainMuscle} alt="Gain muscle" />
                    </DivImage>
                  }
                  checkedIcon={
                    <DivActiveImage>
                      <LoseFat src={gainMuscle} alt="Gain muscle" />
                    </DivActiveImage>
                  }
                />
              }
              label="Gain Muscle"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ gap: '12px' }}>
          <FormLabel id="activityLevel" sx={formLabelStyled}>
            Your activity
          </FormLabel>
          <RadioGroup
            row
            sx={{ gap: '16px' }}
            aria-labelledby="activityLevel"
            name="activityLevel"
            type="number"
            value={formik.values.activityLevel}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="1.2"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="If you do not have physical activity and sedentary work"
            />
            <FormControlLabel
              value="1.375"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="If you do short runs or light gymnastics 1-3 times a
                  week"
            />
            <FormControlLabel
              value="1.55"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="If you play sports with average loads 3-5 times a week"
            />
            <FormControlLabel
              value="1.725"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="If you train fully 6-7 times a week"
            />
            <FormControlLabel
              value="1.9"
              sx={formControlLabel}
              control={<Radio sx={radioStyled} />}
              label="If your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program"
            />
            {formik.errors.activityLevel && formik.touched.activityLevel && (
              <ErrorMessageStyled id="feedback" name="activityLevel">
                {formik.errors.activityLevel}
              </ErrorMessageStyled>
            )}
          </RadioGroup>
        </FormControl>
        <ButtonGroup aria-label="button group" sx={buttonGroupStyled}>
          <Button sx={buttonStyled} type="submit">
            Save
          </Button>
          <Button
            sx={buttonStyled}
            type="reset"
            onClick={(selectedImage = null)}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </FormWrapper>
    </Formik>
  );
};
