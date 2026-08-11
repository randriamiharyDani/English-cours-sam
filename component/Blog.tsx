import Reveal from "./Reveal";
import { blogPosts } from "./data";

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="section-head reveal is-visible">
          <span className="eyebrow">Blog &amp; actualités</span>
          <h2>Conseils, astuces et actualités de l&apos;académie</h2>
          <p>Des ressources gratuites pour progresser entre deux cours.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Reveal key={post.title}>
              <article className="blog-card">
                <div className="blog-thumb">
                  <img src={post.img} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-body">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.desc}</p>
                  <a href="#" className="blog-read">
                    Lire l&apos;article{" "}
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
