export async function onRequestGet(context) {
  const data = await context.env.POSTS_DB.get("posts");
  return new Response(data || "[]", {
    headers: { "Content-Type": "application/json" }
  });
}

export async function onRequestPost(context) {
  const newPosts = await context.request.text();
  await context.env.POSTS_DB.put("posts", newPosts);
  return new Response("OK");
}
