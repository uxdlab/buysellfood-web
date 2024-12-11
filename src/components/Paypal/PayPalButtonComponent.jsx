// PayPalButtonComponent.js
import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { PAYPAL_TEST_KEY } from '../../utils/constants'

export const PayPalButtonComponent = ({ amount, onPaymentDone,currency="USD" }) => {

  const handleSuccess = (details, data) => {
    onPaymentDone(details, data)
   
    console.log(details, data)
  }

  return (
    <PayPalScriptProvider
      options={{
        'client-id': PAYPAL_TEST_KEY,
        currency: currency
      }} 
    >
      <PayPalButtons
        style={{ zIndex: '2' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency: currency
                }
              }
            ]
          })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(details => {
            handleSuccess(details, data)
          })
        }}
      />
    </PayPalScriptProvider>
  )
}
