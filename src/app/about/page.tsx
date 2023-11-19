import Image from 'next/image'
import Header from '../../components/header'

export default function About() {
  return (
    <div>
      <Header/>
<div className='justify-center mx-20'>
<h1 className='font-semibold text-xl pb-4 pt-2'>Disclaimer</h1>
<h2 className='font-semibold text-lg'>1. General Information Only</h2>

<p>The disease predictor is designed to provide general information and insights based on the symptoms entered. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>

<h2 className='font-semibold text-lg'>2. No Doctor-Patient Relationship</h2>

<p>Use of the disease predictor does not create a doctor-patient relationship. The information provided is for general informational purposes only.</p>

<h2 className='font-semibold text-lg'>3. Accuracy and Reliability</h2>

<p>While we strive to use commercially acceptable means to ensure the accuracy of our model, we cannot guarantee that the predictions will be accurate, complete, or up-to-date.</p>

<h2 className='font-semibold text-lg'>4. Limitation of Liability</h2>

<p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from the use or inability to use this service.</p>
<h2 className='font-semibold text-lg'>5. Model Limitations</h2>

<p className='pb-4'>We currently only have enough data to predict 41 diseases from 131 symptoms that can be seen in our <a className='text-blue-500' href='https://github.com/masterspin/DiseasePredictor'>GitHub.</a></p>
<hr></hr>
<h1 className='font-semibold text-xl pb-4 pt-2'>Terms of Service</h1>


<h2 className='font-semibold text-lg'>1. Acceptance of Terms</h2>

<p>By using the disease predictor, you agree to be bound by these terms of service.</p>

<h2 className='font-semibold text-lg'>2. User Responsibilities</h2>

<p>You agree to provide accurate and complete symptom information.
You will not use the service for any unlawful purpose.</p>
<h2 className='font-semibold text-lg'>3. Intellectual Property</h2>

<p>The content, design, and algorithms of the disease predictor are the property of [Your Company Name] and are protected by intellectual property laws.</p>

<h2 className='font-semibold text-lg'>4. Privacy Policy</h2>

<p>Your use of the disease predictor is also governed by our Privacy Policy, which explains how we handle personal data.</p>

<h2 className='font-semibold text-lg'>5. Changes to Terms</h2>

<p>We reserve the right to modify these terms at any time. Your continued use of the service following any such changes constitutes your acceptance of the new terms.</p>

<h2 className='font-semibold text-lg'>6. Governing Law</h2>

<p>These terms shall be governed by the laws of Michigan without regard to its conflict of law provisions.</p>

<h2 className='font-semibold text-lg'>7. Contact Information</h2>

<p>For any questions or concerns regarding these terms, please contact us at rjutur@umich.edu.</p>
</div>
    </div>
  )
}
