"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathname = usePathname();

  const navItems = [
    { path: "/dashboard", icon: "/dashboard.svg", label: "Dashboard" },
    { path: "/menu", icon: "/menu.svg", label: "Menu" },
    { path: "/staff", icon: "/staff.svg", label: "Staff" },
    { path: "/inventory", icon: "/inventory.svg", label: "Inventory" },
    { path: "/reports", icon: "/reports.svg", label: "Reports" },
    { path: "/orders", icon: "/orders.svg", label: "Order/Table" },
    { path: "/reservation", icon: "/reservation.svg", label: "Reservation" },
  ];

  return (
    <div className="fixed w-[171px] bg-[#292C2D] min-h-screen flex justify-center rounded-r-3xl">
      <div className="h-full min-h-screen flex flex-col justify-between">
        <div>
          <div className="my-8">
            <span className="text-xl font-bold text-[#F5B6D9]">cosypos</span>
          </div>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center p-2 rounded-lg ${
                  pathname === item.path ? "opacity-100 bg-[#F5B6D9] text-black" : "opacity-70"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="p-2 bg-white rounded-full"
                />
                <p className={` mt-1 text-base font-medium ${pathname === item.path ? "text-black" : ""}`}>{item.label}</p>
              </Link>
            ))}
          </div>
        </div>

        <Link href="/login">
          <div className="flex flex-col items-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-[#F5B6D9]"
            >
              <path
                strokeLinecap="round"
                strokeWidth="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            <p className="text-white mt-1 text-md font-bold">Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
