import { useState } from "react";

export default function Round2Button() {
  const [timesClicked, setTimesClicked] = useState<number>(0);
  return (
    <div>
      {timesClicked === 0 && (
        <div className="flex flex-col items-center gap-5">
          <RealRound2Component />
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
      {timesClicked === 6 && <RealRound2Component />}
    </div>
  );
}

const RealRound2Component = () => {
  return (
    <div className="text-[#ff851b] text-4xl text-center flex flex-col gap-4">
      <h1>
        โจทย์มีทั้งหมด <span className="font-bold text-gray-50">3</span> ข้อ
      </h1>
      <h2 className="text-blue-300">เนื้อหาไม่เกินที่เรียนในค่ายหรอก (มั้ง)</h2>
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
