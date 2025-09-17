// This file injects the manifest for PWA support in the Strapi admin panel.
export function registerPWA() {
  // Use static manifest file to avoid CSP issues
  const manifestLink = document.createElement("link");
  manifestLink.rel = "manifest";
  manifestLink.href = "/manifest.json";
  document.head.appendChild(manifestLink);

  // Inject PWA meta tags
  const themeColor = document.createElement("meta");
  themeColor.name = "theme-color";
  themeColor.content = "#2c2e3a";
  document.head.appendChild(themeColor);

  const viewportMeta = document.createElement("meta");
  viewportMeta.name = "viewport";
  viewportMeta.content = "width=device-width, initial-scale=1";
  document.head.appendChild(viewportMeta);

  // Add mobile-web-app meta tags (updated from deprecated apple-mobile-web-app)
  const mobileWebAppCapable = document.createElement("meta");
  mobileWebAppCapable.name = "mobile-web-app-capable";
  mobileWebAppCapable.content = "yes";
  document.head.appendChild(mobileWebAppCapable);

  const appleMobileWebAppStatusBarStyle = document.createElement("meta");
  appleMobileWebAppStatusBarStyle.name =
    "apple-mobile-web-app-status-bar-style";
  appleMobileWebAppStatusBarStyle.content = "default";
  document.head.appendChild(appleMobileWebAppStatusBarStyle);

  console.log("PWA manifest registered successfully from /manifest.json");
  console.log("Check browser dev tools > Application > Manifest for details");

  // Add beforeinstallprompt event listener for debugging
  window.addEventListener("beforeinstallprompt", (e) => {
    console.log("PWA install prompt is available!");
    // You can save the event and trigger it later if needed
    // e.preventDefault(); // Uncomment to prevent automatic prompt
  });
}
