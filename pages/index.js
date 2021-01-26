import styled from 'styled-components';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  function handleInput(e) {
    const { value } = e.target;
    setName(value);
  }

  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta property="og:url" content="www.teste.url" key="ogurl" />
        <meta property="og:image" content={db.bg} key="ogimage" />
        <meta property="og:site_name" content={db.title} key="ogsitename" />
        <meta property="og:title" content={db.title} key="ogtitle" />
        <meta property="og:description" content={db.description} key="ogdesc" />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input id="nameInput" placeholder="Qual é o seu nome" onChange={(e) => handleInput(e)} />
                <button id="submitNameButton" type="submit" disabled={name.length === 0}> Jogar </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/joaopaulonsoares" />
      </QuizBackground>
    </>
  );
}
