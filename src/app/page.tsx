import bannerSliderMock from '@/components/BannerSlider/banner-slider.mock';
import gameCardSliderMock from '@/components/GameCardSlider/game-card-slider.mock';
import highlightMock from '@/components/Highlight/highlight.mock';
import Home from '@/templates/Home/home.component';

export async function getStaticData() {
  return {
    banners: bannerSliderMock,
    newGames: gameCardSliderMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gameCardSliderMock,
    upcommingGames: gameCardSliderMock,
    upcommingHighlight: highlightMock,
    upcommingMoreGames: gameCardSliderMock,
    freeGames: gameCardSliderMock,
    freeHighlight: highlightMock
  };
}

export default async function Index() {
  const props = await getStaticData();

  return <Home {...props} />;
}
