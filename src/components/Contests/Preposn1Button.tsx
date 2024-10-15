import { useState } from "react";

export default function Preposn1Button() {
  const [timesClicked, setTimesClicked] = useState<number>(0);
  return (
    <div>
      {timesClicked === 0 && (
        <div className="flex flex-col items-center gap-5">
          <RealPOSN1Component />
          <button
            className="flex justify-center items-center gap-2 border border-[#ff851b] p-2 rounded-md transition-all duration-300 ease-in-out cursor-pointer"
            onClick={() => setTimesClicked(1)}>
            <p className="text-[#ff851b] text-xl font-bold">
              นี่คือปุ่มกดสมัคร
            </p>
          </button>
        </div>
      )}
      {timesClicked === 1 && (
        <button onClick={() => setTimesClicked(2)}>
          <p className="text-[#ff851b] text-xl font-bold">
            คุณกดสมัครแล้ว คุณต้องการเข้าร่วมการแข่งขันนี้ใช่หรือไม่
          </p>
        </button>
      )}
      {timesClicked === 2 && (
        <button onClick={() => setTimesClicked(3)}>
          <p className="text-[#ff851b] text-xl font-bold">
            คุณต้องการเข้าร่วมการแข่งขันนี้จริง ๆ ใช่หรือไม่
          </p>
        </button>
      )}
      {timesClicked === 3 && (
        <button onClick={() => setTimesClicked(4)}>
          <p className="text-[#ff851b] text-xl font-bold">
            คุณแน่ใจแล้วใช่หรือไม่
          </p>
        </button>
      )}
      {timesClicked === 4 && (
        <button onClick={() => setTimesClicked(5)}>
          <p className="text-[#ff851b] text-xl font-bold">
            โอเค คุณแน่ใจแล้วก็ได้ งั้นก็กดอีก
          </p>
        </button>
      )}
      {timesClicked === 5 && (
        <button
          onClick={() => {
            window.open(
              "https://geandev.contest.codeforces.com/group/y3JXgQG05K/contests",
              "_blank",
              "noreferrer"
            );
            setTimesClicked(6);
          }}>
          <p className="text-[#ff851b] text-xl font-bold">
            กดปุ่มนี้เพื่อสมัคร (ของจริง)
          </p>
        </button>
      )}
      {timesClicked === 6 && <RealPOSN1Component />}
    </div>
  );
}

const RealPOSN1Component = () => {
  return (
    <div className="text-[#ff851b] text-4xl text-center flex flex-col gap-4">
      <h1>
        โจทย์มีทั้งหมด <span className="font-bold text-gray-50">??</span> ข้อ
      </h1>

      <div className="text-blue-300 text-xl max-w-4xl text-left">
      <p>
      เนื่องจากเนื้อหาสอวน.ค่าย 1 ของแต่ละศูนย์ไม่เหมือนกัน
      ขอบเขตเนื้อที่จะออกใน contest นี้ และคาดว่าครอบคลุมเนื้อหาค่าย 1 มีดังนี้
      </p>
      <br></br>
      <ul className="list-disc text-green-300">
      <li>การเขียนโปรแกรมพื้นฐาน</li>
      <li>Print Pattern</li>
      <li>Binary Search</li>
      <li>Prefix Sum</li>
      <li>Standard Template Library (STL):
          <ul className="list-decimal ms-8">
            <li>vector</li>
            <li>stack</li>
            <li>queue</li>
            <li>sort</li>
            <li>lower_bound</li>
            <li>upper_bound</li>
          </ul>
        </li>
      </ul>
      </div>

      <p className="text-green-300">
        โจทย์ออกโดย
        <a
          href="https://codeforces.com/profile/ttamx"
          target="_blank"
          rel="noreferrer"
          className="text-red-600">
          คนแถว ๆ นี้
        </a>
      </p>
    </div>
  );
};


