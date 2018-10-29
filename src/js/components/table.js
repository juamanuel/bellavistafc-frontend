import React from 'react'
import '../../css/table.scss'
const Table = (props) => (
            <tr>
                <td>{props.stadistics[0].position}</td>
                <td>{props.stadistics[0].name}</td>
                <td>{props.stadistics[0].round}</td>
                <td className="JG">{props.stadistics[0].win}</td>
                <td className="JE">{props.stadistics[0].draw}</td>
                <td className="JP">{props.stadistics[0].lose}</td>
                <td>{props.stadistics[0].gf}</td>
                <td>{props.stadistics[0].gc}</td>
                <td>{props.stadistics[0].diff}</td>
                <td>{props.stadistics[0].extra_points}</td>
                <td className="PTS">{props.stadistics[0].points}</td>
            </tr>
   
)
 export default Table