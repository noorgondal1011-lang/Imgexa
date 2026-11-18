
"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    tag: "Free Online Image Tools",
    title: "Convert PNG to JPG Online in One Click",
    description:
      "Convert PNG to JPG online free, with sharp quality and smaller files. No signup, no watermark.",
    button: "Convert Now",
  },
  {
    tag: "Image Compressor",
    title: "Compress Image Without Losing Quality",
    description:
      "Our free image compressor online cuts file size up to 90 percent while keeping every detail crisp.",
    button: "Compress Image",
  },
  {
    tag: "Background Remover",
    title: "Remove Background from Image Online",
    description:
      "Get a clean transparent cutout in seconds with our free background remover, without signup.",
    button: "Remove Background",
  },
];

const tools = [
  ["⇄", "Convert PNG to JPG", "Convert PNG to JPG online with adjustable quality. Perfect for smaller, faster pages."],
  ["⇩", "Image Compressor", "Compress image without losing quality. Reduce JPG, PNG and WebP size instantly."],
  ["↗", "Image Resizer", "Change image dimensions online by pixels or percentage while keeping the ratio."],
  ["♙", "Background Remover", "Remove background from image online and download a transparent PNG."],
  ["⇄", "JPG to PNG", "Convert JPG to PNG online free and keep transparency ready for design work."],
  ["◎", "Convert to WebP", "Convert images to WebP online for faster websites and better SEO scores."],
];

const features = [
  ["▧", "Batch Editing", "Process many images together with one set of settings."],
  ["▣", "Before and After", "Compare quality side by side before you download."],
  ["ϟ", "Lightning Fast", "Optimised processing gives results in just seconds."],
  ["♧", "Private and Free", "No signup, no watermark. Your files stay safe."],
];

const sizes = [
  ["Instagram Post", "1080 x 1080 px", "1:1", "square"],
  ["Instagram Story", "1080 x 1920 px", "9:16", "story"],
  ["YouTube Thumbnail", "1280 x 720 px", "16:9", "youtube"],
  ["Facebook Cover", "820 x 312 px", "41:15", "facebook"],
  ["LinkedIn Banner", "1584 x 396 px", "4:1", "linkedin"],
];

const searches = [
  "Convert PNG to JPG Online",
  "Compress Image Without Losing Quality",
  "Free Image Compressor Online",
  "Resize Image Without Losing Quality",
  "Remove Background from Image Online",
  "Convert JPG to PNG Online Free",
  "Resize Images for Instagram",
  "Bulk Image Resizer Online",
  "Compress Multiple Images at Once",
  "Change Image Dimensions Online",
  "Free Background Remover Without Signup",
  "Convert Images to WebP Online",
];

