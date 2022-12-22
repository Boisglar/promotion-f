import React from 'react';

const NewsRender = () => {
    const str = `<header>
    <h1>Это мой сайт</h1>
    <p>Он хороший</p>
    <nav>
      <ul>
        <li><a href="index.html">Эта страница</a></li>
        <li><a href="catalog.html">Другая страница</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <section>
        <h2>Первая секция</h2>
        <p>Она обо мне</p>
        <img src="images/image.png" alt="Человек и пароход">
        <p>Но может быть и о семантике, я пока не решил.</p>
      </section>
      <section>
        <h2>Вторая секция</h2>
        <p>Она тоже обо мне</p>
      </section>
      <section>
        <h2>И третья</h2>
        <p>Вы уже должны были начать догадываться.</p>
      </section>
    </article>
  </main>
  <footer>
    <p>Сюда бы я вписал информацию об авторе и ссылки на другие сайты</p>
  </footer>`

  let x = str.split('\n')
  let xx = x.join()
  console.log(xx);
    return (
        <div dangerouslySetInnerHTML={{__html:{x}}}>
            
        </div>
    );
};

export default NewsRender;