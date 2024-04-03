import React from 'react'
import Avatar from '../../components/Avatar'
import Text from '../../components/Text'
import Picture from '../../components/Picture'
import Title from '../../components/Title'
import avatar from '../../assets/avatar/avatar.png';

const Article = ({ detail }) => {
    return (
        <div>
            <div className='container max-w-3xl flex flex-col items-center m-auto mt-5 '>
                <div className='flex self-start px-14'>
                    <Avatar source={avatar} />
                    <div className='flex justify-start flex-col'>
                        <p className='px-3 text-md'>{detail.authorName}</p>
                        <p className='px-3 text-sm text-gray-500'>
                            Graphic Designer, CEO</p>
                        <p className='px-3 text-sm text-gray-500'>
                            Feb. 8, 2023
                        </p>
                    </div>
                </div>
                <Title>{detail.title}</Title>
                <Text>
                    {detail.content}
                </Text>
                <Picture source={detail.image} />
                <Text>
                    Flowbite is an open-source library of UI components built with the utility-first classes
                    from Tailwind CSS.It also includes interactive elements such as dropdowns, modals, datepickers.
                </Text>
            </div>
            <div className='h-10' />
        </div>
    )
}
export default Article