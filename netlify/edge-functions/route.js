export default async (request, context) => {
    return new Response(JSON.stringify(context), {
        headers: { "content-type": "application/json" }
      });
  };

  export const config = { path: "/testing" };

