import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaTimes } from 'react-icons/fa';
import Footer from './Footer';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Food as Medicine: Transforming Your Health Through Clinical Nutrition',
    category: 'Nutrition Science',
    date: 'March 10, 2026',
    author: 'Dr. Gulnaaz Shaikh',
    readTime: '5 min read',
    image: '/HomePage.jpg',
    excerpt: 'Explore how personalized clinical nutrition can address chronic conditions, optimize metabolic health, and rejuvenate bodily vitality naturally without aggressive pharmaceuticals.',
    content: `Clinical nutrition is not merely about counting calories—it is the strategic use of nutrient-dense whole foods to optimize biochemistry and support cellular healing. 

Dr. Gulnaaz Shaikh emphasizes that every meal is an opportunity to nourish organs, stabilize hormones, and strengthen innate immune responses. Through 20+ years of clinical practice, we have seen patients reverse fatty liver markers, normalize lipid profiles, and regain vibrant energy simply by adjusting macronutrient ratios and eliminating dietary triggers.`
  },
  {
    id: 2,
    title: 'Managing PCOS & Hormonal Harmony with Natural Diets',
    category: 'Women Health',
    date: 'February 24, 2026',
    author: 'Dr. Gulnaaz Shaikh',
    readTime: '6 min read',
    image: '/aboutUs.png',
    excerpt: 'Polycystic Ovary Syndrome (PCOS) affects millions. Discover evidence-backed anti-inflammatory dietary strategies that balance insulin and regulate menstrual cycles.',
    content: `PCOS is fundamentally rooted in insulin resistance and low-grade systemic inflammation. Standard advice often insists on extreme deprivation, which only elevates cortisol and aggravates hormonal imbalance.

Our specialized nutrition protocol focuses on complex low-glycemic carbohydrates, balanced omega-3 fats, and optimal protein distribution to stabilize glucose spikes, reduce androgen excess, and promote natural ovulatory cycles.`
  },
  {
    id: 3,
    title: 'The Science Behind Sustainable Weight Management vs. Crash Diets',
    category: 'Weight Management',
    date: 'February 12, 2026',
    author: 'Dr. Gulnaaz Shaikh',
    readTime: '4 min read',
    image: '/ThirdDivOne.jpg',
    excerpt: 'Why do 95% of crash diets fail? Learn how metabolic adaptation works and why consistent, enjoyable nutritional habits lead to permanent fat loss.',
    content: `Crash diets trigger a survival mechanism known as adaptive thermogenesis, drastically slowing down your basal metabolic rate and spiking hunger hormones like ghrelin.

At Healthyz, our philosophy centers on 80% nourishing diet and 20% lifestyle balance—ensuring satiety, preserving lean muscle mass, and building lifelong eating habits that fit your culture and daily routine.`
  },
  {
    id: 4,
    title: 'Heart-Healthy Living: Dietary Strategies for Cholesterol & Blood Pressure',
    category: 'Cardiology',
    date: 'January 28, 2026',
    author: 'Dr. Gulnaaz Shaikh',
    readTime: '5 min read',
    image: '/orange1.png',
    excerpt: 'Simple yet powerful dietary interventions that lower LDL cholesterol, improve arterial elasticity, and support cardiovascular longevity.',
    content: `Cardiovascular wellness requires targeted nutritional care. Incorporating soluble fibers, phytosterols, heart-protective fats, and dietary nitrates promotes nitric oxide production and maintains healthy endothelial function.

Tailored medical nutrition therapy provides individuals with clear, realistic meal plans that safeguard cardiovascular health without sacrificing culinary enjoyment.`
  },
  {
    id: 5,
    title: 'Gut Health & Microbiome: The Anchor of Immune Resilience',
    category: 'Gut Health',
    date: 'January 15, 2026',
    author: 'Dr. Gulnaaz Shaikh',
    readTime: '6 min read',
    image: '/starwberry1.png',
    excerpt: 'Over 70% of your immune system resides in your gut. Discover how fiber variety and functional foods relieve bloating, IBS, and digestive distress.',
    content: `The gut microbiome plays a vital role in nutrient absorption, serotonin synthesis, and systemic immunity. Conditions like IBS, acid reflux, and chronic bloating often stem from dysbiosis and food sensitivities.

Through customized elimination protocols and gentle reintroduction of prebiotic fibers, we help restore a resilient gut lining and optimal digestive comfort.`
  },
  {
    id: 6,
    title: 'Pregnancy & Lactation: Essential Nutritional Milestones for Mother & Baby',
    category: 'Maternal Nutrition',
    date: 'January 05, 2026',
    author: 'Dr. Gulnaaz Shaikh',
    readTime: '5 min read',
    image: '/DSC_0052.JPG.jpeg',
    imagePosition: 'center 15%',
    excerpt: 'From prenatal conception preparation to postpartum recovery and lactation, ensure your body receives essential micronutrients every step of the way.',
    content: `A mother's nutritional status directly impacts fetal organogenesis, brain development, and postpartum recovery. Adequate folate, choline, iron, and iodine are paramount.

Dr. Gulnaaz Shaikh guides expectant and nursing mothers with wholesome, culturally relevant meal plans that support steady gestational weight, prevent gestational diabetes, and enhance milk composition.`
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePost, setActivePost] = useState(null);

  const categories = ['All', 'Nutrition Science', 'Women Health', 'Weight Management', 'Cardiology', 'Gut Health', 'Maternal Nutrition'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <div className="blog-hero">
        <h1>Healthyz Blog & Insights</h1>
        <p>Evidence-based clinical nutrition articles, dietary guides, and healthy lifestyle wisdom by Dr. Gulnaaz Shaikh.</p>
      </div>

      <div className="blog-container">
        {/* Category Filters */}
        <div className="blog-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <img
                src={post.image}
                alt={post.title}
                className="blog-card-img"
                style={post.imagePosition ? { objectPosition: post.imagePosition } : {}}
              />
              <div className="blog-card-content">
                <span className="blog-badge">{post.category}</span>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span><FaClock style={{ marginRight: '4px' }} />{post.readTime}</span>
                  <button
                    onClick={() => setActivePost(post)}
                    className="blog-read-more-btn"
                  >
                    Read Article <FaArrowRight />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activePost && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setActivePost(null)}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                maxWidth: '750px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '2.5rem',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePost(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <FaTimes />
              </button>
              <span className="blog-badge">{activePost.category}</span>
              <h2 style={{ color: '#014438', fontSize: '2rem', fontWeight: '700', margin: '0.8rem 0 1rem 0' }}>
                {activePost.title}
              </h2>
              <div style={{ display: 'flex', gap: '16px', color: '#718096', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <span><FaUser style={{ marginRight: '5px' }} />{activePost.author}</span>
                <span><FaCalendarAlt style={{ marginRight: '5px' }} />{activePost.date}</span>
                <span><FaClock style={{ marginRight: '5px' }} />{activePost.readTime}</span>
              </div>
              <div style={{ color: '#2d3748', fontSize: '1.05rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                {activePost.content}
              </div>
              <div style={{ marginTop: '2.5rem', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                <p style={{ color: '#4a5568', marginBottom: '1rem', fontWeight: '500' }}>
                  Need a customized clinical diet plan tailored to your medical history?
                </p>
                <Link
                  to="/contact#appointment-form"
                  onClick={() => setActivePost(null)}
                  style={{
                    backgroundColor: '#014438',
                    color: '#ffffff',
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Consult with Dr. Gulnaaz Shaikh
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Blog;