const faqs = [
  ["How do I convert PNG to JPG online?", "Upload your PNG file, choose JPG as the output, set the quality and click convert. Your JPG is ready to download in seconds."],
  ["Is Imgexa really free?", "Yes. All core tools are free to use with no signup and no watermark."],
  ["Will compression reduce my image quality?", "Our smart compression keeps visible quality almost identical while reducing file size heavily. Use the before and after preview to check."],
  ["Can I edit many images at once?", "Yes. You can compress, resize or convert multiple images together and download them as a ZIP."],
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [compare, setCompare] = useState(50);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(
      ".seo-reveal, .tool-reveal"
    );
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) =>
        item.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* NAVBAR */}
      <header className="site-header">
        <div className="header-wave" />
        <div className="container navbar">
          <a href="#" className="brand">
            <span className="brand-mark">
              <span className="brand-pill" />
              <i className="dot dot-one" />
              <i className="dot dot-two" />
              <i className="dot dot-three" />
              <i className="dot dot-four" />
            </span>
            <span className="brand-name">img<em>exa</em></span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a className="active" href="#">Home <span>⌄</span></a>
            <a href="#about">About</a>
            <div className="nav-dropdown">
              <a href="#tools">Image Tools <span>⌄</span></a>
              <div className="dropdown-menu">
                <a href="#tools">⇄　PNG to JPG</a>
                <a href="#tools">⇄　JPG to PNG</a>
                <a href="#tools">⇩　Image Compressor</a>
                <a href="#tools">↗　Image Resizer</a>
                <a href="#tools">♙　Background Remover</a>
              </div>
            </div>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <button className="search-button" aria-label="Search">⌕</button>
            <a href="#tools" className="start-button">Start Free</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-slide" key={activeSlide}>
              <span className="hero-tag">{slides[activeSlide].tag}</span>
              <h1>{slides[activeSlide].title}</h1>
              <p>{slides[activeSlide].description}</p>
              <a href="#tools" className="hero-button">
                {slides[activeSlide].button} <span>→</span>
              </a>
            </div>

            <div className="slider-dots">
              {slides.map((slide, index) => (
                <button
                  key={slide.tag}
                  aria-label={`Show slide ${index + 1}`}
                  className={activeSlide === index ? "selected" : ""}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>

            <div className="hero-stats">
              <div><strong>2M+</strong><span>Images processed</span></div>
              <div><strong>10+</strong><span>Free tools</span></div>
              <div><strong>0</strong><span>Signup needed</span></div>
            </div>
          </div>

          <div className="comparison-card">
            <div className="comparison-bar">
              <span>Before: 4.2 MB</span>
              <span>After: 380 KB</span>
            </div>
            <div className="comparison-stage">
              <div className="comparison-photo" />
              <div
                className="comparison-before"
                style={{ clipPath: `inset(0 ${100 - compare}% 0 0)` }}
              />
              <span className="photo-label before-label">Before</span>
              <span className="photo-label after-label">After</span>
              <div className="comparison-line" style={{ left: `${compare}%` }} />
              <input
                aria-label="Compare before and after image"
                type="range"
                min="0"
                max="100"
                value={compare}
                onChange={(event) => setCompare(Number(event.target.value))}
              />
            </div>
          </div>
        </div>
      </section>



      {/* TOOLS */}
      <section className="section" id="tools">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Our Tools</span>
            <h2>Everything You Need to Edit Images Online</h2>
            <p>Fast, free and private. Pick a tool and get results in seconds.</p>
          </div>

          <div className="tools-grid">
            {tools.map(([icon, title, description], index) => (
              <article
                className={`tool-card tool-reveal ${index % 2 === 0 ? "from-left" : "from-right"
                  } ${index === 0 ? "featured" : ""}`}
                key={title}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="tool-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#tools">Try tool <span>→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* BULK EDITING */}
      <section className="section section-light" id="about">
        <div className="container bulk-grid">
          <div className="bulk-preview">
            <div className="preview-dots"><i /><i /><i /></div>
            {["photo-01.png", "banner.png", "product.png"].map((file, index) => (
              <div className="preview-file" key={file}>
                <div className={`preview-thumb thumb-${index + 1}`} />
                <div className="preview-file-info">
                  <strong>{file}</strong>
                  <small>{["4.2 MB to 380 KB", "2.8 MB to 240 KB", "3.1 MB to 290 KB"][index]}</small>
                  <div className="progress-track"><span /></div>
                </div>
              </div>
            ))}
            <div className="preview-play">▶</div>
          </div>

          <div className="bulk-copy">
            <span className="section-tag">Bulk Image Resizer Online</span>
            <h2>Compress Multiple Images at Once</h2>
            <p>Edit dozens of files together and save hours of work. See every result with a before and after preview.</p>
            <ol className="steps-list">
              <li><div><strong>Upload your images</strong><span>Drag and drop many JPG, PNG or WebP files.</span></div></li>
              <li><div><strong>Choose a tool</strong><span>Compress, resize, convert or remove background.</span></div></li>
              <li><div><strong>Download instantly</strong><span>Compare before and after, then save all in one ZIP.</span></div></li>
            </ol>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <div className="tools-grid feature-grid">
        {features.map(([icon, title, description], index) => (
          <article
            className={`tool-card tool-reveal ${index % 2 === 0 ? "from-left" : "from-right"
              }`}
            key={title}
          >
            <div className="tool-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>


      {/* SOCIAL MEDIA SIZES */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Social Media Ready</span>
            <h2>Resize Images for Instagram and More</h2>
            <p>Use ready-made sizes so every post fits perfectly.</p>
          </div>
          <div className="sizes-grid">
            {sizes.map(([name, dimensions, ratio, style]) => (
              <article className="size-card" key={name}>
                <div className="size-preview">
                  <div className={`size-shape ${style}`} />
                </div>
                <strong>{name}</strong>
                <span>{dimensions}</span>
                <small>Ratio {ratio}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR SEARCHES */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Popular Searches</span>
            <h2>What Can You Do with Imgexa?</h2>
          </div>
          <div className="popular-tags">
            {searches.map((item) => <a href="#tools" key={item}>{item}</a>)}
          </div>
        </div>
      </section>




      {/* SEO CONTENT SECTION */}
      <section className="section seo-section" id="seo-content">
        <div className="container">
          <div className="section-heading seo-reveal pop-in">
            <span className="section-tag">Explore Imgexa</span>
            <h2>Free Online Image Tools to Compress, Resize and Convert Images</h2>
            <p>
              Imgexa brings essential image editing tools together in one simple
              platform. Compress, resize, convert and prepare your images for
              websites, social media, online stores and creative projects.
            </p>
          </div>

          <div className="seo-content-grid">
            {/* Card 1 - Left Slide */}
            <article className="seo-content-card seo-reveal from-left">
              <h3>Online Image Compressor</h3>
              <p>
                Need to compress image without losing quality online? Imgexa helps
                you reduce image file size without losing quality. Use a free image
                compressor online without signup to compress JPG images online for
                free and compress PNG images without losing transparency. You can
                also compress multiple images online at once, reduce photo size for
                website upload and use an online image size reducer for JPG and PNG
                files.
              </p>
            </article>

            {/* Card 2 - Right Slide */}
            <article className="seo-content-card seo-reveal from-right">
              <h3>Resize Images to Custom Dimensions</h3>
              <p>
                Resize image without losing quality online with an easy-to-use
                image resizer. Use a free online photo resizer for JPG and PNG,
                resize image to specific pixels, or change image width and height
                online free. Imgexa is designed for bulk image resizer online
                workflows, resizing pictures to custom dimensions online, resizing
                photos for website upload and changing image dimensions without
                losing quality.
              </p>
            </article>

            {/* Card 3 - Left Slide */}
            <article className="seo-content-card seo-reveal from-left">
              <h3>PNG to JPG Image Converter</h3>
              <p>
                Convert PNG to JPG online free with a simple image conversion
                process. Use a PNG to JPG converter without signup to convert
                multiple PNG files to JPG online or change PNG image to JPG format
                online. You can also convert PNG to JPG without losing quality by
                choosing suitable output settings.
              </p>
            </article>

            {/* Card 4 - Right Slide */}
            <article className="seo-content-card seo-reveal from-right">
              <h3>JPG to PNG Image Converter</h3>
              <p>
                Convert JPG to PNG online free whenever you need a different image
                format. This free JPG to PNG converter without signup lets you
                convert multiple JPG images to PNG online, change JPEG image to PNG
                format online and convert JPG photos to PNG format online.
              </p>
            </article>

            {/* Card 5 - Left Slide */}
            <article className="seo-content-card seo-reveal from-left">
              <h3>Free Online Background Remover</h3>
              <p>
                Remove background from image online free and create images with
                transparent backgrounds. Imgexa's background removal feature is
                designed for people looking for a free background remover without
                signup, a way to make image background transparent online, or a
                solution to remove white background from product photos. Prepare
                JPG and PNG images, use a transparent background maker free online
                and remove photo backgrounds without Photoshop.
              </p>
            </article>

            {/* Card 6 - Right Slide */}
            <article className="seo-content-card seo-reveal from-right">
              <h3>Convert Images to WebP</h3>
              <p>
                Convert PNG to WebP online free or convert JPG to WebP online
                without signup. WebP conversion can help prepare images for modern
                websites. Use an image converter to convert images to WebP without
                losing quality, access a free online WebP image converter and
                convert multiple images to WebP online.
              </p>
            </article>

            {/* Card 7 - Left Slide */}
            <article className="seo-content-card seo-reveal from-left">
              <h3>Social Media Image Resizer and Bulk Editing</h3>
              <p>
                Prepare images for your social media profiles with Imgexa. Resize
                image for Instagram post online free, use an Instagram story image
                resizer 1080x1920, resize image for Facebook cover online, create a
                resize-ready YouTube thumbnail 1280x720 and resize LinkedIn banner
                images. You can also use bulk editing workflows to compress
                multiple images at once online and resize images for social media
                platforms.
              </p>
            </article>
          </div>

          {/* SEO Closing - Popup */}
          <div className="seo-closing seo-reveal pop-in">
            <h3>One Place for Your Everyday Image Editing Needs</h3>
            <p>
              From image compression and custom resizing to format conversion,
              background removal and social media image preparation, Imgexa makes
              everyday image tasks easier. Explore the available tools and choose
              the one that matches your project.
            </p>
            <a href="#tools" className="hero-button">
              Explore Image Tools
            </a>
          </div>
        </div>
      </section>




      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container cta-section">
        <h2>Ready to Convert PNG to JPG Online?</h2>
        <p>Join thousands of creators who use Imgexa every day. It is free and takes seconds.</p>
        <a href="#tools" className="hero-button">Get Started Free</a>
      </section>

      {/* FOOTER */}
      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-about">
            <a href="#" className="brand footer-brand">
              <span className="brand-mark">
                <span className="brand-pill" />
                <i className="dot dot-one" />
                <i className="dot dot-two" />
                <i className="dot dot-three" />
                <i className="dot dot-four" />
              </span>
              <span className="brand-name">img<em>exa</em></span>
            </a>
            <p>Free online image tools to compress, resize, convert and edit images in seconds. Built for creators, businesses and everyone who works with images.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/imgexa_offical" aria-label="Instagram">◎</a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#">Home</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Conditions</a>
          </div>

          <div>
            <h3>Tools</h3>
            <a href="#tools">Convert PNG to JPG</a>
            <a href="#tools">Image Compressor</a>
            <a href="#tools">Image Resizer</a>
            <a href="#tools">Background Remover</a>
            <a href="#tools">JPG to PNG</a>
          </div>

          <div>
            <h3>Contact Info</h3>
            <p className="contact-line">✉　imgexa8@gmail.com</p>
            <p className="contact-line">◎　Instagram: imgexa_offical</p>
            <p className="contact-line">f　 Facebook: Imgexa Offical</p>
            <p className="contact-line">in　 LinkedIn: Imgexa_offical</p>
            <form className="subscribe-form" onSubmit={(event) => event.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Your email" />
              <button type="submit" aria-label="Subscribe">→</button>
            </form>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 Imgexa. All rights reserved.</div>
      </footer>

      <a href="#" className="back-to-top" aria-label="Back to top">↑</a>
    </main>
  );
}
