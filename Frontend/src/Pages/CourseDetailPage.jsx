import CourseHead from "../Components/CourseHead";

const CourseDetailPage = () => {
    const courseID = sessionStorage.getItem("courseID");
    return (
        <div className="flex w-full h-[100vh] justify-center items-start pt-[70px]">
            <CourseHead courseID={courseID}/>
            {/* const { id } = useParams(); */}
        </div>
    );
};

export default CourseDetailPage;