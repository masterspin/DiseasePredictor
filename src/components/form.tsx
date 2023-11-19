'use client'
import React, { useState } from 'react';
import { symptoms } from './symptoms';
import { MultiSelect, MultiSelectProps } from '@uc-react-ui/multiselect';

type formProps = {
    
};
const Form = () => {
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
  const [probabilities, setProbablitites] = useState(['']);
  const [moreinfo, setMoreinfo] = useState(['']);
  const [hidden, setHidden] = useState(false);
  async function handleOnSubmit(value:any) {
    let headers = new Headers();
    headers.append('Content-Type','application/json')
    headers.append('Access-Control-Allow-Origin', 'https://flask-bug-catcher.onrender.com/')
    await fetch("https://flask-bug-catcher.onrender.com/model", {
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
          setMoreinfo(data.responses)
          setProbablitites(data.percentages)
          setHidden(true)
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
    return(
        <div className="p-2 ">
            <div className='justify-center flex items-center pt-4 pl-4'>
		    <MultiSelect {...props} />
            <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 ml-5 mt-4 mr-5 border-b-4 border-blue-700 hover:border-blue-500 rounded' disabled={value.length == 1} onClick={() => handleOnSubmit(value)}>Enter</button>
            </div>
            <div style={{ display: hidden ? "block" : "none" }}>
            <div className="container mx-auto px-4 py-10">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Potential Diagnosis Results</h2>
                    {/* <div className="mt-4">
                        <p className="text-lg text-gray-600">{predictions['2']}</p>
                        <p className="text-lg text-gray-600">{predictions['1']}</p>
                        <p className="text-lg text-gray-600">{predictions['0']}</p>
                    </div> */}
                </div>

                <div className="mt-12">
                    {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">Learn More About Each Condition</h3> */}
                    
                    {/* Placeholder cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                            <div className="flex items-center">
                                {/* <Bs1Circle className="text-3xl text-blue-500"/> */}
                                <div className="ml-4">
                                <h4 className="text-xl font-semibold text-gray-800">1. {predictions['2']}</h4>
                                    <h3 className="text-md italic text-gray-800">likelihood - {probabilities['2']}%</h3>
                                    <p className="text-gray-600 mt-1">{moreinfo[2]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                            <div className="flex items-center">
                                {/* <Bs2Circle className="text-3xl text-blue-500"/> */}
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold text-gray-800">2. {predictions['1']}</h4>
                                    <h3 className="text-md italic text-gray-800">likelihood - {probabilities['1']}%</h3>
                                    <p className="text-gray-600 mt-1">{moreinfo[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                            <div className="flex items-center">
                                {/* <Bs3Circle className="text-3xl text-blue-500"/> */}
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold text-gray-800">3. {predictions['0']}</h4>
                                    <h3 className="text-md italic text-gray-800">likelihood - {probabilities['0']}%</h3>
                                    <p className="text-gray-600 mt-1">{moreinfo[0]}</p>
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
            <div className="max-w-md mx-auto bg-gray-100 border border-gray-300 p-6 rounded-lg shadow-md my-4" style={{ display: !hidden ? "block" : "none" }}>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Welcome to our Disease Predictor</h2>
      <p className="text-gray-700">
        Our model employs machine learning to analyze data, aiming to predict diseases early. Paired with an intuitive frontend, the model's output is presented in a user-friendly interface, offering clear insights and predictions. To help us provide you with the most accurate predictions, please enter your symptoms in the box below. Describe how you're feeling using specific terms. For example, you might mention 'fever', 'headache', 'nausea', or any other sensations or observations you deem relevant. The more detailed your description, the better we can assist you. Please remember, this tool is for informational purposes only and should not replace professional medical advice.
      </p>
    </div>
        </div>
    )
}
export default Form;