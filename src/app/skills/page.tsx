import { skills } from '../../data/skills';
import { SiHtml5 } from 'react-icons/si';


const elements = [ 
  { tittle:"", icon: <SiHtml5/> }
]
export default function SkillsPage() {

  const { web } = skills.frontEnd;
  return (
    <div>
      <h1>Habilidades</h1>
      <p>Estas son las habilidades que posee actualmente</p>

      <div className="grid grid-cols-4 gap-2 p-4 mb-4 bg-slate-400 rounded-md">
        {  web.map( ( { tittle, icon, color } ) => {
          return (
            <div className="p-2 bg-slate-300 rounded-md  flex flex-col items-center">
              
              {
                !icon 
                ? <div className='size-[30px] bg-amber-400 rounded-lg'>
                </div>
                : icon 
              }
              <h2 className='uppercase font-mono font-semibold'>{ tittle }</h2>
            </div>
          )
        } ) }
      </div>
    </div>
  );
}