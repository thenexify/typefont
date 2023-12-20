const fonts = [
    {
        name: 'Inter', 
        family: 'Serif',
        category: 'Classic',
        ttfSrc: '/static/fonts/inter-var.ttf',
        combination: 'Poppins',
        script: 'Latin',
        slug: 'inter-variable',
        author: 'Rasmus Andersson'
    },
    {
        name: '911Porscha', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/911porschav3.ttf',
        script: 'Latin',
        slug: '911porscha',
        author: 'DaFont'
    },
    {
        name: 'Akira', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/akira.otf',
        script: 'Latin',
        slug: 'akira',
        author: 'DaFont'
    },
    {
        name: 'American Captain', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/americancaptain.ttf',
        script: 'Latin',
        slug: 'american-captain',
        author: 'DaFont'
    },
    {
        name: 'Arizonia', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/arizonia.ttf',
        script: 'Latin',
        slug: 'arizonia',
        author: 'GoogleFonts'
    },
    {
        name: 'Airstrike', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/airstrike.ttf',
        script: 'Latin',
        slug: 'airstrike',
        author: 'DaFont'
    },
    {
        name: 'Planet Kosmos', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/PLANK___.ttf',
        script: 'Latin',
        slug: 'planet_kosmos',
        author: 'DaFont'
    },
    {
        name: 'Avengeance', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/avenger.ttf',
        script: 'Latin',
        slug: 'avengeance',
        author: 'DaFont'
    },
    {
        name: 'Ethnocentric', 
        family: 'Serif',
        category: 'Sci-Fi',
        ttfSrc: '/static/fonts/ethnocentric.otf',
        script: 'Latin',
        slug: 'ethnocentric',
        author: 'DaFont'
    },
    {
        name: 'Play Pretend', 
        family: 'Serif',
        category: 'Sci-Fi',
        ttfSrc: '/static/fonts/play_pretend.otf',
        script: 'Latin',
        slug: 'play_pretend',
        author: 'DaFont'
    },
    {
        name: 'Roman Type JNL', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/roman_type_jnl.ttf',
        script: 'Latin',
        slug: 'roman_type_jnl',
        author: 'DaFont'
    },
    {
        name: 'YellowTail', 
        family: 'Serif',
        category: 'Cursive',
        ttfSrc: '/static/fonts/yellowtail.ttf',
        script: 'Latin',
        slug: 'yellowtail',
        author: 'DaFont'
    },
    {
        name: 'Raustila Regular', 
        family: 'Serif',
        category: 'Cursive',
        ttfSrc: '/static/fonts/raustila.ttf',
        script: 'Latin',
        slug: 'raustila_regular',
        author: 'DaFont'
    },
    {
        name: 'Norwester', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/norwester.otf',
        script: 'Latin',
        slug: 'norwester',
        author: 'DaFont'
    },
    {
        name: 'MECHSUIT', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/Mechsuit.otf',
        script: 'Latin',
        slug: 'mechsuit',
        author: 'DaFont'
    },
    {
        name: 'Syne', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/syne.ttf',
        script: 'Latin',
        slug: 'syne',
        author: 'DaFont'
    },
    {
        name: 'Gabarito', 
        family: 'Serif',
        category: 'Classic',
        ttfSrc: '/static/fonts/gabarito.ttf',
        script: 'Latin',
        slug: 'gabarito',
        author: 'GoogleFonts'
    },
    {
        name: 'DS Digital', 
        family: 'Serif',
        category: 'Classic',
        ttfSrc: '/static/fonts/DS-DIGIB.ttf',
        script: 'Latin',
        slug: 'ds-digib',
        author: 'GoogleFonts'
    },
    {
        name: 'Edo Sz', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/edosz.ttf',
        script: 'Latin',
        slug: 'edosz',
        author: 'DaFont'
    },
    {
        name: 'Nasalization', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/nasalization-rg.otf',
        script: 'Latin',
        slug: 'nasalization',
        author: 'DaFont'
    },
    {
        name: 'Permanent Marker', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/permanentmarker.ttf',
        script: 'Latin',
        slug: 'permanentmarker',
        author: 'GoogleFonts'
    },
    {
        name: 'JetBrains Mono', 
        family: 'Serif',
        category: 'Code',
        ttfSrc: '/static/fonts/jb_mono.ttf',
        script: 'Latin',
        slug: 'jetbrains_mono',
        author: 'GoogleFonts'
    },
    {
        name: 'Hack', 
        family: 'Serif',
        category: 'Code',
        ttfSrc: '/static/fonts/hack.ttf',
        script: 'Latin',
        slug: 'hack',
        author: 'Source Foundry'
    },
    {
        name: 'Fira Code', 
        family: 'Serif',
        category: 'Code',
        ttfSrc: '/static/fonts/fira_code.ttf',
        script: 'Latin',
        slug: 'firacode',
        author: 'GoogleFonts'
    },
    {
        name: 'Cascadia Code', 
        family: 'Serif',
        category: 'Code',
        ttfSrc: '/static/fonts/cascadia_code.ttf',
        script: 'Latin',
        slug: 'cascadia_code',
        author: 'Microsoft'
    },
    {
        name: 'Bitsumishi', 
        family: 'Serif',
        category: 'Sci-Fi',
        ttfSrc: '/static/fonts/BITSUMIS.ttf',
        script: 'Latin',
        slug: 'bitsumishi',
        author: 'DaFont'
    },
    {
        name: 'Chomsky', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/Chomsky.otf',
        script: 'Latin',
        slug: 'chomsky',
        author: 'DaFont'
    },
    {
        name: 'Orbitron', 
        family: 'Serif',
        category: 'Sci-Fi',
        ttfSrc: '/static/fonts/orbitron.ttf',
        script: 'Latin',
        slug: 'chomsky',
        author: 'GoogleFonts'
    },
    {
        name: 'Montserrat', 
        family: 'Serif',
        category: 'Classic',
        ttfSrc: '/static/fonts/montserrat.ttf',
        script: 'Latin',
        slug: 'montserrat',
        author: 'GoogleFonts'
    },
    {
        name: 'Gotham', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/gotham.ttf',
        script: 'Latin',
        slug: 'gotham',
        author: 'DaFont'
    },
    {
        name: 'Just In the Firestorm', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/Justin_thefirestorm.ttf',
        script: 'Latin',
        slug: 'ji_firestorm',
        author: 'DaFont'
    },
    {
        name: 'Manrope', 
        family: 'Serif',
        category: 'Classic',
        ttfSrc: '/static/fonts/manrope.ttf',
        script: 'Latin',
        slug: 'manrope',
        author: 'GoogleFonts'
    },
    {
        name: 'Name Smile', 
        family: 'Serif',
        category: 'Sci-Fi',
        ttfSrc: '/static/fonts/name_smile.otf',
        script: 'Latin',
        slug: 'name_smile',
        author: 'DaFont'
    },
    {
        name: 'Raleway',
        family: 'Serif',
        category: 'Classic',
        ttfSrc: '/static/fonts/raleway.ttf',
        script: 'Latin',
        slug: 'raleway',
        author: 'GoogleFonts'
    },
    {
        name: 'Poppins',
        family: 'Serif',
        category: 'Classic',
        ttfSrc: '/static/fonts/poppins.ttf',
        script: 'Latin',
        slug: 'poppins',
        author: 'GoogleFonts'
    },
    {
        name: 'Robot Crush',
        family: 'Serif',
        category: 'Sci-Fi',
        ttfSrc: '/static/fonts/robot_crush.otf',
        script: 'Latin',
        slug: 'robot_crush',
        author: 'DaFont'
    },
    {
        name: 'Coalition V2',
        family: 'Serif',
        category: 'Sci-Fi',
        ttfSrc: '/static/fonts/Coalition_v2.ttf',
        script: 'Latin',
        slug: 'coalition_v2',
        author: 'DaFont'
    },
]
const fontsHome = [
    {
        name: 'Inter', 
        family: 'Serif',
        category: 'Classic',
        ttfSrc: '/static/fonts/inter-var.ttf',
        combination: 'Poppins',
        script: 'Latin',
        slug: 'inter-variable',
        author: 'Rasmus Andersson'
    },
    {
        name: '911Porscha', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/911porschav3.ttf',
        script: 'Latin',
        slug: '911porscha',
        author: 'DaFont'
    },
    {
        name: 'Akira', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/akira.otf',
        script: 'Latin',
        slug: 'akira',
        author: 'DaFont'
    },
    {
        name: 'American Captain', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/americancaptain.ttf',
        script: 'Latin',
        slug: 'american-captain',
        author: 'DaFont'
    },
    {
        name: 'Arizonia', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/arizonia.ttf',
        script: 'Latin',
        slug: 'arizonia',
        author: 'GoogleFonts'
    },
    {
        name: 'Planet Kosmos', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/PLANK___.ttf',
        script: 'Latin',
        slug: 'planet_kosmos',
        author: 'DaFont'
    },
    {
        name: 'Avengeance', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/avenger.ttf',
        script: 'Latin',
        slug: 'avengeance',
        author: 'DaFont'
    },
    {
        name: 'Airstrike', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/airstrike.ttf',
        script: 'Latin',
        slug: 'airstrike',
        author: 'DaFont'
    }
]

module.exports = {fonts, fontsHome}