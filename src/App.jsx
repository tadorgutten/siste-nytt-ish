```jsx
import { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import articles from './data/articles'

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    const loadArticleFromUrl = () => {
      const match = window.location.pathname.match(/^\/artikkel\/(\d+)$/)

      if (match) {
        const articleId = Number(match[1])
        const article = articles.find((item) => item.id === articleId)

        if (article) {
          setSelectedArticle(article)
          return
        }
      }

      setSelectedArticle(null)
    }

    loadArticleFromUrl()

    window.addEventListener('popstate', loadArticleFromUrl)

    return () => {
      window.removeEventListener('popstate', loadArticleFromUrl)
    }
  }, [])

  const openArticle = (article) => {
    window.history.pushState(
      {},
      '',
      `/artikkel/${article.id}`
    )

    setSelectedArticle(article)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const closeArticle = () => {
    window.history.pushState(
      {},
      '',
      '/'
    )

    setSelectedArticle(null)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
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
```
