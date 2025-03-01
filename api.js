export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': 'TU-URL',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': '*'
        }
      });
    }

    const backendUrl = 'TU-URL';

    const response = await fetch(backendUrl);

    const newResp = new Response(response.body, response);
    newResp.headers.set('Access-Control-Allow-Origin', 'TU-URL');
    newResp.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    newResp.headers.set('Access-Control-Allow-Headers', '*');
    newResp.headers.set('Content-Type', 'application/json');

    return newResp;
  }
}
