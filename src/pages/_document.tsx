import Document, { Head, Html, Main, NextScript } from 'next/document'

import { AppConfig } from '@/utils/AppConfig'

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.localehtml}>
        <Head />
        <body className="scroll-pr-6 scroll-pl-6 scrollbar-thin scrollbar-thumb-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
