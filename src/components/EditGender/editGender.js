import React from 'react'
const data = [
    { id: 1, label: 'Male' },
    { id: 2, label: 'Female' },
    { id: 3, label: 'Other' }
]
import EditContentList from '/src/components/UI/editContentList'
export default function editGender(props) {
    const { onPressBack } = props
    return (
        <EditContentList
            data={data}
            onPressBack={onPressBack}
            title={'I Am'}
        />
    )
}
