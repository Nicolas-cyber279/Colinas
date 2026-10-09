const D = document;
const $ = (s) => [...D.querySelectorAll(s)];
const R = matchMedia('(prefers-reduced-motion:reduce)').matches;

D.documentElement.classList.add('js');

const I = {
    db: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
    list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    bolt: "M13 2 3 14h9l-1 8 10-12h-9z",
    home: "M3 11 12 3l9 8M5 10v10h14V10",
    heart: "M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6-8 11-8 11z",
    users: "M16 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 20v-1a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
    chat: "M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6A8 8 0 1 1 21 12z",
    grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
    sun: "M12 3v2M12 19v2M5 12H3M21 12h-2M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
};

const ic = k =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${I[k]}"/></svg>`;

const fill = (id, a) =>
    D.getElementById(id).innerHTML = a
        .map(
            (x, i) =>
                `<article class="cd rv" style="--d:${i * 70}ms">
                    <i>${ic(x[0])}</i>
                    <h3>${x[1]}</h3>
                    <p>${x[2]}</p>
                </article>`
        )
        .join('');

fill('sg', [
    [
        'db',
        'Organização de dados',
        'Tudo o que importa no negócio guardado de forma clara, sem planilhas espalhadas.'
    ],
    [
        'list',
        'Gerenciamento de informações',
        'Cadastre, edite e consulte clientes, produtos e serviços em poucos cliques.'
    ],
    [
        'bolt',
        'Acesso rápido aos dados',
        'Encontre o que precisa na hora, sem procurar em vários lugares.'
    ],
    [
        'home',
        'Feito para pequenos negócios',
        'Estrutura enxuta, preparada para crescer no ritmo de quem empreende.'
    ]
]);

fill('pq', [
    [
        'list',
        'Simplicidade',
        'Telas claras, sem manual e sem jargão técnico.'
    ],
    [
        'bolt',
        'Tecnologia acessível',
        'Ferramentas que cabem na realidade de um pequeno negócio.'
    ],
    [
        'home',
        'Foco em pequenos empreendedores',
        'Pensado desde o início para quem empreende com poucos recursos.'
    ],
    [
        'grid',
        'Organização',
        'Cada informação no seu lugar, fácil de achar depois.'
    ],
    [
        'chat',
        'Suporte',
        'Ajuda de perto para quem não é da área de tecnologia.'
    ],
    [
        'heart',
        'Valorização das pessoas',
        'O negócio importa, e quem está por trás dele também.'
    ]
]);

D.getElementById('ai').innerHTML =
    ['grid', 'users', 'db', 'list']
        .map(ic)
        .join('');

D.getElementById('br').innerHTML =
    [
        ['Serviço A', 85],
        ['Serviço B', 62],
        ['Produto C', 48],
        ['Serviço D', 30]
    ]
        .map(
            x =>
                `<div class="bar">
                    ${x[0]}
                    <i style="--w:${x[1]}%"></i>
                </div>`
        )
        .join('');

D.getElementById('mq').innerHTML =
    (
        '<span>Organização</span>' +
        '<span>Simplicidade</span>' +
        '<span>Cuidado</span>' +
        '<span>Crescimento</span>'
    ).repeat(6);

const mk = [
    `<g class="m1">
        <rect x="10" y="12" width="60" height="6" rx="3"/>
        <rect x="10" y="28" width="180" height="8" rx="4"/>
        <rect x="10" y="44" width="180" height="8" rx="4"/>
        <rect x="10" y="60" width="120" height="8" rx="4"/>
    </g>`,

    `<g class="m1">
        <rect x="20" y="40" width="22" height="30" rx="4"/>
        <rect x="60" y="24" width="22" height="46" rx="4"/>
        <rect x="100" y="32" width="22" height="38" rx="4"/>
        <rect x="140" y="10" width="22" height="60" rx="4"/>
    </g>`,

    `<g class="m2">
        <rect x="10" y="10" width="110" height="60" rx="8"/>
        <rect x="130" y="10" width="60" height="28" rx="8"/>
        <circle cx="160" cy="55" r="15"/>
    </g>`
];

D.getElementById('pj').innerHTML =
    [
        [
            'Sistema de Gestão de Dados',
            'Cadastro e consulta de clientes, produtos e serviços numa base única.',
            ['PostgreSQL', 'Node.js', 'React']
        ],
        [
            'Dashboard Empresarial',
            'Indicadores do negócio em painéis simples de ler.',
            ['Gráficos', 'API', 'React']
        ],
        [
            'Soluções Personalizadas',
            'Software sob medida para a rotina de cada negócio.',
            ['Integrações', 'Node.js', 'Web']
        ]
    ]
        .map(
            (x, i) =>
                `<article class="pj rv" style="--d:${i * 90}ms">
                    <svg viewBox="0 0 200 80" aria-hidden="true">
                        <rect width="200" height="80" rx="8" class="m0"/>
                        ${mk[i]}
                    </svg>
                    <h3>${x[0]}</h3>
                    <p>${x[1]}</p>
                    <div class="tgs">
                        ${x[2].map(t => `<span>${t}</span>`).join('')}
                    </div>
                </article>`
        )
        .join('');

