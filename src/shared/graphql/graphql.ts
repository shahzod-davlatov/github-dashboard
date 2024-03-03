/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Address = {
  __typename?: 'Address'
  appartament: Scalars['String']['output']
  comment?: Maybe<Scalars['String']['output']>
  house: Scalars['String']['output']
  street: Scalars['String']['output']
}

export type AddressInput = {
  appartament: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  house: Scalars['String']['input']
  street: Scalars['String']['input']
}

export type BaseResponse = {
  __typename?: 'BaseResponse'
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type CalculateDeliveryPackageDto = {
  height: Scalars['Float']['input']
  length: Scalars['Float']['input']
  weight: Scalars['Float']['input']
  width: Scalars['Float']['input']
}

export type CalculateDeliveryPointDto = {
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export type CalculateDeliveryResponse = {
  __typename?: 'CalculateDeliveryResponse'
  options: Array<DeliveryOption>
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type CinemaOrder = {
  __typename?: 'CinemaOrder'
  _id: Scalars['String']['output']
  filmName: Scalars['String']['output']
  orderNumber: Scalars['Float']['output']
  phone: Scalars['String']['output']
  status: CinemaOrderStatus
  tickets: Array<Ticket>
}

export type CinemaOrderInput = {
  _id: Scalars['String']['input']
  filmName: Scalars['String']['input']
  orderNumber: Scalars['Float']['input']
  phone: Scalars['String']['input']
  status: CinemaOrderStatus
  tickets: Array<TicketInput>
}

export enum CinemaOrderStatus {
  Canceled = 'CANCELED',
  Payed = 'PAYED',
}

export type CinemaPersonInput = {
  fullName: Scalars['String']['input']
  id: Scalars['String']['input']
  professions: Array<Profession>
}

export type Country = {
  __typename?: 'Country'
  code: Scalars['String']['output']
  code2: Scalars['String']['output']
  id: Scalars['Float']['output']
  name: Scalars['String']['output']
}

export type CountryInput = {
  code: Scalars['String']['input']
  code2: Scalars['String']['input']
  id: Scalars['Float']['input']
  name: Scalars['String']['input']
}

export type CreateDeliveryOrderAddressDto = {
  appartament: Scalars['String']['input']
  comment?: InputMaybe<Scalars['String']['input']>
  house: Scalars['String']['input']
  street: Scalars['String']['input']
}

export type CreateDeliveryOrderDeliveryOptionDto = {
  days: Scalars['Float']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  price: Scalars['Float']['input']
  type: DeliveryOptionType
}

export type CreateDeliveryOrderPersonDto = {
  firstname: Scalars['String']['input']
  lastname: Scalars['String']['input']
  middlename?: InputMaybe<Scalars['String']['input']>
  phone: Scalars['String']['input']
}

export type CreateDeliveryOrderPointDto = {
  id: Scalars['String']['input']
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
  name: Scalars['String']['input']
}

export type CreatePaymentDebitCardDto = {
  cvv: Scalars['String']['input']
  expireDate: Scalars['String']['input']
  pan: Scalars['String']['input']
}

export type CreatePaymentPersonDto = {
  firstname: Scalars['String']['input']
  lastname: Scalars['String']['input']
  middlename?: InputMaybe<Scalars['String']['input']>
  phone: Scalars['String']['input']
}

export type CreatePaymentSeanceDto = {
  date: Scalars['String']['input']
  time: Scalars['String']['input']
}

export type CreatePaymentTicketsDto = {
  column: Scalars['Float']['input']
  row: Scalars['Float']['input']
}

export type DeliverResponse = {
  __typename?: 'DeliverResponse'
  order: DeliveryOrder
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type DeliveryOption = {
  __typename?: 'DeliveryOption'
  days: Scalars['Float']['output']
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  price: Scalars['Float']['output']
  type: DeliveryOptionType
}

export enum DeliveryOptionType {
  Default = 'DEFAULT',
  Express = 'EXPRESS',
}

export type DeliveryOpttionInput = {
  days: Scalars['Float']['input']
  id: Scalars['String']['input']
  name: Scalars['String']['input']
  price: Scalars['Float']['input']
  type: DeliveryOptionType
}

export type DeliveryOrder = {
  __typename?: 'DeliveryOrder'
  _id: Scalars['String']['output']
  cancellable: Scalars['Boolean']['output']
  payer: Payer
  receiver: DeliveryPerson
  receiverAddress: Address
  receiverPoint: DeliveryPoint
  sender: DeliveryPerson
  senderAddress: Address
  senderPoint: DeliveryPoint
  status: DeliveryStatus
}

export type DeliveryOrderInput = {
  _id: Scalars['String']['input']
  cancellable: Scalars['Boolean']['input']
  payer: Payer
  receiver: DeliveryPersonInput
  receiverAddress: AddressInput
  receiverPoint: DeliveryPointInput
  sender: DeliveryPersonInput
  senderAddress: AddressInput
  senderPoint: DeliveryPointInput
  status: DeliveryStatus
}

export type DeliveryOrderResponse = {
  __typename?: 'DeliveryOrderResponse'
  order: DeliveryOrder
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type DeliveryOrdersResponse = {
  __typename?: 'DeliveryOrdersResponse'
  orders: Array<DeliveryOrder>
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type DeliveryPackageType = {
  __typename?: 'DeliveryPackageType'
  height: Scalars['Float']['output']
  id: Scalars['String']['output']
  length: Scalars['Float']['output']
  name: Scalars['String']['output']
  weight: Scalars['Float']['output']
  width: Scalars['Float']['output']
}

export type DeliveryPackageTypeInput = {
  height: Scalars['Float']['input']
  id: Scalars['String']['input']
  length: Scalars['Float']['input']
  name: Scalars['String']['input']
  weight: Scalars['Float']['input']
  width: Scalars['Float']['input']
}

export type DeliveryPackageTypesResponse = {
  __typename?: 'DeliveryPackageTypesResponse'
  packages: Array<DeliveryPackageType>
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type DeliveryPerson = {
  __typename?: 'DeliveryPerson'
  firstname: Scalars['String']['output']
  lastname: Scalars['String']['output']
  middlename?: Maybe<Scalars['String']['output']>
  phone: Scalars['String']['output']
}

export type DeliveryPersonInput = {
  firstname: Scalars['String']['input']
  lastname: Scalars['String']['input']
  middlename?: InputMaybe<Scalars['String']['input']>
  phone: Scalars['String']['input']
}

export type DeliveryPoint = {
  __typename?: 'DeliveryPoint'
  id: Scalars['String']['output']
  latitude: Scalars['Float']['output']
  longitude: Scalars['Float']['output']
  name: Scalars['String']['output']
}

export type DeliveryPointInput = {
  id: Scalars['String']['input']
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
  name: Scalars['String']['input']
}

export type DeliveryPointsResponse = {
  __typename?: 'DeliveryPointsResponse'
  points: Array<DeliveryPoint>
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export enum DeliveryStatus {
  Canceled = 'CANCELED',
  InProcessing = 'IN_PROCESSING',
  OnMyWay = 'ON_MY_WAY',
  Success = 'SUCCESS',
  WaitingCourier = 'WAITING_COURIER',
}

export type Film = {
  __typename?: 'Film'
  actors: Array<FilmPerson>
  ageRating: Rating
  country?: Maybe<Country>
  description: Scalars['String']['output']
  directors: Array<FilmPerson>
  genres: Array<Scalars['String']['output']>
  id: Scalars['String']['output']
  img: Scalars['String']['output']
  name: Scalars['String']['output']
  originalName: Scalars['String']['output']
  releaseDate: Scalars['String']['output']
  runtime: Scalars['Float']['output']
  userRatings: FilmUserRaiting
}

export type FilmHall = {
  __typename?: 'FilmHall'
  name: Scalars['String']['output']
  places: Array<Array<FilmHallCell>>
}

export type FilmHallCell = {
  __typename?: 'FilmHallCell'
  price: Scalars['Float']['output']
  type: FilmHallCellType
}

export type FilmHallCellInput = {
  price: Scalars['Float']['input']
  type: FilmHallCellType
}

export enum FilmHallCellType {
  Blocked = 'BLOCKED',
  Comfort = 'COMFORT',
  Econom = 'ECONOM',
}

export type FilmHallInput = {
  name: Scalars['String']['input']
  places: Array<Array<FilmHallCellInput>>
}

export type FilmInput = {
  actors?: Array<CinemaPersonInput>
  ageRating: Rating
  country?: InputMaybe<CountryInput>
  description: Scalars['String']['input']
  directors?: Array<CinemaPersonInput>
  genres?: Array<Scalars['String']['input']>
  id: Scalars['String']['input']
  img: Scalars['String']['input']
  name: Scalars['String']['input']
  originalName: Scalars['String']['input']
  releaseDate: Scalars['String']['input']
  runtime: Scalars['Float']['input']
  userRatings: FilmUserRaitingInput
}

export type FilmPerson = {
  __typename?: 'FilmPerson'
  fullName: Scalars['String']['output']
  id: Scalars['String']['output']
  professions: Array<Profession>
}

export type FilmResponse = {
  __typename?: 'FilmResponse'
  film: Film
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type FilmTicketSeance = {
  __typename?: 'FilmTicketSeance'
  date: Scalars['String']['output']
  time: Scalars['String']['output']
}

export type FilmTicketSeanceInput = {
  date: Scalars['String']['input']
  time: Scalars['String']['input']
}

export type FilmUserRaiting = {
  __typename?: 'FilmUserRaiting'
  imdb: Scalars['String']['output']
  kinopoisk: Scalars['String']['output']
}

export type FilmUserRaitingInput = {
  imdb: Scalars['String']['input']
  kinopoisk: Scalars['String']['input']
}

export type FilmsResponse = {
  __typename?: 'FilmsResponse'
  films: Array<Film>
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  calculateDelivery: CalculateDeliveryResponse
  cancelCinemaOrder: BaseResponse
  cancelDeliveryOrder: BaseResponse
  createCinemaPayment: PaymentResponse
  createDeliveryOrder: DeliverResponse
  createOtp: OtpResponse
  signin: SignInResponse
  updateProfile: UpdateProfileResponse
}

export type MutationCalculateDeliveryArgs = {
  package: CalculateDeliveryPackageDto
  receiverPoint: CalculateDeliveryPointDto
  senderPoint: CalculateDeliveryPointDto
}

export type MutationCancelCinemaOrderArgs = {
  orderId: Scalars['String']['input']
}

export type MutationCancelDeliveryOrderArgs = {
  orderId: Scalars['String']['input']
}

export type MutationCreateCinemaPaymentArgs = {
  debitCard: CreatePaymentDebitCardDto
  filmId: Scalars['String']['input']
  person: CreatePaymentPersonDto
  seance: CreatePaymentSeanceDto
  tickets: Array<CreatePaymentTicketsDto>
}

export type MutationCreateDeliveryOrderArgs = {
  option: CreateDeliveryOrderDeliveryOptionDto
  payer: Payer
  receiver: CreateDeliveryOrderPersonDto
  receiverAddress: CreateDeliveryOrderAddressDto
  receiverPoint: CreateDeliveryOrderPointDto
  sender: CreateDeliveryOrderPersonDto
  senderAddress: CreateDeliveryOrderAddressDto
  senderPoint: CreateDeliveryOrderPointDto
}

export type MutationCreateOtpArgs = {
  phone: Scalars['String']['input']
}

export type MutationSigninArgs = {
  code: Scalars['Float']['input']
  phone: Scalars['String']['input']
}

export type MutationUpdateProfileArgs = {
  phone: Scalars['String']['input']
  profile: UpdateProfileProfileDto
}

export type Otp = {
  __typename?: 'Otp'
  _id: Scalars['String']['output']
  code: Scalars['Float']['output']
  created: Scalars['String']['output']
  phone: Scalars['String']['output']
  retryDelay: Scalars['Float']['output']
}

export type OtpInput = {
  _id: Scalars['String']['input']
  code: Scalars['Float']['input']
  created: Scalars['String']['input']
  phone: Scalars['String']['input']
  retryDelay: Scalars['Float']['input']
}

export type OtpResponse = {
  __typename?: 'OtpResponse'
  reason?: Maybe<Scalars['String']['output']>
  retryDelay: Scalars['Float']['output']
  success: Scalars['Boolean']['output']
}

export enum Payer {
  Receiver = 'RECEIVER',
  Sender = 'SENDER',
}

export type PaymentResponse = {
  __typename?: 'PaymentResponse'
  order: Scalars['String']['output']
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export enum Profession {
  Actor = 'ACTOR',
  Director = 'DIRECTOR',
}

export type Query = {
  __typename?: 'Query'
  getCinemaOrders: TicketsResponse
  getCinemaToday: FilmsResponse
  getDeliveryOrder: DeliveryOrderResponse
  getDeliveryOrders: DeliveryOrdersResponse
  getDeliveryPackageTypes: DeliveryPackageTypesResponse
  getDeliveryPoints: DeliveryPointsResponse
  getFilm: FilmResponse
  getFilmSchedule: ScheduleResponse
  session: SessionResponse
}

export type QueryGetDeliveryOrderArgs = {
  orderId: Scalars['String']['input']
}

export type QueryGetFilmArgs = {
  filmId: Scalars['String']['input']
}

export type QueryGetFilmScheduleArgs = {
  filmId: Scalars['String']['input']
}

export enum Rating {
  G = 'G',
  Nc17 = 'NC17',
  Pg = 'PG',
  Pg13 = 'PG13',
  R = 'R',
}

export type Schedule = {
  __typename?: 'Schedule'
  date: Scalars['String']['output']
  seances: Array<ScheduleSeance>
}

export type ScheduleResponse = {
  __typename?: 'ScheduleResponse'
  reason?: Maybe<Scalars['String']['output']>
  schedules: Array<Schedule>
  success: Scalars['Boolean']['output']
}

export type ScheduleSeance = {
  __typename?: 'ScheduleSeance'
  hall: FilmHall
  payedTickets: Array<Ticket>
  time: Scalars['String']['output']
}

export type SessionResponse = {
  __typename?: 'SessionResponse'
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
  user: User
}

export type SignInResponse = {
  __typename?: 'SignInResponse'
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
  token: Scalars['String']['output']
  user: User
}

export type Ticket = {
  __typename?: 'Ticket'
  _id: Scalars['String']['output']
  column: Scalars['Float']['output']
  filmId: Scalars['String']['output']
  phone: Scalars['String']['output']
  row: Scalars['Float']['output']
  seance: FilmTicketSeance
}

export type TicketInput = {
  _id: Scalars['String']['input']
  column: Scalars['Float']['input']
  filmId: Scalars['String']['input']
  phone: Scalars['String']['input']
  row: Scalars['Float']['input']
  seance: FilmTicketSeanceInput
}

export type TicketsResponse = {
  __typename?: 'TicketsResponse'
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
  tickets: Array<Ticket>
}

export type UpdateProfileProfileDto = {
  city: Scalars['String']['input']
  email: Scalars['String']['input']
  firstname: Scalars['String']['input']
  lastname: Scalars['String']['input']
  middlename: Scalars['String']['input']
}

export type UpdateProfileResponse = {
  __typename?: 'UpdateProfileResponse'
  reason?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
  user: User
}

export type User = {
  __typename?: 'User'
  _id: Scalars['String']['output']
  city?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  firstname?: Maybe<Scalars['String']['output']>
  lastname?: Maybe<Scalars['String']['output']>
  middlename?: Maybe<Scalars['String']['output']>
  phone: Scalars['String']['output']
}

export type UserInput = {
  _id: Scalars['String']['input']
  city?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  firstname?: InputMaybe<Scalars['String']['input']>
  lastname?: InputMaybe<Scalars['String']['input']>
  middlename?: InputMaybe<Scalars['String']['input']>
  phone: Scalars['String']['input']
}

export type EffectorQueryVariables = Exact<{ [key: string]: never }>

export type EffectorQuery = {
  __typename?: 'Query'
  getCinemaToday: {
    __typename?: 'FilmsResponse'
    films: Array<{
      __typename?: 'Film'
      id: string
      name: string
      description: string
    }>
  }
}

export const EffectorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'effector' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCinemaToday' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'films' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EffectorQuery, EffectorQueryVariables>
