// eslint-disable-next-line import/no-anonymous-default-export
export default async (request, context) => {
    console.log(context.ip, context.params)
    return new Response(JSON.stringify({context}), {
        headers: { "content-type": "application/json" }
      });
  };

  export const config = { path: "/testing" };

