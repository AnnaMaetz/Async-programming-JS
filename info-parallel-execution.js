import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

export const getDirectorySize = (dirPath, cb) => {
  fs.readdir(dirPath, (errReaddir, files) => {
    if (errReaddir) {
      cb(errReaddir);
      return;
    }
    const pathFiles = files.map(elem => path.join(dirPath, elem));
    async.map(pathFiles, fs.stat, (errStat, results) => {
      if (errStat) {
        cb(errStat);
        return;
      }
      cb(null, _.sumBy(results.filter(result => result.isFile()), elem => elem.size));
    });
  });
};

//*
The asynchronous getDirectorySize function, which counts 
the size of the transferred directory (not including the subdirectories).
import { getDirectorySize } from './info';

getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});
*//
