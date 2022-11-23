import styles from '../styles/home.module.scss';
import cl from 'classnames';

import { Logo } from '../components/Logo';
import { SocialNetworks } from '../components/SocialNetworks';
import { Title } from '../components/Title';
import { ArtButton } from '../components/ArtButton';
import { Navigation } from '../components/Navigation';

export default function Home() {
  return (
    <div>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <ArtButton onClick={() => {}}>
            Whilepaper
          </ArtButton>
        </header>
        <Navigation />
        <div>
          <Title>
            From dusk to&nbsp;dawn
          </Title>
          <ul className={styles.buttonList}>
            <li>
              <ArtButton onClick={() => {}}>
                Mint
              </ArtButton>
            </li>
            <li>
              <ArtButton onClick={() => {}}>
                Connect Wallet
              </ArtButton>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
