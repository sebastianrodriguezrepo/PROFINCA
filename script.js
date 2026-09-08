const WHATSAPP_PHONE = "573054542305";

const PRODUCTS_DATA = [
    // 1. LÍNEA CERDO (32 Productos)
    {"categoria": "Línea Cerdo", "codigo": "P162", "nombre": "ANCA DE CERDO", "unidad": "KILO", "precio": 20000},
    {"categoria": "Línea Cerdo", "codigo": "P135", "nombre": "BONDIOLA CON HUESO", "unidad": "KILO", "precio": 17500},
    {"categoria": "Línea Cerdo", "codigo": "P40", "nombre": "BONDIOLA DE CERDO - EMPACADA AL VACÍO", "unidad": "KILO", "precio": 16500},
    {"categoria": "Línea Cerdo", "codigo": "P124", "nombre": "BONDIOLA FRESCA", "unidad": "KILO", "precio": 16500},
    {"categoria": "Línea Cerdo", "codigo": "P41", "nombre": "CHULETA DE CERDO COUNTRY", "unidad": "KILO", "precio": 16500},
    {"categoria": "Línea Cerdo", "codigo": "P29", "nombre": "CHULETA DE CERDO DE PIERNA", "unidad": "KILO", "precio": 17500},
    {"categoria": "Línea Cerdo", "codigo": "P21", "nombre": "CHULETÓN DE CERDO", "unidad": "KILO", "precio": 21000},
    {"categoria": "Línea Cerdo", "codigo": "P174", "nombre": "CODILLOS DE CERDO", "unidad": "KILO", "precio": 10000},
    {"categoria": "Línea Cerdo", "codigo": "P35", "nombre": "COJÍN DE LECHONA", "unidad": "KILO", "precio": 17000},
    {"categoria": "Línea Cerdo", "codigo": "P123", "nombre": "COSTICHI DE CERDO (COSTILLA Y PANCETA)", "unidad": "KILO", "precio": 22000},
    {"categoria": "Línea Cerdo", "codigo": "P57", "nombre": "COSTILLA DE CERDO SAN LUIS J", "unidad": "UNIDAD", "precio": 20000},
    {"categoria": "Línea Cerdo", "codigo": "P131", "nombre": "COSTILLA A GRANEL", "unidad": "KILO", "precio": 17000},
    {"categoria": "Línea Cerdo", "codigo": "P20", "nombre": "COSTILLITAS AHUMADAS EMPACADAS 500GR", "unidad": "KILO", "precio": 14000},
    {"categoria": "Línea Cerdo", "codigo": "P18", "nombre": "COSTILLA DE CERDO BRISKET EMP", "unidad": "KILO", "precio": 17500},
    {"categoria": "Línea Cerdo", "codigo": "P37", "nombre": "COSTILLA DE CERDO CON PIEL", "unidad": "KILO", "precio": 22000},
    {"categoria": "Línea Cerdo", "codigo": "P19", "nombre": "COSTILLA DE CERDO MIXTA ROJA", "unidad": "KILO", "precio": 19500},
    {"categoria": "Línea Cerdo", "codigo": "P16", "nombre": "COSTILLA DE CERDO SIN PIEL", "unidad": "KILO", "precio": 20000},
    {"categoria": "Línea Cerdo", "codigo": "P34", "nombre": "EMPELLA DE CERDO", "unidad": "KILO", "precio": 9000},
    {"categoria": "Línea Cerdo", "codigo": "P32", "nombre": "GARRA DE CERDO", "unidad": "KILO", "precio": 8000},
    {"categoria": "Línea Cerdo", "codigo": "P112", "nombre": "LOMO AHUMADO", "unidad": "KILO", "precio": 21000},
    {"categoria": "Línea Cerdo", "codigo": "P31", "nombre": "LOMO DE CERDO CRIOLLO", "unidad": "KILO", "precio": 19500},
    {"categoria": "Línea Cerdo", "codigo": "P10", "nombre": "LOMO DE CERDO IMPORTADO", "unidad": "KILO", "precio": 17500},
    {"categoria": "Línea Cerdo", "codigo": "P205", "nombre": "LOMO NACIONAL ROSADO", "unidad": "UNIDAD", "precio": 18500},
    {"categoria": "Línea Cerdo", "codigo": "P163", "nombre": "MINILOMO", "unidad": "KILO", "precio": 17500},
    {"categoria": "Línea Cerdo", "codigo": "P104", "nombre": "PANCETA CUADRADA PREMIUM", "unidad": "KILO", "precio": 24000},
    {"categoria": "Línea Cerdo", "codigo": "P22", "nombre": "PANCETA MEDIA LUNA", "unidad": "KILO", "precio": 22000},
    {"categoria": "Línea Cerdo", "codigo": "P33", "nombre": "PAPADA DE CERDO", "unidad": "KILO", "precio": 15500},
    {"categoria": "Línea Cerdo", "codigo": "P36", "nombre": "PIERNA PULPA DE CERDO", "unidad": "KILO", "precio": 16500},
    {"categoria": "Línea Cerdo", "codigo": "P23", "nombre": "PERNIL DE CERDO CON PIEL Y HUE", "unidad": "KILO", "precio": 14500},
    {"categoria": "Línea Cerdo", "codigo": "P30", "nombre": "MANITOS DE CERDO", "unidad": "KILO", "precio": 9000},
    {"categoria": "Línea Cerdo", "codigo": "P39", "nombre": "PEZUÑA DE CERDO", "unidad": "KILO", "precio": 9000},
    {"categoria": "Línea Cerdo", "codigo": "P24", "nombre": "TOCINO DE CERDO", "unidad": "KILO", "precio": 9000},

    // 2. LÍNEA POLLO (18 Productos)
    {"categoria": "Línea Pollo", "codigo": "P27", "nombre": "ALAS DE POLLO PURINA", "unidad": "KILO", "precio": 10500},
    {"categoria": "Línea Pollo", "codigo": "P130", "nombre": "ALAS SEMICRIOLLA", "unidad": "KILO", "precio": 11500},
    {"categoria": "Línea Pollo", "codigo": "P242", "nombre": "BANDEJA DE CORAZONES", "unidad": "UNIDAD", "precio": 7500},
    {"categoria": "Línea Pollo", "codigo": "P241", "nombre": "BANDEJA DE MOLLEJAS", "unidad": "UNIDAD", "precio": 7500},
    {"categoria": "Línea Pollo", "codigo": "P26", "nombre": "FILETE DE PECHUGA", "unidad": "BANDEJA", "precio": 12000},
    {"categoria": "Línea Pollo", "codigo": "P12", "nombre": "GALLINA GRANDE", "unidad": "UNIDAD", "precio": 45000},
    {"categoria": "Línea Pollo", "codigo": "P25", "nombre": "GOULASH DE POLLO", "unidad": "KILO", "precio": 16500},
    {"categoria": "Línea Pollo", "codigo": "P13", "nombre": "MEDIO POLLO SEMICRIOLLO", "unidad": "BANDEJA", "precio": 16000},
    {"categoria": "Línea Pollo", "codigo": "P77", "nombre": "MENUDENCIA", "unidad": "KILO", "precio": 3000},
    {"categoria": "Línea Pollo", "codigo": "P09", "nombre": "MUSLO DE POLLO", "unidad": "KILO", "precio": 7500},
    {"categoria": "Línea Pollo", "codigo": "P15", "nombre": "PATAS PESCUESO", "unidad": "KILO", "precio": 4200},
    {"categoria": "Línea Pollo", "codigo": "P02", "nombre": "PECHUGA PURINA", "unidad": "KILO", "precio": 11000},
    {"categoria": "Línea Pollo", "codigo": "P03", "nombre": "PECHUGA SEMICRIOLLA", "unidad": "KILO", "precio": 14500},
    {"categoria": "Línea Pollo", "codigo": "P06", "nombre": "PICADA PURINA", "unidad": "BANDEJA", "precio": 3800},
    {"categoria": "Línea Pollo", "codigo": "P14", "nombre": "PICADA SEMICRIOLLA", "unidad": "BANDEJA", "precio": 4500},
    {"categoria": "Línea Pollo", "codigo": "P04", "nombre": "PIERNA PERNIL PURINA", "unidad": "KILO", "precio": 7200},
    {"categoria": "Línea Pollo", "codigo": "P01", "nombre": "PIERNA PERNIL SEMICRIOLLA", "unidad": "KILO", "precio": 8500},
    {"categoria": "Línea Pollo", "codigo": "P11", "nombre": "POLLO SEMICRIOLLO ENTERO", "unidad": "KILO", "precio": 11500},

    // 3. LÍNEA COMIDAS RÁPIDAS & VÍVERES (46 Productos)
    {"categoria": "Línea Comidas Rápidas", "codigo": "P245", "nombre": "ACEITE 900ML", "unidad": "TARRO", "precio": 9500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P211", "nombre": "ACEITE DE DON THOMAS X 5000ML", "unidad": "TARRO", "precio": 29000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P90", "nombre": "ACEITE EN PIMPINA SALOMON X 18", "unidad": "TARRO", "precio": 115000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P170", "nombre": "ACEITE PIMPINA AURORA", "unidad": "TARRO", "precio": 117000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P210", "nombre": "ACEITE PIMPINA DON THOMAS", "unidad": "TARRO", "precio": 110000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P238", "nombre": "ACEITE SALOMON 5000 X 4", "unidad": "TARRO", "precio": 29000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P145", "nombre": "ACEITE X 3.000 CM", "unidad": "TARRO", "precio": 21000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P150", "nombre": "ACEITE X 5.000CM", "unidad": "TARRO", "precio": 29000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P69", "nombre": "CHORIZO CACIQUE X10 UND", "unidad": "PAQUETE", "precio": 17000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P43", "nombre": "CHORIZO PREMIUM X 12 UND", "unidad": "PAQUETE", "precio": 14000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P142", "nombre": "JALAPEÑA TAJADO XBOLSA", "unidad": "UNIDAD", "precio": 15000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P93", "nombre": "JAMON BLOQUE X 5LB", "unidad": "PAQUETE", "precio": 46000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P129", "nombre": "JALAPEÑA EN GALON PLASTICO", "unidad": "UNIDAD", "precio": 39000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P155", "nombre": "MAIZ DESGRANADO LIBRA", "unidad": "BOLSA", "precio": 7500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P51-M", "nombre": "MAIZ DESGRANADO X 1KILO", "unidad": "BOLSA", "precio": 10500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P84", "nombre": "MAYONESA XGALON FRUGAL", "unidad": "TARRO", "precio": 65000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P159", "nombre": "MAYONESA CREMI X GALON", "unidad": "TARRO", "precio": 60000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P173", "nombre": "MAYONESA THIMS X GALON", "unidad": "TARRO", "precio": 58000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P157", "nombre": "MAYONESA XGALON ADEREZOS", "unidad": "TARRO", "precio": 70000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P158", "nombre": "MAYONESA XGALON DON GOLDEN", "unidad": "TARRO", "precio": 62000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P160", "nombre": "MAYONESA XGALON DON THOMAS", "unidad": "TARRO", "precio": 58000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P100", "nombre": "MIX DE VERDURA X LIBRA", "unidad": "BOLSA", "precio": 8000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P208", "nombre": "MIX DE VERDURA X KILO", "unidad": "BOLSA", "precio": 10500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P101", "nombre": "PAPA FARM FRITE 2.500 G", "unidad": "BOLSA", "precio": 17500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P07", "nombre": "PAPA FROZEN ROJA TRADICIONAL", "unidad": "BOLSA", "precio": 22000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P58", "nombre": "PAPA FROZEN TRADICIONAL VERDE", "unidad": "BOLSA", "precio": 24000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P72", "nombre": "PAPA MYDIBEL", "unidad": "BOLSA", "precio": 17500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P132", "nombre": "PASTA EMPANADA", "unidad": "PAQUETE", "precio": 4500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P133", "nombre": "PASTA FLAUTA", "unidad": "PAQUETE", "precio": 4500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P144", "nombre": "PEPINILLO AGRIDULCE TAJADO X B", "unidad": "BOLSA", "precio": 15000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P143", "nombre": "PEPINILLO AGRIDULCE TAJADO X G", "unidad": "TARRO", "precio": 39000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P201", "nombre": "QUESO CHEDDAR", "unidad": "UNIDAD", "precio": 75000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P82", "nombre": "QUESO TAJADO EN BLOQUE", "unidad": "BLOQUE", "precio": 54000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P53-Q", "nombre": "QUESO X KILO SEMI SALADO", "unidad": "KILO", "precio": 19000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P94", "nombre": "RIPIO DE PAPA", "unidad": "UNIDAD", "precio": 10500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P95", "nombre": "ROLLO DE CARNE ANGUS", "unidad": "KILO", "precio": 28000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P92", "nombre": "SALCHICHA AMERICAN TIPO PERRO X 18 U", "unidad": "PAQUETE", "precio": 28500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P236", "nombre": "MANGUERA CACIQUE X21 UND 2,950 GR", "unidad": "PAQUETE", "precio": 29500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P44", "nombre": "MANGUERA HAMBURGUER X 18 UND 2,500 GR", "unidad": "PAQUETE", "precio": 29500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P114", "nombre": "SALCHICHON CERVECERO HAMBURGUE", "unidad": "PAQUETE", "precio": 8000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P172", "nombre": "SALCHICHON CERVECERO KIMBI 100", "unidad": "BOLSA", "precio": 8000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P152", "nombre": "SALCHICHON DE POLLO", "unidad": "UNIDAD", "precio": 7500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P218", "nombre": "TOCINETA GOURMET X 1000G 67 UND", "unidad": "PAQUETE", "precio": 19000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P42", "nombre": "TOCINETA PAQ X KILO PEKONI 100 UND", "unidad": "PAQUETE", "precio": 19000},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P115", "nombre": "TOCINETA X 500GR PEKONI", "unidad": "PAQUETE", "precio": 10500},
    {"categoria": "Línea Comidas Rápidas", "codigo": "P207", "nombre": "TOCINETA X 500GR GOURMET", "unidad": "PAQUETE", "precio": 10500},

    // 4. LÍNEA RES (4 Productos)
    {"categoria": "Línea Res", "codigo": "P49", "nombre": "GOULASH DE CARNE X KILO", "unidad": "KILO", "precio": 28000},
    {"categoria": "Línea Res", "codigo": "P167", "nombre": "HIGADO DE RES", "unidad": "KILO", "precio": 17000},
    {"categoria": "Línea Res", "codigo": "P74", "nombre": "LENGUA DE RES", "unidad": "KILO", "precio": 24000},
    {"categoria": "Línea Res", "codigo": "P168", "nombre": "MONDOGO DE RES", "unidad": "KILO", "precio": 17000}
];

