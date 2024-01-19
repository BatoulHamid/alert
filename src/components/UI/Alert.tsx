import './index.scss'

import { XSquare } from 'lucide-react';
import { ReactNode } from 'react';
import { AlertType } from '../../types';


interface Iprops {
    type:AlertType;
    title:string;
    icon:ReactNode;
    description?: string;
    children?: ReactNode;
 }

const Alert =({type,title,icon, description,children}:Iprops) => {


    return (
   <div className={type}>
   <div className='alert-header'>
   <div className='title'>
  {icon}
   <h3 >{title}</h3>
   </div>
 
    <span> <XSquare /></span>
      
   </div>
   <div className='alert-text'> 
   { children?  children : <p>{description}</p>} </div>
  
   </div>  
  )
  }
  
  export default Alert;