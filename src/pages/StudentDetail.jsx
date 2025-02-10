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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">{student.name}'s Details</h2>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Enrollment Date:</strong> {new Date(student.enrollmentDate).toLocaleDateString()}</p>

      <button
        onClick={() => navigate(-1)} 
        className="mt-4 px-4 py-2 bg-[#873e23] text-white rounded hover:bg-gray-400"
      >
        Back
      </button>
      <Link
         to={`/students/${student.id}/edit`}
         className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
         >
         Edit
        </Link>
    </div>
  );
};

export default StudentDetail;