// -------------------------------------------------------------
// STRUCTURED SPOTIFY WRAPPED CONFIGURATION DATA (PREPARED FOR REAL CONTENT)
// -------------------------------------------------------------
const WRAPPED_SLIDES_DATA = [
    {
        id: "comienzo",
        step: "01 / 09",
        badge: "CÓMO COMENZÓ",
        icon: "rocket_launch",
        titulo: "Cómo comenzó Profinca Jireth",
        subtitulo: "Espacio reservado para relatar nuestros inicios y la fundación.",
        texto: "Aquí irá el texto descriptivo sobre la fundación de Profinca Jireth, los primeros pasos, la pasión por la mejor carne y el origen de nuestro servicio.",
        datoClave: "Fundados con el compromiso de llevar frescura directa del campo a tu hogar",
        mediaPlaceholder: "📷 [Espacio para Foto Histórica de la Fundación o Primera Sede]",
        gradient: "from-amber-950 via-neutral-900 to-black"
    },
    {
        id: "historia",
        step: "02 / 09",
        badge: "NUESTRA HISTORIA",
        icon: "history_edu",
        titulo: "La Historia de nuestra Empresa",
        subtitulo: "Espacio reservado para el recorrido y crecimiento de la marca.",
        texto: "Aquí irá la reseña histórica sobre cómo hemos crecido año tras año gracias a la confianza de nuestros clientes y familias que nos eligen.",
        datoClave: "Años de trayectoria garantizando cortes de carne de primera selección",
        mediaPlaceholder: "📜 [Espacio para Galería de Fotos o Línea de Tiempo de Evolución]",
        gradient: "from-red-950 via-neutral-900 to-black"
    },
    {
        id: "de-donde-somos",
        step: "03 / 09",
        badge: "ORIGEN LOCAL",
        icon: "location_on",
        titulo: "De dónde somos",
        subtitulo: "Espacio reservado para nuestras raíces e identidad local.",
        texto: "Aquí irá la información sobre nuestra ubicación de origen, nuestro arraigo regional y la cercanía con la comunidad a la que servimos diariamente.",
        datoClave: "Orgullosamente locales, sirviendo con calidez y cercanía",
        mediaPlaceholder: "📍 [Espacio para Fotografía de Nuestra Sede y Región]",
        gradient: "from-emerald-950 via-neutral-900 to-black"
    },
    {
        id: "origen-productos",
        step: "04 / 09",
        badge: "CALIDAD Y ORIGEN",
        icon: "agriculture",
        titulo: "De dónde provienen nuestros productos",
        subtitulo: "Espacio reservado para la selección y procedencia del ganado y víveres.",
        texto: "Aquí explicaremos el proceso de selección directa en granjas y proveedores certificados, asegurando el estándar más estricto de higiene y frescura.",
        datoClave: "100% Calidad Garantizada desde el origen hasta tu mesa",
        mediaPlaceholder: "🥩 [Espacio para Imagen de Ganado, Granjas o Cadena de Frío]",
        gradient: "from-yellow-950 via-neutral-900 to-black"
    },
    {
        id: "diferencial",
        step: "05 / 09",
        badge: "NUESTRO VALOR",
        icon: "verified",
        titulo: "Qué nos diferencia",
        subtitulo: "Espacio reservado para nuestras ventajas competitivas.",
        texto: "Aquí destacaremos la atención personalizada, los cortes a la medida, la rapidez en domicilios y la transparencia en cada peso entregado.",
        datoClave: "Frescura garantizada, peso exacto y atención familiar de primera",
        mediaPlaceholder: "⭐ [Espacio para Infografía o Íconos de Puntos Diferenciales]",
        gradient: "from-orange-950 via-neutral-900 to-black"
    },
    {
        id: "vision",
        step: "06 / 09",
        badge: "FUTURO Y METAS",
        icon: "visibility",
        titulo: "Nuestra Visión",
        subtitulo: "Espacio reservado para la proyección estratégica a futuro.",
        texto: "Aquí se incluirá nuestra visión de convertirnos en la carnicería y tienda de víveres preferida y referente de toda la región.",
        datoClave: "Líderes en calidad carna, innovación en domicilios y servicio",
        mediaPlaceholder: "🎯 [Espacio para Gráfica o Ilustración de Visión Corporativa]",
        gradient: "from-teal-950 via-neutral-900 to-black"
    },
    {
        id: "objetivos",
        step: "07 / 09",
        badge: "PROPÓSITO",
        icon: "flag",
        titulo: "Nuestros Objetivos",
        subtitulo: "Espacio reservado para los objetivos y metas principales.",
        texto: "Aquí irán los objetivos de expansión, mejora constante en la cadena de frío, capacitación del equipo y satisfacción total en cada compra.",
        datoClave: "Acompañar la mesa de miles de familias con los mejores productos",
        mediaPlaceholder: "📊 [Espacio para Lista Gráfica de Objetivos Estratégicos]",
        gradient: "from-blue-950 via-neutral-900 to-black"
    },
    {
        id: "filosofia",
        step: "08 / 09",
        badge: "VALORES",
        icon: "favorite",
        titulo: "Nuestra Filosofía",
        subtitulo: "Espacio reservado para nuestros principios éticos y de servicio.",
        texto: "Aquí se detallará el compromiso de Profinca Jireth con la honestidad, la higiene impecable, el trato humano y el respeto por el cliente.",
        datoClave: "Trabajamos con amor, fe y dedicación inquebrantable",
        mediaPlaceholder: "🤝 [Espacio para Imagen de Nuestro Equipo de Trabajo]",
        gradient: "from-purple-950 via-neutral-900 to-black"
    },
    {
        id: "futuro",
        step: "09 / 09",
        badge: "LO QUE VIENE",
        icon: "auto_awesome",
        titulo: "Lo que queremos lograr en el futuro",
        subtitulo: "Espacio reservado para el mensaje final e innovación a futuro.",
        texto: "Aquí irá el mensaje de cierre sobre nuestros proyectos de innovación, nuevas sedes y el agradecimiento infinito a todos nuestros clientes.",
        datoClave: "¡Gracias por ser parte fundamental de la familia Profinca Jireth!",
        mediaPlaceholder: "🚀 [Espacio para Mensaje Final de Agradecimiento e Imagen Futura]",
        gradient: "from-rose-950 via-neutral-950 to-black"
    }
];

