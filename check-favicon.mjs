export default async function run(page, ui) {
  // Check if favicon is properly loaded
  const faviconUrl = page.url() + '/favicon.svg'

  // Check if favicon element exists
  const faviconElements = await page.$$eval('link[rel*="icon"], link[rel*="ICON"]', (links) =>
    links.map(link => ({
      rel: link.rel,
      href: link.href,
      type: link.type,
      sizes: link.sizes
    }))
  )

  // Check for any img elements with favicon
  const faviconImages = await page.$$eval('img[rel*="icon"], img[rel*="ICON"], img[id*="favicon"], img[id*="FAVICON"]', (imgs) =>
    imgs.map(img => ({
      src: img.src,
      id: img.id,
      rel: img.rel
    }))
  )

  // Check page title
  const title = await page.title()

  return {
    title,
    faviconLinks: faviconElements,
    faviconImages,
    expectedFavicon: faviconUrl
  }
}