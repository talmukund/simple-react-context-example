import React, {useEffect} from 'react'
import { Chart } from 'react-google-charts';
import {Conetxt} from '../context';
import { data } from '../service'

export default function charts() {
    const value = React.useContext(Conetxt);
    useEffect(() => {
        value.setData(data);
    }, [])
    if(!value.data.length) return <div>Loading Chart</div>
    return (
        <Chart
            width={600}
            height={'300px'}
            chartType="Sankey"
            data={value.data}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}
