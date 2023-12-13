import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import TaskCard from "../../Copmonents/Tasks/TaskCard";
import TasksModal from "../../Copmonents/Tasks/TasksModal";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [taskID, setTaskID] = useState(0);

  useEffect(() => {
    fetch("https://task-refactor-server.vercel.app/tasks")
      .then((response) => response.json())
      .then((response) => setTasks(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(taskID);

  const handleModal = (id) => {
    setTaskID(id);
    setIsOpen(!isOpen);
    console.log(id);
  };
  return (
    <div className="h-screen grid">
      <TasksModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskID} />
      <div className="px-10 pt-4">
      
        <div className="flex  gap-5 mt-10">
          <div className="bg-[#D3DDF9] ">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
              <div className="flex gap-1">
                <div className="w-6 h-6 bg-red-500 rounded-l-full"></div>
                <h1>Incomplete</h1>
              </div>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {tasks?.length}
              </p>
            </div>
            <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
              {tasks.map((item) => (
                <TaskCard task={item} handleModal={handleModal} />
              ))}
            </div>
          </div>
          <div className="bg-[#D3DDF9]">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
              <div className="flex gap-1">
                <div className="w-6 h-6 bg-green-500 rounded-l-full"></div>
                <h1>Up Next</h1>
              </div>
              <p className="  bg-primary w-6 h-6 grid place-content-center rounded-md">
                {tasks?.length}
              </p>
            </div>
            <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
              {tasks.map((item) => (
                <TaskCard task={item} handleModal={handleModal} />
              ))}
            </div>
          </div>
          <div className=" bg-[#D3DDF9]">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
              <div className="flex gap-1">
                <div className="w-6 h-6 bg-green-500 rounded-l-full"></div>
                <h1>To Do</h1>
              </div>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {tasks?.length}
              </p>
            </div>
            <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
              {tasks.map((item) => (
                <TaskCard task={item} handleModal={handleModal} />
              ))}
              {tasks.map((item) => (
                <TaskCard task={item} handleModal={handleModal} />
              ))}
            </div>
          </div>
          <div className="bg-[#D3DDF9]">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
              <h1>Doing</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {tasks?.length}
              </p>
            </div>
            <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
              {tasks.map((item) => (
                <TaskCard task={item} handleModal={handleModal} />
              ))}
            </div>
          </div>
          <div className="bg-[#D3DDF9]">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
              <h1>Under Review</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {tasks?.length}
              </p>
            </div>
            <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
              {tasks.map((item) => (
                <TaskCard task={item} handleModal={handleModal} />
              ))}
            </div>
          </div>
          <div className="bg-[#D3DDF9]">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
              <h1>Completed</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {tasks?.length}
              </p>
            </div>
            <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
              {tasks.map((item) => (
                <TaskCard task={item} handleModal={handleModal} />
              ))}
            </div>
          </div>
          <div className="bg-[#D3DDF9]">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
              <h1>OverTask</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {tasks?.length}
              </p>
            </div>
            <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
              {tasks.map((item) => (
                <TaskCard task={item} handleModal={handleModal} />
              ))}
            </div>
          </div>
          <div className="bg-[#D3DDF9]">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
              <h1>Archive</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {tasks?.length}
              </p>
            </div>
            <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
              {tasks.map((item) => (
                <TaskCard task={item} handleModal={handleModal} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
