import styles from '../styles/home.module.scss';
import cl from 'classnames';

import { Logo } from '../components/Logo';
import { SocialNetworks } from '../components/SocialNetworks';
import { Title } from '../components/Title';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <div>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <Button onClick={() => {}}>
            Whilepaper
          </Button>
        </header>
        {/* <Navigation /> */}
        <div>
          <Title>
            From dusk to&nbsp;dawn
          </Title>
          <ul className={styles.buttonList}>
            <li>
              <Button onClick={() => {}}>
                Mint
              </Button>
            </li>
            <li>
              <Button onClick={() => {}}>
                Connect Wallet
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
