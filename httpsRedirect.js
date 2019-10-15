/**
 * 将http重定向到当前域名下的https
 */
const httpsRedirect = () => {
  if (location.protocol !== 'https') {
    location.replace('https://' + location.href.split('//')[1]);
  }
};

export default httpsRedirect;
