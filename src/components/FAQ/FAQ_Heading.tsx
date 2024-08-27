import React, {FC} from 'react'

interface CardProps {
    heading: string;
    para: string;
  }
const FAQ_Heading: FC<CardProps> = ({ heading, para }) => {
  return (
    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h3 className="title-font sm:text-3xl text-2xl font-bold mb-6 mt-4 text-center">{heading}</h3>
        <p className="text-gray-900 text-center">{para}:</p>
    </div>
  )
}

export default FAQ_Heading;