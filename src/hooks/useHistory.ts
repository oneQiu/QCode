import { history } from 'ice';

interface PushOptions {
  params?: { [key: string]: number | string | boolean };
}
export default () => {
  /** 路由前进 */
  const push = (url: string, { params }: PushOptions = {}) => {
    let urlStr = url;
    if (params) {
      Object.keys(params).forEach((i, idx) => {
        urlStr += `${idx === 0 ? '?' : '&'}${i}=${params[i]}`;
      });
    }
    history?.push(urlStr);
  };

  /** 后退 */
  const back = () => {
    history?.back();
  };

  return {
    push,
    back,
  };
};
