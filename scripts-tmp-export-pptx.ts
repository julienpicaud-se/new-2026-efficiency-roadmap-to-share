// @ts-nocheck
process.chdir('/dev-server');
const { exportToPptx } = await import('/dev-server/src/lib/pptx-export.ts');
// patch writeFile to write to /mnt/documents
const PptxGenJS = (await import('pptxgenjs')).default;
const origWrite = PptxGenJS.prototype.writeFile;
PptxGenJS.prototype.writeFile = async function(opts) {
  const buf = await this.write({ outputType: 'nodebuffer' });
  const fs = await import('fs');
  const out = '/mnt/documents/playbook-export.pptx';
  fs.writeFileSync(out, buf);
  console.log('wrote', out, 'bytes', buf.length);
  return out;
};
await exportToPptx();
