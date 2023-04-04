import { QuizData } from '@customTypes/QuizData'

export async function getQuizData(): Promise<QuizData> {
    // Wait 2 seconds to show off the application's suspense state
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // TODO: Replace this with the real API call - getting a CORS error for some reason
    const response = await fetch('./payload.json')
    return await response.json()
}
