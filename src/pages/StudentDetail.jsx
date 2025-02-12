import { Link, useNavigate, useParams } from "react-router-dom";
import { studentsData } from "../context/StudentContext";

const StudentDetail = () => {
  const { id } = useParams() 
  const navigate = useNavigate();
  const student = studentsData.find((student) => student.id === Number(id));


  if (!student) {
    return <p className="text-center text-gray-600">Student not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">{student.name}'s Details</h2>
       <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-600">Name:</p>
            <p className="text-gray-800">{student.name}</p>
          </div>
          
          <div>
            <p className="font-semibold text-gray-600">Email:</p>
            <p className="text-gray-800">{student.email}</p>
          </div>
          
          <div>
            <p className="font-semibold text-gray-600">Age:</p>
            <p className="text-gray-800">{student.age}</p>
          </div>
          
          <div>
            <p className="font-semibold text-gray-600">Course:</p>
            <p className="text-gray-800">{student.course}</p>
          </div>
          
          <div>
            <p className="font-semibold text-gray-600">Enrollment Date:</p>
            <p className="text-gray-800">{student.enrollmentDate}</p>
          </div>
        </div>

      <button
        onClick={() => navigate(-1)} 
        className="mt-4 px-4 py-1 bg-[#873e23] text-white rounded hover:bg-gray-400"
      >
        Back
      </button>
      <Link
         to={`/students/${student.id}/edit`}
         className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ml-2"
         >
         Edit
        </Link>
    </div>
  );
};

export default StudentDetail;



