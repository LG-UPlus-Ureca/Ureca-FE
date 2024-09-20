import { globalStyle } from '@/styles/globals';
import { Global, ThemeProvider } from '@emotion/react';
import { Layout } from '@components/Layout';
import Home from '@pages/Home';

function App() {
  return (
    <Layout>
      <Global styles={globalStyle} />
      <Home />
    </Layout>
  );
}

export default App;
