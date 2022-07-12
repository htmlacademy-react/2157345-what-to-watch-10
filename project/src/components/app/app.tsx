import MainPage from '../../pages/main-page/main-page';
import {
  FilmObjectProps,
} from '../../types/types';

function App({filmObject}: FilmObjectProps): JSX.Element {
  return <MainPage filmObject={filmObject}/>;
}

export default App;
