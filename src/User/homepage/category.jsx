
import "./category.css";

const categories = [
  {
    id: 1,
    name: "Biryani",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500"
  },
  {
    id: 2,
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },
  {
    id: 3,
    name: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    id: 4,
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
  },
  {
    id: 5,
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
  },
  {
    id: 6,
    name: "Drinks",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c"
  }
];

export default function CategorySection() {
  return (
    <div className="container-fluid category-section">

      <div className="container">

        <h2 className="category-title">
          Explore <span>Categories</span>
        </h2>

        <p className="category-subtitle">
          Choose your favourite food category
        </p>

        <div className="row g-4">

          {categories.map((item) => (
            <div className="col-6 col-md-4 col-lg-2" key={item.id}>

              <div className="category-card">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="category-name">
                  {item.name}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
