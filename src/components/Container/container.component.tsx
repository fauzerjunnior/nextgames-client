import * as S from './container.styles';

export type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <S.Container>{children}</S.Container>
);

export default Container;
