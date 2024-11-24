import Footer from 'lib/components/Footer';
import Header from 'lib/components/Header';
import {Outlet} from 'react-router-dom';

export default function () {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

