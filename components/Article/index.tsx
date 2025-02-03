import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import styles from './index.module.css';
import TagList from '../TagList';
import Profile from '../Profile';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
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
      <h1 className={styles.h1}>A.</h1>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
      <a href='https://joetanakajapan.netlify.app/'>
      <Profile writer={data.writer} />
      </a>
    </main>
  );
}
