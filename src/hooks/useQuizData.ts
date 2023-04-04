import { useQuery } from 'react-query'
import { getQuizData as getQuizData } from '@api/getQuizData'

export function useQuizData() {
    const quizData = useQuery('questions', getQuizData, {
        refetchOnWindowFocus: false,
    })

    return {
        quizData,
    }
}
