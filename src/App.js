import Header from './components/Header';
import { Container } from './components/styles/Container.style';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/Global';
import content from './content';
import Card from './components/Card';
import Footer from './components/Footer';

const theme = {
  colors:{
    header : "#ebfbff",
    body : "#fff",
    footer : "#003333"
  },

  breakpoint: {
    mobile:"567px",
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
       <>
        <GlobalStyle />
        <Header />
        <Container>
          {content.map((card,index) => <Card {...card} />)}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
