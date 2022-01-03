import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Search.css'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' //date picker styles
import 'react-date-range/dist/theme/default.css' //date picker theme
import { Button } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'

//Date picker search component
function Search() {
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleDateSelection = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    return (
        <div className='search'>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleDateSelection}
            />
            <h2>
                Number of Guests
                <PeopleIcon />
            </h2>
            <input
                min={0}
                defaultValue={2}
                type='number'
            />
            <Button
                onClick={() => navigate('/search')}
                variant='outlined'
            >Search Airbnb</Button>
        </div>
    )
}

export default Search