let currentCategory = 'todos';
let searchQuery = '';
let cartState = {};

// Spotify Wrapped State Variables
let wrappedCurrentSlide = 0;
let wrappedIsAutoplay = true;
let wrappedTimer = null;
let wrappedTouchStartX = 0;

function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(price);
}

function getCategoryEmoji(cat) {
    switch(cat) {
        case 'Línea Cerdo': return '🐷';
        case 'Línea Pollo': return '🐔';
        case 'Línea Res': return '🥩';
        case 'Línea Comidas Rápidas': return '🍔';
        default: return '📦';
    }
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const titleEl = document.getElementById('currentCategoryTitle');
    const countEl = document.getElementById('productCountBadge');

    if (!grid) return;

    let filtered = PRODUCTS_DATA.filter(item => {
        const matchesCategory = (currentCategory === 'todos') || (item.categoria === currentCategory);
        const matchesSearch = searchQuery === '' || 
                             item.nombre.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             item.codigo.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (currentCategory === 'todos') {
        titleEl.textContent = searchQuery ? `Resultados para "${searchQuery}"` : 'Todos los Productos';
    } else {
        titleEl.textContent = currentCategory;
    }
    countEl.textContent = `${filtered.length} productos`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        noResults.classList.add('flex');
        return;
    } else {
        noResults.classList.add('hidden');
        noResults.classList.remove('flex');
    }

    grid.innerHTML = filtered.map(item => {
        const cartQty = cartState[item.codigo] ? cartState[item.codigo].quantity : 1;
        const isKilo = item.unidad === 'KILO';
        const unitLabel = isKilo ? '/Kilo' : `/${item.unidad.toLowerCase()}`;
        const emoji = getCategoryEmoji(item.categoria);

        return `
            <article class="bg-white rounded-2xl border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between p-4 sm:p-5 group">
                
                <!-- Top Header Badges -->
                <div class="flex items-center justify-between gap-2 mb-3">
                    <span class="bg-black text-[#ffed00] text-xs font-extrabold px-3 py-1 rounded-lg shadow-sm tracking-wide">
                        ${item.codigo}
                    </span>
                    <span class="bg-amber-100/80 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <span>${emoji}</span>
                        <span>${item.categoria}</span>
                    </span>
                </div>

                <!-- Product Title & Price -->
                <div class="mb-4">
                    <h3 class="font-extrabold font-headline-md text-neutral-900 text-base sm:text-lg leading-snug">
                        ${item.nombre}
                    </h3>
                    <div class="mt-2 flex items-baseline gap-1.5">
                        <span class="text-2xl font-extrabold font-price-display text-[#e31837]">
                            ${formatCOP(item.precio)}
                        </span>
                        <span class="text-xs font-semibold text-neutral-500">
                            ${unitLabel}
                        </span>
                    </div>
                </div>

                <!-- Stepper & Order Action -->
                <div class="space-y-2.5 pt-3 border-t border-neutral-100 mt-auto">
                    <div class="flex items-center justify-between bg-neutral-100 rounded-xl border border-neutral-200 overflow-hidden p-1">
                        <button type="button" 
                                onclick="changeCardQty('${item.codigo}', -1)"
                                class="w-10 h-10 flex items-center justify-center text-[#e31837] font-bold text-xl hover:bg-white rounded-lg transition-colors">
                            -
                        </button>
                        <input type="number" 
                               id="qty-input-${item.codigo}" 
                               value="${cartQty}" 
                               min="1" 
                               max="99"
                               onchange="setCardQty('${item.codigo}', this.value)"
                               class="w-12 text-center border-none focus:ring-0 text-base font-extrabold bg-transparent p-0">
                        <button type="button" 
                                onclick="changeCardQty('${item.codigo}', 1)"
                                class="w-10 h-10 flex items-center justify-center text-[#e31837] font-bold text-xl hover:bg-white rounded-lg transition-colors">
                            +
                        </button>
                    </div>

                    <button onclick="addToCart('${item.codigo}')" 
                            class="w-full bg-[#e31837] hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all duration-150">
                        <span class="material-symbols-outlined text-lg">add_shopping_cart</span>
                        <span>Agregar al Pedido</span>
                    </button>
                </div>
            </article>
        `;
    }).join('');
}

// -------------------------------------------------------------
// SPOTIFY WRAPPED INTERACTIVE STORY CONTROLLER FUNCTIONS
// -------------------------------------------------------------
function openWrappedModal() {
    const modal = document.getElementById('wrappedModal');
    wrappedCurrentSlide = 0;
    wrappedIsAutoplay = true;

    modal.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
    modal.classList.add('opacity-100', 'scale-100');

    renderWrappedProgressBars();
    renderWrappedSlide();
    startWrappedTimer();

    // Event Listeners for Keyboard & Touch Swipe
    window.addEventListener('keydown', handleWrappedKeydown);
    modal.addEventListener('touchstart', handleWrappedTouchStart, { passive: true });
    modal.addEventListener('touchend', handleWrappedTouchEnd, { passive: true });
}

function closeWrappedModal() {
    const modal = document.getElementById('wrappedModal');
    modal.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
    modal.classList.remove('opacity-100', 'scale-100');

    clearWrappedTimer();
    window.removeEventListener('keydown', handleWrappedKeydown);
}

function renderWrappedProgressBars() {
    const row = document.getElementById('wrappedProgressRow');
    if (!row) return;

    row.innerHTML = WRAPPED_SLIDES_DATA.map((slide, idx) => {
        let barStyle = "bg-white/20";
        if (idx < wrappedCurrentSlide) {
            barStyle = "bg-[#ffed00]";
        } else if (idx === wrappedCurrentSlide) {
            barStyle = "bg-[#ffed00] animate-pulse";
        }

        return `
            <div class="h-1.5 flex-1 rounded-full overflow-hidden transition-all duration-300 ${barStyle}"></div>
        `;
    }).join('');
}

function renderWrappedSlide() {
    const slide = WRAPPED_SLIDES_DATA[wrappedCurrentSlide];
    const card = document.getElementById('wrappedSlideCard');
    const bgGradient = document.getElementById('wrappedGradientBg');
    const counterText = document.getElementById('wrappedCounterText');

    if (!slide || !card) return;

    bgGradient.className = `absolute inset-0 bg-gradient-to-b ${slide.gradient} transition-all duration-700 pointer-events-none`;
    counterText.textContent = `${wrappedCurrentSlide + 1} / ${WRAPPED_SLIDES_DATA.length}`;

    // Smooth Card Transition
    card.classList.add('opacity-0', 'translate-y-4');

    setTimeout(() => {
        card.innerHTML = `
            <div class="w-full space-y-4 my-auto">
                
                <!-- Step Badge & Category Icon -->
                <div class="inline-flex items-center gap-2 bg-[#ffed00] text-black px-4 py-1.5 rounded-full font-extrabold text-xs tracking-wider uppercase shadow-md mb-1">
                    <span class="material-symbols-outlined text-base">${slide.icon}</span>
                    <span>${slide.step} • ${slide.badge}</span>
                </div>

                <!-- Main Title -->
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold font-headline-lg text-white leading-tight drop-shadow-sm">
                    ${slide.titulo}
                </h2>

                <!-- Subtitle -->
                <p class="text-xs sm:text-sm font-semibold text-[#ffed00] tracking-wide">
                    ${slide.subtitulo}
                </p>

                <!-- Media / Image Placeholder Container -->
                <div class="w-full h-44 sm:h-56 rounded-2xl bg-black/60 border border-neutral-700/80 flex flex-col justify-center items-center p-4 gap-2 text-neutral-400 group hover:border-[#ffed00]/50 transition-colors shadow-inner my-2">
                    <span class="material-symbols-outlined text-4xl text-neutral-500 group-hover:text-[#ffed00] transition-colors">image</span>
                    <span class="text-xs font-semibold max-w-xs text-neutral-300 leading-relaxed">
                        ${slide.mediaPlaceholder}
                    </span>
                    <span class="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
                        [Área reservada para multimedia real]
                    </span>
                </div>

                <!-- Description Text -->
                <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed font-body-md max-w-md mx-auto">
                    ${slide.texto}
                </p>

                <!-- Key Highlight Stat Box -->
                <div class="w-full bg-neutral-800/80 border border-neutral-700 p-3.5 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-yellow-300">
                    <span class="material-symbols-outlined text-lg text-[#ffed00]">verified</span>
                    <span>${slide.datoClave}</span>
                </div>
            </div>
        `;

        card.classList.remove('opacity-0', 'translate-y-4');
        renderWrappedProgressBars();
    }, 150);
}

function nextWrappedSlide() {
    if (wrappedCurrentSlide < WRAPPED_SLIDES_DATA.length - 1) {
        wrappedCurrentSlide++;
    } else {
        wrappedCurrentSlide = 0; // Loop back or close
    }
    renderWrappedSlide();
    resetWrappedTimer();
}

function prevWrappedSlide() {
    if (wrappedCurrentSlide > 0) {
        wrappedCurrentSlide--;
    } else {
        wrappedCurrentSlide = WRAPPED_SLIDES_DATA.length - 1;
    }
    renderWrappedSlide();
    resetWrappedTimer();
}

function toggleWrappedAutoplay() {
    wrappedIsAutoplay = !wrappedIsAutoplay;
    const btn = document.getElementById('wrappedPlayPauseBtn');
    if (wrappedIsAutoplay) {
        btn.innerHTML = `<span class="material-symbols-outlined text-xl">pause</span>`;
        startWrappedTimer();
        showToast('▶ Reproducción automática activada');
    } else {
        btn.innerHTML = `<span class="material-symbols-outlined text-[#ffed00] text-xl">play_arrow</span>`;
        clearWrappedTimer();
        showToast('⏸️ Reproducción pausada');
    }
}

function startWrappedTimer() {
    clearWrappedTimer();
    if (wrappedIsAutoplay) {
        wrappedTimer = setTimeout(() => {
            nextWrappedSlide();
        }, 5000);
    }
}

function clearWrappedTimer() {
    if (wrappedTimer) {
        clearTimeout(wrappedTimer);
        wrappedTimer = null;
    }
}

function resetWrappedTimer() {
    if (wrappedIsAutoplay) {
        startWrappedTimer();
    }
}

function handleWrappedKeydown(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextWrappedSlide();
    } else if (e.key === 'ArrowLeft') {
        prevWrappedSlide();
    } else if (e.key === 'Escape') {
        closeWrappedModal();
    }
}

