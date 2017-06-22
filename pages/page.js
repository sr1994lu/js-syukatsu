import 'isomorphic-fetch';
import Head from 'next/head';

const Page = ({stars}) => (
    <div>
      <Head>
        <title>Page Sample</title>
        <meta name="viewport"
              content="initial-scale=1.0, width=device-width"/>
        <meta name="viewport"
              content="width=device-width,
               user-scalable=no,
                initial-scale=1.0,
                 maximum-scale=1.0,
                  minimum-scale=1.0"/>
      </Head>
      <div>Next stars: {stars}</div>
    </div>
);

Page.getInitialProps = async ({req}) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  return {stars: json.stargazers_count};
};

export default Page;
