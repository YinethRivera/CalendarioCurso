import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../calendar/calendarslice';

export const useCalendarStore = () => {
  const dispatch = useDispatch()

    const {events, activeEvent} = useSelector (state => state.calendar);

    const setActiveEvent = ( calendarEvent) =>{
      dispatch(onSetActiveEvent (calendarEvent));
    }

    const startSavingEvent = async(calendarEvent) =>{

      //todo llegar al backend

      //todo nice

      if(calendarEvent._id){

        dispatch(onUpdateEvent({...calendarEvent}))

      }else{
        dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime()}));
      }

}


const startDeletingtEvent = () =>{
  dispatch(onDeleteEvent());
}

  return {
    //*propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //*metodos
    startDeletingtEvent,
    setActiveEvent,
    startSavingEvent,
  };
}
