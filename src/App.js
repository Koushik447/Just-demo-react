import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./Data";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catagory, setCatagory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Network Problem");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-800">
      <div>
        <Navbar></Navbar>
      </div>

      <div className=" bg-slate-800">
        <div>
          <Filter filterData={filterData} catagory={catagory} setCatagory={setCatagory} />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {
              loading ? (<Spinner/>) : (<Cards courses={courses} catagory={catagory}></Cards>)
            }
        </div>

      </div>

    
    </div>
  );
}

export default App;
