import { FaDiscord } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { text: "TheXP" },
    { text: "World Of The Machine" },
    { text: "Innovations & world first" },
    { text: "Team" },
    { text: "Roadmap" },
  ];
  return (
    <header className="flex items-center justify-between max-w-[1200px] mx-auto py-7 px-[60px]">
      <nav className="flex items-center justify-start gap-5">
        <img className="w-[75.1px] h-[30px]" alt="Logo" src="/logo.png" />
        {navItems.map((item, index) => (
          <div key={index}>
            <p className="text-gray-200 text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </nav>
      <nav className="flex items-center gap-4">
        <FaDiscord className="text-white w-7 h-7" />

        <button className="text-sm w-[124px] h-[45px] bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] rounded-lg">
          Mint Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
