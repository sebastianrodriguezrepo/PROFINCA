const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'img');
const files = fs.readdirSync(dir);
const map = {};
const aliases = {
    'MayonesaDonGolden.jpg': 'P158',
    'MayonesaDonThomas.jpg': 'P160'
};

for (const file of files) {
    if (file.toLowerCase() === 'logo.png') continue;
    if (aliases[file]) {
        map[aliases[file]] = `img/${file}`;
        continue;
    }
    const match = file.match(/^([pP]\d+)/);
    if (match) {
        map[match[1].toUpperCase()] = `img/${file}`;
    }
}

const codes = Object.keys(map).sort();
let out = 'const PRODUCT_IMAGES = {\n';
for (const code of codes) {
    out += `    "${code}": "${map[code]}",\n`;
}
out += `};\n\nfunction getProductImageUrl(codigo) {\n`;
out += `    if (PRODUCT_IMAGES[codigo]) return PRODUCT_IMAGES[codigo];\n`;
out += `    const base = codigo.split("-")[0];\n`;
out += `    return PRODUCT_IMAGES[base] || null;\n`;
out += `}\n`;

fs.writeFileSync(path.join(__dirname, 'product-images.js'), out);
console.log(`Mapped ${codes.length} product images`);
