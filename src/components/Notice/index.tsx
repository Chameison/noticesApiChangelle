import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css"
interface Notice {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { [key: string]: string };
  title: string;
  url: string;
  urlToImage: string;
}

const Notice: React.FC = () => {
  const [newsData, setNewsData] = useState<Notice[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: 'a89d575ee38b409f901a3dec244c7606',
          },
        });
        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Falha na requisição:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {newsData.map((article, index) => (
        <div key={index} className="card">
          <img src={article.urlToImage} alt={article.title} />
          <div className="card-content">
            <h2>{article.title}</h2>
            <h3>Descrição :</h3>
            <span> {article.description}</span>

            <h3>Leia na integra:</h3>
            <p> {article.content}</p>
            <p>Autor: {article.author}</p>

            <a className='button' href={article.url}>LEIA MAIS</a>
          </div>
          <div className='line'></div>

        </div>
      ))}
    </div>
  );
};

export default Notice;
