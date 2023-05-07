import { useEffect, useState } from 'react';

interface Props {
  fact: string;
}

export const CatFact = ({ fact }: Props) => {
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    if (fact.length > 0) {
      const words = fact.split(' ');
      setCatImage(`${words[0]} ${words[1]} ${words[2]}`);
    }
  }, [fact]);

  return (
    <div className=" flex justify-center h-full items-center">
      {fact.length > 0 ? (
        <div className="my-8 w-10/12 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
          <figure>
            <img
              src={`https://cataas.com/cat/says/${catImage}`}
              className="rounded-t h-96 w-full object-cover"
            />
            <figcaption className="p-4">
              <small
                className="leading-5 text-gray-500 dark:text-gray-400"
                x-text="post.description">
                {fact}
              </small>
            </figcaption>
          </figure>
        </div>
      ) : (
        <p className="text-lg italic">You have to load a cat fact...</p>
      )}
    </div>
  );
};
