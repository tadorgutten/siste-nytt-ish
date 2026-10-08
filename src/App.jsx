import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const articles = [
    {
      id: 1,
      category: 'NORGE',
      title: 'Kong Haakon observert på Kiwi før GTA 6',
      excerpt:
        'Kongen skal ha blitt observert i en helt vanlig dagligvarebutikk. Vitner beskriver situasjonen som overraskende normal.',
      date: '8. oktober 2026',
      time: '17:48',
      image:
        'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
      content: [
        'Flere kunder skal ha fått øye på kongen under en helt vanlig handletur.',
        'Ifølge vitner skal besøket ha gått rolig for seg, og kongen skal ha oppført seg som enhver annen kunde.',
        'Det er foreløpig uklart om besøket hadde noen sammenheng med den etterlengtede lanseringen av GTA 6.'
      ]
    },
    {
      id: 2,
      category: 'TEKNOLOGI',
      title: 'Ny oppdatering gjør at mobilen fortsatt har 12 prosent batteri',
      excerpt:
        'Brukere over hele landet melder om den oppsiktsvekkende opplevelsen.',
      date: '8. oktober 2026',
      time: '16:21',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85',
      content: [
        'En ny oppdatering skal ha sørget for at telefonen fortsatt har batteri etter flere timers bruk.',
        'Mange brukere beskriver utviklingen som overraskende og sier de ikke hadde forventet å se tallet 12 prosent på skjermen.',
        'Utviklerne har foreløpig ikke kommentert saken.'
      ]
    },
    {
      id: 3,
      category: 'SAMFUNN',
      title: 'Mann åpnet kjøleskapet uten å vite hva han skulle ha',
      excerpt:
        'Situasjonen utviklet seg raskt og mannen måtte lukke døren igjen.',
      date: '8. oktober 2026',
      time: '15:03',
      image:
        'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=1200&q=85',
      content: [
        'En mann åpnet kjøleskapet tirsdag kveld uten en klar plan.',
        'Etter noen sekunder med vurdering valgte han å lukke døren igjen.',
        'Vitner beskriver hendelsen som en situasjon mange kan kjenne seg igjen i.'
      ]
    },
    {
      id: 4,
      category: 'LOKALT',
      title: 'Elev sier han skal begynne å legge seg tidligere',
      excerpt:
        '– Denne gangen mener jeg det faktisk, sier eleven.',
      date: '8. oktober 2026',
      time: '13:17',
      image:
        'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85',
      content: [
        'Eleven sier at han denne gangen har bestemt seg for å legge seg tidligere.',
        'Planen skal være å få mer søvn og bruke mindre tid på telefonen sent på kvelden.',
        'Om planen faktisk blir gjennomført, er foreløpig uklart.'
      ]
    }
  ]

  const openArticle = (article) => {
    setSelectedArticle(article)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeArticle = () => {
    setSelectedArticle(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">

          <button
            className="logo"
            onClick={closeArticle}
            aria-label="Gå til forsiden"
          >
            <img
              src={logo}
              alt="Siste Nytt-ish"
            />
          </button>

        </div>
      </header>


      {/* ARTIKKELVISNING */}
      {selectedArticle ? (

        <main className="article-page">

          <div className="article-container">

            <button
              className="back-button"
              onClick={closeArticle}
            >
              ← Tilbake til forsiden
            </button>

            <h1>
              {selectedArticle.title}
            </h1>

            <p className="article-excerpt">
              {selectedArticle.excerpt}
            </p>

            <div className="article-meta">
              {selectedArticle.date} · {selectedArticle.time}
            </div>

            <img
              className="article-image"
              src={selectedArticle.image}
              alt={selectedArticle.title}
            />

            <div className="article-content">

              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </div>

          </div>

        </main>

      ) : (

        <main>

          {/* SISTE NYTT */}
          <button
            className="breaking-bar"
            onClick={() => openArticle(articles[0])}
          >
            <div className="breaking-inner">

              <span className="breaking-label">
                SISTE NYTT
              </span>

              <span className="breaking-text">
                Nyeste nyheter og oppdateringer
              </span>

              <span className="breaking-arrow">
                →
              </span>

            </div>
          </button>


          {/* NYESTE SAKER */}
          <section className="latest-section">

            <div className="section-header">

              <h2>
                Nyeste saker
              </h2>

              <div className="section-line"></div>

            </div>


            <div className="article-grid">

              {articles.map((article) => (

                <article
                  className="article-card"
                  key={article.id}
                  onClick={() => openArticle(article)}
                >

                  <div className="card-image-wrapper">

                    <img
                      src={article.image}
                      alt={article.title}
                    />

                  </div>

                  <div className="card-content">

                    <h3>
                      {article.title}
                    </h3>

                    <p>
                      {article.excerpt}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </section>

        </main>

      )}


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-logo">

            <img
              src={logo}
              alt="Siste Nytt-ish"
            />

          </div>

          <p>
            Nyheter. Ish.
          </p>

          <div className="footer-bottom">
            © 2026 Siste Nytt-ish
          </div>

        </div>

      </footer>

    </div>
  )
}

export default App