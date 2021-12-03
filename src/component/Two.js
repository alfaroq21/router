import { Link } from "react-router-dom"


function Two(){
    return(
        <div>
            <h3>ليبيا أو، هي دولة عربية تقع في شمال أفريقيا يحدها البحر المتوسط من الشمال، ومصر شرقا والسودان إلى الجنوب الشرقي وتشاد والنيجر في الجنوب، والجزائر، وتونس إلى الغرب. وتبلغ مساحتها ما يقرب من 1.8 مليون كيلومتر مربع، وتعد ليبيا رابع أكبر دولة مساحةً في أفريقيا، وتحتل الرقم 17 كأكبر بلدان العالم مساحةً</h3>

            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg"/>






            <Link to='/one'>
            <button> ارجـع </button></Link>
        </div>
    )
}
export default Two