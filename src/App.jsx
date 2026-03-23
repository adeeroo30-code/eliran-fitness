import "./App.css";

const reviews = [
  {
    text: "אחלה סטודיו לאימון, בין הטובים שראיתי והייתי. יחס אישי וחם בין מאמן למתאמן, אימונים כיפיים ומהנים והכי חשוב – מקצועיים ברמה גבוהה.",
    name: "טל לוי",
  },
  {
    text: "מאמן אלוף! יחס אישי למתאמנים ואווירה נעימה וכיפית.",
    name: "מאור פה",
  },
  {
    text: "שיעור ניסיון לשתי הבנים 12 ו-6 והם יצאו מאוד נלהבים.",
    name: "שרון חרוזי",
  },
  {
    text: "מקצוען אמיתי.",
    name: "רויטל כהן",
  },
];

const services = [
  {
    title: "אימונים אישיים",
    text: "תוכנית מדויקת לפי המטרות שלך – ירידה במשקל, חיטוב, כוח, כושר כללי או חזרה לשגרה בריאה.",
  },
  {
    title: "אימונים קבוצתיים",
    text: "אנרגיה גבוהה, אווירה חזקה ומוטיבציה קבוצתית בלי לוותר על יחס אישי והכוונה מקצועית.",
  },
  {
    title: "ליווי אישי אמיתי",
    text: "מעקב צמוד, תמיכה, התאמות לאורך הדרך ומסגרת שבאמת עוזרת להתמיד ולהתקדם.",
  },
];

const benefits = [
  "יחס אישי וחם לכל מתאמן",
  "מקצועיות גבוהה ותשומת לב לפרטים",
  "אווירה טובה, כיפית ומרימה",
  "מתאים למבוגרים, נוער וגם ילדים",
  "שיעור ניסיון למצטרפים חדשים",
  "מקום שגורם לך להתמיד",
];

export default function App() {
  return (
    <div dir="rtl" className="site">
      <header className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <nav className="navbar">
            <div className="brand-wrap">
              <img src="/logo.png" alt="logo" className="logoImg" />
              <div>
                <div className="brand-title">מאור תמיר</div>
                <div className="brand-subtitle">אימוני כושר אישיים וקבוצתיים</div>
              </div>
            </div>

            <a className="nav-cta" href="#contact">
              קביעת אימון ניסיון
            </a>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">סטודיו בוטיק עם יחס אישי אמיתי</div>

              <h1>
                כושר שנראה
                <span> יוקרתי</span>,
                <br />
                מרגיש אישי
                <br />
                ומביא תוצאות
              </h1>

              <p className="hero-text">
                מאור תמיר בונה חוויית אימון אחרת: מקצועית, מדויקת, חמה ומלאת
                אנרגיה. אימונים אישיים וקבוצתיים עם ליווי אמיתי, אווירה מעולה
                ותחושה שאתה במקום שבאמת רואה אותך.
              </p>

              <div className="hero-actions">
                <a className="btn btn-gold" href="#contact">
                  קבעו אימון ניסיון
                </a>
                <a className="btn btn-dark" href="#">
                  href="https://wa.me/9725XXXXXXXX"
                  target="_blank"
                >
                  וואטסאפ
                </a>
              </div>

              <div className="stats">
                <div className="stat-card">
                  <div className="stat-value">5★</div>
                  <div className="stat-label">אהבת לקוחות</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">אישי</div>
                  <div className="stat-label">יחס וליווי</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">כיפי</div>
                  <div className="stat-label">אימון עם אווירה</div>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-shell">
                <div className="panel-top">
                  <div>
                    <div className="panel-small">מותג הכושר</div>
                    <div className="panel-title">מאור תמיר</div>
                  </div>
                  <div className="panel-badge">Premium Fitness</div>
                </div>

                <div className="quote-box">
                  <div className="stars">★★★★★</div>
                  <p>
                    "יחס אישי, אימונים מקצועיים ואווירה כיפית — בדיוק מה שגורם
                    לאנשים להתמיד."
                  </p>
                </div>

                <div className="mini-grid">
                  <div className="mini-card">
                    <div className="mini-label">התמחות</div>
                    <div className="mini-value">אישי + קבוצתי</div>
                  </div>
                  <div className="mini-card">
                    <div className="mini-label">חוויה</div>
                    <div className="mini-value">יוקרתית וחמה</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container split-head">
          <div>
            <div className="section-kicker">למה דווקא כאן</div>
            <h2>
              לא עוד חדר כושר.
              <br />
              <span>מקום שבונים בו שינוי אמיתי.</span>
            </h2>
          </div>

          <p className="section-text">
            מהביקורות ברור בדיוק למה אנשים נשארים: מקצועיות גבוהה, יחס אישי,
            חום אנושי, אווירה כיפית ואימונים שגורמים למתאמנים להרגיש בטוחים,
            חזקים ורצויים — בכל גיל ובכל רמה.
          </p>
        </div>

        <div className="container">
          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div className="benefit-card" key={index}>
                <div className="check">✓</div>
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-kicker">השירותים שלנו</div>
              <h2>האימונים שמותאמים אליך</h2>
            </div>

            <p className="section-text narrow">
              בין אם המטרה שלך היא להתחזק, להתחטב, לרדת במשקל או פשוט להרגיש טוב
              יותר — כאן בונים את הדרך הנכונה עבורך.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon"></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" className="service-link">
                  לפרטים נוספים ←
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container center-head">
          <div className="section-kicker">ביקורות אמיתיות</div>
          <h2>מה המתאמנים אומרים</h2>
          <p className="section-text center-text">
            האתר הזה נבנה סביב מה שאנשים כבר אוהבים אצל מאור תמיר: מקצועיות,
            חום אנושי, יחס אישי ואווירה שגורמת לרצות לחזור.
          </p>
        </div>

        <div className="container">
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="stars">★★★★★</div>
                <p>{review.text}</p>
                <strong>{review.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contact" id="contact">
        <div className="container contact-layout">
          <div className="steps-card">
            <div className="section-kicker">איך זה עובד</div>
            <h2>מתחילים פשוט. מתקדמים נכון.</h2>

            <div className="steps-list">
              <div className="step-item">
                <div className="step-num">1</div>
                <div>משאירים פרטים או שולחים הודעה</div>
              </div>
              <div className="step-item">
                <div className="step-num">2</div>
                <div>מתאמים שיחת היכרות קצרה</div>
              </div>
              <div className="step-item">
                <div className="step-num">3</div>
                <div>מגיעים לאימון ניסיון</div>
              </div>
              <div className="step-item">
                <div className="step-num">4</div>
                <div>בונים מסלול שמתאים בדיוק לכם</div>
              </div>
            </div>
          </div>

          <div className="form-card">
            <div className="section-kicker">צור קשר</div>
            <h2>הגיע הזמן להתחיל</h2>
            <p className="section-text narrow">
              רוצים אימון אישי? מחפשים קבוצה טובה? בואו נדבר ונבדוק מה הכי מתאים
              לכם.
            </p>

            <div className="form-grid">
              <input type="text" placeholder="שם מלא" />
              <input type="text" placeholder="טלפון" />
              <input type="email" placeholder="אימייל" className="full" />
              <textarea
                placeholder="ספרו בקצרה מה המטרה שלכם"
                className="full"
              ></textarea>
            </div>

            <div className="form-actions">
              <button className="btn btn-gold">שלחו פנייה</button>
              <a className="btn btn-dark" href="#">
                התקשרו עכשיו
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
