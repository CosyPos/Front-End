"use client";
import Layout from "@/app/components/Layout";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StaffManagement from "./staffmanagementTable";
import AttendanceTable from "./attendanceTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Staff = () => {
  const [activeTab, setActiveTab] = React.useState<string>("staffManagement");

  return (
    <Layout>
      <div className="mt-12 min-w-screen min-h-screen bg-black text-white">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-medium text-2xl">Staff (22)</h3>
          <div className="flex items-center gap-4">
            <button className="bg-[#FAC1D9] py-4 px-6 text-base font-medium rounded-md text-black">
              Add Staff
            </button>
            {/*  */}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 bg-[#3D4142] py-4 px-6 text-base font-medium rounded-md text-white">
                Sort by{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Sort</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Present</DropdownMenuItem>
                <DropdownMenuItem>Absent</DropdownMenuItem>
                <DropdownMenuItem>Half Shift</DropdownMenuItem>
                <DropdownMenuItem>Leave</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveTab("staffManagement")}
            className={`${
              activeTab === "staffManagement" ? "bg-[#FAC1D9] text-black" : ""
            } border border-white py-4 px-6 text-base font-medium rounded-md`}
          >
            Staff Management
          </button>

          <button
            onClick={() => setActiveTab("attendance")}
            className={`${
              activeTab === "attendance" ? "bg-[#FAC1D9] text-black" : ""
            } border border-white py-4 px-6 text-base font-medium rounded-md`}
          >
            Attendance
          </button>
        </div>

        {activeTab === "staffManagement" ? (
          <div className="w-full text-white overflow-y-auto">
            <StaffManagement />
          </div>
        ) : (
          <AttendanceTable />
        )}
      </div>
    </Layout>
  );
};

export default Staff;
