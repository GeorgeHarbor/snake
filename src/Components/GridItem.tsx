import React, { useState } from 'react'
import purposeEnum from '../Classes/purposeEnum'

interface Props {
    value: purposeEnum
}


const GridItem = ({value} : Props) => {

    const [purpose, setPurpose] = useState<purposeEnum>(value);
  return (
    <div className={`grid-item ${purposeEnum[`${purpose}`]}`}></div>
  )
}

export default GridItem