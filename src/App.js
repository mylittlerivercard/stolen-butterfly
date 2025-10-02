import './App.css';

function App() {
  const imageUrl =
    'https://mylittlerivercard-assets.s3.us-east-1.amazonaws.com/stolen+butterfly.jpg';

  const title = 'Damien Hirst — Red Butterfly (2009) — Œuvre volée';
  const description =
    "Œuvre volée : Damien Hirst — Red Butterfly. Volée le 14/12/2023 à Luxembourg. Numéro de plainte PN-XXXXX. Contact : cyril@mlrcoin.com";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const tweetHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${title} — ${description}`
  )}&url=${encodeURIComponent(shareUrl)}`;
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`;

  return (
    <main className="page" lang="fr">
      <section className="hero">
        <div className="hero-content">
          <span className="flag" aria-label="Alerte">⚠️ Œuvre volée</span>
          <h1>
            Damien Hirst <span className="thin">« Red Butterfly »</span> <span className="year">(2009)</span>
          </h1>
          <p className="sub">Signalement • Luxembourg • 14/12/2023</p>
          <div className="cta">
            <a className="btn primary" href="mailto:cyril@mlrcoin.com">
              Transmettre une information
            </a>
            <a className="btn" href={tweetHref} target="_blank" rel="noreferrer">
              Partager sur X
            </a>
            <a className="btn" href={fbHref} target="_blank" rel="noreferrer">
              Partager Facebook
            </a>
            <a className="btn" href={waHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <figure className="frame" aria-label="Image de l'œuvre">
          <img
            src={imageUrl}
            alt="Damien Hirst - Red Butterfly (2009) - Œuvre volée - PN-XXXXX"
            className="hero-image"
            loading="eager"
          />
          <figcaption>Damien Hirst — Red Butterfly (2009)</figcaption>
        </figure>
      </section>

      <section className="card details" aria-labelledby="details-title">
        <h2 id="details-title">Détails de l'œuvre</h2>
        <dl className="grid">
          <div>
            <dt>Artiste</dt>
            <dd>Damien Hirst</dd>
          </div>
          <div>
            <dt>Titre</dt>
            <dd>Red Butterfly</dd>
          </div>
          <div>
            <dt>Année</dt>
            <dd>2009</dd>
          </div>
          <div>
            <dt>Technique</dt>
            <dd>Acrylique sur papier</dd>
          </div>
          <div>
            <dt>Dimensions (avec cadre)</dt>
            <dd>73,5 × 86 cm</dd>
          </div>
          <div>
            <dt>Contexte</dt>
            <dd>
              Œuvre réalisée pour l'ouverture de l'exposition « Requiem » au PinchukArtCentre (avril 2009).
            </dd>
          </div>
          <div>
            <dt>Date du vol</dt>
            <dd>14/12/2023</dd>
          </div>
          <div>
            <dt>Lieu</dt>
            <dd>Luxembourg</dd>
          </div>
          <div>
            <dt>Numéro de plainte</dt>
            <dd>PN-XXXXX</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>
              <a href="mailto:cyril@mlrcoin.com">cyril@mlrcoin.com</a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="chips" aria-label="Hashtags">
        {[
          'DamienHirst',
          'RedButterfly',
          'Requiem',
          'PinchukArtCentre',
          'ArtVolé',
          'OeuvreVolée',
          'StolenArt',
          'StolenPainting',
          'ArtTheft',
          'Luxembourg',
          'Papillon',
          'ContemporaryArt',
          'ModernArt',
          'ArtRecovery',
          'ArtWatch',
          'ArtAlert',
          'HirstButterfly',
        ].map((tag) => (
          <span className="chip" key={tag}>#{tag}</span>
        ))}
      </section>

      <p className="share-note">Merci de partager et signaler toute information.</p>
    </main>
  );
}

export default App;
