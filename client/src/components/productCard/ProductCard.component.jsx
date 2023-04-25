import { InvertedButton } from '../button/Button.component';
import './ProductCard.styles.scss';

export default function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <InvertedButton>Add to Cart</InvertedButton>
    </div>
  )
}
