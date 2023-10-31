import Layout from '@components/Layout';
import { ITitle } from '@interfaces/ITitle';
import type { NextPage, NextPageContext } from 'next';

const HomePage: NextPage<ITitle> = ({ title }): JSX.Element => {
  return <Layout title={title}></Layout>;
};

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      title: 'Beranda',
    },
  };
}
export default HomePage;
