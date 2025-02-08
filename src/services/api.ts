const apiUrl = (() => {
  const splittedDomain = location.href.split("/")[2];
  const domain = splittedDomain.includes(":")
    ? splittedDomain.split(":")[0]
    : splittedDomain;
  const baseUrl: string = domain.includes("localhost")
    ? `http://${domain}:${5000}`
    : domain.includes("192.168")
      ? `http://${domain}:${5000}`
      : domain.includes("127.0.0")
        ? `http://${domain}:${5000}`
        : `https://${domain}`;

  return baseUrl;
})();

export default apiUrl;
