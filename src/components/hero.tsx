import MoneyTransferForm from "./moneyTransferForm";

export default function HeroSection() {
  return (
    <div className="bg-primary flex justify-between pt-14 gap-5 pl-12 pr-2 mt-5">
      <div className="text-white w-2xl">
        <h1 className="font-bold text-4xl mb-5">
          For the Ones Who Matter Most
        </h1>
        <p className="mb-12 text-xl">
          Easily send pocket money to your loved ones studying abroad. Safe
          transfers, instant delivery and rates you can trust.
        </p>
        <MoneyTransferForm />
      </div>
      <div className="flex items-stretch">
        <img
          src="/heroImage.png"
          alt="A lady holding money"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}
