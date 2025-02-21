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
import { Button } from "@/components/ui/button";
const AttendanceTable = () => {
  return (
    <Table className="text-white mt-6 mb-14">
      <TableCaption>An attendance list of staffs.</TableCaption>
      <TableHeader>
        <TableRow className="text-white hover:bg-[#292C2D">
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Timings</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="odd:bg-[#292C2D] even:bg-[#3D4142] hover:bg-[#292C2D">
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Raphael</TableCell>
          <TableCell>sample@gmail.com</TableCell>
          <TableCell>9:00 - 5:00</TableCell>
          <TableCell>
            <div className="flex items-center gap-4">
              <Button className="bg-[#3D4142]">
                <span>Present</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="odd:bg-[#292C2D] even:bg-[#3D4142] hover:bg-[#292C2D">
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Raphael</TableCell>
          <TableCell>sample@gmail.com</TableCell>
          <TableCell>9:00 - 5:00</TableCell>
          <TableCell>
            <div className="flex items-center gap-4">
              <Button className="bg-[#FAC1D9] text-black">Present</Button>
              <Button className="bg-[#FFDF6B] text-black">Absent</Button>
              <Button className="bg-[#6BE4FF] text-black">Half Shift</Button>
              <Button className="bg-[#FF6A6A] text-black">Leave</Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AttendanceTable;
