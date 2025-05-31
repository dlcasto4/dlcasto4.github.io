// External Backend Proxy for browser.rammerhead.org
// Run: npm install express node-fetch cors
// Start: node proxy-server.js

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Allow all origins (Configure in production for security)
app.use(cors());

// Proxy any GET request to browser.rammerhead.org
app.get('/rh', async (req, res) => {
  try {
    const targetUrl = req.query.url || 'https://browser.rammerhead.org';
    // Optional: Validate URL to restrict open proxy use
    if (!/^https:\/\/browser\.rammerhead\.org/.test(targetUrl)) {
      return res.status(400).send('Invalid target URL');
    }

    const response = await fetch(targetUrl, {
      headers: { 'User-Agent': req.get('User-Agent') || '' }
    });

    // Forward status and headers (optional: filter for safety)
    res.status(response.status);
    response.headers.forEach((v, k) => res.setHeader(k, v));
    const body = await response.buffer();
    res.send(body);
  } catch (err) {
    res.status(500).send('Proxy error: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`External backend proxy running on http://localhost:${PORT}/rh`);
  console.log(`Example: http://localhost:${PORT}/rh?url=https://browser.rammerhead.org`);
});
