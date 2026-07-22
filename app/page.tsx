import Image from "next/image";

const instagram = "https://www.instagram.com/adrianapalharesacessorios/";

const products = [
  { name: "Sauvage Dior", category: "Masculino · Parfum", image: "/sauvage.jfif", tone: "dark", featured: true },
  { name: "Scandal", category: "Jean Paul Gaultier · Feminino", image: "/scandal.jfif", tone: "pink" },
  { name: "Good Girl", category: "Carolina Herrera · Feminino", image: "/good-girl.webp", tone: "light" },
  { name: "212 VIP", category: "Carolina Herrera · Feminino", image: "/212-line.jfif", tone: "pink" },
  { name: "212 Men", category: "Carolina Herrera · Masculino", image: "/212-men.jfif", tone: "light" },
  { name: "Kate Spade", category: "New York · Feminino", image: "/perfume-kate-spade.jfif", tone: "light" },
];

const Arrow = () => <span aria-hidden="true">→</span>;

export default function Home() {
  return <main>
    <div className="topbar"><span>Autenticidade em cada escolha</span><b>Frete para todo o Brasil</b><span>Loja física em Jataí — GO</span></div>
    <header className="nav">
      <a className="logo" href="#inicio"><i>AP</i><span>Adriana Palhares<small>acessórios & perfumes</small></span></a>
      <nav><a href="#perfumes">Perfumes</a><a href="#como-comprar">Como comprar</a><a href="#sobre">A loja</a></nav>
      <a className="instagram" href={instagram} target="_blank" rel="noreferrer">Comprar no Instagram <Arrow /></a>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-media"><Image src="/sauvage.jfif" alt="Perfume Sauvage Dior" fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
      <div className="hero-panel">
        <p className="kicker">Perfumes originais · pronta entrega</p>
        <h1>Perfumes que<br /><em>deixam marca.</em></h1>
        <p className="hero-copy">Seleção de fragrâncias desejadas, presentes especiais e atendimento de verdade para você escolher com segurança.</p>
        <div className="hero-buttons"><a className="button" href="#perfumes">Ver novidades <Arrow /></a><a className="subtle-link" href={instagram} target="_blank" rel="noreferrer">Falar com a loja</a></div>
        <div className="hero-note"><strong>100%</strong><span>Produtos selecionados<br />para você presentear.</span></div>
      </div>
      <div className="hero-label">Seu perfume<br /><b>favorito</b><br />está aqui.</div>
    </section>

    <section className="benefits"><div><b>01</b><span><strong>Originais e selecionados</strong>Marcas desejadas e escolha cuidadosa.</span></div><div><b>02</b><span><strong>Atendimento pessoal</strong>Te ajudamos a encontrar o ideal.</span></div><div><b>03</b><span><strong>Entrega para todo Brasil</strong>Receba onde você estiver.</span></div></section>

    <section className="catalog" id="perfumes">
      <div className="section-head"><div><p className="kicker">A seleção da semana</p><h2>Escolha sua<br /><em>assinatura.</em></h2></div><p>Perfumes femininos e masculinos para transformar os seus momentos em memória.</p></div>
      <div className="filters"><span>Todos os perfumes</span><span>Femininos</span><span>Masculinos</span><a href={instagram} target="_blank" rel="noreferrer">Pedir catálogo completo <Arrow /></a></div>
      <div className="product-grid">
        {products.map((product, index) => <a key={product.name} className={`product ${product.tone} ${product.featured ? "featured" : ""}`} href={instagram} target="_blank" rel="noreferrer">
          <div className="product-photo"><Image src={product.image} alt={product.name} fill sizes="(max-width: 600px) 50vw, 30vw" />{index < 2 && <span className="pill">Novidade</span>}</div>
          <div className="product-details"><div><small>{product.category}</small><h3>{product.name}</h3></div><i><Arrow /></i></div>
        </a>)}
      </div>
    </section>

    <section className="signature" id="sobre"><div className="signature-copy"><p className="kicker">Adriana Palhares Acessórios</p><h2>Elegância não precisa<br />ser <em>complicada.</em></h2><p>De Jataí para todo o Brasil, reunimos perfumes, semijoias, bolsas e acessórios para celebrar a sua melhor versão.</p><a className="outline-button" href={instagram} target="_blank" rel="noreferrer">Conhecer pelo Instagram <Arrow /></a></div><div className="signature-photo"><Image src="/good-girl.webp" alt="Perfume Good Girl Carolina Herrera" fill sizes="(max-width: 800px) 100vw, 45vw" /></div></section>

    <section className="buy" id="como-comprar"><p className="kicker">É muito simples comprar</p><h2>Escolha. Chame.<br /><em>Receba.</em></h2><div className="buy-steps"><div><b>1</b><strong>Encontre seu favorito</strong><span>Explore a nossa seleção.</span></div><div><b>2</b><strong>Fale pelo Instagram</strong><span>Tire dúvidas e confirme o pedido.</span></div><div><b>3</b><strong>Receba com carinho</strong><span>Enviamos para todo o Brasil.</span></div></div><a className="button light" href={instagram} target="_blank" rel="noreferrer">Quero comprar agora <Arrow /></a></section>

    <footer><a className="logo" href="#inicio"><i>AP</i><span>Adriana Palhares<small>acessórios & perfumes</small></span></a><p>Jataí — Goiás · Enviamos para todo o Brasil</p><a href={instagram} target="_blank" rel="noreferrer">@adrianapalharesacessorios</a></footer>
    <a className="mobile-cta" href={instagram} target="_blank" rel="noreferrer">Comprar pelo Instagram <Arrow /></a>
  </main>;
}
