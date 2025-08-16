import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowDownLeft,
  ArrowUpRight,
  Clock,
} from "lucide-react";

type Transaction = {
  id: string;
  name: string;
  date: string;
  amount: number;
  type: "sent" | "received";
  status: "completed" | "pending" | "failed";
};

// Generate 25 mock transactions
const transactions: Transaction[] = Array.from({ length: 25 }, (_, i) => {
  const isSent = i % 2 === 0;
  const amount = Math.floor(Math.random() * 500) + 20; // random 20–500
  return {
    id: (i + 1).toString(),
    name: `Sarah Jones ${i + 1}`,
    date: `Aug ${15 - (i % 5)}, ${2 + (i % 12)}:${(i * 7) % 60} PM`,
    amount: isSent ? -amount : amount,
    type: isSent ? "sent" : "received",
    status: "completed",
  };
});

const PAGE_SIZE = 15;

export default function TransactionsList() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const currentPageData = transactions.slice(start, start + PAGE_SIZE);

  return (
    <div className="bg-white rounded-xl shadow p-6 lg:ml-20">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-blue-500" />
        <h2 className="text-lg font-semibold">Recent Transactions</h2>
      </div>

      {/* Transactions List */}
      <ul className="divide-y">
        {currentPageData.map((tx) => (
          <li key={tx.id} className="flex items-center justify-between py-4">
            {/* Left: Icon + Details */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  tx.type === "sent"
                    ? "bg-red-100 text-red-500"
                    : "bg-green-100 text-green-500"
                }`}
              >
                {tx.type === "sent" ? (
                  <ArrowUpRight className="w-5 h-5" />
                ) : (
                  <ArrowDownLeft className="w-5 h-5" />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900">{tx.name}</p>
                <p className="text-xs text-gray-500">{tx.date}</p>
              </div>
            </div>

            {/* Right: Amount + Status */}
            <div className="text-right">
              <p
                className={`font-semibold ${
                  tx.amount > 0 ? "text-green-600" : "text-gray-900"
                }`}
              >
                {tx.amount > 0
                  ? `+$${tx.amount.toFixed(2)}`
                  : `-$${Math.abs(tx.amount).toFixed(2)}`}
              </p>
              <span
                className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
                  tx.status === "completed"
                    ? "bg-green-100 text-green-600"
                    : tx.status === "pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                }`}
              >
                {tx.status}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="flex items-center gap-1 px-3 py-1 rounded-md border text-sm disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="flex items-center gap-1 px-3 py-1 rounded-md border text-sm disabled:opacity-50"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