function handleWrappedTouchStart(e) {
    wrappedTouchStartX = e.touches[0].clientX;
}

function handleWrappedTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - wrappedTouchStartX;
    if (diffX < -50) {
        nextWrappedSlide();
    } else if (diffX > 50) {
        prevWrappedSlide();
    }
}

function changeCardQty(codigo, delta) {
    const input = document.getElementById(`qty-input-${codigo}`);
    if (!input) return;
    let val = parseInt(input.value) || 1;
    val = Math.max(1, Math.min(99, val + delta));
    input.value = val;
}

function setCardQty(codigo, value) {
    const input = document.getElementById(`qty-input-${codigo}`);
    if (!input) return;
    let val = parseInt(value) || 1;
    input.value = Math.max(1, Math.min(99, val));
}

function addToCart(codigo) {
    const product = PRODUCTS_DATA.find(p => p.codigo === codigo);
    if (!product) return;

    const qtyInput = document.getElementById(`qty-input-${codigo}`);
    const qty = qtyInput ? (parseInt(qtyInput.value) || 1) : 1;

    if (cartState[codigo]) {
        cartState[codigo].quantity += qty;
    } else {
        cartState[codigo] = {
            product: product,
            quantity: qty
        };
    }

    updateCartUI();
    showToast(`¡${product.nombre} agregado!`);
}

