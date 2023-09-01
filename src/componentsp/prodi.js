import React, { useState } from 'react'
import list from './data'
import Compo from './compo'
import '../componentsp/producte.css'

const Prodi = ({ handleClick }) => {

  return (
    <section>
        {
            list.map((item) => (
            <Compo key={item.id} item={item} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Prodi;