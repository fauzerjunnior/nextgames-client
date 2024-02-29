'use client';

import { Container, Menu, Footer, Heading } from '@/components';

const Home = () => {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  );
};

export default Home;
