import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  setTimeout(
    function() { 
          window.location.replace('https://spx-token.com/');
    },
    200
  );
  return (
    <div className="container">
      
    </div>
  )
}
