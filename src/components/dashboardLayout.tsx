import { DashboardHeader } from "./dashboardHeader";
import SendMoneyForm from "./moneyTransferForm";
import SimpleSlider from "./carousel";
import Transactions from "./transactions";

export default function DashBoardLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="h-full">
            <SendMoneyForm />
          </div>
          <div className="h-full">
            <SimpleSlider />
          </div>
        </div>
        {/* Recent Transactions */}
        <div className="max-w-4xl">
          <Transactions />
        </div>
      </div>
    </div>
  );
}
