'use client'
import React, { useState } from 'react';
import Link from 'next/link'
// import * as ROUTES from "../constants/routes";
import Image from 'next/image'
import { MultiSelect, MultiSelectProps } from '@uc-react-ui/multiselect';


type formProps = {
    
};

const form:React.FC<formProps> = () => {

    const [value, setValue] = useState(['desktop']);
    const  props: MultiSelectProps = {
	label: 'Tags',
    id: 'Id',
	name: 'tags',
	size: 'small',
	optionList: [
	],
	placeholder: 'Add tags',
	value: value,
	valueChange: setValue
  };
    
    return(
        <div className="p-2">
		    <MultiSelect {...props} />
	    </div>
    )
}
export default form;