import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import styles from './index.module.css';
import TagList from '../TagList';
import Profile from '../Profile';
import Link from 'next/link';

type Props = {
  data: Article; // 現在の記事データ
  allArticles: Article[]; // すべての記事データ
};

export default function Article({ data, allArticles }: Props) {
  // タグが一致する記事をフィルタリング
  const filteredArticles = allArticles.filter((article) =>
    article.tags.some((tag) => tag.name === data.tags[0]?.name) // 最初のタグを使ってフィルタ
  );

  return (
    <main className={styles.main}>
      <TagList tags={data.tags} />
      <picture>
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
        />
        <img
          src={data.thumbnail?.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      </picture>
      <h1 className={styles.h1}>{data.title}</h1>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
      <a href='https://joetanakajapan.netlify.app/'>
        <Profile writer={data.writer} />
      </a>

      {/* 同じタグのおすすめ記事表示 */}
      <section className={styles.recommendedArticles}>
        <h2>おすすめ記事</h2>
        {filteredArticles.length > 0 ? (
          <ul>
            {filteredArticles.map((article) => (
              <li key={article.id} className={styles.card}>
                <Link href={`/articles/${article.id}`}>
                  <a>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <img
                      src={article.thumbnail?.url}
                      alt={article.title}
                      className={styles.thumbnail}
                      width={article.thumbnail?.width}
                      height={article.thumbnail?.height}
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>同じタグの記事は見つかりませんでした。</p>
        )}
      </section>
    </main>
  );
}
