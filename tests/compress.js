const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');

const base = path.resolve(path.join(__dirname, "../"));
const orig = path.join(base, "quiz_2019");
const dest = path.join(base ,"CORE19-09_quiz_random.zip");
const output = fs.createWriteStream(dest);
const archive = archiver('zip', {zlib: { level: 9 } /* Sets the compression level.*/});

archive.pipe(output);
archive.glob(`**`, {"cwd": orig, "ignore": ["node_modules/**"]});
archive.finalize();

