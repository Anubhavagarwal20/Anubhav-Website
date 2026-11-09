const fs = require('fs');

const lh = JSON.parse(fs.readFileSync('C:\\Users\\anubh\\.gemini\\antigravity\\brain\\7f49a1be-cb4d-43c4-b9e9-3ae0a8d18fa4\\scratch\\lighthouse.json', 'utf8'));

console.log('--- 1. LCP BREAKDOWN ---');
const lcpBreakdown = lh.audits['lcp-breakdown-insight'];
if (lcpBreakdown && lcpBreakdown.details) {
  console.log(JSON.stringify(lcpBreakdown.details, null, 2));
}

console.log('--- 2. LCP DISCOVERY ---');
const lcpDisc = lh.audits['lcp-discovery-insight'];
if (lcpDisc && lcpDisc.details) {
  console.log(JSON.stringify(lcpDisc.details, null, 2));
}

console.log('--- 3. RENDER BLOCKING ---');
const rb = lh.audits['render-blocking-insight'] || lh.audits['render-blocking-resources'];
if (rb && rb.details) {
  console.log(JSON.stringify(rb.details, null, 2));
}

console.log('--- 4. IMAGE DELIVERY ---');
const imgDel = lh.audits['image-delivery-insight'];
if (imgDel && imgDel.details) {
  console.log(JSON.stringify(imgDel.details, null, 2));
}

console.log('--- 5. FORCED REFLOW ---');
const reflow = lh.audits['forced-reflow-insight'];
if (reflow && reflow.details) {
  console.log(JSON.stringify(reflow.details, null, 2));
}