function updateCartQuantity(codigo, newQty) {
    if (newQty <= 0) {
        delete cartState[codigo];
    } else {
        if (cartState[codigo]) {
            cartState[codigo].quantity = newQty;
        }
    }
    updateCartUI();
}

function removeFromCart(codigo) {
    delete cartState[codigo];
    updateCartUI();
    showToast('Producto eliminado del carrito');
}

function updateCartUI() {
    const cartKeys = Object.keys(cartState);
    let totalItems = 0;
    let totalPrice = 0;

    cartKeys.forEach(key => {
        const item = cartState[key];
        totalItems += item.quantity;
        totalPrice += item.quantity * item.product.precio;
    });

    document.getElementById('floatingItemCount').textContent = `${totalItems} ${totalItems === 1 ? 'ítem' : 'ítems'}`;
    document.getElementById('floatingTotalPrice').textContent = formatCOP(totalPrice);
    document.getElementById('floatingCartBadge').textContent = totalItems;

    const headerBadge = document.getElementById('headerCartBadge');
    headerBadge.textContent = totalItems;
    if (totalItems > 0) {
        headerBadge.classList.remove('hidden');
    } else {
        headerBadge.classList.add('hidden');
    }

    const drawerList = document.getElementById('cartItemsList');
    if (cartKeys.length === 0) {
        drawerList.innerHTML = `
            <div class="h-64 flex flex-col items-center justify-center text-center p-6 text-neutral-400">
                <span class="material-symbols-outlined text-6xl mb-2 text-neutral-300">shopping_cart</span>
                <p class="font-bold text-neutral-600">Tu carrito está vacío</p>
                <p class="text-xs text-neutral-400 mt-1">Explora nuestro catálogo y agrega carnes de alta calidad.</p>
            </div>
        `;
    } else {
        drawerList.innerHTML = cartKeys.map(key => {
            const item = cartState[key];
            const itemSubtotal = item.quantity * item.product.precio;
            const unitText = item.product.unidad === 'KILO' ? 'Kilos' : 'Unidades';
            const emoji = getCategoryEmoji(item.product.categoria);

            return `
                <div class="flex items-center gap-3 py-3">
                    <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0 border border-amber-200">
                        ${emoji}
                    </div>
                    <div class="flex-grow min-w-0">
                        <h4 class="text-xs font-bold text-neutral-900 truncate">${item.product.nombre}</h4>
                        <span class="text-[10px] text-neutral-500 font-semibold block">${item.product.codigo} • ${formatCOP(item.product.precio)} / ${item.product.unidad}</span>
                        <div class="flex items-center gap-2 mt-1.5">
                            <div class="flex items-center border border-neutral-300 rounded-lg bg-neutral-50 overflow-hidden">
                                <button onclick="updateCartQuantity('${key}', ${item.quantity - 1})" class="px-2 py-0.5 text-xs font-bold text-[#e31837] hover:bg-neutral-200">-</button>
                                <span class="px-2 text-xs font-bold text-neutral-800">${item.quantity} ${unitText}</span>
                                <button onclick="updateCartQuantity('${key}', ${item.quantity + 1})" class="px-2 py-0.5 text-xs font-bold text-[#e31837] hover:bg-neutral-200">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="text-right flex-shrink-0">
                        <span class="text-sm font-extrabold text-[#e31837] block">${formatCOP(itemSubtotal)}</span>
                        <button onclick="removeFromCart('${key}')" class="text-neutral-400 hover:text-red-600 mt-1 p-1" title="Eliminar">
                            <span class="material-symbols-outlined text-lg">delete</span>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    document.getElementById('drawerSubtotal').textContent = formatCOP(totalPrice);
    document.getElementById('drawerTotal').textContent = formatCOP(totalPrice);
    document.getElementById('checkoutSummaryText').textContent = `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'} en la lista`;
    document.getElementById('checkoutTotalAmount').textContent = formatCOP(totalPrice);
}

function filterCategory(cat) {
    currentCategory = cat;
    
    document.querySelectorAll('#categoryNav button').forEach(btn => {
        if (btn.getAttribute('data-category') === cat) {
            btn.className = 'tab-btn px-4 py-2 rounded-full font-bold text-[#ffed00] text-xs sm:text-sm whitespace-nowrap transition-all bg-[#ffed00] text-black shadow-sm';
        } else {
            btn.className = 'tab-btn px-4 py-2 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all bg-neutral-100 text-neutral-700 hover:bg-neutral-200';
        }
    });

    renderProducts();
}

function handleSearch() {
    searchQuery = document.getElementById('searchInput').value.trim();
    renderProducts();
}

function resetFilters() {
    currentCategory = 'todos';
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    filterCategory('todos');
}

function toggleDeliveryMode(mode) {
    const addressContainer = document.getElementById('addressContainer');
    const deliveryAddress = document.getElementById('deliveryAddress');
    const pickupNotice = document.getElementById('pickupNotice');
    const labelDelivery = document.getElementById('labelDelivery');
    const labelPickup = document.getElementById('labelPickup');

    if (mode === 'Domicilio') {
        addressContainer.classList.remove('hidden');
        deliveryAddress.setAttribute('required', 'true');
        pickupNotice.classList.add('hidden');

        labelDelivery.className = "relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all border-[#e31837] bg-red-50/50";
        labelPickup.className = "relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all border-neutral-200 bg-neutral-50 hover:bg-neutral-100";
    } else {
        addressContainer.classList.add('hidden');
        deliveryAddress.removeAttribute('required');
        pickupNotice.classList.remove('hidden');

        labelPickup.className = "relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all border-[#e31837] bg-red-50/50";
        labelDelivery.className = "relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all border-neutral-200 bg-neutral-50 hover:bg-neutral-100";
    }
}

function handleWhatsAppSubmit(event) {
    event.preventDefault();

    const cartKeys = Object.keys(cartState);
    if (cartKeys.length === 0) {
        showToast('⚠️ Agrega al menos un producto al carrito antes de finalizar');
        return;
    }

    const customerName = document.getElementById('customerName').value.trim();
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    if (deliveryMethod === 'Domicilio' && !deliveryAddress) {
        showToast('⚠️ Ingresa una dirección de envío para el domicilio');
        return;
    }

    let itemsText = '';
    let grandTotal = 0;

    cartKeys.forEach(key => {
        const item = cartState[key];
        const lineTotal = item.quantity * item.product.precio;
        grandTotal += lineTotal;
        const unitWord = item.product.unidad === 'KILO' ? (item.quantity === 1 ? 'Kilo' : 'Kilos') : (item.quantity === 1 ? 'Unidad' : 'Unidades');
        
        itemsText += `- ${item.quantity} ${unitWord} de ${item.product.nombre} (${formatCOP(lineTotal)})\n`;
    });

    let deliveryText = '';
    if (deliveryMethod === 'Domicilio') {
        deliveryText = `Modalidad de Entrega: Domicilio (Dirección: ${deliveryAddress})`;
    } else {
        deliveryText = `Modalidad de Entrega: Recoger en tienda`;
    }

    const fullMessage = 
`Hola, quiero realizar el siguiente pedido:
${itemsText}
Total estimado: ${formatCOP(grandTotal)}
Cliente: ${customerName}
${deliveryText}
Método de pago: ${paymentMethod}`;

    const encodedUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(fullMessage)}`;
    window.open(encodedUrl, '_blank');

    showToast('🚀 Generando pedido por WhatsApp...');
}

function toggleCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const backdrop = document.getElementById('cartDrawerBackdrop');

    if (drawer.classList.contains('translate-x-full')) {
        drawer.classList.remove('translate-x-full');
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        drawer.classList.add('translate-x-full');
        backdrop.classList.add('opacity-0', 'pointer-events-none');
    }
}

function scrollToCheckout() {
    toggleCartDrawer();
    document.getElementById('checkoutSection').scrollIntoView({ behavior: 'smooth' });
}

function toggleInfoModal() {
    const modal = document.getElementById('infoModal');
    const container = document.getElementById('infoModalContainer');

    if (modal.classList.contains('pointer-events-none')) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        container.classList.remove('scale-95');
        container.classList.add('scale-100');
    } else {
        modal.classList.add('opacity-0', 'pointer-events-none');
        container.classList.remove('scale-100');
        container.classList.add('scale-95');
    }
}

function switchMobileTab(element) {
    document.querySelectorAll('.mobile-tab').forEach(el => {
        el.classList.remove('text-[#e31837]');
        el.classList.add('text-neutral-500');
    });
    element.classList.remove('text-neutral-500');
    element.classList.add('text-[#e31837]');
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'bg-black/90 text-white text-xs sm:text-sm font-bold px-4 py-3 rounded-xl shadow-lg border border-neutral-700 animate-toast flex items-center gap-2';
    toast.innerHTML = `
        <span class="material-symbols-outlined text-base text-[#ffed00]">check_circle</span>
        <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Attach functions to global window scope explicitly
window.filterCategory = filterCategory;
window.handleSearch = handleSearch;
window.resetFilters = resetFilters;
window.changeCardQty = changeCardQty;
window.setCardQty = setCardQty;
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.toggleDeliveryMode = toggleDeliveryMode;
window.handleWhatsAppSubmit = handleWhatsAppSubmit;
window.toggleCartDrawer = toggleCartDrawer;
window.scrollToCheckout = scrollToCheckout;
window.toggleInfoModal = toggleInfoModal;
window.switchMobileTab = switchMobileTab;
window.openWrappedModal = openWrappedModal;
window.closeWrappedModal = closeWrappedModal;
window.nextWrappedSlide = nextWrappedSlide;
window.prevWrappedSlide = prevWrappedSlide;
window.toggleWrappedAutoplay = toggleWrappedAutoplay;

// Auto render on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        renderProducts();
        updateCartUI();
    });
} else {
    renderProducts();
    updateCartUI();
}
