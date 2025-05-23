import React, { useState } from "react";
import "./ServicesDiv.css";
import fruit1 from '../assets/orange1.png';
import fruit2 from '../assets/starwberry1.png';

const ServicesDiv = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const columns = 8;

  const services = [
    { title: "Weight Management", description: "Reach your perfect weight with a tailored, long-term solution. Our individualized diet plans help you lose or gain weight successfully without sacrificing nutrition. We emphasize metabolism, portion control, and balanced meals that suit your lifestyle. Goodbye to crash diets and hello to lasting health. With professional guidance, achieve your weight targets safely and confidently", image: fruit1 },
    { title: "Heart Disease Nutrition", description: "A heart-healthy diet is central to cardiovascular health. We craft nutrition plans that lower cholesterol, control blood pressure, and optimize overall heart function. Our plan focuses on heart-healthy foods, omega-3 meals, and low sodium. For prevention or management, our expert support guarantees a strong, healthy heart. Take control of your heart health with satisfying, healthy meals.", image: fruit1 },
    { title: "Gastrointestinal Health", description: "Enhance digestion and gut health through tailored nutrition plans. Our strategy addresses problems such as IBS, Crohn's disease, acid reflux, and constipation. We use gut-friendly foods, probiotics, and fiber meals to promote digestive health. Through trigger identification and optimal nutrition, we enable you to eat meals without discomfort. Fortify your gut and enhance overall health through expert dietary plans", image: fruit1 },
    { title: "Cancer Nutrition", description: "Care for and build your body through and after cancer treatment. Our expert meal plans target enhanced immunity, minimized treatment side effects, and recovery support. We highlight nutrient-rich foods, hydration, and energy meals. Post-chemotherapy or post-treatment, we provide individualized support. Build strength and vitality with integrative cancer nutrition approaches", image: fruit1 },
    { title: "Arthritis & Joint Health", description: "Decrease inflammation and maintain joint health with directed nutrition. Our meal plans are centered on anti-inflammatory foods, necessary nutrients, and weight management to alleviate joint pain. We help you make food choices that enhance mobility and minimize discomfort. Whether osteoarthritis, rheumatoid arthritis, or gout is being managed, we offer successful nutritional solutions. Maintain strong, flexible joints with professional guidance.", image: fruit1 },
    { title: "Eating Disorders & Recovery", description: "Restore a healthy relationship with food through empathetic nutritional care. Our treatment is centered on healing gradually, eating consciously, and restoring nutritional balance. From anorexia to bulimia to binge eating, we provide a supportive and safe meal plan. We help you toward body acceptance and sustenance with professional counseling. Start your journey to a healthier, more balanced life", image: fruit1 },
    { title: "General Nutrition & Wellness", description: "Maintain health with healthy, daily nutrition plans. We offer dietary counseling for energy sustenance, enhancing immunity, and avoiding deficiencies. Our meal plans emphasize whole foods, necessary nutrients, and healthy habits. For a lifestyle modification or daily wellness advice, we guide you through it. Get a healthier, more satisfying life with expert-validated nutrition", image: fruit1 },
    { title: "Pre & Post-Menopausal Nutrition", description: "Sustain your body during hormonal shifts with nutritious diet. Our programs support controlling menopause symptoms such as weight gain, mood swings, and bone health. We use foods rich in nutrients that facilitate transition and maintain well-being. Our advice, pre- or post-menopausal, provides for a smooth and healthy experience. Enter this phase of life with strength and vitality.", image: fruit1 },
    { title: "Arthritis & Joint Health", description: "Decrease inflammation and maintain joint health with directed nutrition. Our meal plans are centered on anti-inflammatory foods, necessary nutrients, and weight management to alleviate joint pain. We help you make food choices that enhance mobility and minimize discomfort. Whether osteoarthritis, rheumatoid arthritis, or gout is being managed, we offer successful nutritional solutions. Maintain strong, flexible joints with professional guidance.", image: fruit1 },
    
    { title: "Diabetes Care", description: "Manage diabetes in a systematic, nutrition-rich way. Our programs rely on balancing blood glucose levels with tasty, healthy food choices. We prevent complications with the proper combination of carbohydrates, protein, and healthy fats. No matter if you have Type 1, Type 2, or gestational diabetes, our tailored solutions keep you well. Gain power through knowledge and mastery under professional guidance", image: fruit2 },
    { title: "Kidney Disease Management", description: "Support your kidneys with a medical diet that suits your requirements. Our programs regulate the intake of sodium, potassium, and protein for improved kidney health. We give you simple-to-use dietary plans that alleviate your kidneys' workload without depriving you of balanced nutrition. If you have chronic kidney disease or are on dialysis, we can help. Get relief and better well-being through the appropriate dietary regimen", image: fruit2 },
    { title: "Liver Disease Nutrition", description: "Maximize liver wellness with a meal plan tailored to detoxification and healing. We offer specific nutritional solutions for the management of fatty liver, cirrhosis, and hepatitis. Our plans are focused on foods that are favorable to the liver, hydration, and minimizing exposure to toxins. We assist you in making conscious decisions that benefit the liver function and healing. Restore energy and improve your liver wellness with nutrient-balanced diets.", image: fruit2 },
    { title: "Thyroid & PCOD Management", description: "Balance hormones naturally through diet designed for thyroid wellness and PCOD. Our programs regulate metabolism, stabilize weight swings, and alleviate symptoms such as fatigue and irregular periods. We emphasize nutrient-rich, anti-inflammatory foods supporting hormonal balance. Enhance energy and overall wellness through tailored nutritional support. Have food be your partner in creating hormonal harmony.", image: fruit2 },
    { title: "Cholesterol & Heart Health", description: "Reduce cholesterol naturally with a heart-healthy diet. Our personalized plans keep you at optimal lipid levels, decrease heart disease risk, and enhance cardiovascular health. We emphasize fiber-rich foods, healthy fats, and balanced meals that promote overall well-being. Savor great-tasting, heart-healthy meals while keeping your cholesterol under control. Use nutrition as your key to a healthier heart.", image: fruit2 },
    { title: "Sports Nutrition", description: "Enhance your sporting performance with a meal plan tailored to your sport. As a professional sports person or a health enthusiast, our meal plans increase endurance, strength, and recovery. We concentrate on pre- and post-workout meals, hydration techniques, and energy foods. Maximize your fitness objectives with professional dietary advice. Power your body for optimum performance and quick recovery", image: fruit2 },
    { title: "Pregnancy & Lactation Nutrition", description: "Ensure a safe pregnancy and postnatal recovery through expert nutrition diets. Our diets during pregnancy target fetal development, craving management, and prevention of deficiencies. We create lactation-friendly meal plans for new mothers to increase milk supply and recovery after giving birth. We guarantee mother and baby receive all necessary nutrients for a healthy state. Have a worry-free, health-promoting path to motherhood.", image: fruit2 },
    { title: "Thyroid & PCOD Management", description: "Balance hormones naturally through diet designed for thyroid wellness and PCOD. Our programs regulate metabolism, stabilize weight swings, and alleviate symptoms such as fatigue and irregular periods. We emphasize nutrient-rich, anti-inflammatory foods supporting hormonal balance. Enhance energy and overall wellness through tailored nutritional support. Have food be your partner in creating hormonal harmony.", image: fruit2 },
  ];

  const getCardClass = (index) => {
    if (hoveredCard === null) return '';
    const hoveredRow = Math.floor(hoveredCard / columns);
    const currentRow = Math.floor(index / columns);

    if (index === hoveredCard) {
      return hoveredRow === 0 ? 'enlarged hover-active' : 'expand-up hover-active';
    }

    if (hoveredRow === 0 && currentRow === 1 && (index % columns) === (hoveredCard % columns)) {
      return 'pushed-down';
    }

    if (hoveredRow === 1 && currentRow === 0 && (index % columns) === (hoveredCard % columns)) {
      return 'compressed';
    }

    return '';
  };

  return (
    <div className="services-scroll-wrapper">
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${getCardClass(index)}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: `${(index % columns) + 1}`,
              gridRow: `${Math.floor(index / columns) + 1}`,
            }}
          >
            <div className="card-content">
              <div className="text-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <img src={service.image} alt={service.title} />
            </div>
            {hoveredCard === index && (
              <div className="card-details">
                <button className="schedule-button">Schedule Call</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDiv;




