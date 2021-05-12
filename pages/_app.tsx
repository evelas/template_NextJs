import { wrapper } from '../redux/redux-store'

function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)