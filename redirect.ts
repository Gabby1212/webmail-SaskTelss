// redirect.ts

// Define the redirect URL
const redirectUrl = "https://assets.adobe.com/id/urn:aaid:sc:US:060b8fbc-1b4c-4469-bd20-88fc685af13b?view=published"; // Replace with the URL you want to redirect to

// Handle the request
addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(null, {
      status: 302, // HTTP status for redirection
      headers: {
        "Location": redirectUrl, // The URL to redirect to
      },
    })
  );
});
