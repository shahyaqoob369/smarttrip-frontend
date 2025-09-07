import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PartnerPage = () => {
  const { serviceKey } = useParams(); // Gets the serviceKey from the URL (e.g., 'hostels')
  const [partnerUrl, setPartnerUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPartnerUrl = async () => {
      if (!serviceKey) return;
      
      setIsLoading(true);
      setError('');
      try {
        const response = await fetch(`${apiUrl}/redirect/${serviceKey}`);
        if (!response.ok) {
          throw new Error('Partner service not found.');
        }
        const data = await response.json();
        setPartnerUrl(data.url);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch partner URL:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPartnerUrl();
  }, [serviceKey, apiUrl]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading Partner Page...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {/* The iframe takes up the full container and displays the partner site */}
      <iframe
        src={partnerUrl}
        title={serviceKey}
        className="w-full h-full border-0"
        style={{ height: 'calc(100vh - 80px)' }} // Adjust height to account for your header
        allow="payment" // Allow payment processing if needed
      ></iframe>
    </div>
  );
};

export default PartnerPage;