export function isFacebookApp(): boolean {
  var ua = navigator.userAgent || navigator.vendor;
  return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
}

export function isIOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}
