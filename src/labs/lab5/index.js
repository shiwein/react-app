import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
    return (
        <div>
            <h1>Assignment5</h1>
            <div className="list-group">
                <a href="http://localhost:4000/lab5/welcome"
                className="list-group-item">
                    welcome
                </a>
            </div>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays />
            <br />
        </div>
    );
}
export default Assignment5;