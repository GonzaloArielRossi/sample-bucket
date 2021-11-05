import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import Swal from 'sweetalert2';

import { CartContext } from '../../Context/CartContext';
import { Spinner } from '../Spinner/Spinner';
import { newOrder } from '../../Firebase/newOrder';
import { UserAuthContext } from '../../Context/UserAuthContext';
import './Checkout.css';
import { validateEmail } from '../../Helpers/validateEmail';

export const Checkout = () => {
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const [useAccountEmail, setUseAccountEmail] = useState(true);
  const buttonText = useAccountEmail
    ? 'Use a different email'
    : 'Use account email';
  const { cart, getTotal, emptyCart } = useContext(CartContext);
  const { currentUser } = useContext(UserAuthContext);
  const [userInputData, setuserInputData] = useState({
    id: currentUser ? currentUser.uid : '',
    name: '',
    lastName: '',
    email: '',
    emailConfirmation: '',
    phone: ''
  });

  useEffect(() => {
    if (currentUser) {
      const newUserInputData = userInputData;

      newUserInputData.email = useAccountEmail
        ? currentUser.email
        : userInputData.email;
      newUserInputData.emailConfirmation = useAccountEmail
        ? currentUser.email
        : userInputData.emailConfirmation;
      setuserInputData(newUserInputData);
    }
  }, [useAccountEmail, userInputData]);

  const handleUserNotLogedIn = () => {
    push('/login');
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong:',
      text: 'You have to register first'
    });
  };
  const handleInputChange = (e) => {
    setuserInputData({
      ...userInputData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInputData.name.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Name',
        text: 'Name field should have at least 3 characters'
      });
      return;
    }
    if (userInputData.lastName.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Last Name',
        text: 'Last Name field should have at least 3 characters'
      });
      return;
    }
    if (!useAccountEmail) {
      if (
        userInputData.email.length < 3 ||
        !validateEmail(userInputData.email)
      ) {
        Swal.fire({
          icon: 'error',
          title: 'Email',
          text: 'Enter a valid email'
        });
        return;
      }

      if (userInputData.email !== userInputData.emailConfirmation) {
        Swal.fire({
          icon: 'error',
          title: 'Email',
          text: 'Emails do not match'
        });
        return;
      }
    }
    if (userInputData.phone.length < 7) {
      Swal.fire({
        icon: 'error',
        title: 'Phone',
        text: 'Phone field should have at least 3 characters'
      });
      return;
    }
    setLoading(true);

    newOrder(userInputData, cart, getTotal())
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations, your order has been placed',
          text: `Your Order Id: ${res}`,
          footer: 'You will receive an email with the download link',
          willClose: () => {
            emptyCart();
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Product out of stock',
          text: `Product: ${err.map((item) => item.name).join(', ')}`
        });
      })
      .finally(() => {
        setLoading(false);
        push('/orders');
      });
  };
  const handleDifferentEmail = (e) => {
    e.preventDefault();
    setUseAccountEmail(!useAccountEmail);
  };

  return (
    <>
      {cart.length === 0 && <Redirect to="/" />}
      {!currentUser ? (
        handleUserNotLogedIn()
      ) : (
        <div className="form-main">
          {loading ? (
            <Spinner />
          ) : (
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <span className="form-title">Enter your details</span>

                <div>
                  <p>{`Account email: ${currentUser.email}`}</p>
                  <button className="form-link" onClick={handleDifferentEmail}>
                    {buttonText}
                  </button>
                </div>

                <div>
                  <label className="form-label">Name</label>
                  <input
                    required
                    className="form-input-text"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={userInputData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="form-label">Last Name</label>
                  <input
                    required
                    className="form-input-text"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    value={userInputData.lastName}
                    onChange={handleInputChange}
                  />
                </div>

                {!useAccountEmail && (
                  <>
                    <div>
                      <label className="form-label">Email</label>
                      <input
                        required
                        className="form-input-text"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={userInputData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="form-label">Email Confirmation</label>
                      <input
                        required
                        className="form-input-text"
                        name="emailConfirmation"
                        placeholder="Email"
                        type="email"
                        value={userInputData.emailConfirmation}
                        onChange={handleInputChange}
                      />
                    </div>
                  </>
                )}
                <div>
                  <label className="form-label">Phone</label>
                  <input
                    required
                    className="form-input-text"
                    name="phone"
                    placeholder="Phone"
                    type="tel"
                    value={userInputData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  className="form-submit-btn"
                  disabled={loading}
                  type="submit"
                >
                  Confirm Order
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};
