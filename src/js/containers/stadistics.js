import React from 'react'
import Table from '../components/table'
import PositionTableTitle from '../components/positiontabletitle'
import '../../css/stadistics.scss'

function Stadistics (props) {
    //console.log(props.teams)

    const tempArray = props.teams
  
    const mapped = tempArray.map(function(el, i) {
        console.log(i,el.stadistics[0])
        return { index: i, value: el.stadistics[0]}
      })

    mapped.sort(function(a, b) {
        console.log(a,b)
        if (a.value.points < b.value.points) {
          return 1
        }
        if (a.value.points > b.value.points) {
          return -1
        }
        return 0
      })

      const result = mapped.map(function(el){
        return tempArray[el.index]
      })

        return(
           <div>
               <PositionTableTitle
                title="TABLA DE POSICIONES"
               />
              <div className="StadisticsContainer">
                <table>
                    <thead>
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
                    </thead>
                    <tbody>
                    
                        {
                        result.map((item) => {
                            //console.log(item)
                            //const order = item.stadistics[0].points.sort()
                            //console.log(order)

                            return(
                                    <Table
                                        key = {item.id}
                                        {...item} 
                                    />
                                )
                                })
                        }  
                    </tbody>
                 </table>   
                </div>
           </div>
            
        )
    
}

export default Stadistics