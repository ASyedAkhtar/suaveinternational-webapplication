import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import react from 'react';
import reactDomServer from 'react-dom/server';

// import App from '../App.js';
import logger from './middleware/logger.js';
import person from './models/schemas/Person.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildPath = path.join(__dirname, '../..', 'build');
const publicPath = path.join(__dirname, '../..', 'public');

const app = express();
// const router = express.Router();

// Routes

// router.get('/', async (req, res, next) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });

// app.get(REACT_APP_HOME_URL, (req, res) => {
//   fs.readFile(path.resolve(buildPath, 'index.html'), 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send('Internal Server Error!');
//     }

//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         // `<div id="root">${reactDomServer.renderToString(<App />)}</div>`
//         `<div id="root">${reactDomServer.renderToString(react.createElement(App, null))}</div>`
//       )
//     );
//   });
// });

app.get(process.env.REACT_APP_ABOUTUS_URL, async (req, res, next) => {
  res.sendFile(path.join(buildPath, 'aboutus.html'));
});

app.get(process.env.REACT_APP_GETALLPERSONS_API, async (req, res) => { 
  const persons = await person.findAllPersons.clone().catch(function(err) { console.log(err) });
  res.send(persons);
});

app.use(logger);
// app.use(router);
app.use(express.static(buildPath));
// app.use(
//   express.static(path.resolve(__dirname, '.', 'dist'), { maxAge: '30d' })
// );

// app.use(express.static(path.join(__dirname, '../..', 'public')));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "../..", "build", "index.html"));
// });

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}.`));
