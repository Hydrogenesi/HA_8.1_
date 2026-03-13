#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ENGINE_DIR = path.join(__dirname, '..', 'INTEGRATION_ENGINE');
const PLATES = [
  '1-Cross-Pillar-Transition-Maps.md',
  '2-Operator-Composition-Rules.md',
  '3-Universal-Law-Validation-Matrix.md',
  '4-Three-Finger-Waltz-Examples.md',
  '5-Multi-Scale-Operator-Choreography.md',
  '6-Pillar-to-Pillar-Recursion-Pathways.md',
  '7-Threshold-Mechanics-Across-Layers.md'
];
function listPlates() { PLATES.forEach((n,i) => console.log(`${i+1}. ${n}`)); }
function showPlate(index) {
  const idx = Number(index) - 1;
  if (idx < 0 || idx >= PLATES.length) { console.error('Invalid plate.'); process.exit(1); }
  console.log(fs.readFileSync(path.join(ENGINE_DIR, PLATES[idx]), 'utf8'));
}
const [cmd, arg] = process.argv.slice(2);
if (!cmd || cmd === 'list') { listPlates(); }
else if (cmd === 'show') { showPlate(arg); }
else { console.error('Usage: ha8-engine [list|show <1-7>]'); process.exit(1); }
