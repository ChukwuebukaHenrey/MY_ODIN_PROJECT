import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Convenience redirects for primary projects
app.get('/calculator', (req, res) => res.redirect('/Calculator/index.html'));
app.get('/moviehive', (req, res) => res.redirect('/Project-111/index.html'));
app.get('/movies', (req, res) => res.redirect('/Project-111/index.html'));
app.get('/recipes', (req, res) => res.redirect('/recipes/lasagna.html'));
app.get('/landing', (req, res) => res.redirect('/CSS-EXERSISES/Landing-page/index.html'));

// Serve all static project files
app.use(express.static(__dirname));

// Fallback to main hub index, but let missing files 404 loudly instead of masquerading as the hub
app.get('*', (req, res) => {
  const lastSegment = req.path.split('/').pop() || '';
  if (lastSegment.includes('.')) {
    return res.status(404).send('Not found');
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
