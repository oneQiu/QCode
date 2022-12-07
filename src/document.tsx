import { Meta, Title, Links, Main, Scripts } from 'ice';

export default function Document() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="ice.js 3 pro scaffold" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <Meta />
        <Title />
        {/* 低代码引擎的页面框架样式 */}
        <link
          rel="stylesheet"
          href="https://alifd.alicdn.com/npm/@alilc/lowcode-engine@latest/dist/css/engine-core.css"
        />
        {/*  Fusion Next 控件样式 */}
        <link rel="stylesheet" href="https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.css" />
        {/* 低代码引擎的页面主题样式，可以替换为 */}
        <link rel="stylesheet" href="https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light/0.2.0/next.min.css" />
        {/* 低代码引擎官方扩展的样式 */}
        <link
          rel="stylesheet"
          href="https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@latest/dist/css/engine-ext.css"
        />
        {/* React，可替换为 production 包 */}
        <script src="https://g.alicdn.com/code/lib/react/16.14.0/umd/react.development.js" />
        {/*  React DOM，可替换为 production 包 */}
        <script src="https://g.alicdn.com/code/lib/react-dom/16.14.0/umd/react-dom.development.js" />
        {/*  React 向下兼容，预防物料层的依赖 */}
        <script src="https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js" />
        <script src="https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js" />
        {/* lodash，低代码编辑器的依赖 */}
        <script src="https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js" />
        {/* 日期处理包，Fusion Next 的依赖 */}
        <script src="https://g.alicdn.com/code/lib/moment.js/2.29.1/moment-with-locales.min.js" />
        {/* Fusion Next 的主包，低代码编辑器的依赖 */}
        <script src="https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.js" />
        {/* 低代码引擎的主包 */}
        <script
          crossOrigin="anonymous"
          src="https://alifd.alicdn.com/npm/@alilc/lowcode-engine@latest/dist/js/engine-core.js"
        />
        {/* 低代码引擎官方扩展的主包 */}
        <script
          crossOrigin="anonymous"
          src="https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@latest/dist/js/engine-ext.js"
        />
      </head>
      <Links />
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
