import dynamic from 'next/dynamic';
import {Component} from 'react';
import Head from 'next/head';

export default class extends Component {
  static async getInitialProps({req}) {
    return req
        ? {userAgent: req.headers['user-agent']}
        : {userAgent: navigator.userAgent};
  }

  render() {
    return (
        <div>
          <Head>
            <title>My page title</title>
            <meta name="viewport"
                  content="initial-scale=1.0, width=device-width"/>
            <meta name="viewport"
                  content="width=device-width,
               user-scalable=no,
                initial-scale=1.0,
                 maximum-scale=1.0,
                  minimum-scale=1.0"/>
          </Head>
          <div>Welcome to next.js!</div>
          <div>
            Hello World {this.props.userAgent}
          </div>
        </div>
    );
  }
}
