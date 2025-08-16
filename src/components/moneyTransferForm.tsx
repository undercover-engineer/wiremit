import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function SendMoneyForm({
  fullHeight = false,
}: {
  fullHeight?: boolean;
}) {
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
      const ratesMap = data.reduce((acc: Record<string, number>, item: any) => {
        const [key, value] = Object.entries(item)[0];
        acc[key.toUpperCase()] = value;
        return acc;
      }, {});

      const rate = ratesMap[currency.toUpperCase()];
      if (rate) {
        const feeMap: Record<string, number> = {
          GBP: 0.1,
          ZAR: 0.2,
        };
        const feePercent = feeMap[currency.toUpperCase()] || 0;
        const afterFee = amount - amount * feePercent;
        const converted = afterFee * rate;
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
    <div
      className={`w-full bg-white p-4 sm:p-6 rounded-xl text-black shadow-md 
      ${fullHeight ? "h-full flex flex-col" : "max-w-md mx-auto mb-8"}`}
    >
      <h2 className="text-lg sm:text-xl font-semibold text-center mb-6">
        Send Pocket Money in Minutes
      </h2>

      {isLoading && (
        <p className="text-center text-gray-500">Loading rates...</p>
      )}
      {error && (
        <p className="text-center text-red-500">Failed to load rates</p>
      )}

      {/* Amount (USD) */}
      <div className="flex-1">
        <label className="block text-sm font-medium mb-1">Amount (USD)</label>
        <div className="flex flex-col sm:flex-row sm:items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="flex-1 px-3 py-2 outline-none text-gray-700"
          />
          <div className="px-3 py-2 sm:py-0 border-t sm:border-t-0 sm:border-l flex items-center gap-2 bg-gray-50 justify-center">
            <img
              src="https://flagcdn.com/us.svg"
              alt="US flag"
              className="w-5 h-5"
            />
            <span className="text-sm">USD</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Minimum: $50, Maximum: $5000
        </p>
      </div>

      {/* They Receive */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">They Receive</label>
        <div className="flex flex-col sm:flex-row sm:items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="number"
            placeholder="Amount they get"
            value={receiveAmount}
            readOnly
            className="flex-1 px-3 py-2 outline-none text-gray-700 bg-gray-50"
          />
          <div className="px-3 py-2 sm:py-0 sm:border-l border-t sm:border-t-0 flex items-center gap-2 bg-gray-50 justify-center">
            <img
              src={flags[currency]}
              alt={`${currency} flag`}
              className="w-5 h-5"
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent outline-none text-sm"
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
      <p className="text-xs text-gray-500 mb-6 text-center sm:text-left">
        Recipient will receive: (After fee deduction & currency conversion)
      </p>

      {/* Send Money button */}
      <button className="w-full bg-purple-400 text-white font-medium py-2 px-4 rounded-lg">
        Send Money
      </button>
    </div>
  );
}
