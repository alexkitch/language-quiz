import { useState } from 'react'
import { Activity } from '@components/Activity/Activity'
import { useQuizData } from '@hooks/useQuizData'
import { LoadingSpinner } from '@components/LoadingSpinner'
import { ActivityData } from '@customTypes/ActivityData'
import { ActivityList } from '@components/Activity/ActivityList'

export const Home = () => {
    const { quizData } = useQuizData()
    const [currentActivity, setCurrentActivity] = useState<ActivityData | null>(
        null
    )

    if (currentActivity) {
        return (
            <Activity
                data-testid="current-activity"
                activity={currentActivity}
                onActivityClosed={() => setCurrentActivity(null)}
            />
        )
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            {quizData.isLoading && <LoadingSpinner />}
            {quizData.isError && (
                <h2 data-testid="fetch-error">Something went wrong</h2>
            )}
            {quizData.isSuccess && quizData.data && (
                <>
                    <h2>CAE</h2>
                    <h1 className="py-10 px-12">{quizData.data?.name}</h1>
                    <ActivityList
                        className="w-full"
                        activities={quizData.data.activities}
                        onSelectActivity={setCurrentActivity}
                    />
                </>
            )}
        </div>
    )
}
