import { SubCollection, ISubCollection, Collection } from 'fireorm'
import UserQuizQuestion from './userQuizQuestion'

@Collection()
class UserQuiz {
    id!: string
    userID!: string
    quizID!: string

    score: number | null = null
    quizStart: number | null = null
    submitted = false
    released = false
    openTime?: Date
    closeTime?: Date

    @SubCollection(UserQuizQuestion, 'Question')
    questions?: ISubCollection<UserQuizQuestion>
    created: Date = new Date()
    modified: Date = new Date()
    deleted: Date | null = null
}

export default UserQuiz
