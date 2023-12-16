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
        ttfSrc: '/static/fonts/ethnocentric.ttf',
        script: 'Latin',
        slug: 'ethnocentric',
        author: 'DaFont'
    },
    {
        name: 'Play Pretend', 
        family: 'Serif',
        category: 'Sci-Fi',
        ttfSrc: '/static/fonts/play_pretend.ttf',
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
        category: 'Cinematic',
        ttfSrc: '/static/fonts/yellowtail.ttf',
        script: 'Latin',
        slug: 'yellowtail',
        author: 'DaFont'
    },
    {
        name: 'Raustila Regular', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/raustila_regular.ttf',
        script: 'Latin',
        slug: 'raustila_regular',
        author: 'DaFont'
    },
    {
        name: 'Norwester', 
        family: 'Serif',
        category: 'Cinematic',
        ttfSrc: '/static/fonts/norwester.ttf',
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