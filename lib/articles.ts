import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');

export interface ArticleData {
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
  content: string;
}

function parseArticleFile(filename: string): ArticleData {
  const filePath = path.join(ARTICLES_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    title: data.title,
    slug: data.slug,
    category: data.category,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    image: data.image || undefined,
    content,
  };
}

export async function getArticles(options?: {
  category?: string;
  page?: number;
  perPage?: number;
}): Promise<{ articles: ArticleData[]; total: number }> {
  const { category, page = 1, perPage = 9 } = options || {};

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.mdx'));

  let articles = files.map(parseArticleFile);

  // Sort by date descending
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Filter by category
  if (category) {
    articles = articles.filter((a) => a.category === category);
  }

  const total = articles.length;

  // Paginate
  const start = (page - 1) * perPage;
  const paginated = articles.slice(start, start + perPage);

  return { articles: paginated, total };
}

export async function getArticleBySlug(slug: string): Promise<ArticleData | null> {
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.mdx'));

  for (const file of files) {
    const article = parseArticleFile(file);
    if (article.slug === slug) return article;
  }

  return null;
}

export async function getArticleSlugs(): Promise<string[]> {
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.mdx'));

  return files.map((f) => parseArticleFile(f).slug);
}

export async function getCategories(): Promise<string[]> {
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.mdx'));

  const cats = new Set(files.map((f) => parseArticleFile(f).category));
  return Array.from(cats).sort();
}
