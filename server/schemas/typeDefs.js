const typeDefs = `#graphql
type UserAccount {
  _id: ID!
  username: String
  email: String
  notes: [UserNotes]
  options: UserOptions
  workouts: [Workout]
}

type UserNotes {
  _id: ID!
  noteTitle: String
  noteBody: String
}

type UserOptions {
  _id: ID!
  darkMode: Boolean
  fitnessGoal: String
}

type Workout {
  _id: ID!
  workoutName: String
  workoutCategory: String
  workoutDescription: String
  workoutNotes: String
  assignedExercises: [AssignedExercise]
}

type AssignedExercise {
  _id: ID!
  exercise: Exercise
  goalSets: Int
  goalReps: Int
  goalWeight: Int
  performance: [Performance]
}

type Performance {
  _id: ID!
  numberOfSet: Int
  dropSet: Boolean
  numberOfReps: Int
  weight: Int
  # * Subject to change
  dateCompleted: String
}

type Query {
  getAllUserAccounts: [UserAccount]
  getOneUserAccount(_id: ID!): UserAccount
  getOneUserWorkouts(userId: ID!): [Workout]
}

type Mutation {
  setUserOptions(userId: ID!, darkMode: Boolean, fitnessGoal: String): UserAccount
  createNewWorkout(userId: ID!, workoutName: String!, workoutCategory: String, workoutSubCategory: [String], workoutDescription: String, workoutNotes: String): Workout
  updateWorkout(workoutId: ID!, workoutName: String, workoutCategory: String, workoutSubCategory: [String], workoutDescription: String, workoutNotes: String): Workout
  deleteWorkout(workoutId: ID!, userId: ID!): Workout
}
`

module.exports = typeDefs;