addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  )
})

async function handleRequest(request) {
  var url = new URL(request.url)
  var params = url.searchParams

  // Author json file
  if (url.pathname.startsWith('/embed.json')) {
    var json = {
      type: "photo",
      author_name: decodeURI(params.get('author'))
    }

    return new Response(JSON.stringify(json), {
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  })
  }

  // Embeds
  var str = '<!DOCTYPE html><head><meta name="twitter:card" content="summary_large_image">'

  var w = params.get('w') // website name
  var a = params.get('a') // author
  var t = params.get('t') // title
  var d = params.get('d') // description
  var c = params.get('c') // color
  var i = params.get('i') // image URL
  var r = params.get('r') // redirect URL
  
  if (w) {
    str += `<meta property="og:site_name" content="${decodeURI(w)}">`
  }
  if (a) {
    str += `<link type="application/json+oembed" href="https://embed.chailotl.workers.dev/embed.json?author=${a}" />`
  }
  if (t) {
    str += `<meta property="og:title" content="${decodeURI(t)}">`
  }
  if (d) {
    str += `<meta property="og:description" content="${decodeURI(d)}">`
  }
  if (c) {
    str += `<meta name="theme-color" content="#${c}">`
  }
  if (i) {
    str += `<meta property="og:image" content="${decodeURI(i)}">`
  }

  str += '</head>'

  // Redirects
  if (r) {
    str += `<script>window.location = '${decodeURI(r)}'</script>`
  } else {
    return Response.redirect('https://chailotl.github.io/embed', 301);
  }

  return new Response(str, {
    headers: {
      'content-type': 'text/html;charset=UTF-8'
    }
  })
}