D.getElementById('tl').innerHTML =
    [
        ['Entender', 'Ouvimos o negócio e a rotina de quem o toca.'],
        ['Planejar', 'Definimos o que importa primeiro e o caminho até lá.'],
        ['Desenvolver', 'Construímos com código limpo e telas simples de usar.'],
        ['Testar', 'Validamos com quem vai usar antes de publicar.'],
        ['Entregar', 'Colocamos no ar com acompanhamento de perto.'],
        ['Evoluir', 'Melhoramos junto com o crescimento do negócio.']
    ]
        .map(
            (x, i) =>
                `<div class="st rv">
                    <b>${i + 1}</b>
                    <h3>${x[0]}</h3>
                    <p>${x[1]}</p>
                </div>`
        )
        .join('');

$('[data-split]').forEach(e => {
    e.innerHTML = e.textContent
        .split(' ')
        .map(
            (w, i) =>
                `<span class="wd">
                    <span style="transition-delay:${i * 45}ms">${w}</span>
                </span>`
        )
        .join(' ');
});

const io = new IntersectionObserver(
    es =>
        es.forEach(x => {
            if (x.isIntersecting) {
                const t = x.target;

                t.classList.add('in');
                io.unobserve(t);

                setTimeout(
                    () => t.classList.remove('rv'),
                    1600
                );
            }
        }),
    {
        threshold: 0.15
    }
);

$('.rv,[data-split]').forEach(e =>
    R ? e.classList.add('in') : io.observe(e)
);

const cn = new IntersectionObserver(
    es =>
        es.forEach(x => {
            if (!x.isIntersecting) return;

            cn.unobserve(x.target);

            const e = x.target;
            const n = +e.dataset.n;
            const t0 = performance.now();

            (function f(t) {
                const p = Math.min(
                    (t - t0) / 1200,
                    1
                );

                e.textContent = Math.round(
                    n * (1 - Math.pow(1 - p, 3))
                );

                p < 1 && requestAnimationFrame(f);
            })(t0);
        })
);

if (!R) {
    $('[data-n]').forEach(e => cn.observe(e));
}

const pg = D.getElementById('pg');
const tl = D.getElementById('tl');

const sc = () => {
    pg.style.transform =
        `scaleX(${scrollY / Math.max(
            1,
            D.documentElement.scrollHeight - innerHeight
        )})`;

    const r = tl.getBoundingClientRect();

    tl.style.setProperty(
        '--p',
        Math.min(
            1,
            Math.max(
                0,
                (innerHeight * 0.6 - r.top) / r.height
            )
        )
    );
};

addEventListener('scroll', sc, {
    passive: true
});

sc();

if (
    matchMedia('(pointer:fine)').matches &&
    !R
) {
    D.addEventListener('pointermove', e => {
        const c = e.target.closest('.cd,.pj');

        if (c) {
            const r = c.getBoundingClientRect();

            c.style.setProperty(
                '--x',
                e.clientX - r.left + 'px'
            );

            c.style.setProperty(
                '--y',
                e.clientY - r.top + 'px'
            );
        }

        const b = e.target.closest('.btn');

        if (b) {
            const r = b.getBoundingClientRect();

            b.style.transform =
                `translate(${
                    (e.clientX - r.left - r.width / 2) * 0.18
                }px,${
                    (e.clientY - r.top - r.height / 2) * 0.28
                }px)`;
        }
    });

    D.addEventListener('pointerout', e => {
        const b = e.target.closest('.btn');

        if (b) {
            b.style.transform = '';
        }
    });

    const c = D.getElementById('cur');

    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;

    addEventListener('pointermove', e => {
        tx = e.clientX;
        ty = e.clientY;

        c.style.opacity = 1;

        c.classList.toggle(
            'big',
            !!e.target.closest('a,.cd,.pj')
        );
    });

    (function f() {
        x += (tx - x) * 0.18;
        y += (ty - y) * 0.18;

        c.style.transform =
            `translate(${x}px,${y}px)`;

        requestAnimationFrame(f);
    })();
}

const supabaseUrl = 'https://pszvozqvieexbmkrkvdw.supabase.co';
const supabaseAnonKey = 'sb_publishable_A8fDq18xhiTiLij6rTuSuw_9FZWKKeY';

async function CaptarArroba() {
    const emailInput = document.querySelector('#email');
    const email = emailInput.value.trim();

    if (!email) {
        alert('Digite seu e-mail para continuar.');
        emailInput.focus();
        return;
    }

    if (!emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
    }

    if (supabaseAnonKey === 'SUA_ANON_KEY_AQUI') {
        alert('Configure a chave anon do Supabase antes de enviar.');
        return;
    }

    const button = document.querySelector('#CaptarArroba');
    button.disabled = true;

    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
            method: 'POST',
            headers: {
                apikey: supabaseAnonKey,
                Authorization: `Bearer ${supabaseAnonKey}`,
                'Content-Type': 'application/json',
                Prefer: 'return=minimal'
            },
            body: JSON.stringify({ email })
        });

        if (!response.ok) {
            const details = await response.text();
            throw new Error(`Supabase respondeu ${response.status}: ${details}`);
        }

        emailInput.value = '';
        alert('E-mail cadastrado com sucesso!');
    } catch (error) {
        console.error('Não foi possível cadastrar o e-mail:', error);
        alert('Não foi possível cadastrar o e-mail. Confira a conexão e a configuração do Supabase.');
    } finally {
        button.disabled = false;
    }
}