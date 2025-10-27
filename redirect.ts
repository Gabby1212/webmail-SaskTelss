// redirect.ts

// Define the redirect URL
const redirectUrl = "https://indd.adobe.com/view/68335e6b-4207-4ebd-804d-2070017eed97"; // Replace with the URL you want to redirect to

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
