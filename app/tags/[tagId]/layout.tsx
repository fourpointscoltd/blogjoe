import { getTag } from '@/libs/microcms';
import TagListItem from '@/components/TagListItem';
import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export default async function TagsLayout({ children, params }: Props) {
  const { tagId } = params;
  const tag = await getTag(tagId);
  return (
    <div>
      <p className={styles.title}>
      List of
      <TagListItem tag={tag} hasLink={false} />
       Articles.
      </p>
      <div>{children}</div>
    </div>
  );
}
