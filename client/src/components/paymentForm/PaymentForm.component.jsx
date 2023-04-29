import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { InvertedButton, ButtonSpinner } from '../button/Button.component';

import { httpPostStripePayment } from '../../api/serverAPI';
import { selectCartTotal } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { clearCartItems } from '../../redux/cart/cart.slice';

import './PaymentForm.styles.scss';

export default function PaymentForm() {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const res = await httpPostStripePayment({amount: cartTotal * 100});
    const clientSecret = res.data.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest'
        }
      }
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) alert(paymentResult.error);
    else if (paymentResult.paymentIntent.status === 'succeeded') {
      alert('Payment Successful');
      dispatch(clearCartItems());
    } 

  }

  return (
    <div className='payment-form-container'>
      <form className='form-container' onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <InvertedButton className='payment-button' disabled={isProcessingPayment}>
          {isProcessingPayment ? <ButtonSpinner/> : 'Pay Now'}
        </InvertedButton>
      </form>
    </div>
  )
}
