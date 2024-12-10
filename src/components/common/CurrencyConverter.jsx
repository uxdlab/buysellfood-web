import React, { useEffect, useState } from 'react'
import { Button } from '../Buttons/Button'
import { Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, TextField, Typography } from '@mui/material'
import currencyCodes from "currency-codes";
import { convertCurrency } from '../../services/apis/api';
import { Input } from '../Inputs/Input';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


export default function CurrencyConverter() {
    const [open, setOpen] = useState(false)
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [selectedFrom, setSelectedFrom] = useState("");
    const [selectedTo, setSelectedTo] = useState(null);
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState(0);


    const fetchData = async () => {
        try {
            let res = await convertCurrency(selectedFrom, selectedTo, amount)
            setConvertedAmount(res.data.conversion_result)
        } catch (error) {
            console.log(error)
        }
    };
    const onClose = () => {

    }
    useEffect(() => {
        const options = currencyCodes.data.map((currency) => ({
            value: currency.code,
            label: `${currency.code} - ${currency.currency}`,
        }));
        setCurrencyOptions(options);
    }, []);

    function close() {
        setOpen(false)
        setConvertedAmount(0)
        setSelectedTo(null)
        setSelectedFrom(null)
        setAmount("")
    }
    return (
        <div>
            <Button primary onClick={() => setOpen(true)}
            //  title={<CurrencyExchangeIcon/>}
             title={"Currency Converter"}
             
             />

            <Dialog
                fullWidth
                maxWidth="sm"
                open={open} onClose={onClose}>

                <DialogTitle>Convert Currency</DialogTitle>
                <DialogContent>
                    <Typography variant="subtitle1" gutterBottom>
                        Select Currency
                    </Typography>
                    <Select
                        sx={{ height: "45px" }}
                        fullWidth
                        options={currencyOptions}
                        onChange={(option) => {
                            setSelectedFrom(option.target.value)
                            setConvertedAmount(0)
                        }}
                        placeholder="From"
                        value={selectedFrom}
                    >
                        <MenuItem selected value={""} disabled>Select From</MenuItem>
                        {currencyOptions.map((res) => {
                            return (
                                <MenuItem value={res.value}>{res.label}</MenuItem>
                            )
                        })}
                    </Select>
                    <Typography variant="subtitle1" gutterBottom sx={{ marginTop: 2 }}>
                        Enter Amount
                    </Typography>
                    <Input
                        type="number"
                        value={amount}
                        onChange={(e) => {
                            setConvertedAmount(0)
                            setAmount(Number(e.target.value))

                        }}
                        placeholder="Amount"
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginBottom: "16px",
                            boxSizing: "border-box",
                        }}
                    />
                    <Typography variant="subtitle1" gutterBottom>
                        Convert To
                    </Typography>
                    <Select
                        sx={{ height: "45px" }}
                        fullWidth
                        options={currencyOptions}
                        onChange={(option) => {
                            setConvertedAmount(0)
                            setSelectedTo(option.target.value)

                        }}
                        placeholder="To"
                    >
                        {currencyOptions.map((res) => {
                            return (
                                <MenuItem value={res.value}>{res.label}</MenuItem>
                            )
                        })}
                    </Select>
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        Converted Amount: {convertedAmount || 0}
                    </Typography>
                </DialogContent>
                <DialogActions sx={{p:3}}>
                    <Button onClick={close} title="Close" secondary>Close</Button>
                    <Button
                        onClick={fetchData}
                        primary
                        title={"Convert"}
                    >
                        Convert
                    </Button>
                </DialogActions>
            </Dialog>


        </div>
    )
}
