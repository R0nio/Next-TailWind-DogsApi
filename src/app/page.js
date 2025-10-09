import {Header} from '../../widgets/header'
import {Footer} from '../../widgets/footer'
import { MainScreen } from '../../widgets/mainScreen'
import { About } from '../../widgets/About'
import {Facts} from '../../widgets/facts';

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
      </main>
        <MainScreen />
        <About />
        <Facts />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
