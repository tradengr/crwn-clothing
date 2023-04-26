import { useNavigate } from 'react-router-dom';

import './CategoryItem.styles.scss';

export default function CategoryItem({ category }) {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  const toCategory = () => navigate(`/shop/${title}`);

  return (
    <div className="category-item-container" onClick={toCategory}>
      <div 
        className='background-image' 
        style={{backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}
