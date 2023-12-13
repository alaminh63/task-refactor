import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import TaskCard from "../../Copmonents/Tasks/TaskCard";
import TasksModal from "../../Copmonents/Tasks/TasksModal";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const options = { method: "GET" };
  useEffect(() => {
    fetch("http://localhost:3000/tasks", options)
      .then((response) => response.json())
      .then((response) => setTasks(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(tasks);
  
  return (
    <div className="h-screen grid">
        
        <TasksModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="px-10 pt-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">Tasks</h1>
          </div>
          <div className="flex gap-5">
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="btn btn-primary">Add Task</button>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
          </div>
        </div>
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
                <TaskCard task={item} isOpen={isOpen} setIsOpen={setIsOpen}  />
              ))}
            </div>
          </div>
          <div className="bg-[#D3DDF9]">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
              <h1>Up Next</h1>
              <p className=" text-white w-6 h-6 grid place-content-center rounded-md">
                {tasks?.length}
              </p>
            </div>
            <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
              {tasks.map((item) => (
                <TaskCard task={item} isOpen={isOpen} setIsOpen={setIsOpen}  />
              ))}
            </div>
          </div>
          <div className=" bg-[#D3DDF9]">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
              <h1>To Do</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                {tasks?.length}
              </p>
            </div>
            <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
              {tasks.map((item) => (
                <TaskCard task={item} isOpen={isOpen} setIsOpen={setIsOpen}  />
              ))}
              {tasks.map((item) => (
                <TaskCard task={item} isOpen={isOpen} setIsOpen={setIsOpen}  />
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
                <TaskCard task={item} isOpen={isOpen} setIsOpen={setIsOpen}  />
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
                <TaskCard task={item} isOpen={isOpen} setIsOpen={setIsOpen}  />
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
                <TaskCard task={item} isOpen={isOpen} setIsOpen={setIsOpen}  />
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
                <TaskCard task={item} isOpen={isOpen} setIsOpen={setIsOpen}  />
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
                <TaskCard task={item} isOpen={isOpen} setIsOpen={setIsOpen}  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
