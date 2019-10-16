/**
 * 将http重定向到当前域名下的https
 */
function httpsRedirect() {
  if (location.protocol !== 'https') {
    location.replace('https://' + location.href.split('//')[1]);
  }
}

export default httpsRedirect;
