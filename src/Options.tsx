import React,  { useEffect, useState } from 'react';
import { Value, getValues } from './values';

function Options() {
  useEffect(() => {
    fetchOptions();
  }, []);

  const [options, setOptions] = useState(Array());
  const [name, setName] = useState(String)
  const fetchOptions = async () => {
    console.log("HERE 1");
    const allVals = getValues()
    const currentOption = allVals[0]
    setName(currentOption.name);
    setOptions(currentOption.options);
  
  }

    return (
      <div>
        {name}
      </div>
    );
  }

  export default Options;