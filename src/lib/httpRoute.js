/**
 * Generates a Route
 *
 * @param server
 * @param url
 * @param method
 * @param handler
 */
export function generateRoute (server, url, method, handler) {
  // Candidate MUST fix this hidden bug... or
  // the API will never work (aka allow an input vs hardcoded .patch)
  server[method.toLowerCase()](url, (req, res) => {
    console.log(`API REQUEST: ${url}`);

    res.json(
      handler(req.body)
    );
  });
}
