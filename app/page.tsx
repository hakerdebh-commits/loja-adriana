import Image from "next/image";

const instagram = "https://www.instagram.com/adrianapalharesacessorios/";

const products = [
  {
    title: "Bolsas de grife",
    copy: "Peças selecionadas para elevar todos os looks.",
    image: "/bolsa.jpeg",
    className: "bag",
  },
  {
    title: "Perfumes originais",
    copy: "Fragrâncias marcantes, clássicas e desejadas.",
    image: "/perfume.jpeg",
    className: "perfume",
  },
  {
    title: "Kate Spade New York",
    copy: "Uma fragrância feminina, delicada e cheia de personalidade.",
    image: "/perfume-kate-spade.jfif",
    className: "perfume-new",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">Envios para todo o Brasil <span>•</span> Loja oficial em Jataí — GO</div>

      <header className="header">
        <a className="brand" href="#inicio" aria-label="Adriana Palhares Acessórios — início">
          <span className="brand-mark">AP</span>
          <span>Adriana Palhares<small>Acessórios</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#colecao">Coleções</a>
          <a href="#sobre">Nossa loja</a>
          <a href="#atendimento">Atendimento</a>
        </nav>
        <a className="header-cta" href={instagram} target="_blank" rel="noreferrer">Instagram <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Curadoria que transforma o seu estilo</p>
          <h1>O luxo mora<br />nos <em>detalhes.</em></h1>
          <p className="hero-text">Semijoias, bolsas de grife, perfumes originais e acessórios escolhidos para mulheres que fazem da elegância sua assinatura.</p>
          <div className="hero-actions">
            <a className="button primary" href="#colecao">Descobrir coleções <Arrow /></a>
            <a className="text-link" href={instagram} target="_blank" rel="noreferrer">Comprar pelo Instagram</a>
          </div>
          <div className="trust-row" aria-label="Diferenciais da loja">
            <span>✦ Produtos selecionados</span><span>✦ Envio nacional</span><span>✦ Atendimento pessoal</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image src="/bolsa.jpeg" alt="Bolsa de grife em tom bege" fill priority sizes="(max-width: 800px) 100vw, 46vw" />
          </div>
          <div className="floating-card"><span>Peças que</span><strong>contam histórias</strong></div>
          <div className="seal">Curadoria<br /><b>exclusiva</b><br />Jataí • GO</div>
        </div>
      </section>

      <section className="collections section" id="colecao">
        <div className="section-heading">
          <div><p className="eyebrow">Encontre o seu próximo desejo</p><h2>Escolhas que<br /><em>encantam.</em></h2></div>
          <p>Uma curadoria diversa para acompanhar suas melhores versões — do cotidiano às ocasiões inesquecíveis.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <a className={`product-card ${product.className}`} href={instagram} target="_blank" rel="noreferrer" key={product.title}>
              <div className="product-image">{product.className === "perfume-new" && <span className="new-badge">Novidade</span>}<Image src={product.image} alt={product.title} fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
              <div className="product-info"><span>0{index + 1}</span><div><h3>{product.title}</h3><p>{product.copy}</p><b className="shop-label">Ver no Instagram</b></div><Arrow /></div>
            </a>
          ))}
        </div>
        <div className="category-strip">
          <span>Semijoias</span><i>✦</i><span>Bolsas</span><i>✦</i><span>Perfumes</span><i>✦</i><span>Presentes</span><i>✦</i><span>Acessórios</span>
        </div>
      </section>

      <section className="story section" id="sobre">
        <div className="story-image"><Image src="/perfume-kate-spade.jfif" alt="Perfume Kate Spade New York selecionado pela Adriana Palhares Acessórios" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
        <div className="story-copy">
          <p className="eyebrow light">De Jataí para todo o Brasil</p>
          <h2>Mais que acessórios,<br /><em>uma experiência.</em></h2>
          <p>Na Adriana Palhares Acessórios, cada escolha é feita com cuidado. Unimos qualidade, autenticidade e atendimento próximo para você comprar com confiança, onde estiver.</p>
          <div className="story-points"><div><b>01</b><span><strong>Curadoria cuidadosa</strong>Peças escolhidas uma a uma.</span></div><div><b>02</b><span><strong>Atendimento próximo</strong>Ajuda de verdade para escolher.</span></div><div><b>03</b><span><strong>Entrega nacional</strong>Seu pedido chega em todo o Brasil.</span></div></div>
        </div>
      </section>

      <section className="cta-section" id="atendimento">
        <p className="eyebrow">Seu próximo favorito está aqui</p>
        <h2>Vamos encontrar a peça<br /><em>perfeita para você?</em></h2>
        <p>Fale com a nossa equipe pelo Instagram e receba atendimento personalizado.</p>
        <a className="button light-button" href={instagram} target="_blank" rel="noreferrer">Chamar no Instagram <Arrow /></a>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">AP</span><div>Adriana Palhares<small>Acessórios</small></div></div>
        <div><strong>Visite</strong><p>Loja oficial em Jataí — Goiás</p><p>Envios para todo o Brasil</p></div>
        <div><strong>Acompanhe</strong><a href={instagram} target="_blank" rel="noreferrer">@adrianapalharesacessorios</a></div>
        <p className="copyright">© 2026 Adriana Palhares Acessórios</p>
      </footer>
      <a className="mobile-shop" href={instagram} target="_blank" rel="noreferrer">Comprar pelo Instagram <Arrow /></a>
    </main>
  );
}
