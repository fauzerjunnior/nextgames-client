'use client';

import {
  Container,
  Menu,
  Footer,
  Heading,
  BannerSlider,
  Highlight
} from '@/components';
import { BannerProps } from '@/components/Banner/banner.component';
import { GameCardProps } from '@/components/GameCard/game-card.component';
import { HighlightProps } from '@/components/Highlight/highlight.component';
import GameCardSlider from '@/components/GameCardSlider/game-card-slider.component';

import * as S from './home.styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  upcommingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};
const Home = ({
  banners,
  newGames,
  upcommingGames,
  freeHighlight,
  mostPopularHighlight,
  freeGames,
  mostPopularGames,
  upcommingHighlight,
  upcommingMoreGames
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>

          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </S.SectionMostPopular>

        <S.SectionUpcoming>
          <Heading lineLeft lineColor="secondary">
            Upcomming
          </Heading>
          <GameCardSlider items={upcommingGames} />
          <Highlight {...upcommingHighlight} />
          <GameCardSlider items={upcommingMoreGames} />
        </S.SectionUpcoming>

        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free games
          </Heading>
          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
};

export default Home;
