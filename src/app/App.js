import styles from './styles/App.module.scss';
import buttonIcon from './assets/button-icon.svg';
import { cards } from './cards';

export default function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header>Зарабатывайте вместе с нами!</header>
        <main>
          <div className={styles.main_container}>
            {cards.map((card) => (
              <div key={card.numb} className={styles.card}>
                <div className={styles.card_container}>
                  {card.arrow ? (
                    <img className={styles.arrow} src={card.arrow} alt={'Стрелка'} />
                  ) : null}
                  <div className={styles.card_container_header}>
                    <div className={styles.card_container_header_numb}>
                      <div className={styles.card_container_header_numb_content}>{card.numb}</div>
                    </div>
                    <div
                      className={styles.card_container_header_text}
                      dangerouslySetInnerHTML={{ __html: card.text }}></div>
                  </div>
                  <div className={styles.card_container_image}>
                    <img src={card.img} alt={card.imgAlt} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <footer>
          <div className={styles.button_border}>
            <button>
              <img
                aria-hidden={true}
                focusable={false}
                src={buttonIcon}
                alt={'Иконка для кнопки'}
              />
              Стать партнером
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
