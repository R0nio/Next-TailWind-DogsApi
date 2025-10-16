import {Header} from '../../widgets/header'
import {Footer} from '../../widgets/footer'
import { MainScreen } from '../../widgets/mainScreen'
import { About } from '../../widgets/About'
import {Facts} from '../../widgets/facts'
import {Breeds} from '../../widgets/breeds'
import {Random} from '../../widgets/random'

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div>
        <MainScreen />
        <About />
        <Facts />
        <Breeds />
        <Random />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
