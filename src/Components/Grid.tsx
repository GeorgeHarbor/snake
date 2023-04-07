import React, { useState } from 'react'
import purposeEnum from '../Classes/purposeEnum';
import GridItem from './GridItem';

interface Props {
    grid: purposeEnum[][]
}

const Grid = ({ grid }: Props) => {

    return (
        <div className='grid'>
            {grid.map((arr) => (
                arr.map((curr) => {
                    let key = Math.random()
                    return <GridItem value={curr} key={key} />
                })
            ))}
        </div>
    )
}

export default Grid
