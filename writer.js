import fs from 'fs';

export default (filepath, data, cb) => {
  fs.writeFile(filepath, data, cb);
};

//*
The asynchronous function that writes 
data along the specified path and notifies about 
the completion of work through the transferred callback.

import write from './writer';

write('./myfile', 'data', () => {
  console.log('success');
});

*//
