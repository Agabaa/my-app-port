import RESULTS from "../util/resultsData.js";


function ResultsComponent(){
    console.log('My results',RESULTS);

        
    const myResults=RESULTS.map(result =>
        <tr>
            <td>{result.course}</td>
           <td>{result.mark}</td>
            <td>{result.cu}</td>
            <td>{result.gp}</td>
              

              <td>75</td>
              <td>4</td>
              <td>4.5</td>
            </tr>
        
    );
    
    return (
      <>
      
          <h4>Year 1 Results</h4>
          <hr />
          <table border="3">
            <tr>
              <th>COURSE</th>
              <th>MARK</th>
              <th>CU</th>
              <th>GP</th>
            </tr>
            <tr>
              <td>Essential Hardware and Software Concepts</td>
              <td>86</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Fundamentals of Computing</td>
              <td>78</td>
              <td>4</td>
              <td>4.5</td>
            </tr>
            <tr>
              <td>Structured Programming</td>
              <td>75</td>
              <td>4</td>
              <td>4.5</td>
            </tr>
            <tr>
              <td>Discrete Mathematics</td>
              <td>66</td>
              <td>3</td>
              <td>3.5</td>
            </tr>
            <tr>
              <td>Writing and Study Skills</td>
              <td>63</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Understanding the Old Testament</td>
              <td>86</td>
              <td>3</td>
              <td>5</td>
            </tr>
          </table>
      </>
  
    )
  }
export default ResultsComponent;  

// import RESULTS from "../util/resultsData.js";
// import ResultsComponent from "./app/resultsComponent.js";


// function ResultsComponent() {
//     console.log('My results', RESULTS);

//     return (
//         <table border="1">
//             <thead>
//                 <tr>
//                     <th>Course</th>
//                     <th>Mark</th>
//                     <th>Credit Units (CU)</th>
//                     <th>Grade Points (GP)</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {RESULTS.map(result => (
//                     <tr key={result.id}>
//                         <td>{result.course}</td>
//                         <td>{result.mark}</td>
//                         <td>{result.cu}</td>
//                         <td>{result.gp}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// }

// export default ResultsComponent;
