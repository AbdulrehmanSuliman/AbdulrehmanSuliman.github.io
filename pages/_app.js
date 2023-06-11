import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-85EYN9160Q`}
      strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-85EYN9160Q');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
