// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import ClientDashboard from './components/Client/ClientDashboard';
import BidderDashboard from './components/Bidder/BidderDashboard';
import web3 from './utils/web3';

function App() {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const loadAccount = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    loadAccount();
  }, []);

  // Simple role determination based on smart contract's logic or additional mapping
  // For demonstration, let's assume the contract owner is the client
  const isClient = async () => {
    const owner = await tenderSystem.methods.owner().call();
    return account.toLowerCase() === owner.toLowerCase();
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={isClient() ? <ClientDashboard /> : <Redirect to="/" />} />
          <Route path="/bidder" element={<BidderDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="text-center">
    <h1 className="text-3xl font-bold">Welcome to Tender dApp</h1>
    <p className="mt-4">Choose your role to proceed.</p>
  </div>
);

export default App;
