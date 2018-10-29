import React from 'react'
import Table from '../components/table'
import PositionTableTitle from '../components/positiontabletitle'
import '../../css/stadistics.scss'

function Stadistics (props) {

        return(
           <div>
               <PositionTableTitle
                title="TABLA DE POSICIONES"
               />
              <div className="StadisticsContainer">
                <table>
                        <tr>
                            <th>Pos</th>
                            <th>Club</th>
                            <th>JJ</th>
                            <th>JG</th>
                            <th>JE</th>
                            <th>JP</th>
                            <th>GF</th>
                            <th>GC</th>
                            <th>Dif</th>
                            <th>Ext</th>
                            <th>PTS</th>
                        </tr>
                        {
                        props.teams.map((item) => {
                            return(
                                    <Table
                                        key = {item.id}
                                        {...item} 
                                    />
                                )
                                })
                                }  
                    </table>   
                </div>
           </div>
            
        )
    
}

export default Stadistics