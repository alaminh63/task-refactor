import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  FaBuffer,
  FaCalendarAlt,
  FaClipboardList,
  FaCommentAlt,
  FaFileArchive,
  FaPage4,
  FaPaperclip,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";
const TaskCard = ({ task, isOpen, setIsOpen, }) => {
  // const task = {
  //   primaryUser: {
  //     name: "Liam Parker",
  //     image:
  //       "https://img.freepik.com/premium-photo/portrait-young-man-sitting-his-desk-office_484651-5103.jpg",
  //   },
  //   secondaryUser: {
  //     name: "Ava Mitchell",
  //     image:
  //       "https://media.istockphoto.com/id/589544922/photo/doing-business-with-his-brain.webp?b=1&s=170667a&w=0&k=20&c=G89mfsUcdhKc5clWfOYVZUGHNQn0rM6m5cupzML6WoA=",
  //   },
  //   description: "Introduction to the subject.",
  //   avatar1: "https://img.freepik.com/premium-photo/portrait-young-man-sitting-his-desk-office_484651-5103.jpg",
  //   avatar2: "https://media.istockphoto.com/id/589544922/photo/doing-business-with-his-brain.webp?b=1&s=170667a&w=0&k=20&c=G89mfsUcdhKc5clWfOYVZUGHNQn0rM6m5cupzML6WoA=",
  //   totalComments: 12,
  //   totalViews: 160,
  //   totalAttachments: [
  //     { attachmentName: "Introduction.pdf" },
  //     { attachmentName: "Graphs.xlsx" },
  //   ],
  //   date: "22-11-2023",
  // };

  const [fileSelected, setFileSelected] = useState(false);
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newFiles = [];
    for (let i = 0; i < fileList.length; i++) {
      newFiles.push(fileList[i]);
    }
    setFiles(newFiles);
  };

  return (
    <div className="bg-gray-100  rounded-md p-5 m-2">
      <div className="flex justify-between mb-2 text-[14px] items-center">
        <div className="flex items-center gap-1 ">
          <img
            className="w-8 h-8 rounded-full"
            src={task?.primaryUser?.image}
            alt=""
          />
          <h1 className="">{task?.primaryUser?.name}</h1>
        </div>
        <div className="flex items-center gap-1">
          <img
            className="w-8 h-8 rounded-full"
            src={task?.secondaryUser?.image}
            alt=""
          />
          <h1 className="">{task?.secondaryUser?.name}</h1>
        </div>
      </div>
      <div className="text-[12px] mb-3 flex justify-between items-center">
        <div className="flex gap-1">
          <FaBuffer />
          <p className="text-[12px]">{task?.description}</p>
        </div>
        <div className="flex items-center gap-1 ">
          <FaClipboardList />
          <p>1/2</p>
        </div>
      </div>
      <div className="flex text-[13px] justify-between items-center ">
        <div>
          <img className="w-7 h-7 rounded-full" src={task?.avatar1} />
        </div>
        <div>
          <img className="w-7 h-7 rounded-full" src={task?.avatar2} />
        </div>
        <div>
          <p>{task?.totalViews}+</p>
        </div>
        <div className="flex gap-1 items-center">
          <FaCommentAlt />
          <p>{task?.totalComments}</p>
        </div>
        <div className="flex gap-1 items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaPaperclip />
          </button>
            <p>25</p>
        </div>
        <div className="flex gap-1 items-center">
          <FaCalendarAlt />
          <p>{task?.date}</p>
        </div>
      </div>
      {/* <div>
        <input type="file" multiple onChange={handleFileChange} />
        {files.length > 0 && (
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default TaskCard;
