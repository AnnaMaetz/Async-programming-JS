import fs from 'fs';

export const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_error1, { size: size1 }) => {
    fs.stat(filepath2, (_error2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));
    });
  });
};

//*
The asynchronous function compareFileSizes, which compares the sizes of two files. 
If the first is greater than the second, then it returns 1, if the sizes are equal,
then it returns 0, otherwise - -1.

import { compareFileSizes } from './info';

compareFileSizes('file1', 'file2', (_err, result) => console.log(result));

*//
