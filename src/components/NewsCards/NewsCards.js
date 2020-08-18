import NewsCard from '../NewsCard/NewsCard';
import React from 'react';

function NewsCards({ articles }) {
    return (
        <div>
            {articles.map((article, i) => (
                <NewsCard />
            ))}
        </div>
    )
}

export default NewsCards
