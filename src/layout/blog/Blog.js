import React, { useEffect } from 'react'
import Article from '../../components/Article';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../provider/AuthContext';

const Blog = () => {
    const { user } = useData();
    const navigate = useNavigate();
    useEffect(() => {
        if(user.email === "" || user.email === undefined ) navigate('/');
    }, [user])
    const articles = [
        {
            authorName: `Darren Edward`,
            title: `Flowbite is an open-source library of UI components`,
            content: `Flowbite is an open-source library of UI components built with the utility-first classes
                  from Tailwind CSS.It also includes interactive elements such as dropdowns, modals, datepickers.
      
                  Before going digital, you might benefit from scribbling down some ideas in a sketchbook.
                  This way, you can think things through before committing to an actual design project.
      
                  But then I found a component library based on Tailwind CSS called Flowbite.
                  It comes with the most commonly used UI components, such as buttons, navigation bars,
                  cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.`,
            image: `https://i.ibb.co/3C5HvxC/img-2.png`
        }
    ]

    return (
        <>
        {articles && articles.map((value, index) =>
            <Article key={index} detail={value} />
            )}
        </>
    );
}
export default Blog

