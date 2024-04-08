import {
  Wrapper,
  Content,
  SignUpBox,
  Title,
  Subtitle,
  QuestionTrumb,
  Question,
  Image,
  StyledLink,
  NavLinkStyled,
} from './SignIn.styled';
import SignInForm from './SignInForm/SignInForm';

import image from '../../assets/backgroundImages/welcomepage.png';

export const SignIn = () => {
  return (
    <Wrapper>
      <Image src={image} alt="Activity tracker" />
      <Content>
        <SignUpBox>
          <Title>Sign in</Title>
          <Subtitle>You need to login to use the service</Subtitle>
        </SignUpBox>
        <SignInForm />
        <StyledLink to="/forgot-password">Forgot your password?</StyledLink>
        <QuestionTrumb>
          <Question>{`If you don't have an account yet`}</Question>
          <NavLinkStyled to="/signup">Sign up</NavLinkStyled>
        </QuestionTrumb>
      </Content>
    </Wrapper>
  );
};
