import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import PercentageObject from '@/data/common-fractions';
import { useCallback, useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { GrChapterNext } from 'react-icons/gr';

interface Percentage {
  percentage: string;
  value: string;
}

interface Percentages {
  [key: string]: Percentage;
}

const inter = Inter({ subsets: ['latin'] });

// Utility function to shuffle array
const shuffleArray = (array: string[]) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function Home() {
  const indexArray = Object.keys(PercentageObject);

  const [percentageObject, setPercentageObject] = useState<Percentage>({
    percentage: '',
    value: '',
  });
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [shouldGenerateNewQuestion, setShouldGenerateNewQuestion] =
    useState<boolean>(false);
  const [checkAnswerClicked, setCheckAnswerClicked] = useState<boolean>(false);

  const generateNewQuestion = useCallback(() => {
    const randomIndex =
      indexArray[Math.floor(Math.random() * indexArray.length)];
    const currentPercentage = PercentageObject[randomIndex];

    setPercentageObject(currentPercentage);

    // Generate fixed set of options (you can replace these with your own logic)
    const allOptions = Object.keys(PercentageObject).map(
      (index) => PercentageObject[index].percentage
    );

    const shuffledOptions = shuffleArray(allOptions).slice(0, 3); // Take 3 random options
    console.log([allOptions, shuffledOptions]);
    shuffledOptions.push(currentPercentage.percentage); // Add correct option
    setOptions(shuffleArray(shuffledOptions));

    // Reset answer status
    setIsAnswerCorrect(null);
  }, [indexArray]);

  useEffect(() => {
    if (shouldGenerateNewQuestion) {
      generateNewQuestion();
      setShouldGenerateNewQuestion(false); // Reset the state
    }
  }, [shouldGenerateNewQuestion, indexArray, generateNewQuestion]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    setCheckAnswerClicked(true);
    if (selectedOption === percentageObject?.percentage) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setShouldGenerateNewQuestion(true);
    setCheckAnswerClicked(false);
    setSelectedOption(null);
  };

  return (
    <>
      {/* ... (previous code) */}
      <main className={`${styles.main} ${inter.className}`}>
        <p className={`${styles.questionText}`}>
          {percentageObject?.value || 'Unable to retrieve'}
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
            {percentageObject?.percentage ? (
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
            {percentageObject?.percentage}.
          </p>
        )}
      </main>
    </>
  );
}
