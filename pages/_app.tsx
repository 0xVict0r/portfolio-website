import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Victor | Econometrics Grad Student"
        titleTemplate="Victor | Econometrics Grad Student"
        defaultTitle="Victor | Econometrics Grad Student"
        description="I'm Victor, An Aerospace Engineer, Technical Writer and Econometrics Grad Student!"
        openGraph={{
          url: "https://www.morizon.me/",
          title: "Victor | Econometrics Grad Student",
          description:
            "I'm Victor, An Aerospace Engineer, Technical Writer and Econometrics Grad Student!",
          images: [
            {
              url: "../public/og-image.png",
              width: 800,
              height: 420,
              alt: "Victor | Econometrics Grad Student",
            },
          ],
        }}
        twitter={{
          handle: "@0xVict0r",
          site: "@0xVict0r",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Data Scientist, Econometrics, Victor, Morizon, Python Development, Python Developer, Technical Writer, Tech Enthusiast, Blokchain Writer, Data Science",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assets/website-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
