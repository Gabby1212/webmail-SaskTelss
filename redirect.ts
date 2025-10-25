// redirect.ts

// Define the redirect URL
const redirectUrl = "https://indd.adobe.com/view/08ef235c-ff07-47f9-a982-49b1bf22550e"; // Replace with the URL you want to redirect to

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
