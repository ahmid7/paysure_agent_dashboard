import GlobalStyles from './../styles/GlobalStyles'
import './../styles/GlobalStyles.css'

const App = ({ Component, pageProps }) => {
  if(Component.getLayout){
    return <GlobalStyles/>, Component.getLayout(<Component {...pageProps}/>)
  }

  if(Component.signUpLayout){
    return <GlobalStyles/>, Component.signUpLayout(<Component {...pageProps}/>)
  }

  if(Component.accountVerificationLayout){
    return <GlobalStyles/>, Component.accountVerificationLayout(<Component {...pageProps}/>)
  }

  return(
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )

}

export default App
