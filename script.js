const offerData = {
    companyName: "resource.storage",
    clientLogo: "img/image.png",
    offerSummary: "Професійна стратегія SEO-розвитку, технічної оптимізації та контенту для кратного зростання пошукової видимості та конверсій.", newStrategy: [
        "Підключення програм для відслідковування статистики",
        "Детальний аналіз ніші та конкурентів у пошуковій видачі",
        "Розробка комплексної структури категорій та послуг",
        "Проведення масштабної технічної оптимізації сайту"
    ],
    strategyBlocks: [
        {
            title: "Зовнішнє просування (Linkbuilding)",
            weight: "50%",
            icon: "🔗",
            desc: "Забезпечує 50% успіху. Формування якісного профілю посилань: реєстрація в каталогах, активність на форумах, Reddit та Outreach."
        },
        {
            title: "Контент та Бренд-складова",
            weight: "30%",
            icon: "✍️",
            desc: "Відповідає за 30% успіху. Експертний блог від імені компанії. Використання ШІ для низькочастотних запитів та авторські лонгріди для конкурентних тем."
        }
    ],
    currentSituation: [
        "Поточна реалізація — односторінковий лендінг",
        "Рейтинг домену (DR) — 0 (створений у лютому 2026, без історії)",
        "Title англомовної версії не відображає коректний інтент"
    ],
    currentImage: "img/Pasted image 20260423122215.png",
    goals: [
        "Масштабування структури до повноцінного багатосторінкового сайту",
        "Створення коректної архітектури та ЧПУ (URL)",
        "Збір розширеного семантичного ядра та SEO-копірайтинг"
    ],
    goalImage: "img/Pasted image 20260423122217.png",
    strategy: [
        {
            title: "Технічна SEO-оптимізація",
            desc: "Кожна новина, послуга та продукт отримують <strong>унікальний URL</strong> для точної відповідності інформаційному та комерційному інтенту.",
            image: "img/Pasted image 20260423123246.png"
        },
        {
            title: "Продуманий UX та Навігація",
            desc: "Налаштування навігаційних ланцюжків (хлібні крихти), виділення активних розділів та впровадження наскрізної фіксованої CTA-кнопки.",
            images: [
                "img/Pasted image 20260423123021.png",
                "img/Pasted image 20260423122753.png"
            ]
        }
    ],
    benefits: [
        {
            metric: "Видимість",
            title: "Більше точок входу з Google",
            desc: "Сайт починає ранжуватися не лише за брендовими словами, а й за комерційними та інформаційними запитами.",
            impact: "+ ключові запити"
        },
        {
            metric: "Індексація",
            title: "Швидше потрапляння сторінок у пошук",
            desc: "Нові сторінки, послуги та статті легше знаходяться пошуковими системами й швидше починають працювати на трафік.",
            impact: "+ проіндексовані сторінки"
        },
        {
            metric: "Ліди",
            title: "Більше цільових звернень із сайту",
            desc: "Зручна структура, SEO-тексти та CTA допомагають переводити відвідувачів у заявки, консультації або контакти.",
            impact: "+ заявки"
        },
        {
            metric: "Довіра",
            title: "Зростання авторитету домену",
            desc: "Контент, коректна технічна база та посилання формують довіру до сайту в очах Google і потенційних клієнтів.",
            impact: "+ Trust Rate"
        },
        {
            metric: "Контроль",
            title: "Рішення на основі аналітики",
            desc: "Після підключення статистики буде видно, які сторінки, запити й канали реально приносять бізнес-результат.",
            impact: "+ прозорість"
        }
    ],
    priceValue: "Вартість за запитом",
    priceDetails: "Остаточна інвестиційна оцінка та таймлайн формуються після погодження технічного завдання.",
    contactSite: "https://resource.storage/",
    contactPerson: "Менеджер проєкту",
    ctaLink: "https://resource.storage/"
};

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function renderList(id, items) {
    const list = document.getElementById(id);
    if (!list || !Array.isArray(items)) return;
    list.innerHTML = "";
    for (const item of items) {
        const li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    }
}

function renderStrategyTimeline(id, items) {
    const list = document.getElementById(id);
    if (!list || !Array.isArray(items)) return;
    list.innerHTML = "";
    items.forEach(function (item, index) {
        const li = document.createElement("li");
        li.className = "strategy-timeline__item";
        li.innerHTML = `
            <span class="strategy-timeline__step">${String(index + 1).padStart(2, "0")}</span>
            <span class="strategy-timeline__text">${item}</span>
        `;
        list.appendChild(li);
    });
}

function renderDesignGrid(id, items) {
    const container = document.getElementById(id);
    if (!container || !Array.isArray(items)) return;
    container.innerHTML = "";
    for (const item of items) {
        const card = document.createElement("div");
        card.className = "strategy-card";
        if (item.weight || item.icon) {
            const meta = document.createElement("div");
            meta.className = "strategy-card__meta";
            if (item.icon) {
                const icon = document.createElement("span");
                icon.className = "strategy-card__icon";
                icon.textContent = item.icon;
                meta.appendChild(icon);
            }
            if (item.weight) {
                const weight = document.createElement("span");
                weight.className = "strategy-card__weight";
                weight.textContent = item.weight;
                meta.appendChild(weight);
            }
            card.appendChild(meta);
        }
        const title = document.createElement("h3");
        title.textContent = item.title;
        const desc = document.createElement("p");
        desc.innerHTML = item.desc;

        if (item.image) {
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.title;
            img.className = "strategy-image";
            card.appendChild(img);
        }

        if (item.images && Array.isArray(item.images)) {
            for (const imgSrc of item.images) {
                const img = document.createElement("img");
                img.src = imgSrc;
                img.alt = item.title;
                img.className = "strategy-image";
                card.appendChild(img);
            }
        }

        card.appendChild(title);
        card.appendChild(desc);
        container.appendChild(card);
    }
}

