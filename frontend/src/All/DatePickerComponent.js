// DatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ selectedDate, handleDateChange }) => {
  return (
    <div className="date-picker-container">
      <label htmlFor="fecha">Fecha de reserva:</label>
      <DatePicker
        id="fecha"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} // Para permitir solo fechas futuras
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
};

export default DatePickerComponent;
