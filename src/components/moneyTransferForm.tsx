import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function SendMoneyForm() {
  const [amount, setAmount] = useState<number | "">("");
  const [receiveAmount, setReceiveAmount] = useState<number | "">("");
  const [method, setMethod] = useState("Cash Pickup");
  const [currency, setCurrency] = useState("ZAR");

  const flags: Record<string, string> = {
    ZAR: "https://flagcdn.com/za.svg", // South Africa
    GBP: "https://flagcdn.com/gb.svg", // UK
  };

  // Fetch FX rates
  const { data, isLoading, error } = useQuery({
    queryKey: ["fxRates"],
    queryFn: async () => {
      const res = await fetch(
        "https://68976304250b078c2041c7fc.mockapi.io/api/wiremit/InterviewAPIS",
      );
      if (!res.ok) throw new Error("Failed to fetch FX rates");
      return res.json();
    },
  });

  // Auto-calculate "They Receive"
  useEffect(() => {
    if (amount && typeof amount === "number" && Array.isArray(data)) {
      // Build a currency-to-rate map from the API
      const ratesMap = data.reduce((acc: Record<string, number>, item: any) => {
        const [key, value] = Object.entries(item)[0];
        acc[key.toUpperCase()] = value;
        return acc;
      }, {});

      const rate = ratesMap[currency.toUpperCase()];

      if (rate) {
        // Define fee percentages for each currency
        const feeMap: Record<string, number> = {
          GBP: 0.1,
          ZAR: 0.2,
        };

        const feePercent = feeMap[currency.toUpperCase()] || 0;

        // Apply fee and convert
        const afterFee = amount - amount * feePercent;
        const converted = afterFee * rate;

        // Round UP to 2 decimal places
        const roundedUp = Math.ceil(converted * 100) / 100;

        setReceiveAmount(roundedUp);
      } else {
        setReceiveAmount("");
      }
    } else {
      setReceiveAmount("");
    }
  }, [amount, currency, data]);

  return (
    <div className="max-w-md bg-white p-6 rounded-xl text-black mb-8">
      <h2 className="text-xl font-semibold text-center mb-6">
        Send Pocket Money in Minutes
      </h2>

      {isLoading && (
        <p className="text-center text-gray-500">Loading rates...</p>
      )}
      {error && (
        <p className="text-center text-red-500">Failed to load rates</p>
      )}

      {/* Amount (USD) */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Amount (USD)</label>
        <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="flex-1 px-3 py-2 outline-none text-gray-700"
          />
          <div className="px-3 border-l flex items-center gap-2 bg-gray-50">
            <img
              src="https://flagcdn.com/us.svg"
              alt="US flag"
              className="w-5 h-5"
            />
            <span>USD</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Minimum: $50, Maximum: $5000
        </p>
      </div>

      {/* They Receive */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">They Receive</label>
        <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="number"
            placeholder="Amount they get"
            value={receiveAmount}
            readOnly
            className="flex-1 px-3 py-2 outline-none text-gray-700 bg-gray-50"
          />
          <div className="px-3 border-l flex items-center gap-2 bg-gray-50">
            <img
              src={flags[currency]}
              alt={`${currency} flag`}
              className="w-5 h-5"
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent outline-none"
            >
              <option value="ZAR">ZAR</option>
              <option value="GBP">Pound</option>
            </select>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Transaction Fee (10% for GBP, 20% for ZAR)
        </p>
      </div>

      {/* Receiving Method */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Receiving Method
        </label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Cash Pickup</option>
          <option>Bank Transfer</option>
          <option>Mobile Wallet</option>
        </select>
      </div>

      {/* Info text */}
      <p className="text-xs text-gray-500 mb-6">
        Recipient will receive: (Amount after fee deduction and currency
        conversion using live FX rates)
      </p>

      {/* Send Money button */}
      <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg">
        Send Money
      </button>
    </div>
  );
}
