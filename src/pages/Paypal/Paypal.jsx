import React, { useEffect, useState } from 'react'
import { PayPalButtonComponent } from '../../components/Paypal/PayPalButtonComponent'
import { PaypalCard } from './PaypalCard'
import { Button } from '../../components/Buttons/Button'
import {
  getAfterDate,
  getUserId,
  isFreePlanAvailable,
  loader
} from '../../utils'
import { Box, Dialog, DialogContent, DialogTitle, Modal } from '@mui/material'
import { updateDocData } from '../../services/firebase/updateData'
import { useNavigate } from 'react-router-dom'

export const Paypal = () => {
  let userId = getUserId()
  const navigate = useNavigate()

  const PLAN_AMOUNT = {
    free: 0,
    pro: 5,
    dealer: 30
  }
  const ALLPLANS = {
    free: 'freePlan',
    pro: 'proPlan',
    dealer: 'dealerPlan'
  }
  const [key, setKey] = useState(0)
  const [amount, setAmount] = useState(PLAN_AMOUNT.pro)
  const [currency, setCurrency] = useState('USD')
  const [selectedPlan, setSelectedPlan] = useState(ALLPLANS.pro)

  const [freePlanDialog, setFreePlanDialog] = useState(false)

  useEffect(() => {
    setKey(pre => pre++)
  }, [selectedPlan])

  function onPaymentDone (d) {
    console.log(selectedPlan)
    buyPlan(selectedPlan)
    console.log(d)
  }

  async function buyPlan (plan) {
    let userData = { planPurchased: plan, isPaid: true }
    try {
      switch (plan) {
        case ALLPLANS.free:
          userData.planExpireDate = getAfterDate(7)
          break

        case ALLPLANS.pro:
          userData.planExpireDate = getAfterDate(7)
          break
        case ALLPLANS.dealer:
          userData.planExpireDate = getAfterDate(30)
          break
        default:
          console.error('Invalid plan')
      }
      loader.start()
      let res = await updateDocData('users', userId, userData)
      console.log(res)
      navigate('/addItem')
      window.location.reload()
      console.log(userData)
    } catch (err) {
      console.log(err)
    } finally {
      loader.stop()
    }
  }
  function buyFreePlan () {
    setFreePlanDialog(true)
  }

  return (
    <div className='mt-4'>
      <Dialog open={freePlanDialog}>
        <DialogTitle>Confirm</DialogTitle>

        <DialogContent>
          <Box sx={{ p: 3 }}>Are you sure you want to buy free plan</Box>

          <div className='d-flex gap-2 justify-content-end'>
            <Button
              title='Cancel'
              secondary
              onClick={() => setFreePlanDialog(false)}
            />
            <Button
              title='Buy'
              onClick={() => buyPlan(ALLPLANS.free)}
              primary
            />
          </div>
        </DialogContent>
      </Dialog>

      <h2 className='text-center my-4'>Buy Plan</h2>
      <div className='row'>
        <div className='col-md-4 col-12 mt-3'>
          <PaypalCard
            heading={'Free Plan'}
            text1={'Basic Advertisement'}
            text2={'1 Food Ad'}
            text3={'24/7 support'}
            planDays={
              <div>
                <div>0</div>
                <div>7 Days</div>
              </div>
            }
          >
            <div className='mt-4'>
              <Button
                disabled={!isFreePlanAvailable()}
                onClick={() => {
                  setAmount(PLAN_AMOUNT.free)
                  setSelectedPlan(ALLPLANS.free)
                }}
                fullWidth
                title={
                  selectedPlan === ALLPLANS.free
                    ? 'Free Plan Selected'
                    : 'Choose This plan'
                }
                primary={selectedPlan === ALLPLANS.free}
              />
            </div>
          </PaypalCard>
        </div>
        <div className='col-md-4 col-12 mt-3'>
          <PaypalCard
            heading={'Pro Plan'}
            text1={'Featured Advertisement'}
            text2={'1 Food Ad'}
            text3={'24/7 support'}
            planDays={
              <div>
                <div>5</div>
                <div>7 Days</div>
              </div>
            }
          >
            <div className='mt-4'>
              <Button
                onClick={() => {
                  setAmount(PLAN_AMOUNT.pro)
                  setSelectedPlan(ALLPLANS.pro)
                }}
                fullWidth
                title={
                  selectedPlan === ALLPLANS.pro
                    ? 'Pro Plan Selected'
                    : 'Choose This plan'
                }
                primary={selectedPlan === ALLPLANS.pro}
              />
            </div>
          </PaypalCard>
        </div>
        <div className='col-md-4 col-12 mt-3'>
          <PaypalCard
            heading={'Dealer Plan'}
            text1={'Featured Advertisement'}
            text2={'1 Food Ad'}
            text3={'24/7 support'}
            planDays={
              <div>
                <div>0</div>
                <div>30 Days</div>
              </div>
            }
          >
            <div className='mt-4'>
              <Button
                onClick={() => {
                  setAmount(PLAN_AMOUNT.dealer)
                  setSelectedPlan(ALLPLANS.dealer)
                }}
                fullWidth
                title={
                  selectedPlan === ALLPLANS.dealer
                    ? 'Dealer Plan Selected'
                    : 'Choose This plan'
                }
                primary={selectedPlan === ALLPLANS.dealer}
              />
            </div>
          </PaypalCard>
        </div>
      </div>
      <br />
      <br />
      <div className='d-flex justify-content-center'>
        {amount !== PLAN_AMOUNT.free ? (
          <div
            key={amount}
            style={{ position: 'relative', zIndex: 0, width: '500px' }}
          >
            <PayPalButtonComponent
              amount={amount}
              onPaymentDone={onPaymentDone}
              currency={currency}
            />
          </div>
        ) : (
          <Button
            primary
            fullWidth
            onClick={buyFreePlan}
            title='Buy Free Plan'
          />
        )}
      </div>
    </div>
  )
}
