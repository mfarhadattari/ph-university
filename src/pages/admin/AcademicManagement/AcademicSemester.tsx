import { useGetAcademicSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data, error } = useGetAcademicSemestersQuery(null);
  console.log({ data, error });
  return (
    <div>
      <h1>Academic Semester Page</h1>
    </div>
  );
};

export default AcademicSemester;
