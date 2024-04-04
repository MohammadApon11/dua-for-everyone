import React, { useEffect, useState } from "react";
import SingleDua from "./SingleDua";
import getduas from "@/hooks/getDuas";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { colorData } from "./colorData";
import { AiFillCheckCircle } from "react-icons/ai";
import toast from "react-hot-toast";

const Duas = ({ subCategory }) => {
  // Initialize state to hold the fetched duas using the 'useState' hook
  const [duas, setduas] = useState([]);

  // Make a GET request to the "/api/duas" endpoint
  useEffect(() => {
    // Call getduas and handle the resolved promise
    getduas().then((data) => {
      // Do something with the fetched duas
      setduas(data);
    });
  }, []);

  // Destructuring assignment to extract 'subcat_name_en' and 'subcat_id' from the 'subCategory' object
  const { subcat_name_en, subcat_id } = subCategory || {};

  // Filtering the list of duas based on the 'subcat_id' obtained from the 'subCategory'
  const filteredDuas = duas?.filter((dua) => dua.subcat_id === subcat_id) || [];

  const [folderName, setFolderName] = useState("");
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [folderOpenId, setFolderOpenId] = useState("");
  const [menubarFolderName, setMenuBarFolderName] = useState("");
  const [reload, setReload] = useState(false);

  const handleFolderName = (name) => {
    setMenuBarFolderName(name);
    setFolderName(name);
    setIsFolderOpen(false);
  };

  const onChangeBookmarkInput = (bookMarkFromInput) => {
    setFolderName(bookMarkFromInput);
    if (bookMarkFromInput.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleColor = (color) => {
    setColor(color);
  };

  const [bookmarks, setBookmarks] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("bookmarkData")) || [];
    return savedData;
  });

  const saveBookmarkInfo = () => {
    document.getElementById("my_modal_2").close();
    const data = { id: folderOpenId, folderName, color };

    // Check if localStorage already contains bookmarks
    let bookmarks = localStorage.getItem("bookmarks");
    bookmarks = bookmarks ? JSON.parse(bookmarks) : [];

    // Check if the bookmark with the same dua_id already exists
    const existingBookmarkIndex = bookmarks.findIndex(
      (bookmark) => bookmark.folderOpenId === folderOpenId
    );

    if (existingBookmarkIndex === folderOpenId) {
      // If the bookmark already exists, show a warning toast
      toast("Bookmark already exists!");
    } else {
      // If the bookmark doesn't exist, add it to the array and store it in localStorage
      bookmarks.push(data);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      toast.success("saved in local storage!");
      setReload(!reload);
    }
    setFolderName("");
  };

  const handleModalOpen = (fromFolderOpenId) => {
    document.getElementById("my_modal_2").showModal();
    setFolderOpenId(fromFolderOpenId);
  };

  useEffect(() => {
    // Load bookmarks from local storage on component mount
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, [reload]);

  return (
    <>
      <div
        id={subcat_name_en}
        className="flex undefined mb-5 flex-row bg-white rounded-[10px] px-5 py-4 justify-start items-center "
      >
        <p className="font-medium leading-[25px]  text-ms">
          <span className="text-[#1FA45B]">Section:</span> {subcat_name_en}
        </p>
      </div>
      <div>
        {filteredDuas.map((dua, index) => (
          <SingleDua
            key={index}
            index={index}
            dua={dua}
            handleModalOpen={handleModalOpen}
            bookmarks={bookmarks}
          />
        ))}
      </div>

      <dialog id="my_modal_2" className="modal z-50">
        <div className="modal-box bg-white text-black">
          <div>
            <h3 className="font-bold text-lg">Favorite!</h3>
            <p className="pt-3 pb-1">Folder Name</p>
            <div
              onClick={() => setIsFolderOpen(!isFolderOpen)}
              className={`cursor-default rounded-lg flex items-center justify-between px-7 py-3 relative ${"border"}`}
            >
              {menubarFolderName ? menubarFolderName : "Favorite"}
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            </div>
            <ul
              className={`mt-1 rounded-lg border ${
                isFolderOpen ? "block" : "hidden"
              }`}
            >
              <p className="py-3 px-7 font-semibold">Existing Folder</p>
              {bookmarks.map((item, index) => (
                <li
                  key={index}
                  className="px-7 py-2 cursor-default hover:bg-green-100"
                  onClick={() => handleFolderName(item?.folderName)}
                >
                  {item?.folderName}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-semibold pb-1">Or,</p>
            <input
              defaultValue={setFolderName}
              onChange={(e) => onChangeBookmarkInput(e.target.value)}
              className="placeholder:text-[15px] font-normal border w-full rounded-lg px-7 py-3 focus:border-green-600 outline-none"
              placeholder="Create new bookmak folder"
              type="text"
            />
            {error && (
              <span className="text-red-500 text-[14px]">
                Please enter a valid folder name
              </span>
            )}
            <p className="text-gray-600 pb-2 font-semibold mt-8">
              Change Folder Color
            </p>
            <div className="flex items-center  justify-between">
              {colorData.map((item, index) => (
                <div
                  onClick={() => handleColor(item?.className)}
                  className={`rounded-lg relative w-10 h-10 ${item?.className}`}
                  key={index}
                >
                  <AiFillCheckCircle
                    className={`text-xl text-white absolute top-[10px] left-[10px] ${
                      item?.className == color ? "block" : "hidden"
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end mt-4">
              <div className="flex items-center gap-10">
                <button
                  className="py-3 px-8 flex itece justify-center bg-gray-200 rounded-lg text-gray-600"
                  onClick={() => document.getElementById("my_modal_2").close()}
                >
                  Cancel
                </button>
                <button
                  className="py-3 px-8 flex itece justify-center bg-green-500 rounded-lg text-white"
                  onClick={() => saveBookmarkInfo(folderOpenId)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Duas;
