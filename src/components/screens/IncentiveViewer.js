import React, { useState, useHook, useEffect } from 'react';


const cleanNumber = (str) => str.replace(/[^0-9.]/g, '')
const formatCurrency = (num) => num.toLocaleString('en-US', { style: 'currency', currency: 'USD' })


const IncentiveGroup = ({ data }) => {

    return (
        <div>
            <h2 className="is-size-4 
            has-text-white-bis 
            has-text-weight-semibold
            mb-1 mt-4 ml-2 is-underlined
            "
            >{data[0].entityname} - ({data[0].entitytype})</h2>
            <div className='columns is-multiline'>

                {data.map(d => {
                    return (
                        <div className='column is-full'>
                            <div className='box is-semi-transparent p-3 mx-1 my-0'>
                                <div className='is-size-5'>{d.incentivedescription}</div>
                                <div className='is-size-6'>
                                    <span className='is-italic'>{d.incentivetype}</span>
                                    <span className='has-text-weight-semibold'> - {d.maxamount || d.percentlimit}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}


const SavingsViewer = ({ groupData, defaultAmount = 20000, address }) => {

    let totals = []
    
    Object.keys(groupData).map(key => {
        let total = 0
        groupData[key].forEach(d => {
            total += d.maxamount ? 
            parseFloat(cleanNumber(d.maxamount)) :
            ((parseFloat(cleanNumber(d.percentlimit)) / 100) * defaultAmount)
        })
        totals.push({ entitytype: key, total })
    })

    return (
        <div>
            <div className='box is-semi-transparent mt-6 ml-4'>
                <p className='is-size-4 mb-1'>Heat Pump Incentives for {address}</p>
                <p className='is-size-7 has-text-grey mb-4'>*Savings calculated on a {formatCurrency(defaultAmount)} project.</p>
                {totals.map(d => (
                    <p className='is-flex is-justify-content-space-between'>
                        <span className='i-italic'>{d.entitytype}:</span> <span>{formatCurrency(d.total)}</span>
                    </p>
                ))}
                <p className='is-size-5 is-flex is-justify-content-space-between has-text-weight-semibold'>
                    <span className=''>Total:</span>
                    <span className=''>{formatCurrency(totals.reduce((acc, d) => acc + d.total, 0))}</span>
                </p>

                
            </div>
        </div>
    )
}



const IncentiveViewer = ({ data = [], onBack, address }) => {

    let [groupedData, setGroupedData] = useState({})
    useEffect(() => {
        groupData()
    }, [data])


    const groupData = () => {
        let res = {}

        data.forEach(d => {
            console.log(d)
            if (!res[d.entitytype]) {
                res[d.entitytype] = []
            }
            if (!res[d.entitytype].map(_incentive => _incentive.incentivedescription).includes(d.incentivedescription)) {
                res[d.entitytype].push(d)
            }
        })

        console.log(res)
        setGroupedData(res)
    }



    return (
        <div className="hero is-fullheight bg-windmill">
            <div className="m-4">
                <div className='columns mx-4'>
                    <div className='column is-half'>
                        {Object.keys(groupedData).map(d =>
                            <IncentiveGroup data={groupedData[d]} />
                        )}
                    </div>
                    <div className='column is-half'>
                        <SavingsViewer groupData={groupedData} address={address}/>
                        <div className='is-flex is-justify-content-flex-end'>
                            <button className='button is-warning is-rounded mt-5 is- is-right' onClick={onBack}>Enter another address</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncentiveViewer;