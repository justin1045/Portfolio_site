import React, { useState } from "react";

function Certificate() {
  const [clickedHR, setClickedHR] = useState(false);

  return (
    <>
      <main className="min-h-screen text-white p-12 flex flex-col gap-8">
        <h1 className="text-3xl font-semibold text-center">
          Certificates I have Earned ...
        </h1>
        <div className="certificates flex felx-wrap justify-center items-center gap-4">
          <div
            className={`certificate border-1 w-[320px] h-[220px] p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                clickedHR ? "w-full h-full" : ""
            }`}
            onClick={() => setClickedHR(!clickedHR)}
          >
            <img
              src="/cer-1.png"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

        </div>
      </main>
    </>
  );
}

export default Certificate;