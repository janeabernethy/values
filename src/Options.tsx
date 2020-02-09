import React,  { useEffect, useState } from 'react';
import { Value, getValues } from './values';
import { RouteComponentProps } from 'react-router-dom';
import { Z_FILTERED } from 'zlib';

type TParams = { key: string };

function Options({ match }: RouteComponentProps<TParams>) {
  useEffect(() => {
    console.log(match.params);
    const key = match.params.key;
    fetchOptions(key);
  }, []);

  const [options, setOptions] = useState(Array());
  const [name, setName] = useState(String)

  const fetchOptions = async (key: string) => {
    const currentOption = getValues().filter(value => value.key === key)[0]

    setName(currentOption.name);
    setOptions(currentOption.options);
  }

    return (
      <div>
        <div>{name}</div>
        {options.map(aValue =>
          <div>{aValue}</div>  
        )}
      </div>
    );
  }

  export default Options;