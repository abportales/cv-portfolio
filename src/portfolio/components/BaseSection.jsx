import React from 'react'

export const BaseSection = ({
    title,
    subtitle,
    job,
    technologies,
    period,
    list,
    sublist,
}) => {
    return (
        <>
            <h4>{title} {(subtitle.length > 0) ? <span>{subtitle}</span> : ''}</h4>
            <h5>{job} {(technologies.length > 0) ? <span>{technologies}</span> : ''}</h5>
            <h5 className='period'>{period} </h5>
            <ul>
                {
                    list.map((item) => (
                        <li key={item.id}> {item.p} </li>
                    ))
                }
                {
                    (sublist.length > 0) && (
                        < ul >
                            {
                                sublist.map((item) => (
                                    <li key={item.id}> {item.p} </li>
                                ))
                            }
                        </ul>)
                }
            </ul>
        </>
    )
}