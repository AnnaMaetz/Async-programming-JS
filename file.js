import fs from 'fs';

export const move = (srcFilePath, distFilePath, cb) => {
  fs.readFile(srcFilePath, 'utf-8', (error1, data) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.writeFile(distFilePath, data, (error2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.unlink(srcFilePath, cb);
    });
  });
};

//*
function "move" that asynchronously copies a file from one place to another;

import { move } from './file';

move('/opt/myfile', '/tmp/newfile', (error) => {
  if (error) {
    console.log('oops');
    return;
  }
  console.log('yes!')
});

**//
