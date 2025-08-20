export async function onRequest(context) {
  return Response.json({
    message: "Halo dari API Cloudflare Pages Functions!"
  });
}
