import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <>
      <Head>
        <meta title="Holaplex Marketplace Docs" />
        <meta property="og:title" content="Holaplex Marketplace Docs" />
        <meta
          property="og:description"
          content="Let us power your Marketplace"
        />
        <meta
          property="description"
          content="Let us power your Marketplace"
        />
        <link rel="canonical" href="https://holaplex.com" />
      </Head>
      <Redirect to="/docs/introduction" />
    </>
  );
}