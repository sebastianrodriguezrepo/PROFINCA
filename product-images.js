const PRODUCT_IMAGES = {
    "P01": "img/P01.png",
    "P02": "img/P02.png",
    "P03": "img/P03.jpg",
    "P04": "img/P04.webp",
    "P06": "img/P06.webp",
    "P07": "img/P07.jpg",
    "P09": "img/P09.jpg",
    "P10": "img/P10.jpg",
    "P100": "img/P100.jpg",
    "P101": "img/P101.jpg",
    "P104": "img/P104.png",
    "P11": "img/p11.jpg",
    "P112": "img/P112.webp",
    "P114": "img/P114.png",
    "P115": "img/P115.webp",
    "P12": "img/P12.jpg",
    "P123": "img/P123.jpg",
    "P124": "img/P124.jpg",
    "P129": "img/P129.jpg",
    "P13": "img/P13.jpg",
    "P130": "img/P130.jpg",
    "P131": "img/P131.jpg",
    "P132": "img/P132.jpg",
    "P133": "img/P133.png",
    "P135": "img/P135.jpg",
    "P14": "img/P14.jpg",
    "P142": "img/P142.webp",
    "P143": "img/P143.jpg",
    "P144": "img/P144.webp",
    "P145": "img/P145.webp",
    "P15": "img/P15.jpg",
    "P150": "img/P150.webp",
    "P152": "img/P152.jpg",
    "P155": "img/P155.jpg",
    "P157": "img/P157.webp",
    "P158": "img/MayonesaDonGolden.jpg",
    "P159": "img/P159.jpg",
    "P16": "img/P16.jpg",
    "P160": "img/MayonesaDonThomas.jpg",
    "P162": "img/P162.png",
    "P163": "img/P163.png",
    "P167": "img/P167.avif",
    "P168": "img/P168.jpeg",
    "P170": "img/P170.jpg",
    "P173": "img/P173.jpg",
    "P174": "img/P174.jpg",
    "P18": "img/P18.webp",
    "P19": "img/P19.webp",
    "P20": "img/P20.jpg",
    "P201": "img/P201.webp",
    "P205": "img/P205.jpg",
    "P207": "img/P207.png",
    "P208": "img/P208.jpg",
    "P21": "img/P21.jpg",
    "P210": "img/P210.png",
    "P211": "img/P211.png",
    "P218": "img/P218.jpg",
    "P22": "img/P22.webp",
    "P23": "img/P23.jpg",
    "P236": "img/P236.avif",
    "P238": "img/P238.png",
    "P24": "img/P24.jpg",
    "P241": "img/P241.jpg",
    "P242": "img/P242.jpg",
    "P245": "img/P245.jpg",
    "P25": "img/P25.webp",
    "P26": "img/P26.jpg",
    "P27": "img/P27.jpg",
    "P29": "img/P29.jpg",
    "P30": "img/P30.jpg",
    "P31": "img/P31.webp",
    "P32": "img/P32.jpg",
    "P33": "img/P33.jpg",
    "P34": "img/P34.jpg",
    "P35": "img/P35.jpg",
    "P36": "img/P36.jpg",
    "P37": "img/P37.jpg",
    "P39": "img/P39.jpg",
    "P40": "img/P40.jpg",
    "P41": "img/P41.jpg",
    "P42": "img/P42.webp",
    "P43": "img/P43.jpg",
    "P44": "img/P44.png",
    "P49": "img/P49.png",
    "P51": "img/P51.jpg",
    "P53": "img/P53.jpg",
    "P57": "img/P57.jpg",
    "P58": "img/P58.jpg",
    "P69": "img/P69.jpg",
    "P72": "img/P72.jpg",
    "P74": "img/P74.jpg",
    "P77": "img/P77.png",
    "P82": "img/P82.jpg",
    "P84": "img/P84.jpg",
    "P90": "img/P90.jpg",
    "P92": "img/P92.jpg",
    "P93": "img/P93.png",
    "P94": "img/P94.png",
    "P95": "img/P95.jpg",
    "P190": "img/p190.jpeg"
};

function getProductImageUrl(codigo) {
    if (PRODUCT_IMAGES[codigo]) return PRODUCT_IMAGES[codigo];
    const base = codigo.split("-")[0];
    return PRODUCT_IMAGES[base] || null;
}

function renderProductImageHtml(codigo, nombre, emoji) {
    const src = getProductImageUrl(codigo);
    if (!src) {
        return `<div class="w-full h-40 sm:h-44 mb-3 rounded-xl overflow-hidden bg-amber-50 border border-amber-200/80 flex items-center justify-center text-5xl">${emoji}</div>`;
    }
    const safeName = nombre.replace(/"/g, '&quot;');
    return `<div class="relative w-full h-40 sm:h-44 mb-3 rounded-xl overflow-hidden bg-amber-50 border border-neutral-200/80">
        <div class="absolute inset-0 flex items-center justify-center text-5xl">${emoji}</div>
        <img src="${src}" alt="${safeName}" loading="lazy"
             class="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
             onerror="this.style.display='none'">
    </div>`;
}

function renderProductThumbnailHtml(codigo, emoji) {
    const src = getProductImageUrl(codigo);
    if (!src) {
        return `<div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0 border border-amber-200">${emoji}</div>`;
    }
    return `<div class="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-200 bg-amber-50">
        <div class="absolute inset-0 flex items-center justify-center text-lg">${emoji}</div>
        <img src="${src}" alt="" class="relative w-full h-full object-cover" onerror="this.style.display='none'">
    </div>`;
}
