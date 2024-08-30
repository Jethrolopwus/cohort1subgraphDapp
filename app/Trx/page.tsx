import React from 'react';
import TokensTable from './tokenTable';


// Define the type for a token
interface Token {
  id: string;
  name: string;
  symbol: string;
  totalSupply: number;
}

// Mocked data for testing
const mockTokens: Token[] = [
  { id: '1', name: 'Token A', symbol: 'TKA', totalSupply: 1000000 },
  { id: '2', name: 'Token B', symbol: 'TKB', totalSupply: 2000000 },
  { id: '3', name: 'Token C', symbol: 'TKC', totalSupply: 3000000 },
  // Add more mock tokens as needed
];

const mockTotalItems = mockTokens.length;

const TrxPage = async () => {
  const initialPage = 1;
  const limit = 10;

  // Use mock data instead of fetching
  const tokens = mockTokens;
  const totalItems = mockTotalItems;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">TRX Token Data</h1>

      <TokensTable initialTokens={tokens} totalItems={totalItems} initialPage={initialPage} limit={limit} />
    </div>
  );
};

export default TrxPage;
