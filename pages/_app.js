import '../styles/globals.css'

import Sidebar from '../components/sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <div className='app'>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
