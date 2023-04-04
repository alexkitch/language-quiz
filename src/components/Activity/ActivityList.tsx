import { ActivityData } from '@customTypes/ActivityData'
import { Row } from '@components/Row'

export type ActivityListProps = {
    activities: ActivityData[]
    className?: string
    onSelectActivity?: (activity: ActivityData) => void
}

export const ActivityList = (props: ActivityListProps) => {
    const orderedActivities = props.activities.sort((a, b) => a.order - b.order)

    return (
        <ul className={props.className}>
            {orderedActivities.map((activity) => (
                <Row
                    key={activity.activity_name}
                    onClick={() => props.onSelectActivity?.(activity)}
                >
                    {activity.activity_name}
                </Row>
            ))}
        </ul>
    )
}
