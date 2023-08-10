import Head from 'next/head';
import Contador from '../components/Contador';
import Like from '../components/Like';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      Hello World!
      <Contador numero_inicial={0} />
      <Contador numero_inicial={10} />
      <Like likes_atuais={3}/>
    </div>
  );
}
