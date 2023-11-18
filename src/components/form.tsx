'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import { symptoms } from './symptoms';
// import * as ROUTES from "../constants/routes";
import Image from 'next/image'
import { MultiSelect, MultiSelectProps } from '@uc-react-ui/multiselect';

type formProps = {
    
};

const form:React.FC<formProps> = () => {
    async function handleOnSubmit(){
        console.log(value)
    }
    const [value, setValue] = useState(['']);
    const  props: MultiSelectProps = {
	label: 'Select All Symptoms',
	name: 'tags',
	size: 'small',
	optionList: symptoms,
	placeholder: 'Add tags',
	value: value,
	valueChange: setValue
    
  };
    return(
        <div className='center'>
            <div className="p-2 w-1/2 flex">
		        <MultiSelect {...props} />
                <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={handleOnSubmit}>Enter</button>
	        </div>
        </div>
    )
    console.log(value)
}
export default form;