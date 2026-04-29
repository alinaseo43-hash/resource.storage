const stages = [
    {
        label: "1 етап",
        title: "Аудит та фундамент",
        price: "800 eur",
        tasks: [
            "Повний аудит: техніка, дизайн, контент",
            "Збір семантичного ядра",
            "Аналіз конкурентів та ніші",
            "Підключення аналітичних програм",
            "ТЗ на UX для покращення користувацького досвіду"
        ],
        goal: "Виявлення критичних проблем, розуміння попиту та налаштування відслідковування прогресу."
    },
    {
        label: "2 етап",
        title: "Реалізація та наповнення",
        price: "900 eur",
        tasks: [
            "Написання технічних завдань для розробників",
            "План для блогу на квартал",
            "План беклінків на квартал",
            "Підготовка 10 SEO-текстів",
            "Розставлення пріоритетів змін"
        ],
        goal: "Впровадження технічних змін та запуск системи послідовного нарощування трафіку без хаосу."
    },
    {
        label: "3 етап",
        title: "Підтримка та масштабування",
        price: "500 eur",
        tasks: [
            "Контроль впроваджених змін",
            "Створення зовнішніх посилань",
            "Внутрішня перелінковка",
            "Моніторинг позицій та корекція",
            "Написання ТЗ та контенту"
        ],
        goal: "Підвищення довіри від Google, передача авторитету сторінкам та закріплення в ТОПі."
    }
];

function renderStages() {
    const container = document.getElementById("stages");
    if (!container) return;

    container.innerHTML = stages.map(function (stage, index) {
        const tasks = stage.tasks.map(function (task) {
            return `<li>${task}</li>`;
        }).join("");

        return `
            <article class="stage-card">
                <div class="stage-card__meta">
                    <div class="stage-card__num"><strong>${String(index + 1).padStart(2, "0")}</strong><em>етап</em></div>
                    <h3>${stage.title}</h3>
                </div>
                <div class="stage-card__body">
                    <ul>${tasks}</ul>
                    <p class="stage-card__goal"><strong>Мета:</strong> ${stage.goal}</p>
                    ${stage.note ? `<p class="stage-card__note"><strong>Примітка:</strong> ${stage.note}</p>` : ""}
                </div>
                <div class="stage-card__price">
                    <strong>${stage.price}</strong>
                </div>
            </article>
        `;
    }).join("");
}

function setupNavigation() {
    const toggle = document.getElementById("navToggle");
    const list = document.getElementById("navList");
    if (!toggle || !list) return;

    toggle.addEventListener("click", function () {
        const open = list.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
    });

    const links = Array.from(list.querySelectorAll("a[href^='#']"));
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            list.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });

    const sections = links
        .map(function (link) { return document.querySelector(link.getAttribute("href")); })
        .filter(Boolean);

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            links.forEach(function (link) {
                link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
            });
        });
    }, { rootMargin: "-38% 0px -56% 0px", threshold: 0 });

    sections.forEach(function (section) {
        observer.observe(section);
    });
}

function setupParticles() {
    const canvas = document.getElementById("energyParticles");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let ripples = [];
    let pointer = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        active: false
    };

    function createParticle() {
        const radius = Math.random() * 1.8 + 0.7;
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            depth: Math.random() * 0.75 + 0.35,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            radius: radius,
            hue: Math.random() > 0.42 ? 210 : 155,
            alpha: Math.random() * 0.42 + 0.28
        };
    }

    function addRipple(x, y) {
        if (reducedMotion) return;
        ripples.push({
            x: x,
            y: y,
            radius: 0,
            strength: 0.18,
            alpha: 0.2,
            spark: true
        });

        if (ripples.length > 6) ripples.shift();
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

        const count = reducedMotion ? 28 : Math.min(96, Math.max(48, Math.floor(width / 18)));
        particles = Array.from({ length: count }, createParticle);
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        ripples = ripples.filter(function (ripple) {
            ripple.radius += 0.55;
            ripple.strength *= 0.94;
            ripple.alpha *= 0.965;

            [0, 6, 12].forEach(function (offset, index) {
                const radius = ripple.radius + offset;
                const alpha = ripple.alpha * (1 - index * 0.28);
                ctx.strokeStyle = `rgba(226, 246, 255, ${alpha})`;
                ctx.lineWidth = 2.4;
                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
                ctx.stroke();
            });

            return ripple.alpha > 0.028 && ripple.radius < 22;
        });

        particles.forEach(function (particle) {
            if (pointer.active && !reducedMotion) {
                const dx = pointer.x - particle.x;
                const dy = pointer.y - particle.y;
                const distance = Math.hypot(dx, dy) || 1;
                const influence = Math.max(0, 1 - distance / 340) * particle.depth;
                particle.vx += (dx / distance) * influence * 0.075;
                particle.vy += (dy / distance) * influence * 0.075;
            }

            ripples.forEach(function (ripple) {
                const dx = particle.x - ripple.x;
                const dy = particle.y - ripple.y;
                const distance = Math.hypot(dx, dy) || 1;
                const wave = Math.max(0, 1 - Math.abs(distance - ripple.radius) / 18);
                const force = wave * ripple.strength * particle.depth * 0.72;
                particle.vx += (dx / distance) * force;
                particle.vy += (dy / distance) * force;

                if (ripple.spark && distance < 92) {
                    const pulse = (1 - distance / 92) * particle.depth * 0.44;
                    particle.vx += (dx / distance) * pulse;
                    particle.vy += (dy / distance) * pulse;
                }
            });

            particle.vx += (Math.random() - 0.5) * 0.012;
            particle.vy += (Math.random() - 0.5) * 0.012;
            particle.vx *= 0.988;
            particle.vy *= 0.988;
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < -20) particle.x = width + 20;
            if (particle.x > width + 20) particle.x = -20;
            if (particle.y < -20) particle.y = height + 20;
            if (particle.y > height + 20) particle.y = -20;

            const glowSize = particle.radius * (pointer.active ? 7.4 : 6) * particle.depth;
            const glow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowSize);
            glow.addColorStop(0, `hsla(${particle.hue}, 90%, 78%, ${particle.alpha})`);
            glow.addColorStop(1, `hsla(${particle.hue}, 90%, 58%, 0)`);
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
            ctx.fill();
        });

        window.setTimeout(draw, reducedMotion ? 90 : 22);
    }

    window.addEventListener("pointermove", function (event) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        pointer.active = true;
    }, { passive: true });

    window.addEventListener("pointerleave", function () {
        pointer.active = false;
    }, { passive: true });

    window.addEventListener("pointerdown", function (event) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        pointer.active = true;
        addRipple(event.clientX, event.clientY);
    }, { passive: true });

    window.addEventListener("resize", resize);
    resize();
    draw();
}

function setupLightbox() {
    const targets = document.querySelectorAll(".evidence-image, .hero-audit img");
    if (!targets.length) return;

    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-hidden", "true");

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "lightbox__close";
    closeBtn.setAttribute("aria-label", "Закрити");
    closeBtn.textContent = "\u00d7";

    const fullImg = document.createElement("img");
    fullImg.alt = "";

    overlay.appendChild(fullImg);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    function open(src, alt) {
        fullImg.src = src;
        fullImg.alt = alt || "";
        overlay.classList.add("is-open");
        overlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function close() {
        overlay.classList.remove("is-open");
        overlay.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    targets.forEach(function (img) {
        img.addEventListener("click", function () {
            open(img.currentSrc || img.src, img.alt);
        });
    });

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay || e.target === closeBtn) close();
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
    });
}

renderStages();
setupNavigation();
setupParticles();
setupLightbox();