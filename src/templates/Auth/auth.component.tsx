import { Heading, Logo } from '@/components';
import * as S from './auth.styles';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />

      <Heading>All your favorite games in one place</Heading>
      <S.Subtitle>
        <strong>NEXT</strong> is the best and most complete gaming platform.
      </S.Subtitle>

      <S.Footer>Next Games © 2024 - 2021 All rights reserved</S.Footer>
    </S.BannerBlock>

    <S.Content>
      <Logo color="black" size="large" />

      <Heading lineLeft lineColor="secondary" color="black">
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
);

export default Auth;
