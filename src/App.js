import './App.css';
import One from "./component/One";
import Two from './component/Two'
import PRofile from './component/Profile'
import Navbar from './Navbar';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
<div className="App">
<BrowserRouter>
<Navbar/>
<Route path='/one' component={One}/>

  <Route path='/two' component={Two}/>
  <Route path='/profile' component={PRofile}/>
 <h3>  الجَزائِر أو، هي دولة عربية ذات سيادة تقع في شمال أفريقيا. عاصمتها وأكثر مدنها اكتظاظا بالسكان هي مدينة الجزائر، وتقع في أقصى شمال البلاد. بمساحة تبلغ 2 381 741 كيلومتر مربع، الجزائر هي عاشر أكبر بلد في العالم، والأولى إفريقياً وعربياً ومتوسطياً والثانية في العالم الإسلامي بعد جمهورية كازاخستان
</h3>
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"/>

  </BrowserRouter>
</div>
);
}

export default App