import { getArticleById, getAllArticles } from '@/libs/microcms'; // 先ほどの関数をインポート
import { type Article } from '@/libs/microcms'; // Article 型をインポート
import Article from '@/components/Article'; // Article コンポーネントをインポート

// この関数を使って、ページのデータをサーバーサイドでフェッチします
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

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  // サーバーサイドで記事データを取得
  const data = await getArticleById(params.slug);
  
  // すべての記事データを取得（おすすめ記事用）
  const allArticles = await getAllArticles();

  return <Article data={data} allArticles={allArticles} />;
};

export default ArticlePage;
