/**
 * Generates a Route
 *
 * @param server
 * @param url
 * @param method
 * @param handler
 */
export function generateRoute (server, url, method, handler) {
  //It was originally just server.patch, since I was unsure if it could be used for anything else I left it as is
  server.patch(url, (req, res) => {
    console.log(`API REQUEST: ${url}`);  
    res.json(
      handler(req.body)
    );
  });

  //Added a server.post function - Khalid
  server.post(url, (req, res) => {
    console.log(`API REQUEST: ${url}`);
    res.json(
      handler(req.body)
    );
  });
  
}
