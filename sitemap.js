const fs = require("fs");
const path = require("path");

// Manually list routes
const routes = [
  "/",
  "/registration",
  "/login",
  "/products",
  "/products/:id",
  "/cart", // Add other routes here
];

const sitemapUrls = routes.map((route) => {
  return `<url><loc>https://themultihub.shop${route}</loc></url>`;
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapUrls.join("\n")}
</urlset>`;

fs.writeFileSync(path.resolve(__dirname, "public", "sitemap.xml"), sitemapXml);
