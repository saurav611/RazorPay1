import React from "react";
import {
  FaHome,
  FaMoneyBillWave,
  FaFileInvoice,
  FaUserFriends,
  FaPiggyBank,
  FaFileAlt,
  FaLink,
  FaRegCreditCard,
  FaChartLine,
  FaBuilding,
  FaAmazon,
  FaMoneyCheckAlt,
  FaBook,
} from "react-icons/fa";

const App = () => {
  return (
    <div className="flex min-h-screen text-gray-200 bg-gray-800">
      <Sidebar />
      <MainContent />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 p-4 text-white bg-gray-900">
      <div className="mb-8 text-2xl font-bold">RazorpayX</div>
      <nav className="space-y-4 text-xs">
        <NavItem name="Home" icon={<FaHome />} />
        <NavItem name="Payouts" icon={<FaMoneyBillWave />} />
        <NavItem name="Account Statement" icon={<FaFileInvoice />} />
        <NavItem name="Contacts" icon={<FaUserFriends />} />
        <NavItem name="Loans" icon={<FaPiggyBank />} badge="NEW" />
        <NavItem name="Vendor Payments" icon={<FaFileAlt />} badge="NEW" />
        <NavItem name="Tax Payments" icon={<FaFileInvoice />} />
        <NavItem name="Payout Links" icon={<FaLink />} />
        <NavItem name="Payroll" icon={<FaRegCreditCard />} />
        <NavItem name="Reports" icon={<FaChartLine />} />
      </nav>
    </div>
  );
};

const NavItem = ({ name, icon, badge }) => {
  return (
    <div className="flex items-center justify-between text-gray-400 transition duration-200 hover:text-white">
      <div className="flex items-center">
        {icon}
        <span className="ml-4">{name}</span>
      </div>
      {badge && (
        <span className="px-2 py-1 text-xs bg-green-600 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="flex-1 p-6 mx-48 text-xs ">
      <Header />
      <TopSection />
      <div className="mt-8">
        <DashboardCard
          title="Open your RazorpayX account."
          description="Don’t let bankache come in the way of your growth. Apply for your RazorpayX account with a few basic details."
          buttonText="Start application"
          icon={<FaBuilding size={32} className="text-blue-500" />}
          className="border-t-4 border-t-blue-500"
        />
      </div>
      <div className="mt-6 text-xs border-t-2 border-t-green-500 ">
        <DashboardCard
          title="Amazon Instant Settlements"
          description="Complete your application and get instant access to your Amazon payouts."
          buttonText="Apply Now"
          toggle={{ label: "Let’s get you started", on: true }}
          icon={<FaAmazon size={32} className="text-blue-500" />}
        />
      </div>
      <div className="border-t-2 border-t-green-500">
        <DashboardCard
          title="Creating payouts in Live mode"
          description="There are multiple ways in which you can create the first payout:"
          buttons={[
            { text: "Make a payout" },
            { text: "Show apps for me", marginLeft: true },
            { text: "API payouts", marginLeft: true },
          ]}
          icon={<FaMoneyCheckAlt size={32} className="text-blue-500" />}
        />
      </div>
      <div className="mt-9">
        <DashboardCard
          title="Automate Bookkeeping For Payouts"
          description="Close your books 60% faster and with better accuracy by automating bookkeeping for your payouts."
          buttonText="Connect Zoho Books"
          icon={<FaBook size={32} className="text-blue-500" />}
        />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      <button className="px-4 py-2 text-white transition duration-200 bg-blue-600 rounded hover:bg-blue-700">
        + Payout
      </button>
    </div>
  );
};

const TopSection = () => {
  return (
    <div className="relative p-6 mt-10 rounded shadow-lg">
      <h3>Onboarding updates</h3>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">RazorpayX Lite</h2>
        <button className="px-4 py-2 text-gray-400 transition duration-200 bg-gray-800 rounded hover:text-white">
          + Add balance
        </button>
      </div>
      <div className="mb-2 text-4xl font-bold text-white">₹100.09</div>
      <p className="p-2 pl-4 mb-2 text-sm text-gray-400 border-2 border-gray-500 border-dashed">
        You're all caught up. There are no more items pending on you.
      </p>
    </div>
  );
};

const DashboardCard = ({
  title,
  description,
  buttonText,
  buttons,
  icon,
  toggle,
}) => {
  return (
    <div className="relative flex p-6 bg-gray-900 rounded shadow-lg">
      <div className="mr-4">{icon}</div>
      <div className="flex-1">
        <h2 className="mb-2 text-xl font-bold text-white">{title}</h2>
        <hr className="mb-4 border-t-2 border-gray-700" />
        <p className="mb-4 text-gray-400">{description}</p>
        {buttonText && (
          <button className="px-4 py-2 text-white transition duration-200 bg-blue-600 rounded hover:bg-blue-700">
            {buttonText}
          </button>
        )}
        {buttons && (
          <div className="mt-4 space-x-4">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 ${
                  button.marginLeft ? "ml-4" : ""
                }`}
              >
                {button.text}
              </button>
            ))}
          </div>
        )}
        {toggle && (
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-400">{toggle.label}</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={toggle.on}
                className="text-blue-600 form-checkbox"
              />
              <span className="ml-2 text-gray-400">On</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
