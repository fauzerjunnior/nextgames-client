import Home, { HomeTemplateProps } from '@/templates/Home/home.component';
import bannersMock from '@/components/BannerSlider/banner-slider.mock';
import gamesMock from '@/components/GameCardSlider/game-card-slider.mock';
import highlightMock from '@/components/Highlight/highlight.mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export function getServerSideProps() {
  // faz lógica
  // pode ser buscar dados numa API
  // fazer calculo|leitura de context

  // retorno dos dados
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock,
    },
  };
}
