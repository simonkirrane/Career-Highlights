const ExternalLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a className="text-link" href={href} target="_blank" rel="noreferrer">
    {children}
    <span aria-hidden="true"> ↗</span>
  </a>
)

const SectionLabel = ({ number }: { number: string }) => (
  <div className="section-label">
    <span>Featured work</span>
    <span aria-hidden="true" />
    <span>{number}</span>
  </div>
)

const Result = ({
  value,
  children,
}: {
  value?: string
  children: React.ReactNode
}) => (
  <li className="result">
    {value && <strong>{value}</strong>}
    <span>{children}</span>
  </li>
)

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Simon Kirrane, back to top"
        >
          <span>SK</span>
          <span>Simon Kirrane</span>
        </a>
        <nav aria-label="Portfolio sections">
          <a href="#templates">01</a>
          <a href="#advnture">02</a>
          <a href="#canon">03</a>
          <a href="#w42st">04</a>
          <a href="#ai-work">05</a>
        </nav>
        <a
          className="header-cta"
          href="https://www.linkedin.com/in/simonkirrane/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-intro">
              <p className="eyebrow">Content Lead &amp; Digital Strategist</p>
              <h1>
                Simon
                <br />
                Kirrane<span className="red-dot">.</span>
              </h1>
              <p className="hero-qualification">MBA-qualified</p>
            </div>

            <div className="hero-statement">
              <p>
                I connect products and systems to audience needs to create
                <em> content that moves people – and numbers.</em>
              </p>
              <div className="rule" />
              <p className="hero-bio">
                20+ years leading content growth, digital transformation, and
                brand narrative across high-growth B2C, B2B, SaaS, and global
                publishing. I deliver strategies that convert by connecting to
                people through their needs and passions. In 2023 I graduated
                from the University of Exeter Business School with an MBA in
                Strategy and Leadership.
              </p>
            </div>
          </div>

          <div className="metric-strip" aria-label="Career highlights">
            <div>
              <strong>20+</strong>
              <span>Years leading content</span>
            </div>
            <div>
              <strong>MBA</strong>
              <span>Exeter Business School</span>
            </div>
            <div>
              <strong>GEO & SEO</strong>
              <span>LLM & AI search discovery</span>
            </div>
            <div>
              <strong>AI Operations</strong>
              <span>Prompt engineering & workflows<</span>
            </div>
          </div>
        </section>

 <section className="case-study dark-case" id="templates">
          <div className="section-inner">
            <SectionLabel number="01" />
            <div className="case-heading">
              <div>
                <p className="client">Kolekti · 2023–26</p>
                <h2>Templates convert.</h2>
              </div>
              <p className="case-deck">
                A joint content and product strand designed to withstand AI
                Overviews – and capture higher-intent search.
              </p>
            </div>

            <div className="story-grid">
              <div className="story-copy">
                <p className="kicker">The opportunity</p>
                <p>
                  Searches for 'X template' are much harder for an AI Overview
                  to satisfy: users want an asset, not instructions. They also
                  know what they want – and convert at higher rates when they find
                  it. I built the strand around Confluence templates created
                  with our app, Mosaic.
                </p>
              </div>

              {/* Reworked Outcomes List */}
              <div className="story-copy">
                <p className="kicker">Outcomes</p>
                <ul className="outcomes-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <li>
                    <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.35rem', color: 'var(--acid)', display: 'block', marginBottom: '0.3rem' }}>
                      ~8,400 organic keywords
                    </strong>
                    <p style={{ fontSize: '0.92rem', opacity: 0.85, margin: 0 }}>
                      Grown by May 2024 (against ~1,350 for the next-best business unit), making organic search the #1 acquisition channel.
                    </p>
                    <div style={{ marginTop: '0.4rem' }}>
                      <a className="text-link" href="https://portfolio.simonkirrane.com/Kolekti-Numbers.webp" target="_blank" rel="noreferrer" style={{ color: 'var(--acid)' }}>
                        View growth charts ↗
                      </a>
                    </div>
                  </li>

                  <li>
                    <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.35rem', color: 'var(--acid)', display: 'block', marginBottom: '0.3rem' }}>
                      6,600 → 36,000 monthly active users
                    </strong>
                    <p style={{ fontSize: '0.92rem', opacity: 0.85, margin: 0 }}>
                      Achieved since launching Templates in 2023, with website traffic up 52% and evaluations up 10%. This impact championed the product renaming to <em>Mosaic: Content Formatting Macros &amp; Templates for Confluence</em>.
                    </p>
                  </li>

                  <li>
                    <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.35rem', color: 'var(--acid)', display: 'block', marginBottom: '0.3rem' }}>
                      B2C energy for B2B
                    </strong>
                    <p style={{ fontSize: '0.92rem', opacity: 0.85, margin: 0 }}>
                      Created a D&amp;D character sheet template speaking to developer culture, promoted on LinkedIn with a <em>Stranger Things</em> theme.{' '}
                      <a className="text-link" href="https://www.kolekti.com/resources/templates/character-sheet-template-confluence" target="_blank" rel="noreferrer" style={{ color: 'var(--acid)' }}>
                        Character Sheet ↗
                      </a>
                    </p>
                  </li>

                  <li>
                    <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.35rem', color: 'var(--acid)', display: 'block', marginBottom: '0.3rem' }}>
                      The Agile Framework GTM
                    </strong>
                    <p style={{ fontSize: '0.92rem', opacity: 0.85, margin: 0 }}>
                      Partnered with Agile Manifesto signatory Jon Kern, yielding Kolekti's best-attended webinar (100+ attendees, 75% signup attendance).{' '}
                      <a className="text-link" href="https://www.linkedin.com/events/agileat25-howtospotagorillainat7475877695097126912/" target="_blank" rel="noreferrer" style={{ color: 'var(--acid)' }}>
                        How to Spot a Gorilla in a Tutu ↗
                      </a>{' | '}
                      <a className="text-link" href="https://www.kolekti.com/resources/templates/collections/jon-kern-agile-framework" target="_blank" rel="noreferrer" style={{ color: 'var(--acid)' }}>
                        Jon Kern Framework ↗
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <figure className="hero-media gif-media">
              <img
                src="https://cdn.sanity.io/images/b5fgx0yb/production/e0ecd0965ffbeeb80c7b9f2227f46f3477fadea9-500x333.gif"
                alt="Animated preview of an Agile Vision Statement template for Confluence"
              />
              <figcaption>
                <span>Product in motion</span>
                Agile Vision Statement Template for Confluence
                <p style={{ marginTop: '0.85rem', fontSize: '0.9rem', lineHeight: '1.5', fontFamily: 'inherit', fontWeight: '400', color: 'inherit', opacity: 0.85 }}>
                  The impact ensured 'Templates' became part of the product:
                  <em>
                    {" "}
                    Mosaic: Content Formatting Macros &amp; Templates for
                    Confluence.
                  </em>{" "}
                </p>
              </figcaption>
            </figure>

            <div className="evidence-grid">
              <figure className="image-card">
                <img
                  src="/kolekti-year-one.webp"
                  alt="Summary of FY 2023–24 Kolekti content activity and results"
                />
                <figcaption>
                  <span>Year one</span>
                  Pre-AI Overview achievements at Kolekti
                </figcaption>
              </figure>
              <div className="campaign-notes">
                <p className="kicker">Strategic growth</p>
                <h3>Built for scale and engagement.</h3>
                <p>
                  By focusing on intent-driven assets rather than generic text, the content engine successfully bypassed the early friction of AI search overviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study" id="advnture">
          <div className="section-inner">
            <SectionLabel number="02" />
            <div className="case-heading">
              <div>
                <p className="client">Future Plc · 2019–22</p>
                <h2>Advntures in web success.</h2>
              </div>
              <div className="brand-tile advnture-brand">
                <img src="/advnture-logo.png" alt="Advnture" />
              </div>
            </div>

            <div className="big-stat-layout">
              <div className="big-stat">
                <strong>6</strong>
                <span>weeks from concept to market</span>
              </div>
              <div className="story-copy">
                <p className="kicker">The brief</p>
                <p>
                  When Advnture.com’s launch deadline was brought forward, I led
                  its concept-to-market launch while simultaneously managing a
                  100+ person editorial division. I hired the team and set the
                  brand, tone of voice, and editorial pipeline.
                </p>
              </div>
            </div>

            <div className="outcome-band">
              <div>
                <strong>Revenue by month 3</strong>
                <p>Via Amazon Onsite Publishing</p>
              </div>
              <div>
                <strong>8.4m</strong>
                <p>Quarterly visits within 24 months</p>
              </div>
              <div>
                <strong>1st of 4</strong>
                <p>Of three sibling launches ADV was considered the breakout success</p>
              </div>
            </div>
            <div className="case-footer-link">
              <ExternalLink href="https://www.advnture.com">
                Visit Advnture.com
              </ExternalLink>
            </div>
          </div>
        </section>

        <section className="case-study red-case" id="canon">
          <div className="section-inner">
            <SectionLabel number="03" />
            <div className="case-heading">
              <div>
                <p className="client">Canon EMEA · 2016–19</p>
                <h2>Focus on use cases.</h2>
              </div>
              <div className="brand-tile canon-brand">
                <img src="/canon-logo.png" alt="Canon" />
              </div>
            </div>

            <div className="canon-intro">
              <p className="lead-quote">Promotion cosplaying as editorial.</p>
              <div className="story-copy">
                <p>
                  I delivered the content strategy for the Canon EMEA Ambassador
                  launch, establishing new ways of working while coordinating
                  globally mobile photographers – all within exacting brand and
                  content guidelines.
                </p>
                <p>
                  The visual-first creator profiles doubled as high-converting,
                  evergreen product use-case overviews. Almost ten years on,
                  Canon’s Ambassador programme continues to grow.
                </p>
                <ExternalLink href="https://www.canon.co.uk/pro/ambassadors/alessandro-trovati/">
                  Read Alessandro Trovati’s profile
                </ExternalLink>
              </div>
            </div>

            <div className="canon-gallery">
              <figure className="gallery-wide">
                <img
                  src="/canon-ambassadors.webp"
                  alt="Canon Ambassadors profile homepage"
                />
                <figcaption>
                  Creator profiles built as enduring use cases
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/canon-field-work.webp"
                  alt="Professional photographer Martin Bissig working from a train in Sri Lanka"
                />
                <figcaption>
                  Professionals in the field, product naturally in frame
                </figcaption>
              </figure>
            </div>

            <div className="other-clients">
              <div>
                <p className="kicker">Other client work · 2016–19</p>
                <h3>Three clients. Three different strategies.</h3>
              </div>
              <figure>
                <img
                  src="/client-work.webp"
                  alt="Work for South Western Railway, Odeon, and TransPennine Express"
                />
                <figcaption>
                  South Western Railway · Odeon · TransPennine Express
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="case-study ink-case" id="w42st">
          <div className="section-inner">
            <SectionLabel number="04" />
            <div className="w42-grid">
              <div className="w42-copy">
                <p className="client">KOB · 2014–16</p>
                <h2>
                  Heaven in
                  <br />
                  Hell’s Kitchen.
                </h2>
                <p className="case-deck">
                  With founding partner Phil O’Brien, I created a hyper-local
                  print and digital brand from scratch in New York City – with a
                  team of four.
                </p>
                <ul className="plain-results">
                  <li>
                    <strong>100-page magazine and digital media brand</strong>
                    <span>delivered to market in three months</span>
                  </li>
                  <li>
                    <strong>20,000 print run</strong>
                    <span>hand delivered to local businesses</span>
                  </li>
                  <li>
                    <strong>Legacy-beating</strong>
                    <span>Facebook engagement beat the Village Voice after launch</span>
                  </li>
                </ul>
                <ExternalLink href="https://www.instagram.com/w42st/">
                  See W42ST today
                </ExternalLink>
              </div>
          <figure className="cover-figure">
                <img
                  src="/w42st-cover.webp"
                  alt="Cover of the first issue of W42ST magazine"
                />
                <figcaption style={{ marginTop: '1.5rem', color: '#bac0c5', fontSize: '0.75rem', fontFamily: 'var(--mono)' }}>
                  <div style={{ textTransform: 'none' }}>Issue 01 · November/December 2014</div>
                  <div style={{ marginTop: '0.35rem' }}>
                    <ExternalLink href="https://issuu.com/w42st/docs/w42st_issue1">
                      Read it here
                    </ExternalLink>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="bookazine-grid">
              <div>
                <p className="kicker">Earlier work · 2012–14</p>
                <h3>Built a global publishing division as the initial hire.</h3>
                <div className="inline-stat">
                  <strong>88</strong>
                  <span>bookazine titles produced in 18 months</span>
                </div>
              </div>
              <figure>
                <img
                  src="/bookazines.webp"
                  alt="Selection of bookazines including Great British Railway Posters and Royal Baby"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="case-study ai-case" id="ai-work">
          <div className="section-inner">
            <SectionLabel number="05" />
            <div className="case-heading ai-heading">
              <div>
                <p className="client">AI work · 2025–26</p>
                <h2>GEO, playbooks &amp; technical workarounds.</h2>
              </div>
              <p className="case-deck">
                Researching, building and delivering new AI and GEO strategies – 
                and overturning accepted wisdom about what an AI agent can do.
              </p>
            </div>

            <div className="ai-work-grid">
              <article>
                <span>01</span>
                <h3>Semantic GEO strategy</h3>
                <p>
                  A practical approach to ranking for LLMs, led by schema and
                  semantic signals.
                </p>
                <ExternalLink href="https://signal.simonkirrane.com/">
                  Read Signal/Noise
                </ExternalLink>
              </article>
              <article>
                <span>02</span>
                <h3>Enterprise AI adoption</h3>
                <p>
                  An enterprise guide, reworked into a practical playbook for
                  content marketers.
                </p>
                <ExternalLink href="https://www.simonkirrane.com/blog/how-to-use-ai-for-content-marketing">
                  Read the AI playbook
                </ExternalLink>
              </article>
              <article>
                <span>03</span>
                <h3>The 'impossible' fix</h3>
                <p>
                  A custom prompt solution enabling Rovo to read content inside
                  any Confluence macro – findings now shared with Atlassian.
                </p>
              </article>
            </div>

            <blockquote className="testimonial">
              <div className="quote-mark" aria-hidden="true">
                “
              </div>
              <p>
                Simon’s testing and subsequent findings have laid the foundation
                for the engineering team’s ongoing investigations and have given
                us hope there is a solution… Further highlighting the impact
                Simon has had beyond his day-to-day work.
              </p>
              <footer>
                <strong>Dan Ivory</strong>
                <span>Senior Product Manager, Mosaic</span>
              </footer>
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">Content that connects</p>
          <h2>Strategy with a story.</h2>
        </div>
        <div className="footer-links">
          <a href="#top">Back to top ↑</a>
          <a
            href="https://www.linkedin.com/in/simon-kirrane/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
        <p className="copyright">© 2026 Simon Kirrane</p>
      </footer>
    </>
  )
}
