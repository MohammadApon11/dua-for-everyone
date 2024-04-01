import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import "./range.css";
import Image from "next/image";

const SingleDua = ({ dua, index }) => {
  // destructure dua need property
  const {
    dua_name_en,
    dua_id,
    audio,
    bottom_en,
    clean_arabic,
    dua_arabic,
    dua_indopak,
    refference_en,
    top_en,
    translation_en,
    transliteration_en,
  } = dua || {};

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [show, setShow] = useState(false);
  const [disableEndedBtn, setDisableEndedBtn] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef?.current?.play();
    } else {
      audioRef?.current?.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setShow(!show);
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const updateDuration = () => {
    setDuration(audioRef.current.duration);
  };

  const handleChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const handleAutoPlay = () => {
    setIsPlaying(true);
    setDisableEndedBtn(!disableEndedBtn);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  const handleEnded = () => {
    setIsPlaying(false);
    setShow(false);
  };

  return (
    <div id={dua_id} className="bg-white rounded-[10px] mb-5">
      <div className="p-6">
        <div>
          <div className="flex flex-row justify-start items-center ">
            <img src="/dua/allah.png" alt="duacard" className="mr-3" />
            <p className="text-[#1FA45B] font-medium -dua-title">
              {index + 1}. {dua_name_en}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="w-full">
            <p className="  text-[18px]  mt-5 text-justify leading-8 font-normal">
              <span> {top_en}</span>
            </p>
            <p
              className=" my-8 text-right leading-loose text-3xl"
              style={{
                wordSpacing: "8px",
                fontSize: "24px",
                fontFamily: "me_quran",
              }}
            >
              <span> {dua_arabic}</span>
            </p>
            <p className="  text-[18px]  my-5 text-justify leading-8 italic">
              <span
                id="transliteration"
                className=" text-[18px] -dua-title -dua-title font-medium"
              >
                Transliteration:
              </span>{" "}
              <span> {transliteration_en}</span>
            </p>
            <p
              id="translation"
              className="  text-[18px]  my-5 text-title text-justify font-normal"
            >
              <span className=" text-[18px] -dua-title -dua-title font-medium">
                Translation:
              </span>{" "}
              <span> {translation_en}</span>
            </p>
          </div>
          <div>
            <p className="mt-5 text-[18px]  font-normal text-[#1FA45B]">
              Reference:
            </p>
            <div className="mt-1 text-[18px] font-normal ">
              <span> {refference_en}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-row items-center px-6 ${
          audio ? "justify-between" : "justify-end"
        }`}
      >
        {audio && (
          <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
            <audio
              loop={disableEndedBtn}
              ref={audioRef}
              src={audio}
              onTimeUpdate={updateTime}
              onLoadedMetadata={updateDuration}
              onEnded={() => {
                if (disableEndedBtn) {
                  console.log("Audio ended!");
                } else {
                  handleEnded();
                }
              }}
            ></audio>
            <div className="flex flex-row items-center gap-x-3 xs:w-full">
              <img
                onClick={togglePlay}
                className="cursor-pointer"
                src={isPlaying ? "/dua/pause.svg" : "/dua/audio.svg"}
                alt=""
              />{" "}
              <div className={`flex items-center gap-6 ${show ? "block" : "hidden"}`}>
                <div className="range_container">
                  <input
                    className="range"
                    type="range"
                    value={currentTime}
                    max={duration}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
                <Image
                className={`cursor-pointer ${!disableEndedBtn && "opacity-60"}`}
                  src="/dua/suffle.svg"
                  width={30}
                  height={20}
                  onClick={handleAutoPlay}
                  alt="Suffle"
                />
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center text-left flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
          <div
            id="copy"
            onClick={() =>
              toast.success("Copeid!", {
                style: { backgrouColor: "black" },
                className: " h-[70px] flex text-left",
              })
            }
            className="relative w-6"
          >
            <img className="cursor-pointer" src="/dua/copy.png" alt="copy" />
            <div id="copy_show" className="absolute -top-10 -right-3">
              <div className="relative">
                <p className="bg-black  text-sm px-2 py-1 rounded-md text-white">
                  Copy
                </p>
                <img
                  className="absolute -bottom-2 left-5"
                  src="/green-corner.svg"
                  alt="green-corner"
                />
              </div>
            </div>
          </div>
          <div id="bookmark" className="relative w-6">
            <img
              onClick={() =>
                toast.success("Comming Soon In sha llah!", {
                  position: "top-right",
                  className: "w-[260px] h-[70px] flex text-left",
                })
              }
              className="cursor-pointer"
              src="/dua/bookmarks.png"
              alt="bookmark"
            />
            <div id="bookmark_show" className="absolute -top-10 -right-3">
              <div className="relative">
                <p className="bg-black  text-sm px-2 py-1 rounded-md text-white">
                  Bookmark
                </p>
                <img
                  className="absolute -bottom-2 left-5"
                  src="/green-corner.svg"
                  alt="green-corner"
                />
              </div>
            </div>
          </div>
          <div id="plan" className="relative w-6">
            <img
              onClick={() =>
                toast.success("Comming Soon In sha llah!", {
                  position: "top-right",
                  className: "w-[260px] h-[70px] flex text-left",
                })
              }
              className="cursor-pointer"
              src="/dua/plan.png"
              alt="plan"
            />
            <div id="plan_show" className="absolute -top-10 -right-3">
              <div className="relative">
                <p className="bg-black  text-sm px-2 py-1 rounded-md text-white">
                  Memorize
                </p>
                <img
                  className="absolute -bottom-2 left-5"
                  src="/green-corner.svg"
                  alt="green-corner"
                />
              </div>
            </div>
          </div>
          <div id="share" className="relative w-6">
            <img
              onClick={() =>
                toast.success("Comming Soon In sha llah!", {
                  position: "top-right",
                  className: "w-[260px] h-[70px] flex text-left",
                })
              }
              className="cursor-pointer"
              src="/dua/share.png"
              alt="share"
            />
            <div id="share_show" className="absolute -top-10 -right-3">
              <div className="relative">
                <p className="bg-black  text-sm px-2 py-1 rounded-md text-white">
                  Share
                </p>
                <img
                  className="absolute -bottom-2 left-5"
                  src="/green-corner.svg"
                  alt="green-corner"
                />
              </div>
            </div>
          </div>
          <div id="report" className="relative w-6">
            <img
              onClick={() =>
                toast.success("Comming Soon In sha llah!", {
                  position: "top-right",
                  className: "w-[260px] h-[70px] flex text-left",
                })
              }
              className="cursor-pointer"
              src="/dua/report.svg"
              alt="report"
            />
            <div id="report_show" className="absolute -top-10 -right-3">
              <div className="relative">
                <p className="bg-black  text-sm px-2 py-1 rounded-md text-white">
                  Report
                </p>
                <img
                  className="absolute -bottom-2 left-5"
                  src="/green-corner.svg"
                  alt="green-corner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDua;
