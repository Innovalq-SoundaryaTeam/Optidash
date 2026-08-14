/**
 * Renders the correct post from BLOG_POSTS into blog-details.html
 * based on the ?post=<slug> query parameter.
 */
(function () {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('post') || BLOG_ORDER[0];
    const post = BLOG_POSTS[slug] || BLOG_POSTS[BLOG_ORDER[0]];

    document.title = post.title + " | OptiDash Luxury";
    const pt = document.getElementById('pageTitle');
    if (pt) pt.textContent = post.title + " | OptiDash Luxury";

    const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    const setImg = (id, val, alt) => { const el = document.getElementById(id); if (el) { el.src = val; if (alt) el.alt = alt; } };

    setText('articleCategory', post.category);
    setText('articleTitle', post.title);
    setImg('authorImg', post.authorImg, post.author);
    setText('authorName', post.author);
    setText('articleDate', post.date);
    setText('readTime', post.readTime);
    setImg('heroImg', post.image, post.title);

    setImg('sidebarAuthorImg', post.authorImg, post.author);
    setText('sidebarAuthorName', post.author);
    setText('sidebarAuthorRole', post.authorRole);
    setText('sidebarAuthorBio', post.authorBio);

    // Article body
    const bodyEl = document.getElementById('articleBody');
    if (bodyEl) {
        bodyEl.innerHTML = post.body.map(block => {
            if (block.type === 'lead') {
                return `<p class="text-xl font-bold text-gray-900 dark:text-white">${block.text}</p>`;
            }
            if (block.type === 'h2') {
                return `<h2 id="${slugify(block.text)}" class="text-3xl font-extrabold text-gray-900 dark:text-white pt-4 font-display">${block.text}</h2>`;
            }
            if (block.type === 'quote') {
                return `<blockquote class="border-l-4 border-primary pl-6 py-4 my-6 italic text-xl font-bold text-gray-900 dark:text-white bg-gold-100/40 dark:bg-primary/10 rounded-r-2xl">"${block.text}"</blockquote>`;
            }
            return `<p>${block.text}</p>`;
        }).join('\n');
    }

    // Table of contents
    const tocEl = document.getElementById('tocList');
    if (tocEl && post.toc) {
        tocEl.innerHTML = post.toc.map((t, i) =>
            `<li><a href="#${slugify(t)}" class="hover:text-primary transition-colors">${i + 1}. ${t}</a></li>`
        ).join('\n');
    }

    // Tags
    const tagEl = document.getElementById('tagList');
    if (tagEl && post.tags) {
        tagEl.innerHTML = post.tags.map(tag =>
            `<span class="bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-xs font-bold px-3 py-1.5 rounded-full">${tag}</span>`
        ).join('\n');
    }

    // Related articles
    const relatedEl = document.getElementById('relatedList');
    if (relatedEl && post.related) {
        relatedEl.innerHTML = post.related.map(rSlug => {
            const r = BLOG_POSTS[rSlug];
            if (!r) return '';
            return `
                <a href="blog-details.html?post=${rSlug}" class="block bg-white dark:bg-[#111827] p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                    <span class="text-xs font-bold text-primary uppercase">${r.category}</span>
                    <h4 class="font-bold text-xl text-gray-900 dark:text-white mt-2 mb-3">${r.title}</h4>
                    <span class="text-sm font-black text-primary uppercase tracking-widest">Read Article &rarr;</span>
                </a>`;
        }).join('\n');
    }

    function slugify(str) {
        return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
})();
