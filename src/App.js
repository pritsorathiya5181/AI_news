import React, { useEffect, useState } from 'react';

import NewsCards from './components/NewsCards/NewsCards';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '8037c1ae453fa7068039b786259722472e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    console.log(articles);
                    setNewsArticles(articles);
                }
            }
        })
    }, [])

    return (
        <div>
            <h1>Alan AI News Applications</h1>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App;
