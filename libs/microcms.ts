// MicroCMSからすべての記事データを取得
export async function getAllArticles() {
  const listData = await client
    .getList<Article>({
      endpoint: 'articles', // 'articles' があなたのMicroCMSのエンドポイント名
    })
    .catch(notFound);
  return listData.contents; // データが正常に取得できた場合
}

// 特定の記事データを取得
export async function getArticleById(slug: string) {
  const articleData = await client
    .getListDetail<Article>({
      endpoint: 'articles', // 'articles' があなたのMicroCMSのエンドポイント名
      contentId: slug, // スラッグを使用して特定の記事を取得
    })
    .catch(notFound);
  return articleData;
}
