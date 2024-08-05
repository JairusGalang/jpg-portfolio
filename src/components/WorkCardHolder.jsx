import React from 'react'
import PropTypes from 'prop-types'

const WorkCardHolder = ({ title, responsibilities, company, timeline, icons }) => {
    return (
        <div className="p-4 space-y-4 space-x-2 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="font-poppins text-lg textBlack font-bold mb-6 text-center">💼 {title}</h2>
            <div className="mt-4">
                <h3 className="font-poppins text-sm textBlack font-semibold mb-1">📋 Responsibilities</h3>
                <p className="font-poppins text-xs text-gray-500">{responsibilities}</p>
            </div>
            <div className="mt-3">
                <h3 className="font-poppins text-sm textBlack font-semibold mb-1">🏢 Company</h3>
                <p className="font-poppins text-xs  text-gray-500">{company}</p>
            </div>
            <div className="mt-3">
                <h3 className="font-poppins text-sm textBlack font-semibold mb-1">📅 Timeline</h3>
                <p className="font-poppins text-xs text-gray-500">{timeline}</p>
            </div>
            <div className="mt-3">
                <h3 className="font-poppins text-sm textBlack font-semibold mb-1">🧑‍💻 Technology Used</h3>
                {icons && (
                    <div className="flex flex-wrap gap-2">
                        {icons.map((icon, index) => (
                            <span key={index} className="font-poppins text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                {icon}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

WorkCardHolder.propTypes = {
    title: PropTypes.string.isRequired,
    responsibilities: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    icons: PropTypes.array.isRequired,
    timeline: PropTypes.string.isRequired,
}

export default WorkCardHolder