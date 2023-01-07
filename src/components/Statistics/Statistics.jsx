import stat from '../data/data.json'
import s from './Statistics.module.css'
import { randomColor } from './randomColor';
console.log(stat);
const Statistics =()=>{

    return <section className={s.statistics}>
    <h2 className={s.title}>Upload stats</h2>
    <ul className={s.statList}>
{stat.map(({id,label,percentage}) =>(
  <li key={id} className={s.item} style={{ backgroundColor: randomColor() }}>
        <span className={s.label}> {label}</span>
        <span className={s.percentage}> {percentage}</span>
      </li>

))}
    </ul>
  </section>
}
export default Statistics