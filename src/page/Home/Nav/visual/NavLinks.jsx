import React from 'react'
import { Button } from 'grommet'
import { Shop } from 'grommet-icons';
 


const ArrayLinks = [
   {name:'About', path:'/about', id:0}, 
   {name:'News', path:'/news', id:1},
   {name:'Contact', path:'/contact', id:2}
]

const NavLinks = () => {
     
   return (
     <div>
       {ArrayLinks.map((element, index) => (
         
<Button key={index}
//   icon={ <Add src='../../assets/automation.png'/>  }
// icon={<Icons.Edit /> }
  icon={<Shop size='small' /> }
  label={element.name}
  onClick={() => {}}
/>

       ))}
     </div>
   );
 };
 
 export default NavLinks

