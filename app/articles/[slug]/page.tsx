import { getArticleById, getAllArticles } from '@/libs/microcms'; // MicroCMS API を使って記事を取得する関数をインポート
import { type Article } from '@/libs/microcms'; // Article 型をインポート
import Article from '@/components/Article'; // Article コンポーネントをインポート

// メタデータの生成
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const articleData = await getArticleById(params.slug);
  return {
    title: articleData.title,
    description: articleData.description,
    openGraph: {
      title: articleData.title,
      description: articleData.description,
      images: [articleData.thumbnail?.url || ''],
    },
  };
}

// 記事ページコンポーネント
const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const data = await getArticleById(params.slug); // 記事データを取得
  const allArticles = await getAllArticles(); // すべての記事データを取得

  return <Article data={data} allArticles={allArticles} />; // 記事コンポーネントにデータを渡してレンダリング
};

export default ArticlePage;
