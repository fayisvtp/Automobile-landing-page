import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

export default function DateTime() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <DateTimePicker
      className="color-none"
        onChange={setValue}
        value={value}
        style={{ backgroundColor: '#ffc107', }} // Set your desired background color
      />
    </div>
  );
}
