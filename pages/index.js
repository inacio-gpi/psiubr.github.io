import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from '../components/links';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from 'react-icons/ai';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.list_btn}>
          <Link target="_blank" href="https://www.linkedin.com/in/guilherme-pereira-6186631a1/" className={utilStyles.btn}>
            <AiFillLinkedin height="40px" width="40px" />
            Linkedin
          </Link>
          <Link target="_blank" href="https://github.com/psiubr" className={utilStyles.btn}>
            <AiFillGithub /> Github
          </Link>
          <Link target="_blank" href="https://www.instagram.com/guilherme_psiu/" className={utilStyles.btn}>
            <AiOutlineInstagram />
            Instagram
          </Link>
          <Link target="_blank" href="https://wa.me/5543996778982?text=Olá,%20vim%20pelo%20site." className={utilStyles.btn}>
            <AiOutlineWhatsApp />
            Whatsapp
          </Link>
          <Link target="_blank" href="https://www.facebook.com/people/Guilherme-Pereira/100046321761010/" className={utilStyles.btn}>
            <AiFillFacebook />
            Facebook
          </Link>
        </div>
      </section>
    </Layout>
  );
}
