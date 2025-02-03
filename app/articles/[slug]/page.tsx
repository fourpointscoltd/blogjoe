import { getArticleById, getAllArticles } from '@/libs/microcms'; // 先ほどの関数をインポート
import { type Article } from '@/libs/microcms'; // Article 型をインポート
import Article from '@/components/Article'; // Article コンポーネントをインポート

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // 現在の記事データを取得
  const articleData = await getArticleById(params.slug);

  // すべての記事データを取得
  const allArticles = await getAllArticles();

  return {
    props: {
      data: articleData, // 現在の記事データ
      allArticles: allArticles, // すべての記事データ
    },
  };
}

export async function getStaticPaths() {
  // ここで、すべてのスラッグを取得して静的生成するページを決めることができます。
  // 例えば、記事のスラッグを取得して、それに基づいて静的ページを作成します。
  const allArticles = await getAllArticles();
  const paths = allArticles.map((article: Article) => ({
    params: { slug: article.id }, // スラッグが記事のIDだと仮定
  }));

  return {
    paths,
    fallback: false, // 既存の記事ページのみを静的生成
  };
}

const ArticlePage = ({ data, allArticles }: { data: Article, allArticles: Article[] }) => {
  return <Article data={data} allArticles={allArticles} />;
}

export default ArticlePage;
