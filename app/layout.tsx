import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'https://localguidejapanblog.netlify.app/'),
  title: 'Local Guide Japan',
  description: 'I answer questions based on my experience as a local who has traveled to every prefecture in Japan and guided many foreigners. I highlight hidden gems and lesser-known destinations and activities on social media. Unlike typical guidebooks, I give strong advice about the best spots to visit and which ones to avoid. Discover the hidden sides of Japan with me!',
  openGraph: {
    title: 'Local Guide Japan',
    description: 'I answer questions based on my experience as a local who has traveled to every prefecture in Japan and guided many foreigners. I highlight hidden gems and lesser-known destinations and activities on social media. Unlike typical guidebooks, I give strong advice about the best spots to visit and which ones to avoid. Discover the hidden sides of Japan with me!',
    images: 'https://joetanakajapan.netlify.app/services/profile_circle.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja">
      <body>
        <Header />
        <Nav tags={tags.contents} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
