import { Link } from "react-router-dom"
function Two(){
    return(
        <div  style={{    backgroundColor: 'blue'}}>
            <h3>تونس هي دولة في أقصى شمال أفريقيا. وهي جزء من منطقة المغرب العربي، وتحدها الجزائر من الغرب والجنوب الغربي، ليبيا من الجنوب الشرقي والبحر الأبيض المتوسط من الشمال والشرق. تغطي 163,610 كم مربع، ويبلغ عدد سكانها 11 مليون نسمة</h3>
<img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg"/>




            <Link to='/two'>
            <button> ارجـع </button></Link>
        </div>
    )
}
export default Two