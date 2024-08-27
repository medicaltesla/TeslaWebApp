import React from 'react'

const FAQ = () => {
  return (
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className='title-font text-center mt-3 mb-3'>F.A.Q</h2>
                <p className="text-gray-900 text-xl text-center mb-4">Although we have shared all the information with you on our website, if there are any queries that are unaddressed,
                you can find the answers to them below in our FAQs:</p>
            <div className="space-y-4">
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-4 focus:outline-none focus-visible:ri">What is the cost of your services?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 mt-2">We are a premium service provider. Your Profile Evaluation,Un-biased University Recommendation, SOP/LOR/Resume review and Application Assistance is completely free. You can get the help of our Premium Counseling Experts in University/Course recommendation refinement, SOP Story lining and editing support for a service fee. Request a call back to know more. </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-4 focus:outline-none focus-visible:ri">Why Maxxcell Overseas Education Consultancy?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 mt-2">We are the most trusted organization for overseas counseling and exam preparation. Our team of certified counselors and number of students studying abroad is the reason good enough to associate with us for your study abroad journey. We will support your international education journey not only in a transactional manner but also through your needs of accommodation, on-campus guidance. We are always available to you through our transparent communication platform.</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-4 focus:outline-none focus-visible:ri">Is there an admission guarantee?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 mt-2">No one can guarantee admission. If they do, they are lying. We maximize your admission chances by applying to 4-7 universities. Till date, we have 100% admit record for over 5000+ student applicants. Check our testimonials.</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-4 focus:outline-none focus-visible:ri">How do I get satrted?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 mt-2">Your journey with Maxxcell is simple. Drop a text on WhatsApp number 8806788552.</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-4 focus:outline-none focus-visible:ri">Will you help me with my SOP?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 mt-2">Yes, we provide students with a list of questions that help you write your first draft of SOP post which our experts guide you on the subtle levels like language, tone, snytax and style.</p>
                </details>
            </div>
        </div>
  );
}

export default FAQ