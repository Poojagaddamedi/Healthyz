import React, { useRef, useState, useEffect } from 'react';

const ScrolingCards = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [showControls1, setShowControls1] = useState({ left: false, right: true });
  const [showControls2, setShowControls2] = useState({ left: false, right: true });

  const cardsData = Array(12).fill({
    title: "Card Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });

  const checkScroll = (ref, setControls) => {
    if (ref && ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      const maxScroll = scrollWidth - clientWidth;

      setControls({
        left: scrollLeft > 0,
        right: scrollLeft < maxScroll
      });
    }
  };

  const scrollCards = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8;
      const delta = direction === 'right' ? scrollAmount : -scrollAmount;

      ref.current.scrollBy({
        left: delta,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    [row1Ref, row2Ref].forEach((ref, i) => {
      checkScroll(ref, i === 0 ? setShowControls1 : setShowControls2);
    });

    const handleResize = () => {
      [row1Ref, row2Ref].forEach((ref, i) => {
        checkScroll(ref, i === 0 ? setShowControls1 : setShowControls2);
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Healthyz™</h1>


      {/* First Row */}
      <div style={rowWrapper}>
        {showControls1.left && (
          <button
            style={{ ...navButtonStyle, left: 0 }}
            onClick={() => scrollCards(row1Ref, 'left')}
          >←</button>
        )}


        <div
          ref={row1Ref}
          style={rowContainerStyle}
          onScroll={() => checkScroll(row1Ref, setShowControls1)}
        >


          <div style={cardsWrapperStyle}>
            {cardsData.slice(0, 6).map((card, index) => (
              <div key={index} style={cardStyle}>
                <h3 style={titleStyle}>{card.title} {index + 1}</h3>
                <p style={contentStyle}>{card.content}</p>
              </div>
            ))}
          </div>



        </div>

        
        {showControls1.right && (
          <button
            style={{ ...navButtonStyle, right: 0 }}
            onClick={() => scrollCards(row1Ref, 'right')}
          >→</button>
        )}
      </div>

    </div>
  );
};

// Styles
const containerStyle = {
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
  overflow: 'hidden',
};

const headerStyle = {
  color: '#2c3e50',
  fontSize: '2.5rem',
  marginBottom: '40px',
};

const rowWrapper = {
  position: 'relative',
  marginBottom: '30px',
};
const rowContainerStyle = {
    overflowX: 'auto',
    overflowY: 'hidden',
    marginBottom: '30px',
    paddingBottom: '10px',
    scrollBehavior: 'smooth',
    display: 'flex',
    scrollbarWidth: 'none',  
    msOverflowStyle: 'none', 
    WebkitOverflowScrolling: 'touch',
  };
  

const cardsWrapperStyle = {
  display: 'flex',
  gap: '20px',
};

const cardStyle = {
  flex: '0 0 calc(33.333% - 20px)',
  background: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  padding: '25px',
  minHeight: '250px',
  transition: 'transform 0.2s',
};

const navButtonStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.9)',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  cursor: 'pointer',
  fontSize: '24px',
  color: '#2c3e50',
  zIndex: 1,
};

const titleStyle = {
  margin: '0 0 15px 0',
  color: '#2c3e50',
  fontSize: '1.4rem',
};

const contentStyle = {
  margin: '0',
  color: '#7f8c8d',
  fontSize: '1rem',
  lineHeight: '1.6',
};

export default ScrolingCards;
