import { contentTree } from '../content/tree';
import type { ArticleNode, ContentNode } from '../content/types';

export interface Crumb {
  title: string;
}

// slug -> ArticleNode の Map を構築（重複 slug は開発時に警告）。
const articleBySlug = new Map<string, ArticleNode>();
// slug -> 祖先カテゴリ列 + 記事自身のタイトル（パンくず用）
const breadcrumbBySlug = new Map<string, Crumb[]>();

function walk(nodes: ContentNode[], ancestors: Crumb[]): void {
  for (const node of nodes) {
    if (node.kind === 'category') {
      walk(node.children, [...ancestors, { title: node.title }]);
    } else {
      if (articleBySlug.has(node.slug)) {
        console.warn(`[contentIndex] slug が重複しています: "${node.slug}"`);
      }
      articleBySlug.set(node.slug, node);
      breadcrumbBySlug.set(node.slug, [...ancestors, { title: node.title }]);
    }
  }
}

walk(contentTree, []);

export function getArticleBySlug(slug: string): ArticleNode | undefined {
  return articleBySlug.get(slug);
}

// ルート（ホーム除く）から対象記事までの祖先カテゴリ列＋記事自身を返す。
export function getBreadcrumb(slug: string): Crumb[] {
  return breadcrumbBySlug.get(slug) ?? [];
}
