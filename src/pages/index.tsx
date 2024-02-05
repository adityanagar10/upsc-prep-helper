import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import TestData from '@/data/test';
import { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { GrChapterNext } from 'react-icons/gr';

interface Article {
  article_number: number;
  article: string;
}

const inter = Inter({ subsets: ['latin'] });

// ... (previous code)

export default function Home() {
  const indexArray = Object.keys(TestData);

  const [articleObject, setArticleObject] = useState<Article | undefined>();
  const [options, setOptions] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [nextQuestionClicked, setNextQuestionClicked] =
    useState<boolean>(false);
  const [checkAnswerClicked, setCheckAnswerClicked] = useState<boolean>(false);

  useEffect(() => {
    if (nextQuestionClicked) {
      generateNewQuestion();
      setNextQuestionClicked(false); // Reset the state
    }
  }, [nextQuestionClicked, indexArray]);

  const generateNewQuestion = () => {
    const randomIndex =
      indexArray[Math.floor(Math.random() * indexArray.length)];
    const currentArticle = TestData[randomIndex];

    setArticleObject(currentArticle);

    // Generate fixed set of options (you can replace these with your own logic)
    const allOptions = Object.keys(TestData).map(
      (index) => TestData[index].article_number
    );
    const shuffledOptions = shuffleArray(allOptions).slice(0, 3); // Take 3 random options
    shuffledOptions.push(currentArticle.article_number); // Add correct option
    setOptions(shuffleArray(shuffledOptions));

    // Reset answer status
    setIsAnswerCorrect(null);
  };

  const handleOptionSelect = (option: number) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    setCheckAnswerClicked(true);
    if (selectedOption === articleObject?.article_number) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setNextQuestionClicked(true);
    setCheckAnswerClicked(false);
    setSelectedOption(null);
  };

  // Utility function to shuffle array
  const shuffleArray = (array: number[]) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <>
      {/* ... (previous code) */}
      <main className={`${styles.main} ${inter.className}`}>
        <p className={`${styles.questionText}`}>
          {articleObject?.article || 'Unable to retrieve'}
        </p>
        <div className={`${styles.optionContainer}`}>
          {options.map((option, index) => (
            <p
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`${
                selectedOption === option
                  ? isAnswerCorrect && checkAnswerClicked
                    ? `${styles.optionItem} ${styles.correctOptionItem}`
                    : `${styles.incorrectOptionItem}`
                  : styles.optionItem
              }`}
            >
              {option}
            </p>
          ))}
        </div>
        <div className={`${styles.buttonContainer}`}>
          <button className={`${styles.button}`} onClick={checkAnswer}>
            Check Answer <FaLightbulb />
          </button>
          <button className={`${styles.button}`} onClick={handleNextQuestion}>
            {articleObject?.article_number ? (
              <>
                {`Next Question`} <GrChapterNext />
              </>
            ) : (
              'Retrieve Question'
            )}
          </button>
        </div>
        {isAnswerCorrect !== null && (
          <p className={`${styles.answerText}`}>
            {isAnswerCorrect ? 'Correct!' : 'Incorrect!'} The correct answer is{' '}
            {articleObject?.article_number}.
          </p>
        )}
      </main>
    </>
  );
}
