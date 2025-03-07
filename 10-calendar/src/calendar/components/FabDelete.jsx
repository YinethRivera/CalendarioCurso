import React from 'react'
import { useCalendarStore } from '../../hooks/useCalendarStore'

export const FabDelete = () => {

  const { startDeletingtEvent, hasEventSelected} = useCalendarStore();

  const handleDelete = () =>{

    startDeletingtEvent();
    
  }

  return (
    <button className="btn btn-danger fab-danger"
     onClick={handleDelete}
      style={{
         display: hasEventSelected ? '': 'none'
    }}>

      <i className="fas fa-trash-alt"></i>
    </button>
  );
}
