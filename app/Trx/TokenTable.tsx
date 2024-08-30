"use client";

import React, { useState, useEffect } from 'react';

interface Token {
  id: string;
  name: string;
  symbol: string;
  totalSupply: number;
}

interface TokensTableProps {
  initialTokens: Token[];
  totalItems: number;
  initialPage: number;
  limit: number;
}

const TokensTable: React.FC<TokensTableProps> = ({ initialTokens, totalItems, initialPage, limit }) => {
  const [tokens, setTokens] = useState<Token[]>(initialTokens);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const totalPages = Math.ceil(totalItems / limit);

  useEffect(() => {
    // Mock the data fetching for pagination
    if (currentPage !== initialPage) {
      // Simulate a delay
      setLoading(true);
      setTimeout(() => {
        setTokens(initialTokens); // Replace with real pagination logic if needed
        setLoading(false);
      }, 500); // Simulate loading time
    }
  }, [currentPage, initialPage, limit, initialTokens]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 sm:table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Symbol</th>
              <th className="px-4 py-2 border">Total Supply</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => (
              <tr key={token.id}>
                <td className="px-4 py-2 border">{token.id}</td>
                <td className="px-4 py-2 border">{token.name}</td>
                <td className="px-4 py-2 border">{token.symbol}</td>
                <td className="px-4 py-2 border">{token.totalSupply}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TokensTable;
