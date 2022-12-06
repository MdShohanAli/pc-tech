import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mx-20 mt-20' >
                <h2 className='text-xl' > What is Context API ? </h2>
                <p className='mt-5' >The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            </div>
            <div className='mx-20 mt-20' >
                <h2 className='text-xl' > What is Semantic tag ? </h2>
                <p className='mt-5' >Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.For example,
                    <pre>
                        &lt;header&gt;
                        &lt;footer&gt;
                        &lt;article&gt;
                    </pre>
                    are considered semantic elements as they clearly describe their purpose and the type of content they should enclose. e pages made with semantic elements are much easier to read. It has greater accessibility. It offers a better user experience.</p>
            </div>
        </div>
    );
};

export default Blogs;