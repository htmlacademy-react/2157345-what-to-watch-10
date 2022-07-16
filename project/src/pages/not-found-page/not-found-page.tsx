import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage():JSX.Element {
  return (
    <React.Fragment>
      <h1>
      Ошибка 404. Запрашиваемая страница не найдена!
      </h1>
      <Link to='/'>Вернуться на главную</Link>
    </React.Fragment>

  );
}
export default NotFoundPage;
