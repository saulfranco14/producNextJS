import '../styles/globals.css'
import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';
import useAuth from '../hooks/UseAuth.component';

function MyApp({ Component, pageProps }) {

  const user  = useAuth();
  const email = user?.email ; 

  return (
    <FirebaseContext.Provider
      value={{
         firebase,
         user,
         email
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp
