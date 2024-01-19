import Alert from "./components/UI/Alert";
import { AlertCircle } from 'lucide-react';
import { BookCheck } from 'lucide-react';

function App() {
 

  return (
    <div>
<Alert type="alert-danger" title="Some thing wrong"
   icon={ <AlertCircle />} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Eum quia ipsum iure error? Suscipit dolore exercitationem a, at tenetur numquam inventore 
   voluptatem aliquam?
   Repellat reprehenderit soluta sit voluptatem nostrum porro."
   
   
   />
   <div>
    <Alert type= "info" title="This is info"
   icon={  <BookCheck />} >
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Eum quia ipsum iure error? Suscipit dolore exercitationem a, <a>link here</a>at tenetur numquam inventore 
   voluptatem aliquam? </p>
   </Alert>

   
   
  </div>

    </div>
   

   
)
}

export default App;
