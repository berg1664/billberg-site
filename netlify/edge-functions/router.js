// netlify/edge-functions/router.js
//
// Serves the right experience at billberg.tv WITHOUT changing the address bar.
// Phones get the swipe feed; everything else gets the floating-windows build.
// Returning a URL object = a "rewrite" (200) — the URL stays billberg.tv while
// Netlify fetches the chosen file behind the scenes.

export default async (request) => {
  const ua = request.headers.get("user-agent") || "";
  const isMobile = /Android|iPhone|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  const url = new URL(request.url);
  url.pathname = isMobile ? "/mobile.html" : "/desktop.html";
  return url;
};

export const config = { path: "/" };
