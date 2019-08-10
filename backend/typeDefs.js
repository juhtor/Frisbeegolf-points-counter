const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date
    type User {
      username: String!
      friends: [User!]!
      id: ID!
    }
    type Token {
      value: String!
    }
    type Location {
      name: String!
      id: ID!
    }
    type Round {
      location: Location!
      users: [User!]!      
      date: Date!
      id: ID!
    }
    type Play {
      round: Round!
      playNumber: Int!
      id: ID!
    }
    type Point {
      round: Round!
      user: User!
      trackIndex: Int!
      points: Int!
      id: ID!
    }
    type Query {      
      allUsers: [User!]!
      allLocations: [Location!]!
      allRounds(location: String): [Round!]!
      allPlays(roundId: ID, playNumber: Int, username: String): [Play!]!
      allPoints(roundId: ID!, userId: ID, trackIndex: Int): [Point]
      allFriends(username: String): [User]      
      me: User
      login(username: String!, password: String!): Token
    }
    type Mutation {
      login(
        username: String!
        password: String!
      ): Token
      addUser(
        username: String!
        password: String!
      ): User
      addFriend(
        username: String!
      ): User
      addLocation(
        name: String!
      ): Location
      addRound(
        locationId: ID!
        userIds: [ID!]!
      ): Round
      addPlay(
        roundId: ID!
        playNumber: Int!
      ): Play
      addPoint(
        roundId: ID!
        userId: ID!
        trackIndex: Int!
        points: Int!
      ): Point
      addNewTrack(
        roundId: ID!
      ): [Point]
      deleteLastTrack(
        roundId: ID!
      ): Int
      deleteUser(
        username: String!
        ): User
      deleteRound(
        roundId: ID!
      ): Round
      deleteLocation(
        name: String!
      ): Location
    }
    type Subscription {
      playAdded: Play
    }
    `
module.exports = typeDefs