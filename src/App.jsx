import "./App.css";

export default function App() {
  const services = [
    {
      title: "1 on 1 Coaching",
      text: "Private training sessions built around fat loss, muscle building, and real long-term progress.",
    },
    {
      title: "Small Group Training",
      text: "High-energy workouts with personal attention, structure, and a motivating atmosphere.",
    },
    {
      title: "Nutrition Support",
      text: "Simple guidance that helps clients stay consistent and get visible results outside training too.",
    },
  ];

  const transformations = [
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627220404003-1920w-1920w.jpg",
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627984321849-1920w.jpg",
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/000-a13b518c-1920w.jpg",
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/KPBH%2BTJRH%2B-1920w.jpg",
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627984315763-1920w.jpg",
    "https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/FB_IMG_1627984325610-1920w.jpg",
  ];

  const pricing = [
    { name: "Single Personal Session", price: "₪150" },
    { name: "8 Personal Sessions", price: "₪1,050" },
    { name: "12 Personal Sessions", price: "₪1,500" },
    { name: "Single Partner Session", price: "₪200" },
    { name: "8 Partner Sessions", price: "₪1,400" },
    { name: "12 Partner Sessions", price: "₪2,000" },
  ];

  const reviews = [
    {
      name: "Client Feedback",
      text: "Professional training, great energy, and real progress you can actually feel and see.",
    },
    {
      name: "Studio Experience",
      text: "The atmosphere is motivating, personal, and much more serious than a regular gym environment.",
    },
    {
      name: "Results Focused",
      text: "Training and nutrition together make the whole process feel organized and built for real change.",
    },
  ];

  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">
          <span className="logo-mark">EN</span>
          <div>
            <h3>Eliran Nisanov</h3>
            <p>Fitness Studio</p>
          </div>
        </div>

        <nav>
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-btn"
          href="https://wa.me/972525177007"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-left">
          <span className="tag">Premium Personal Training • Kiryat Haim</span>
          <h1>
            Build a stronger body
            <br />
            with a coach who
            <br />
            gets real results
          </h1>
          <p>
            Personal coaching, small group training, and nutrition support in a
            premium studio environment designed for visible progress.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://wa.me/972525177007"
              target="_blank"
              rel="noreferrer"
            >
              Book a Trial
            </a>
            <a className="btn btn-secondary" href="#results">
              View Results
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h2>1:1</h2>
              <p>Personal Attention</p>
            </div>
            <div className="stat-card">
              <h2>45-60</h2>
              <p>Minute Sessions</p>
            </div>
            <div className="stat-card">
              <h2>Real</h2>
              <p>Transformations</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-card main-image">
            <img
              src="https://lirp.cdn-website.com/5b1df88a/dms3rep/multi/opt/KPBH%2BTJRH%2B-1920w.jpg"
              alt="Transformation"
            />
          </div>

          <div className="floating-card">
            <span>Body shaping</span>
            <strong>Fat loss • Strength • Confidence</strong>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <span>Services</span>
          <h2>Everything built around results</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-number">0{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="results">
        <div className="section-heading">
          <span>Transformations</span>
          <h2>Real people. Real progress.</h2>
        </div>

        <div className="results-grid">
          {transformations.map((img, index) => (
            <div className="result-card" key={index}>
              <img src={img} alt={`Transformation ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="section-heading">
          <span>Testimonials</span>
          <h2>Why clients stay consistent</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="stars">★★★★★</div>
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="pricing">
        <div className="section-heading">
          <span>Pricing</span>
          <h2>Simple offers, clear structure</h2>
        </div>

        <div className="pricing-box">
          {pricing.map((item, index) => (
            <div className="price-row" key={index}>
              <span>{item.name}</span>
              <strong>{item.price}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-left">
          <span>Contact</span>
          <h2>Start your transformation</h2>
          <p>
            Ready to train with Eliran? Reach out directly and book your first
            session.
          </p>

          <div className="contact-info">
            <p>
              <strong>Phone:</strong> 052-5177007
            </p>
            <p>
              <strong>Email:</strong> Eliran525@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Ben Zvi 60, Kiryat Haim
            </p>
          </div>

          <a
            className="btn btn-primary"
            href="https://wa.me/972525177007"
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>

        <div className="contact-form-box">
          <h3>Book a trial session</h3>
          <form className="contact-form">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Phone number" />
            <input type="email" placeholder="Email address" />
            <textarea placeholder="What is your goal?" rows="5"></textarea>
            <button type="submit" className="btn btn-primary">
              Send Details
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