function renderBusinessResults(id, items) {
    const container = document.getElementById(id);
    if (!container || !Array.isArray(items)) return;
    container.innerHTML = "";
    items.forEach(function (item) {
        const card = document.createElement("article");
        card.className = "business-result";
        card.innerHTML = `
            <div class="business-result__top">
                <span class="business-result__metric">${item.metric}</span>
                <span class="business-result__impact">${item.impact}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        container.appendChild(card);
    });
}

const currentImgEl = document.getElementById("currentImage");
if (currentImgEl && offerData.currentImage) {
    currentImgEl.src = offerData.currentImage;
}

const goalImgEl = document.getElementById("goalImage");
if (goalImgEl && offerData.goalImage) {
    goalImgEl.src = offerData.goalImage;
}

const logoEl = document.getElementById("clientLogo");
if (logoEl) {
    if (offerData.clientLogo) {
        logoEl.src = offerData.clientLogo;
    } else {
        logoEl.style.display = "none";
    }
}

setText("companyName", offerData.companyName);
setText("offerSummary", offerData.offerSummary);

renderList("currentSituationList", offerData.currentSituation);
renderList("goalsList", offerData.goals);
renderStrategyTimeline("newStrategyList", offerData.newStrategy);
renderDesignGrid("strategyBlocksGrid", offerData.strategyBlocks);
renderBusinessResults("benefitsList", offerData.benefits);
renderDesignGrid("designGrid", offerData.strategy);

// Energy particles
(function () {
    const canvas = document.getElementById("energyParticles");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const blobs = document.querySelectorAll(".blob");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        active: false,
        px: 0,
        py: 0
    };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let animationId = null;

    function createParticle() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            originX: Math.random() * width,
            originY: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.18,
            vy: (Math.random() - 0.5) * 0.18,
            size: Math.random() * 1.8 + 0.7,
            glow: Math.random() * 0.55 + 0.35,
            hue: Math.random() > 0.45 ? 205 : 155
        };
    }

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const particleCount = reducedMotion ? 32 : Math.min(110, Math.max(54, Math.floor(width / 16)));
        particles = Array.from({ length: particleCount }, createParticle);
    }

    function updatePointer(x, y) {
        pointer.x = x;
        pointer.y = y;
        pointer.active = true;
        pointer.px = (x / width - 0.5) * 2;
        pointer.py = (y / height - 0.5) * 2;

        blobs.forEach(function (blob, index) {
            const depth = (index + 1) * 10;
            blob.style.setProperty("--parallax-x", `${pointer.px * depth}px`);
            blob.style.setProperty("--parallax-y", `${pointer.py * depth}px`);
        });
    }

    function drawParticle(particle) {
        const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 5
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 95%, 78%, ${particle.glow})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 95%, 55%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${particle.hue}, 100%, 88%, ${particle.glow + 0.2})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
    }

    function tick() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(function (particle) {
            const dx = pointer.x - particle.x;
            const dy = pointer.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            const radius = pointer.active ? 220 : 0;

            if (distance < radius) {
                const force = (1 - distance / radius) * 0.18;
                particle.vx += (dx / distance) * force;
                particle.vy += (dy / distance) * force;
            }

            particle.vx += (particle.originX - particle.x) * 0.0007;
            particle.vy += (particle.originY - particle.y) * 0.0007;
            particle.vx *= 0.92;
            particle.vy *= 0.92;
            particle.x += particle.vx + pointer.px * 0.08;
            particle.y += particle.vy + pointer.py * 0.08;

            if (particle.x < -20 || particle.x > width + 20 || particle.y < -20 || particle.y > height + 20) {
                particle.x = Math.random() * width;
                particle.y = Math.random() * height;
                particle.originX = particle.x;
                particle.originY = particle.y;
                particle.vx = 0;
                particle.vy = 0;
            }

            drawParticle(particle);
        });

        animationId = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", function (event) {
        updatePointer(event.clientX, event.clientY);
    }, { passive: true });
    window.addEventListener("pointerleave", function () {
        pointer.active = false;
        pointer.px = 0;
        pointer.py = 0;
        blobs.forEach(function (blob) {
            blob.style.setProperty("--parallax-x", "0px");
            blob.style.setProperty("--parallax-y", "0px");
        });
    });
    window.addEventListener("resize", resize);

    resize();
    animationId = requestAnimationFrame(tick);

    window.addEventListener("beforeunload", function () {
        if (animationId) cancelAnimationFrame(animationId);
    });
}());

// Lightbox
(function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxClose = document.getElementById("lightboxClose");

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || "";
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
        lightboxImg.src = "";
    }

    document.addEventListener("click", function (e) {
        const img = e.target.closest("img");
        if (img && !img.closest("#lightbox") && !img.classList.contains("client-logo")) {
            openLightbox(img.src, img.alt);
        }
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeLightbox();
    });
}());

// Navigation
(function () {
    const toggle = document.getElementById("navToggle");
    const list = document.getElementById("navList");
    if (!toggle || !list) return;

    toggle.addEventListener("click", function () {
        const open = list.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
    });

    const links = list.querySelectorAll("a[href^='#']");
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            list.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });

    const sections = Array.from(links)
        .map(function (l) { return document.querySelector(l.getAttribute("href")); })
        .filter(Boolean);

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                links.forEach(function (l) {
                    l.classList.toggle("active", l.getAttribute("href") === "#" + id);
                });
            }
        });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
}());

