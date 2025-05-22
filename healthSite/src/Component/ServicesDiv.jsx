"use client"

import { useState, useRef, useEffect } from "react"
import "./ServicesDiv.css"

const NutritionServices = () => {
  const [selectedColumn, setSelectedColumn] = useState(null)
  const [selectedPosition, setSelectedPosition] = useState(null)
  const topRowRef = useRef(null)
  const bottomRowRef = useRef(null)

  useEffect(() => {
    const handleTopRowScroll = () => {
      if (bottomRowRef.current) {
        bottomRowRef.current.scrollLeft = topRowRef.current.scrollLeft
      }
    }

    const handleBottomRowScroll = () => {
      if (topRowRef.current) {
        topRowRef.current.scrollLeft = bottomRowRef.current.scrollLeft
      }
    }

    const topRowElement = topRowRef.current
    const bottomRowElement = bottomRowRef.current

    if (topRowElement) {
      topRowElement.addEventListener("scroll", handleTopRowScroll)
    }

    if (bottomRowElement) {
      bottomRowElement.addEventListener("scroll", handleBottomRowScroll)
    }

    return () => {
      if (topRowElement) {
        topRowElement.removeEventListener("scroll", handleTopRowScroll)
      }
      if (bottomRowElement) {
        bottomRowElement.removeEventListener("scroll", handleBottomRowScroll)
      }
    }
  }, [])

  const nutritionServices = [
    {
      id: 1,
      topCard: {
        title: "Weight Management",
        shortDesc:
          "Reach your perfect weight with a tailored, long-term solution. Our individualized diet plans help you lose or gain weight......",
        fullDesc:
          "Reach your perfect weight with a tailored, long-term solution. Our individualized diet plans help you lose or gain weight successfully without sacrificing nutrition. We emphasize metabolism, portion control, and balanced meals that suit your lifestyle. Goodbye to crash diets and hello to lasting health. With professional guidance, achieve your weight targets safely and confidently.",
        image: "/watermalon.jpg",
        bgColor: "#4ac6d6",
      },
      bottomCard: {
        title: "Diabetes Care",
        shortDesc:
          "Manage diabetes in a systematic, nutrition-rich way. Our programs rely on balancing blood glucose levels with tasty, healthy food choices.....",
        fullDesc:
          "Manage diabetes in a systematic, nutrition-rich way. Our programs rely on balancing blood glucose levels with tasty, healthy food choices. We prevent complications with the proper combination of carbohydrates, protein, and healthy fats. No matter if you have Type 1, Type 2, or gestational diabetes, our tailored solutions keep you well. Gain power through knowledge and mastery under professional guidance.",
        image: "/strawberry.jpg",
        bgColor: "#f48fb1",
      },
    },
    {
      id: 2,
      topCard: {
        title: "Heart Disease Nutrition",
        shortDesc:
          "A heart-healthy diet is central to cardiovascular health. We craft nutrition plans that lower cholesterol, control blood pressure,......",
        fullDesc:
          "A heart-healthy diet is central to cardiovascular health. We craft nutrition plans that lower cholesterol, control blood pressure, and optimize overall heart function. Our plan focuses on heart-healthy foods, omega-3 meals, and low sodium. For prevention or management, our expert support guarantees a strong, healthy heart. Take control of your heart health with satisfying, healthy meals.",
          image: "/watermelon.png",
        bgColor: "#4ac6d6",
      },
      bottomCard: {
        title: "Kidney Disease Management",
        shortDesc:
          "Support your kidneys with a medical diet that suits your requirements. Our programs regulate the intake of sodium, potassium,.....",
        fullDesc:
          "Support your kidneys with a medical diet that suits your requirements. Our programs regulate the intake of sodium, potassium, and protein for improved kidney health. We give you simple-to-use dietary plans that alleviate your kidneys' workload without depriving you of balanced nutrition. If you have chronic kidney disease or are on dialysis, we can help. Get relief and better well-being through the appropriate dietary regimen.",
        image: "/strawberry.png",
        bgColor: "#f48fb1",
      },
    },
    {
      id: 3,
      topCard: {
        title: "Gastrointestinal Health",
        shortDesc:
          "Enhance digestion and gut health through tailored nutrition plans. Our strategy addresses problems such as IBS, Crohn's disease,......",
        fullDesc:
          "Enhance digestion and gut health through tailored nutrition plans. Our strategy addresses problems such as IBS, Crohn's disease, acid reflux, and constipation. We use gut-friendly foods, probiotics, and fiber meals to promote digestive health. Through trigger identification and optimal nutrition, we enable you to eat meals without discomfort. Fortify your gut and enhance overall health through expert dietary plans.",
        image: "/watermelon.png",
        bgColor: "#4ac6d6",
      },
      bottomCard: {
        title: "Liver Disease Nutrition",
        shortDesc:
          "Maximize liver wellness with a meal plan tailored to detoxification and healing. We offer specific nutritional solutions for the management......",
        fullDesc:
          "Maximize liver wellness with a meal plan tailored to detoxification and healing. We offer specific nutritional solutions for the management of fatty liver, cirrhosis, and hepatitis. Our plans are focused on foods that are favorable to the liver, hydration, and minimizing exposure to toxins. We assist you in making conscious decisions that benefit the liver function and healing. Restore energy and improve your liver wellness with nutrient-balanced diets.",
        image: "/strawberry.png",
        bgColor: "#f48fb1",
      },
    },
    {
      id: 4,
      topCard: {
        title: "Cancer Nutrition",
        shortDesc:
          "Care for and build your body through and after cancer treatment. Our expert meal plans target enhanced immunity, minimized treatment.....",
        fullDesc:
          "Care for and build your body through and after cancer treatment. Our expert meal plans target enhanced immunity, minimized treatment side effects, and recovery support. We highlight nutrient-rich foods, hydration, and energy meals. Post-chemotherapy or post-treatment, we provide individualized support. Build strength and vitality with integrative cancer nutrition approaches.",
        image: "/watermelon.png",
        bgColor: "#4ac6d6",
      },
      bottomCard: {
        title: "Thyroid & PCOD Management",
        shortDesc:
          "Balance hormones naturally through diet designed for thyroid wellness and PCOD. Our programs regulate metabolism, stabilize.....",
        fullDesc:
          "Balance hormones naturally through diet designed for thyroid wellness and PCOD. Our programs regulate metabolism, stabilize weight swings, and alleviate symptoms such as fatigue and irregular periods. We emphasize nutrient-rich, anti-inflammatory foods supporting hormonal balance. Enhance energy and overall wellness through tailored nutritional support. Have food be your partner in creating hormonal harmony.",
        image: "/strawberry.png",
        bgColor: "#f48fb1",
      },
    },
    {
      id: 5,
      topCard: {
        title: "Arthritis & Joint Health",
        shortDesc:
          "Decrease inflammation and maintain joint health with directed nutrition. Our meal plans are centered on anti-inflammatory foods,.....",
        fullDesc:
          "Decrease inflammation and maintain joint health with directed nutrition. Our meal plans are centered on anti-inflammatory foods, necessary nutrients, and weight management to alleviate joint pain. We help you make food choices that enhance mobility and minimize discomfort. Whether osteoarthritis, rheumatoid arthritis, or gout is being managed, we offer successful nutritional solutions. Maintain strong, flexible joints with professional guidance.",
        image: "/watermelon.png",
        bgColor: "#4ac6d6",
      },
      bottomCard: {
        title: "Pregnancy & Lactation Nutrition",
        shortDesc:
          "Ensure a safe pregnancy and postnatal recovery through expert nutrition diets. Our diets during pregnancy target fetal development,.....",
        fullDesc:
          "Ensure a safe pregnancy and postnatal recovery through expert nutrition diets. Our diets during pregnancy target fetal development, craving management, and prevention of deficiencies. We create lactation-friendly meal plans for new mothers to increase milk supply and recovery after giving birth. We guarantee mother and baby receive all necessary nutrients for a healthy state. Have a worry-free, health-promoting path to motherhood.",
        image: "/strawberry.png",
        bgColor: "#f48fb1",
      },
    },
    {
      id: 6,
      topCard: {
        title: "Eating Disorders & Recovery",
        shortDesc:
          "Restore a healthy relationship with food through empathetic nutritional care. Our treatment is centered on healing gradually,.....",
        fullDesc:
          "Restore a healthy relationship with food through empathetic nutritional care. Our treatment is centered on healing gradually, eating consciously, and restoring nutritional balance. From anorexia to bulimia to binge eating, we provide a supportive and safe meal plan. We help you toward body acceptance and sustenance with professional counseling. Start your journey to a healthier, more balanced life.",
        image: "/watermelon.png",
        bgColor: "#4ac6d6",
      },
      bottomCard: {
        title: "Sports Nutrition",
        shortDesc:
          "Enhance your sporting performance with a meal plan tailored to your sport. As a professional sports person or a health.....",
        fullDesc:
          "Enhance your sporting performance with a meal plan tailored to your sport. As a professional sports person or a health enthusiast, our meal plans increase endurance, strength, and recovery. We concentrate on pre- and post-workout meals, hydration techniques, and energy foods. Maximize your fitness objectives with professional dietary advice. Power your body for optimum performance and quick recovery.",
        image: "/strawberry.png",
        bgColor: "#f48fb1",
      },
    },
    {
      id: 7,
      topCard: {
        title: "General Nutrition & Wellness",
        shortDesc:
          "Maintain health with healthy, daily nutrition plans. We offer dietary counseling for energy sustenance, enhancing immunity, and.....",
        fullDesc:
          "Maintain health with healthy, daily nutrition plans. We offer dietary counseling for energy sustenance, enhancing immunity, and avoiding deficiencies. Our meal plans emphasize whole foods, necessary nutrients, and healthy habits. For a lifestyle modification or daily wellness advice, we guide you through it. Get a healthier, more satisfying life with expert-validated nutrition.",
        image: "/watermelon.png",
        bgColor: "#4ac6d6",
      },
      bottomCard: {
        title: "Cholesterol & Heart Health Management",
        shortDesc:
          "Reduce cholesterol naturally with a heart-healthy diet. Our personalized plans keep you at optimal lipid levels, decrease heart disease risk,.....",
        fullDesc:
          "Reduce cholesterol naturally with a heart-healthy diet. Our personalized plans keep you at optimal lipid levels, decrease heart disease risk, and enhance cardiovascular health. We emphasize fiber-rich foods, healthy fats, and balanced meals that promote overall well-being. Savor great-tasting, heart-healthy meals while keeping your cholesterol under control. Use nutrition as your key to a healthier heart.",
        image: "/strawberry.png",
        bgColor: "#f48fb1",
      },
    },
    {
      id: 8,
      topCard: {
        title: "Pre & Post-Menopausal Nutrition",
        shortDesc:
          "Sustain your body during hormonal shifts with nutritious diet. Our programs support controlling menopause symptoms such as.....",
        fullDesc:
          "Sustain your body during hormonal shifts with nutritious diet. Our programs support controlling menopause symptoms such as weight gain, mood swings, and bone health. We use foods rich in nutrients that facilitate transition and maintain well-being. Our advice, pre- or post-menopausal, provides for a smooth and healthy experience. Enter this phase of life with strength and vitality.",
        image: "/watermelon.png",
        bgColor: "#4ac6d6",
      },
      bottomCard: {
        title: "Pre & Post-Menopausal Nutrition",
        shortDesc:
          "Sustain your body during hormonal shifts with nutritious diet. Our programs support controlling menopause symptoms such as.....",
        fullDesc:
          "Sustain your body during hormonal shifts with nutritious diet. Our programs support controlling menopause symptoms such as weight gain, mood swings, and bone health. We use foods rich in nutrients that facilitate transition and maintain well-being. Our advice, pre- or post-menopausal, provides for a smooth and healthy experience. Enter this phase of life with strength and vitality.",
        image: "/strawberry.png",
      
        bgColor: "#f48fb1",
      },
    },
  ]

  const handleCardClick = (columnId, position) => {
    if (selectedColumn === columnId && selectedPosition === position) {
      setSelectedColumn(null)
      setSelectedPosition(null)
    } else {
      setSelectedColumn(columnId)
      setSelectedPosition(position)
    }
  }

  const handleScheduleCall = (e) => {
    e.stopPropagation()
    window.open(
      "https://www.figma.com/proto/YzCKecl8qXbBKBTlUxyXsT/Healthyz?node-id=161-242&p=f&t=5TxFPPIkIv1slTUU-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      "_blank"
    )
  }

  return (
    <div className="nutrition-services-container">
      {/* Top Row */}
      <div className="top-row-container">
        <div className="services-row" ref={topRowRef}>
          {nutritionServices.map((column) => {
            const isColumnSelected = selectedColumn === column.id
            const isTopSelected = isColumnSelected && selectedPosition === "top"
            const isBottomSelected = isColumnSelected && selectedPosition === "bottom"

            return (
              <div key={`top-${column.id}`} className="service-column">
                <div
                  className={`service-card top-card ${isTopSelected ? "expanded green" : ""} ${
                    isBottomSelected ? "compressed" : ""
                  }`}
                  style={{ backgroundColor: isTopSelected ? "#4CAF50" : column.topCard.bgColor }}
                  onClick={() => handleCardClick(column.id, "top")}
                >
                  <h2 className="card-title">{column.topCard.title}</h2>
                  <div className="card-divider"></div>

                  {!isBottomSelected || isTopSelected ? (
                    <div className="card-content">
                      <p className="card-description">
                        {isTopSelected ? column.topCard.fullDesc : column.topCard.shortDesc}
                      </p>

                      {isTopSelected && (
                        <button className="schedule-btn" onClick={handleScheduleCall}>
                          Schedule Call
                        </button>
                      )}

                      <div className={`card-image-container ${isTopSelected ? "full-image" : "partial-image"}`}>
                        <img
                          src={column.topCard.image || "/placeholder.svg"}
                          alt="Nutrition illustration"
                          className="card-image"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row-container">
        <div className="services-row" ref={bottomRowRef}>
          {nutritionServices.map((column) => {
            const isColumnSelected = selectedColumn === column.id
            const isTopSelected = isColumnSelected && selectedPosition === "top"
            const isBottomSelected = isColumnSelected && selectedPosition === "bottom"

            return (
              <div key={`bottom-${column.id}`} className="service-column">
                <div
                  className={`service-card bottom-card ${isBottomSelected ? "expanded green" : ""} ${
                    isTopSelected ? "compressed" : ""
                  }`}
                  style={{ backgroundColor: isBottomSelected ? "#4CAF50" : column.bottomCard.bgColor }}
                  onClick={() => handleCardClick(column.id, "bottom")}
                >
                  <h2 className="card-title">{column.bottomCard.title}</h2>
                  <div className="card-divider"></div>

                  {!isTopSelected || isBottomSelected ? (
                    <div className="card-content">
                      <p className="card-description">
                        {isBottomSelected ? column.bottomCard.fullDesc : column.bottomCard.shortDesc}
                      </p>

                      {isBottomSelected && (
                        <button className="schedule-btn" onClick={handleScheduleCall}>
                          Schedule Call
                        </button>
                      )}

                      <div className={`card-image-container ${isBottomSelected ? "full-image" : "partial-image"}`}>
                        <img
                          src={column.bottomCard.image || "/placeholder.svg"}
                          alt="Nutrition illustration"
                          className="card-image"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NutritionServices













