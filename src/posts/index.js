const modules = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true });

function parseFrontmatter(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) return { data: {}, content: raw };
    const data = {};
    for (const line of match[1].split(/\r?\n/)) {
        const idx = line.indexOf(':');
        if (idx === -1) continue;
        const key = line.slice(0, idx).trim();
        let value = line.slice(idx + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }
        data[key] = value;
    }
    return { data, content: match[2] };
}

const POSTS = Object.entries(modules)
    .map(([path, raw]) => {
        const { data, content } = parseFrontmatter(raw);
        return {
            path,
            slug: data.slug,
            title: data.title,
            date: data.date,
            description: data.description || '',
            content,
        };
    })
    .filter(p => p.slug && p.title && p.date)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts() {
    return POSTS;
}

export function getPostBySlug(slug) {
    return POSTS.find(p => p.slug === slug);
}

export function formatDate(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    const date = new Date(Date.UTC(y, m - 1, d));
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
