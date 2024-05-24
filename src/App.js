// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [flatNo, setFlatNo] = useState('');
  const [name, setName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [currentReading, setCurrentReading] = useState('');
  const [previousReading, setPreviousReading] = useState('');
  const [rent, setRent] = useState('');
  const [units, setUnits] = useState('');
  const [bijliBill, setBijliBill] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const calculateBill = () => {
    const currentReadingNum = parseFloat(currentReading);
    const previousReadingNum = parseFloat(previousReading);
    const rentNum = parseFloat(rent);
    const unitPriceNum = parseFloat(unitPrice);

    if (isNaN(currentReadingNum) || isNaN(previousReadingNum) || isNaN(rentNum) || isNaN(unitPriceNum)) {
      alert('Please enter valid numbers for readings, rent, and unit price.');
      return;
    }

    const calculatedUnits = currentReadingNum - previousReadingNum;
    const calculatedBijliBill = calculatedUnits * unitPriceNum;
    const calculatedTotalAmount = calculatedBijliBill + rentNum;

    setUnits(calculatedUnits);
    setBijliBill(calculatedBijliBill.toFixed(2));
    setTotalAmount(calculatedTotalAmount.toFixed(2));
    setCurrentDate(new Date().toLocaleDateString());
  };

  const printBill = () => {
    window.print();
  };

  return (
    <div className="container">
      <form id="billForm">
        <h1>Gupta Niwas Bill Generator</h1>
        
        <label htmlFor="flatNo">Flat No</label>
        <input type="text" id="flatNo" value={flatNo} onChange={(e) => setFlatNo(e.target.value)} placeholder="Enter Flat No" required />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name of Renter" required />

        <div className="section">
          <h2>Bijli Bill</h2>
          <label htmlFor="unitPrice">Unit Price (Rs)</label>
          <input type="number" id="unitPrice" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} placeholder="Enter Unit Price" required />

          <label htmlFor="currentReading">Current Reading</label>
          <input type="number" id="currentReading" value={currentReading} onChange={(e) => setCurrentReading(e.target.value)} placeholder="Enter current reading" required />

          <label htmlFor="previousReading">Previous Reading</label>
          <input type="number" id="previousReading" value={previousReading} onChange={(e) => setPreviousReading(e.target.value)} placeholder="Enter previous reading" required />

          <p>Unit = <span id="units">{units}</span></p>
          <p>Rs <span id="amount">{bijliBill}</span></p>
        </div>

        <div className="section">
          <h2>Rent</h2>
          <label htmlFor="rent">Rent Amount (Rs)</label>
          <input type="number" id="rent" value={rent} onChange={(e) => setRent(e.target.value)} placeholder="Enter Rent" required />

          <label htmlFor="fromDate">From</label>
          <input type="date" id="fromDate" required />

          <label htmlFor="toDate">To</label>
          <input type="date" id="toDate" required />

          <p>Total Amount = <span id="totalAmount">{totalAmount}</span></p>
        </div>

        <p>Date: <span id="currentDate">{currentDate}</span></p>

        <div className="signatures">
          <p>Customer Signature</p>
          <p>Owner Signature</p>
        </div>

        <div className="buttons">
          <button type="button" onClick={calculateBill}>Calculate</button>
          <button type="button" className="print" onClick={printBill}>Print</button>
        </div>
      </form>
    </div>
  );
}

export default App;
