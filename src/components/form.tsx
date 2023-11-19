'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { symptoms } from './symptoms';
import { usePathname } from 'next/navigation'
// import * as ROUTES from "../constants/routes";
import Image from 'next/image'
import { MultiSelect, MultiSelectProps } from '@uc-react-ui/multiselect';
import * as ROUTES from "../constants/routes";
import { useSearchParams } from 'next/navigation'
import { Bs1Circle, Bs2Circle, Bs3Circle } from 'react-icons/bs'

type formProps = {
    
};
const form:React.FC<formProps> = () => {
    const router = useRouter()
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
  const [predictions, setPredictions] = useState(['']);
  async function handleOnSubmit(value:any) {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080')
    await fetch("http://localhost:8080/model", {
          method:'POST',
          headers: headers,
          body: JSON.stringify({feature_matrix: value})
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data.message);
          setPredictions(data.message)
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
    return(
        <div className="p-2 ">
            <div className='justify-center flex items-center'>
		    <MultiSelect {...props} />
            <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => handleOnSubmit(value)}>Enter</button>
            </div>
            <div>
            <div className="container mx-auto px-4 py-10">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Potential Diagnosis Results</h2>
                    <div className="mt-4">
                        <p className="text-lg text-gray-600">{predictions['2']}</p>
                        <p className="text-lg text-gray-600">{predictions['1']}</p>
                        <p className="text-lg text-gray-600">{predictions['0']}</p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Learn More About Each Condition</h3>
                    
                    {/* Placeholder cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                            <div className="flex items-center">
                                <Bs1Circle className="text-3xl text-blue-500"/>
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold text-gray-800">{predictions['2']}</h4>
                                    <p className="text-gray-600 mt-1">Brief description or summary...</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                            <div className="flex items-center">
                                <Bs2Circle className="text-3xl text-blue-500"/>
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold text-gray-800">{predictions['1']}</h4>
                                    <p className="text-gray-600 mt-1">Brief description or summary...</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                            <div className="flex items-center">
                                <Bs3Circle className="text-3xl text-blue-500"/>
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold text-gray-800">{predictions['0']}</h4>
                                    <p className="text-gray-600 mt-1">Brief description or summary...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* More information section (commented for future use) */}
                    {/* {userDiagnoses.map((diagnosis, index) => (
                        <div key={index} className="mb-6 p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-2xl text-gray-900 font-semibold">{diagnosis.name}</h3>
                            <p className="mt-2 text-gray-600">{diagnosis.description}</p>
                        </div>
                    ))} */}
                </div>
            </div>
            </div>
        </div>
    )
}
export default form;