@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background: #000;
    color: #fff;
    overflow-x: hidden;
}

/* ================= NAV ================= */

.glass-nav {
    position: fixed;
    width: 100%;
    top: 0;
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1000;
}

.glass-nav .logo {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 2px;
}

.glass-nav ul {
    display: flex;
    gap: 40px;
    list-style: none;
}

.glass-nav a {
    color: white;
    text-decoration: none;
    font-size: 15px;
    transition: 0.3s;
}

.glass-nav a:hover {
    opacity: 0.6;
}

/* Liquid glass button */
.glass-btn {
    padding: 10px 22px;
    border-radius: 12px;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.2);
    transition: 0.4s;
}

.glass-btn.large {
    padding: 16px 32px;
    font-size: 17px;
}

.glass-btn:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-3px) scale(1.02);
}

/* ================= HERO ================= */

.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    padding-left: 80px;
    position: relative;
}

.hero-content {
    max-width: 600px;
    z-index: 2;
}

.hero h1 {
    font-size: 72px;
    line-height: 1.1;
    margin-bottom: 20px;
    font-weight: 600;
}

.hero p {
    color: #aaa;
    font-size: 20px;
    margin-bottom: 40px;
}

.hero-bg {
    position: absolute;
    right: -200px;
    width: 900px;
    height: 900px;
    background: radial-gradient(circle, #0f0f0f, #000);
    filter: blur(120px);
    opacity: 0.6;
}

/* ================= FEATURES ================= */

.features {
    padding: 200px 80px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 120px;
}

.feature h2 {
    font-size: 48px;
    margin-bottom: 20px;
}

.feature p {
    font-size: 18px;
    color: #bbb;
    max-width: 600px;
}

/* ================= CTA ================= */

.cta {
    padding: 200px 80px;
    text-align: center;
}

.cta h2 {
    font-size: 54px;
    margin-bottom: 40px;
}

/* ================= ANIMATIONS ================= */

[data-animate] {
    opacity: 0;
    transform: translateY(40px);
    transition: 1s ease all;
}

[data-animate].visible {
    opacity: 1;
    transform: translateY(0);
}
