const fs = require('fs');
const { parseFlow, elementFlow, elementSink, pipe, VR } = require('@exini/dicom-streams-js');

const src = fs.createReadStream(process.argv[2]);

pipe(
    src,
    parseFlow(),
    elementFlow(),
    elementSink((elements) => {
        console.log(elements.toString());
    }),
);