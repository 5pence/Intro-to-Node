import { readFile } from 'fs'

readFile(new URL('app.mj', import.meta.url), 'utf-8', (err, data) => {
  if (err) {
    console.error('youve got an error: ', err);
  } else {
    console.log(data);
  }
})