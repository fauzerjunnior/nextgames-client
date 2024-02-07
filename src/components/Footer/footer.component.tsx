import * as S from './footer.styles';
import { Logo, Heading } from '@/components';
import Link from 'next/link';

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content data-testid="footer-content">
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:sac@nextgames.com">sac@nextgames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/nextgames"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/nextgames"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/nextgames"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">Home</Link>
          <Link href="/">Store</Link>
          <Link href="/">Search</Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>

        <span>Av Paulista, 12</span>
        <span>São Paulo, SP</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Next Games 2024 © Todos os Direitos Reservados</S.Copyright>
  </S.Wrapper>
);

export default Footer;
