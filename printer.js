import fs from 'fs';

const callback = (_error, data) => console.log(data);

export default path => fs.readFile(path, 'utf-8', callback);

//*
The asynchronous function that reads the file data at the specified path and outputs it to the console.

import print from './printer';
print('./myfile');
*//
