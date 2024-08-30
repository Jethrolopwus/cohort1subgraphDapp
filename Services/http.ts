import axios from "axios";

export async function fetchTransfers(apiKey: string) {
  const endpoint =
    "https://api.studio.thegraph.com/query/87213/thegraph-bounty/version/latest";
  //   const apiKey = "";
  const query = `
  query MyQuery {
    transfers(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
      id
      transactionHash
      blockNumber
      from
      to
      value
      blockTimestamp
    }
  }`;

  try {
    const response = await axios.post(
      endpoint,
      { query },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching transfers:", error);
    return null;
  }
}
