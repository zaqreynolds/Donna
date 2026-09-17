
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * Placeholder for a FASTSIGNS center. Clerk Organization will map here later.
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Industry
 * Core industry taxonomy used when creating accounts.
 */
export type Industry = $Result.DefaultSelection<Prisma.$IndustryPayload>
/**
 * Model TouchType
 * Outreach channel labels used by Touch.type.
 */
export type TouchType = $Result.DefaultSelection<Prisma.$TouchTypePayload>
/**
 * Model SocialPlatform
 * Platforms available when Touch.type is "Social Media".
 */
export type SocialPlatform = $Result.DefaultSelection<Prisma.$SocialPlatformPayload>
/**
 * Model Account
 * Primary prospecting target (business, property, school, GC, etc.).
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model AccountSocialLink
 * 
 */
export type AccountSocialLink = $Result.DefaultSelection<Prisma.$AccountSocialLinkPayload>
/**
 * Model AccountNote
 * 
 */
export type AccountNote = $Result.DefaultSelection<Prisma.$AccountNotePayload>
/**
 * Model Contact
 * Person associated with an Account. Secondary to Account prospecting.
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model ContactNote
 * 
 */
export type ContactNote = $Result.DefaultSelection<Prisma.$ContactNotePayload>
/**
 * Model Touch
 * Prospecting interaction. Always on an Account; optionally on a Contact.
 */
export type Touch = $Result.DefaultSelection<Prisma.$TouchPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.industry`: Exposes CRUD operations for the **Industry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Industries
    * const industries = await prisma.industry.findMany()
    * ```
    */
  get industry(): Prisma.IndustryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.touchType`: Exposes CRUD operations for the **TouchType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TouchTypes
    * const touchTypes = await prisma.touchType.findMany()
    * ```
    */
  get touchType(): Prisma.TouchTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialPlatform`: Exposes CRUD operations for the **SocialPlatform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialPlatforms
    * const socialPlatforms = await prisma.socialPlatform.findMany()
    * ```
    */
  get socialPlatform(): Prisma.SocialPlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountSocialLink`: Exposes CRUD operations for the **AccountSocialLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountSocialLinks
    * const accountSocialLinks = await prisma.accountSocialLink.findMany()
    * ```
    */
  get accountSocialLink(): Prisma.AccountSocialLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountNote`: Exposes CRUD operations for the **AccountNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountNotes
    * const accountNotes = await prisma.accountNote.findMany()
    * ```
    */
  get accountNote(): Prisma.AccountNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactNote`: Exposes CRUD operations for the **ContactNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactNotes
    * const contactNotes = await prisma.contactNote.findMany()
    * ```
    */
  get contactNote(): Prisma.ContactNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.touch`: Exposes CRUD operations for the **Touch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Touches
    * const touches = await prisma.touch.findMany()
    * ```
    */
  get touch(): Prisma.TouchDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    Industry: 'Industry',
    TouchType: 'TouchType',
    SocialPlatform: 'SocialPlatform',
    Account: 'Account',
    AccountSocialLink: 'AccountSocialLink',
    AccountNote: 'AccountNote',
    Contact: 'Contact',
    ContactNote: 'ContactNote',
    Touch: 'Touch'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "industry" | "touchType" | "socialPlatform" | "account" | "accountSocialLink" | "accountNote" | "contact" | "contactNote" | "touch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Industry: {
        payload: Prisma.$IndustryPayload<ExtArgs>
        fields: Prisma.IndustryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndustryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndustryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          findFirst: {
            args: Prisma.IndustryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndustryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          findMany: {
            args: Prisma.IndustryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>[]
          }
          create: {
            args: Prisma.IndustryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          createMany: {
            args: Prisma.IndustryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndustryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>[]
          }
          delete: {
            args: Prisma.IndustryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          update: {
            args: Prisma.IndustryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          deleteMany: {
            args: Prisma.IndustryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndustryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndustryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>[]
          }
          upsert: {
            args: Prisma.IndustryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          aggregate: {
            args: Prisma.IndustryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndustry>
          }
          groupBy: {
            args: Prisma.IndustryGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndustryGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndustryCountArgs<ExtArgs>
            result: $Utils.Optional<IndustryCountAggregateOutputType> | number
          }
        }
      }
      TouchType: {
        payload: Prisma.$TouchTypePayload<ExtArgs>
        fields: Prisma.TouchTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TouchTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TouchTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload>
          }
          findFirst: {
            args: Prisma.TouchTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TouchTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload>
          }
          findMany: {
            args: Prisma.TouchTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload>[]
          }
          create: {
            args: Prisma.TouchTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload>
          }
          createMany: {
            args: Prisma.TouchTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TouchTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload>[]
          }
          delete: {
            args: Prisma.TouchTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload>
          }
          update: {
            args: Prisma.TouchTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload>
          }
          deleteMany: {
            args: Prisma.TouchTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TouchTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TouchTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload>[]
          }
          upsert: {
            args: Prisma.TouchTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchTypePayload>
          }
          aggregate: {
            args: Prisma.TouchTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTouchType>
          }
          groupBy: {
            args: Prisma.TouchTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TouchTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TouchTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TouchTypeCountAggregateOutputType> | number
          }
        }
      }
      SocialPlatform: {
        payload: Prisma.$SocialPlatformPayload<ExtArgs>
        fields: Prisma.SocialPlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialPlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialPlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload>
          }
          findFirst: {
            args: Prisma.SocialPlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialPlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload>
          }
          findMany: {
            args: Prisma.SocialPlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload>[]
          }
          create: {
            args: Prisma.SocialPlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload>
          }
          createMany: {
            args: Prisma.SocialPlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialPlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload>[]
          }
          delete: {
            args: Prisma.SocialPlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload>
          }
          update: {
            args: Prisma.SocialPlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload>
          }
          deleteMany: {
            args: Prisma.SocialPlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialPlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialPlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload>[]
          }
          upsert: {
            args: Prisma.SocialPlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPlatformPayload>
          }
          aggregate: {
            args: Prisma.SocialPlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialPlatform>
          }
          groupBy: {
            args: Prisma.SocialPlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialPlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialPlatformCountArgs<ExtArgs>
            result: $Utils.Optional<SocialPlatformCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      AccountSocialLink: {
        payload: Prisma.$AccountSocialLinkPayload<ExtArgs>
        fields: Prisma.AccountSocialLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountSocialLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountSocialLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload>
          }
          findFirst: {
            args: Prisma.AccountSocialLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountSocialLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload>
          }
          findMany: {
            args: Prisma.AccountSocialLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload>[]
          }
          create: {
            args: Prisma.AccountSocialLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload>
          }
          createMany: {
            args: Prisma.AccountSocialLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountSocialLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload>[]
          }
          delete: {
            args: Prisma.AccountSocialLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload>
          }
          update: {
            args: Prisma.AccountSocialLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload>
          }
          deleteMany: {
            args: Prisma.AccountSocialLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountSocialLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountSocialLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload>[]
          }
          upsert: {
            args: Prisma.AccountSocialLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSocialLinkPayload>
          }
          aggregate: {
            args: Prisma.AccountSocialLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountSocialLink>
          }
          groupBy: {
            args: Prisma.AccountSocialLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountSocialLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountSocialLinkCountArgs<ExtArgs>
            result: $Utils.Optional<AccountSocialLinkCountAggregateOutputType> | number
          }
        }
      }
      AccountNote: {
        payload: Prisma.$AccountNotePayload<ExtArgs>
        fields: Prisma.AccountNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload>
          }
          findFirst: {
            args: Prisma.AccountNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload>
          }
          findMany: {
            args: Prisma.AccountNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload>[]
          }
          create: {
            args: Prisma.AccountNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload>
          }
          createMany: {
            args: Prisma.AccountNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload>[]
          }
          delete: {
            args: Prisma.AccountNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload>
          }
          update: {
            args: Prisma.AccountNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload>
          }
          deleteMany: {
            args: Prisma.AccountNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload>[]
          }
          upsert: {
            args: Prisma.AccountNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountNotePayload>
          }
          aggregate: {
            args: Prisma.AccountNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountNote>
          }
          groupBy: {
            args: Prisma.AccountNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountNoteCountArgs<ExtArgs>
            result: $Utils.Optional<AccountNoteCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      ContactNote: {
        payload: Prisma.$ContactNotePayload<ExtArgs>
        fields: Prisma.ContactNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload>
          }
          findFirst: {
            args: Prisma.ContactNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload>
          }
          findMany: {
            args: Prisma.ContactNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload>[]
          }
          create: {
            args: Prisma.ContactNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload>
          }
          createMany: {
            args: Prisma.ContactNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload>[]
          }
          delete: {
            args: Prisma.ContactNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload>
          }
          update: {
            args: Prisma.ContactNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload>
          }
          deleteMany: {
            args: Prisma.ContactNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload>[]
          }
          upsert: {
            args: Prisma.ContactNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactNotePayload>
          }
          aggregate: {
            args: Prisma.ContactNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactNote>
          }
          groupBy: {
            args: Prisma.ContactNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactNoteCountArgs<ExtArgs>
            result: $Utils.Optional<ContactNoteCountAggregateOutputType> | number
          }
        }
      }
      Touch: {
        payload: Prisma.$TouchPayload<ExtArgs>
        fields: Prisma.TouchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TouchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TouchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload>
          }
          findFirst: {
            args: Prisma.TouchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TouchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload>
          }
          findMany: {
            args: Prisma.TouchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload>[]
          }
          create: {
            args: Prisma.TouchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload>
          }
          createMany: {
            args: Prisma.TouchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TouchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload>[]
          }
          delete: {
            args: Prisma.TouchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload>
          }
          update: {
            args: Prisma.TouchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload>
          }
          deleteMany: {
            args: Prisma.TouchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TouchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TouchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload>[]
          }
          upsert: {
            args: Prisma.TouchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouchPayload>
          }
          aggregate: {
            args: Prisma.TouchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTouch>
          }
          groupBy: {
            args: Prisma.TouchGroupByArgs<ExtArgs>
            result: $Utils.Optional<TouchGroupByOutputType>[]
          }
          count: {
            args: Prisma.TouchCountArgs<ExtArgs>
            result: $Utils.Optional<TouchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    industry?: IndustryOmit
    touchType?: TouchTypeOmit
    socialPlatform?: SocialPlatformOmit
    account?: AccountOmit
    accountSocialLink?: AccountSocialLinkOmit
    accountNote?: AccountNoteOmit
    contact?: ContactOmit
    contactNote?: ContactNoteOmit
    touch?: TouchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    industries: number
    touchTypes: number
    socialPlatforms: number
    accounts: number
    contacts: number
    touches: number
    accountNotes: number
    contactNotes: number
    accountSocials: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industries?: boolean | OrganizationCountOutputTypeCountIndustriesArgs
    touchTypes?: boolean | OrganizationCountOutputTypeCountTouchTypesArgs
    socialPlatforms?: boolean | OrganizationCountOutputTypeCountSocialPlatformsArgs
    accounts?: boolean | OrganizationCountOutputTypeCountAccountsArgs
    contacts?: boolean | OrganizationCountOutputTypeCountContactsArgs
    touches?: boolean | OrganizationCountOutputTypeCountTouchesArgs
    accountNotes?: boolean | OrganizationCountOutputTypeCountAccountNotesArgs
    contactNotes?: boolean | OrganizationCountOutputTypeCountContactNotesArgs
    accountSocials?: boolean | OrganizationCountOutputTypeCountAccountSocialsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountIndustriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTouchTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TouchTypeWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSocialPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialPlatformWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTouchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TouchWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAccountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountNoteWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountContactNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactNoteWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAccountSocialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountSocialLinkWhereInput
  }


  /**
   * Count Type IndustryCountOutputType
   */

  export type IndustryCountOutputType = {
    accounts: number
  }

  export type IndustryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | IndustryCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * IndustryCountOutputType without action
   */
  export type IndustryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCountOutputType
     */
    select?: IndustryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndustryCountOutputType without action
   */
  export type IndustryCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    contacts: number
    notes: number
    socials: number
    touches: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | AccountCountOutputTypeCountContactsArgs
    notes?: boolean | AccountCountOutputTypeCountNotesArgs
    socials?: boolean | AccountCountOutputTypeCountSocialsArgs
    touches?: boolean | AccountCountOutputTypeCountTouchesArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountNoteWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSocialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountSocialLinkWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTouchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TouchWhereInput
  }


  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    touches: number
    notes: number
  }

  export type ContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    touches?: boolean | ContactCountOutputTypeCountTouchesArgs
    notes?: boolean | ContactCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountTouchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TouchWhereInput
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactNoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    slug: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    industries?: boolean | Organization$industriesArgs<ExtArgs>
    touchTypes?: boolean | Organization$touchTypesArgs<ExtArgs>
    socialPlatforms?: boolean | Organization$socialPlatformsArgs<ExtArgs>
    accounts?: boolean | Organization$accountsArgs<ExtArgs>
    contacts?: boolean | Organization$contactsArgs<ExtArgs>
    touches?: boolean | Organization$touchesArgs<ExtArgs>
    accountNotes?: boolean | Organization$accountNotesArgs<ExtArgs>
    contactNotes?: boolean | Organization$contactNotesArgs<ExtArgs>
    accountSocials?: boolean | Organization$accountSocialsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industries?: boolean | Organization$industriesArgs<ExtArgs>
    touchTypes?: boolean | Organization$touchTypesArgs<ExtArgs>
    socialPlatforms?: boolean | Organization$socialPlatformsArgs<ExtArgs>
    accounts?: boolean | Organization$accountsArgs<ExtArgs>
    contacts?: boolean | Organization$contactsArgs<ExtArgs>
    touches?: boolean | Organization$touchesArgs<ExtArgs>
    accountNotes?: boolean | Organization$accountNotesArgs<ExtArgs>
    contactNotes?: boolean | Organization$contactNotesArgs<ExtArgs>
    accountSocials?: boolean | Organization$accountSocialsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      industries: Prisma.$IndustryPayload<ExtArgs>[]
      touchTypes: Prisma.$TouchTypePayload<ExtArgs>[]
      socialPlatforms: Prisma.$SocialPlatformPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      touches: Prisma.$TouchPayload<ExtArgs>[]
      accountNotes: Prisma.$AccountNotePayload<ExtArgs>[]
      contactNotes: Prisma.$ContactNotePayload<ExtArgs>[]
      accountSocials: Prisma.$AccountSocialLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    industries<T extends Organization$industriesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$industriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    touchTypes<T extends Organization$touchTypesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$touchTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    socialPlatforms<T extends Organization$socialPlatformsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$socialPlatformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends Organization$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contacts<T extends Organization$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    touches<T extends Organization$touchesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$touchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accountNotes<T extends Organization$accountNotesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$accountNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactNotes<T extends Organization$contactNotesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$contactNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accountSocials<T extends Organization$accountSocialsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$accountSocialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly slug: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.industries
   */
  export type Organization$industriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    where?: IndustryWhereInput
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    cursor?: IndustryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndustryScalarFieldEnum | IndustryScalarFieldEnum[]
  }

  /**
   * Organization.touchTypes
   */
  export type Organization$touchTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
    where?: TouchTypeWhereInput
    orderBy?: TouchTypeOrderByWithRelationInput | TouchTypeOrderByWithRelationInput[]
    cursor?: TouchTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TouchTypeScalarFieldEnum | TouchTypeScalarFieldEnum[]
  }

  /**
   * Organization.socialPlatforms
   */
  export type Organization$socialPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
    where?: SocialPlatformWhereInput
    orderBy?: SocialPlatformOrderByWithRelationInput | SocialPlatformOrderByWithRelationInput[]
    cursor?: SocialPlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialPlatformScalarFieldEnum | SocialPlatformScalarFieldEnum[]
  }

  /**
   * Organization.accounts
   */
  export type Organization$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Organization.contacts
   */
  export type Organization$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Organization.touches
   */
  export type Organization$touchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    where?: TouchWhereInput
    orderBy?: TouchOrderByWithRelationInput | TouchOrderByWithRelationInput[]
    cursor?: TouchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TouchScalarFieldEnum | TouchScalarFieldEnum[]
  }

  /**
   * Organization.accountNotes
   */
  export type Organization$accountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    where?: AccountNoteWhereInput
    orderBy?: AccountNoteOrderByWithRelationInput | AccountNoteOrderByWithRelationInput[]
    cursor?: AccountNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountNoteScalarFieldEnum | AccountNoteScalarFieldEnum[]
  }

  /**
   * Organization.contactNotes
   */
  export type Organization$contactNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    where?: ContactNoteWhereInput
    orderBy?: ContactNoteOrderByWithRelationInput | ContactNoteOrderByWithRelationInput[]
    cursor?: ContactNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactNoteScalarFieldEnum | ContactNoteScalarFieldEnum[]
  }

  /**
   * Organization.accountSocials
   */
  export type Organization$accountSocialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    where?: AccountSocialLinkWhereInput
    orderBy?: AccountSocialLinkOrderByWithRelationInput | AccountSocialLinkOrderByWithRelationInput[]
    cursor?: AccountSocialLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountSocialLinkScalarFieldEnum | AccountSocialLinkScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Industry
   */

  export type AggregateIndustry = {
    _count: IndustryCountAggregateOutputType | null
    _min: IndustryMinAggregateOutputType | null
    _max: IndustryMaxAggregateOutputType | null
  }

  export type IndustryMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    isSystem: boolean | null
  }

  export type IndustryMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    isSystem: boolean | null
  }

  export type IndustryCountAggregateOutputType = {
    id: number
    organizationId: number
    name: number
    isSystem: number
    _all: number
  }


  export type IndustryMinAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    isSystem?: true
  }

  export type IndustryMaxAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    isSystem?: true
  }

  export type IndustryCountAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    isSystem?: true
    _all?: true
  }

  export type IndustryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Industry to aggregate.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Industries
    **/
    _count?: true | IndustryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndustryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndustryMaxAggregateInputType
  }

  export type GetIndustryAggregateType<T extends IndustryAggregateArgs> = {
        [P in keyof T & keyof AggregateIndustry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndustry[P]>
      : GetScalarType<T[P], AggregateIndustry[P]>
  }




  export type IndustryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryWhereInput
    orderBy?: IndustryOrderByWithAggregationInput | IndustryOrderByWithAggregationInput[]
    by: IndustryScalarFieldEnum[] | IndustryScalarFieldEnum
    having?: IndustryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndustryCountAggregateInputType | true
    _min?: IndustryMinAggregateInputType
    _max?: IndustryMaxAggregateInputType
  }

  export type IndustryGroupByOutputType = {
    id: string
    organizationId: string
    name: string
    isSystem: boolean
    _count: IndustryCountAggregateOutputType | null
    _min: IndustryMinAggregateOutputType | null
    _max: IndustryMaxAggregateOutputType | null
  }

  type GetIndustryGroupByPayload<T extends IndustryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndustryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndustryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndustryGroupByOutputType[P]>
            : GetScalarType<T[P], IndustryGroupByOutputType[P]>
        }
      >
    >


  export type IndustrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    accounts?: boolean | Industry$accountsArgs<ExtArgs>
    _count?: boolean | IndustryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectScalar = {
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
  }

  export type IndustryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "name" | "isSystem", ExtArgs["result"]["industry"]>
  export type IndustryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    accounts?: boolean | Industry$accountsArgs<ExtArgs>
    _count?: boolean | IndustryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndustryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type IndustryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $IndustryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Industry"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      name: string
      /**
       * Built-in seeded industries cannot be renamed or deleted in Settings.
       */
      isSystem: boolean
    }, ExtArgs["result"]["industry"]>
    composites: {}
  }

  type IndustryGetPayload<S extends boolean | null | undefined | IndustryDefaultArgs> = $Result.GetResult<Prisma.$IndustryPayload, S>

  type IndustryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndustryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndustryCountAggregateInputType | true
    }

  export interface IndustryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Industry'], meta: { name: 'Industry' } }
    /**
     * Find zero or one Industry that matches the filter.
     * @param {IndustryFindUniqueArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndustryFindUniqueArgs>(args: SelectSubset<T, IndustryFindUniqueArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Industry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndustryFindUniqueOrThrowArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndustryFindUniqueOrThrowArgs>(args: SelectSubset<T, IndustryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Industry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryFindFirstArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndustryFindFirstArgs>(args?: SelectSubset<T, IndustryFindFirstArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Industry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryFindFirstOrThrowArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndustryFindFirstOrThrowArgs>(args?: SelectSubset<T, IndustryFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Industries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Industries
     * const industries = await prisma.industry.findMany()
     * 
     * // Get first 10 Industries
     * const industries = await prisma.industry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const industryWithIdOnly = await prisma.industry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndustryFindManyArgs>(args?: SelectSubset<T, IndustryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Industry.
     * @param {IndustryCreateArgs} args - Arguments to create a Industry.
     * @example
     * // Create one Industry
     * const Industry = await prisma.industry.create({
     *   data: {
     *     // ... data to create a Industry
     *   }
     * })
     * 
     */
    create<T extends IndustryCreateArgs>(args: SelectSubset<T, IndustryCreateArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Industries.
     * @param {IndustryCreateManyArgs} args - Arguments to create many Industries.
     * @example
     * // Create many Industries
     * const industry = await prisma.industry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndustryCreateManyArgs>(args?: SelectSubset<T, IndustryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Industries and returns the data saved in the database.
     * @param {IndustryCreateManyAndReturnArgs} args - Arguments to create many Industries.
     * @example
     * // Create many Industries
     * const industry = await prisma.industry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Industries and only return the `id`
     * const industryWithIdOnly = await prisma.industry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndustryCreateManyAndReturnArgs>(args?: SelectSubset<T, IndustryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Industry.
     * @param {IndustryDeleteArgs} args - Arguments to delete one Industry.
     * @example
     * // Delete one Industry
     * const Industry = await prisma.industry.delete({
     *   where: {
     *     // ... filter to delete one Industry
     *   }
     * })
     * 
     */
    delete<T extends IndustryDeleteArgs>(args: SelectSubset<T, IndustryDeleteArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Industry.
     * @param {IndustryUpdateArgs} args - Arguments to update one Industry.
     * @example
     * // Update one Industry
     * const industry = await prisma.industry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndustryUpdateArgs>(args: SelectSubset<T, IndustryUpdateArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Industries.
     * @param {IndustryDeleteManyArgs} args - Arguments to filter Industries to delete.
     * @example
     * // Delete a few Industries
     * const { count } = await prisma.industry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndustryDeleteManyArgs>(args?: SelectSubset<T, IndustryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Industries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Industries
     * const industry = await prisma.industry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndustryUpdateManyArgs>(args: SelectSubset<T, IndustryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Industries and returns the data updated in the database.
     * @param {IndustryUpdateManyAndReturnArgs} args - Arguments to update many Industries.
     * @example
     * // Update many Industries
     * const industry = await prisma.industry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Industries and only return the `id`
     * const industryWithIdOnly = await prisma.industry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndustryUpdateManyAndReturnArgs>(args: SelectSubset<T, IndustryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Industry.
     * @param {IndustryUpsertArgs} args - Arguments to update or create a Industry.
     * @example
     * // Update or create a Industry
     * const industry = await prisma.industry.upsert({
     *   create: {
     *     // ... data to create a Industry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Industry we want to update
     *   }
     * })
     */
    upsert<T extends IndustryUpsertArgs>(args: SelectSubset<T, IndustryUpsertArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Industries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryCountArgs} args - Arguments to filter Industries to count.
     * @example
     * // Count the number of Industries
     * const count = await prisma.industry.count({
     *   where: {
     *     // ... the filter for the Industries we want to count
     *   }
     * })
    **/
    count<T extends IndustryCountArgs>(
      args?: Subset<T, IndustryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndustryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Industry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndustryAggregateArgs>(args: Subset<T, IndustryAggregateArgs>): Prisma.PrismaPromise<GetIndustryAggregateType<T>>

    /**
     * Group by Industry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndustryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndustryGroupByArgs['orderBy'] }
        : { orderBy?: IndustryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndustryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Industry model
   */
  readonly fields: IndustryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Industry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndustryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accounts<T extends Industry$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Industry$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Industry model
   */
  interface IndustryFieldRefs {
    readonly id: FieldRef<"Industry", 'String'>
    readonly organizationId: FieldRef<"Industry", 'String'>
    readonly name: FieldRef<"Industry", 'String'>
    readonly isSystem: FieldRef<"Industry", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Industry findUnique
   */
  export type IndustryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry findUniqueOrThrow
   */
  export type IndustryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry findFirst
   */
  export type IndustryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Industries.
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Industries.
     */
    distinct?: IndustryScalarFieldEnum | IndustryScalarFieldEnum[]
  }

  /**
   * Industry findFirstOrThrow
   */
  export type IndustryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Industries.
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Industries.
     */
    distinct?: IndustryScalarFieldEnum | IndustryScalarFieldEnum[]
  }

  /**
   * Industry findMany
   */
  export type IndustryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industries to fetch.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Industries.
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Industries.
     */
    distinct?: IndustryScalarFieldEnum | IndustryScalarFieldEnum[]
  }

  /**
   * Industry create
   */
  export type IndustryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * The data needed to create a Industry.
     */
    data: XOR<IndustryCreateInput, IndustryUncheckedCreateInput>
  }

  /**
   * Industry createMany
   */
  export type IndustryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Industries.
     */
    data: IndustryCreateManyInput | IndustryCreateManyInput[]
  }

  /**
   * Industry createManyAndReturn
   */
  export type IndustryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * The data used to create many Industries.
     */
    data: IndustryCreateManyInput | IndustryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Industry update
   */
  export type IndustryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * The data needed to update a Industry.
     */
    data: XOR<IndustryUpdateInput, IndustryUncheckedUpdateInput>
    /**
     * Choose, which Industry to update.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry updateMany
   */
  export type IndustryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Industries.
     */
    data: XOR<IndustryUpdateManyMutationInput, IndustryUncheckedUpdateManyInput>
    /**
     * Filter which Industries to update
     */
    where?: IndustryWhereInput
    /**
     * Limit how many Industries to update.
     */
    limit?: number
  }

  /**
   * Industry updateManyAndReturn
   */
  export type IndustryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * The data used to update Industries.
     */
    data: XOR<IndustryUpdateManyMutationInput, IndustryUncheckedUpdateManyInput>
    /**
     * Filter which Industries to update
     */
    where?: IndustryWhereInput
    /**
     * Limit how many Industries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Industry upsert
   */
  export type IndustryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * The filter to search for the Industry to update in case it exists.
     */
    where: IndustryWhereUniqueInput
    /**
     * In case the Industry found by the `where` argument doesn't exist, create a new Industry with this data.
     */
    create: XOR<IndustryCreateInput, IndustryUncheckedCreateInput>
    /**
     * In case the Industry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndustryUpdateInput, IndustryUncheckedUpdateInput>
  }

  /**
   * Industry delete
   */
  export type IndustryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter which Industry to delete.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry deleteMany
   */
  export type IndustryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Industries to delete
     */
    where?: IndustryWhereInput
    /**
     * Limit how many Industries to delete.
     */
    limit?: number
  }

  /**
   * Industry.accounts
   */
  export type Industry$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Industry without action
   */
  export type IndustryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
  }


  /**
   * Model TouchType
   */

  export type AggregateTouchType = {
    _count: TouchTypeCountAggregateOutputType | null
    _min: TouchTypeMinAggregateOutputType | null
    _max: TouchTypeMaxAggregateOutputType | null
  }

  export type TouchTypeMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    isSystem: boolean | null
  }

  export type TouchTypeMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    isSystem: boolean | null
  }

  export type TouchTypeCountAggregateOutputType = {
    id: number
    organizationId: number
    name: number
    isSystem: number
    _all: number
  }


  export type TouchTypeMinAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    isSystem?: true
  }

  export type TouchTypeMaxAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    isSystem?: true
  }

  export type TouchTypeCountAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    isSystem?: true
    _all?: true
  }

  export type TouchTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TouchType to aggregate.
     */
    where?: TouchTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TouchTypes to fetch.
     */
    orderBy?: TouchTypeOrderByWithRelationInput | TouchTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TouchTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TouchTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TouchTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TouchTypes
    **/
    _count?: true | TouchTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TouchTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TouchTypeMaxAggregateInputType
  }

  export type GetTouchTypeAggregateType<T extends TouchTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTouchType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTouchType[P]>
      : GetScalarType<T[P], AggregateTouchType[P]>
  }




  export type TouchTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TouchTypeWhereInput
    orderBy?: TouchTypeOrderByWithAggregationInput | TouchTypeOrderByWithAggregationInput[]
    by: TouchTypeScalarFieldEnum[] | TouchTypeScalarFieldEnum
    having?: TouchTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TouchTypeCountAggregateInputType | true
    _min?: TouchTypeMinAggregateInputType
    _max?: TouchTypeMaxAggregateInputType
  }

  export type TouchTypeGroupByOutputType = {
    id: string
    organizationId: string
    name: string
    isSystem: boolean
    _count: TouchTypeCountAggregateOutputType | null
    _min: TouchTypeMinAggregateOutputType | null
    _max: TouchTypeMaxAggregateOutputType | null
  }

  type GetTouchTypeGroupByPayload<T extends TouchTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TouchTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TouchTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TouchTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TouchTypeGroupByOutputType[P]>
        }
      >
    >


  export type TouchTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["touchType"]>

  export type TouchTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["touchType"]>

  export type TouchTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["touchType"]>

  export type TouchTypeSelectScalar = {
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
  }

  export type TouchTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "name" | "isSystem", ExtArgs["result"]["touchType"]>
  export type TouchTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type TouchTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type TouchTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $TouchTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TouchType"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      name: string
      /**
       * Built-in seeded touch types cannot be renamed or deleted in Settings.
       */
      isSystem: boolean
    }, ExtArgs["result"]["touchType"]>
    composites: {}
  }

  type TouchTypeGetPayload<S extends boolean | null | undefined | TouchTypeDefaultArgs> = $Result.GetResult<Prisma.$TouchTypePayload, S>

  type TouchTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TouchTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TouchTypeCountAggregateInputType | true
    }

  export interface TouchTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TouchType'], meta: { name: 'TouchType' } }
    /**
     * Find zero or one TouchType that matches the filter.
     * @param {TouchTypeFindUniqueArgs} args - Arguments to find a TouchType
     * @example
     * // Get one TouchType
     * const touchType = await prisma.touchType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TouchTypeFindUniqueArgs>(args: SelectSubset<T, TouchTypeFindUniqueArgs<ExtArgs>>): Prisma__TouchTypeClient<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TouchType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TouchTypeFindUniqueOrThrowArgs} args - Arguments to find a TouchType
     * @example
     * // Get one TouchType
     * const touchType = await prisma.touchType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TouchTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TouchTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TouchTypeClient<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TouchType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchTypeFindFirstArgs} args - Arguments to find a TouchType
     * @example
     * // Get one TouchType
     * const touchType = await prisma.touchType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TouchTypeFindFirstArgs>(args?: SelectSubset<T, TouchTypeFindFirstArgs<ExtArgs>>): Prisma__TouchTypeClient<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TouchType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchTypeFindFirstOrThrowArgs} args - Arguments to find a TouchType
     * @example
     * // Get one TouchType
     * const touchType = await prisma.touchType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TouchTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TouchTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TouchTypeClient<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TouchTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TouchTypes
     * const touchTypes = await prisma.touchType.findMany()
     * 
     * // Get first 10 TouchTypes
     * const touchTypes = await prisma.touchType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const touchTypeWithIdOnly = await prisma.touchType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TouchTypeFindManyArgs>(args?: SelectSubset<T, TouchTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TouchType.
     * @param {TouchTypeCreateArgs} args - Arguments to create a TouchType.
     * @example
     * // Create one TouchType
     * const TouchType = await prisma.touchType.create({
     *   data: {
     *     // ... data to create a TouchType
     *   }
     * })
     * 
     */
    create<T extends TouchTypeCreateArgs>(args: SelectSubset<T, TouchTypeCreateArgs<ExtArgs>>): Prisma__TouchTypeClient<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TouchTypes.
     * @param {TouchTypeCreateManyArgs} args - Arguments to create many TouchTypes.
     * @example
     * // Create many TouchTypes
     * const touchType = await prisma.touchType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TouchTypeCreateManyArgs>(args?: SelectSubset<T, TouchTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TouchTypes and returns the data saved in the database.
     * @param {TouchTypeCreateManyAndReturnArgs} args - Arguments to create many TouchTypes.
     * @example
     * // Create many TouchTypes
     * const touchType = await prisma.touchType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TouchTypes and only return the `id`
     * const touchTypeWithIdOnly = await prisma.touchType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TouchTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TouchTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TouchType.
     * @param {TouchTypeDeleteArgs} args - Arguments to delete one TouchType.
     * @example
     * // Delete one TouchType
     * const TouchType = await prisma.touchType.delete({
     *   where: {
     *     // ... filter to delete one TouchType
     *   }
     * })
     * 
     */
    delete<T extends TouchTypeDeleteArgs>(args: SelectSubset<T, TouchTypeDeleteArgs<ExtArgs>>): Prisma__TouchTypeClient<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TouchType.
     * @param {TouchTypeUpdateArgs} args - Arguments to update one TouchType.
     * @example
     * // Update one TouchType
     * const touchType = await prisma.touchType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TouchTypeUpdateArgs>(args: SelectSubset<T, TouchTypeUpdateArgs<ExtArgs>>): Prisma__TouchTypeClient<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TouchTypes.
     * @param {TouchTypeDeleteManyArgs} args - Arguments to filter TouchTypes to delete.
     * @example
     * // Delete a few TouchTypes
     * const { count } = await prisma.touchType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TouchTypeDeleteManyArgs>(args?: SelectSubset<T, TouchTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TouchTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TouchTypes
     * const touchType = await prisma.touchType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TouchTypeUpdateManyArgs>(args: SelectSubset<T, TouchTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TouchTypes and returns the data updated in the database.
     * @param {TouchTypeUpdateManyAndReturnArgs} args - Arguments to update many TouchTypes.
     * @example
     * // Update many TouchTypes
     * const touchType = await prisma.touchType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TouchTypes and only return the `id`
     * const touchTypeWithIdOnly = await prisma.touchType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TouchTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TouchTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TouchType.
     * @param {TouchTypeUpsertArgs} args - Arguments to update or create a TouchType.
     * @example
     * // Update or create a TouchType
     * const touchType = await prisma.touchType.upsert({
     *   create: {
     *     // ... data to create a TouchType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TouchType we want to update
     *   }
     * })
     */
    upsert<T extends TouchTypeUpsertArgs>(args: SelectSubset<T, TouchTypeUpsertArgs<ExtArgs>>): Prisma__TouchTypeClient<$Result.GetResult<Prisma.$TouchTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TouchTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchTypeCountArgs} args - Arguments to filter TouchTypes to count.
     * @example
     * // Count the number of TouchTypes
     * const count = await prisma.touchType.count({
     *   where: {
     *     // ... the filter for the TouchTypes we want to count
     *   }
     * })
    **/
    count<T extends TouchTypeCountArgs>(
      args?: Subset<T, TouchTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TouchTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TouchType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TouchTypeAggregateArgs>(args: Subset<T, TouchTypeAggregateArgs>): Prisma.PrismaPromise<GetTouchTypeAggregateType<T>>

    /**
     * Group by TouchType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TouchTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TouchTypeGroupByArgs['orderBy'] }
        : { orderBy?: TouchTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TouchTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTouchTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TouchType model
   */
  readonly fields: TouchTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TouchType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TouchTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TouchType model
   */
  interface TouchTypeFieldRefs {
    readonly id: FieldRef<"TouchType", 'String'>
    readonly organizationId: FieldRef<"TouchType", 'String'>
    readonly name: FieldRef<"TouchType", 'String'>
    readonly isSystem: FieldRef<"TouchType", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TouchType findUnique
   */
  export type TouchTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
    /**
     * Filter, which TouchType to fetch.
     */
    where: TouchTypeWhereUniqueInput
  }

  /**
   * TouchType findUniqueOrThrow
   */
  export type TouchTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
    /**
     * Filter, which TouchType to fetch.
     */
    where: TouchTypeWhereUniqueInput
  }

  /**
   * TouchType findFirst
   */
  export type TouchTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
    /**
     * Filter, which TouchType to fetch.
     */
    where?: TouchTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TouchTypes to fetch.
     */
    orderBy?: TouchTypeOrderByWithRelationInput | TouchTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TouchTypes.
     */
    cursor?: TouchTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TouchTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TouchTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TouchTypes.
     */
    distinct?: TouchTypeScalarFieldEnum | TouchTypeScalarFieldEnum[]
  }

  /**
   * TouchType findFirstOrThrow
   */
  export type TouchTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
    /**
     * Filter, which TouchType to fetch.
     */
    where?: TouchTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TouchTypes to fetch.
     */
    orderBy?: TouchTypeOrderByWithRelationInput | TouchTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TouchTypes.
     */
    cursor?: TouchTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TouchTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TouchTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TouchTypes.
     */
    distinct?: TouchTypeScalarFieldEnum | TouchTypeScalarFieldEnum[]
  }

  /**
   * TouchType findMany
   */
  export type TouchTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
    /**
     * Filter, which TouchTypes to fetch.
     */
    where?: TouchTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TouchTypes to fetch.
     */
    orderBy?: TouchTypeOrderByWithRelationInput | TouchTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TouchTypes.
     */
    cursor?: TouchTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TouchTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TouchTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TouchTypes.
     */
    distinct?: TouchTypeScalarFieldEnum | TouchTypeScalarFieldEnum[]
  }

  /**
   * TouchType create
   */
  export type TouchTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TouchType.
     */
    data: XOR<TouchTypeCreateInput, TouchTypeUncheckedCreateInput>
  }

  /**
   * TouchType createMany
   */
  export type TouchTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TouchTypes.
     */
    data: TouchTypeCreateManyInput | TouchTypeCreateManyInput[]
  }

  /**
   * TouchType createManyAndReturn
   */
  export type TouchTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TouchTypes.
     */
    data: TouchTypeCreateManyInput | TouchTypeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TouchType update
   */
  export type TouchTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TouchType.
     */
    data: XOR<TouchTypeUpdateInput, TouchTypeUncheckedUpdateInput>
    /**
     * Choose, which TouchType to update.
     */
    where: TouchTypeWhereUniqueInput
  }

  /**
   * TouchType updateMany
   */
  export type TouchTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TouchTypes.
     */
    data: XOR<TouchTypeUpdateManyMutationInput, TouchTypeUncheckedUpdateManyInput>
    /**
     * Filter which TouchTypes to update
     */
    where?: TouchTypeWhereInput
    /**
     * Limit how many TouchTypes to update.
     */
    limit?: number
  }

  /**
   * TouchType updateManyAndReturn
   */
  export type TouchTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * The data used to update TouchTypes.
     */
    data: XOR<TouchTypeUpdateManyMutationInput, TouchTypeUncheckedUpdateManyInput>
    /**
     * Filter which TouchTypes to update
     */
    where?: TouchTypeWhereInput
    /**
     * Limit how many TouchTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TouchType upsert
   */
  export type TouchTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TouchType to update in case it exists.
     */
    where: TouchTypeWhereUniqueInput
    /**
     * In case the TouchType found by the `where` argument doesn't exist, create a new TouchType with this data.
     */
    create: XOR<TouchTypeCreateInput, TouchTypeUncheckedCreateInput>
    /**
     * In case the TouchType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TouchTypeUpdateInput, TouchTypeUncheckedUpdateInput>
  }

  /**
   * TouchType delete
   */
  export type TouchTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
    /**
     * Filter which TouchType to delete.
     */
    where: TouchTypeWhereUniqueInput
  }

  /**
   * TouchType deleteMany
   */
  export type TouchTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TouchTypes to delete
     */
    where?: TouchTypeWhereInput
    /**
     * Limit how many TouchTypes to delete.
     */
    limit?: number
  }

  /**
   * TouchType without action
   */
  export type TouchTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouchType
     */
    select?: TouchTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TouchType
     */
    omit?: TouchTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchTypeInclude<ExtArgs> | null
  }


  /**
   * Model SocialPlatform
   */

  export type AggregateSocialPlatform = {
    _count: SocialPlatformCountAggregateOutputType | null
    _min: SocialPlatformMinAggregateOutputType | null
    _max: SocialPlatformMaxAggregateOutputType | null
  }

  export type SocialPlatformMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    isSystem: boolean | null
  }

  export type SocialPlatformMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    isSystem: boolean | null
  }

  export type SocialPlatformCountAggregateOutputType = {
    id: number
    organizationId: number
    name: number
    isSystem: number
    _all: number
  }


  export type SocialPlatformMinAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    isSystem?: true
  }

  export type SocialPlatformMaxAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    isSystem?: true
  }

  export type SocialPlatformCountAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    isSystem?: true
    _all?: true
  }

  export type SocialPlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialPlatform to aggregate.
     */
    where?: SocialPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPlatforms to fetch.
     */
    orderBy?: SocialPlatformOrderByWithRelationInput | SocialPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialPlatforms
    **/
    _count?: true | SocialPlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialPlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialPlatformMaxAggregateInputType
  }

  export type GetSocialPlatformAggregateType<T extends SocialPlatformAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialPlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialPlatform[P]>
      : GetScalarType<T[P], AggregateSocialPlatform[P]>
  }




  export type SocialPlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialPlatformWhereInput
    orderBy?: SocialPlatformOrderByWithAggregationInput | SocialPlatformOrderByWithAggregationInput[]
    by: SocialPlatformScalarFieldEnum[] | SocialPlatformScalarFieldEnum
    having?: SocialPlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialPlatformCountAggregateInputType | true
    _min?: SocialPlatformMinAggregateInputType
    _max?: SocialPlatformMaxAggregateInputType
  }

  export type SocialPlatformGroupByOutputType = {
    id: string
    organizationId: string
    name: string
    isSystem: boolean
    _count: SocialPlatformCountAggregateOutputType | null
    _min: SocialPlatformMinAggregateOutputType | null
    _max: SocialPlatformMaxAggregateOutputType | null
  }

  type GetSocialPlatformGroupByPayload<T extends SocialPlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialPlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialPlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialPlatformGroupByOutputType[P]>
            : GetScalarType<T[P], SocialPlatformGroupByOutputType[P]>
        }
      >
    >


  export type SocialPlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialPlatform"]>

  export type SocialPlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialPlatform"]>

  export type SocialPlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialPlatform"]>

  export type SocialPlatformSelectScalar = {
    id?: boolean
    organizationId?: boolean
    name?: boolean
    isSystem?: boolean
  }

  export type SocialPlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "name" | "isSystem", ExtArgs["result"]["socialPlatform"]>
  export type SocialPlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type SocialPlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type SocialPlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $SocialPlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialPlatform"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      name: string
      /**
       * Built-in seeded platforms cannot be renamed or deleted in Settings.
       */
      isSystem: boolean
    }, ExtArgs["result"]["socialPlatform"]>
    composites: {}
  }

  type SocialPlatformGetPayload<S extends boolean | null | undefined | SocialPlatformDefaultArgs> = $Result.GetResult<Prisma.$SocialPlatformPayload, S>

  type SocialPlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialPlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialPlatformCountAggregateInputType | true
    }

  export interface SocialPlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialPlatform'], meta: { name: 'SocialPlatform' } }
    /**
     * Find zero or one SocialPlatform that matches the filter.
     * @param {SocialPlatformFindUniqueArgs} args - Arguments to find a SocialPlatform
     * @example
     * // Get one SocialPlatform
     * const socialPlatform = await prisma.socialPlatform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialPlatformFindUniqueArgs>(args: SelectSubset<T, SocialPlatformFindUniqueArgs<ExtArgs>>): Prisma__SocialPlatformClient<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialPlatform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialPlatformFindUniqueOrThrowArgs} args - Arguments to find a SocialPlatform
     * @example
     * // Get one SocialPlatform
     * const socialPlatform = await prisma.socialPlatform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialPlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialPlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialPlatformClient<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialPlatform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPlatformFindFirstArgs} args - Arguments to find a SocialPlatform
     * @example
     * // Get one SocialPlatform
     * const socialPlatform = await prisma.socialPlatform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialPlatformFindFirstArgs>(args?: SelectSubset<T, SocialPlatformFindFirstArgs<ExtArgs>>): Prisma__SocialPlatformClient<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialPlatform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPlatformFindFirstOrThrowArgs} args - Arguments to find a SocialPlatform
     * @example
     * // Get one SocialPlatform
     * const socialPlatform = await prisma.socialPlatform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialPlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialPlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialPlatformClient<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialPlatforms
     * const socialPlatforms = await prisma.socialPlatform.findMany()
     * 
     * // Get first 10 SocialPlatforms
     * const socialPlatforms = await prisma.socialPlatform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialPlatformWithIdOnly = await prisma.socialPlatform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialPlatformFindManyArgs>(args?: SelectSubset<T, SocialPlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialPlatform.
     * @param {SocialPlatformCreateArgs} args - Arguments to create a SocialPlatform.
     * @example
     * // Create one SocialPlatform
     * const SocialPlatform = await prisma.socialPlatform.create({
     *   data: {
     *     // ... data to create a SocialPlatform
     *   }
     * })
     * 
     */
    create<T extends SocialPlatformCreateArgs>(args: SelectSubset<T, SocialPlatformCreateArgs<ExtArgs>>): Prisma__SocialPlatformClient<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialPlatforms.
     * @param {SocialPlatformCreateManyArgs} args - Arguments to create many SocialPlatforms.
     * @example
     * // Create many SocialPlatforms
     * const socialPlatform = await prisma.socialPlatform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialPlatformCreateManyArgs>(args?: SelectSubset<T, SocialPlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialPlatforms and returns the data saved in the database.
     * @param {SocialPlatformCreateManyAndReturnArgs} args - Arguments to create many SocialPlatforms.
     * @example
     * // Create many SocialPlatforms
     * const socialPlatform = await prisma.socialPlatform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialPlatforms and only return the `id`
     * const socialPlatformWithIdOnly = await prisma.socialPlatform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialPlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialPlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialPlatform.
     * @param {SocialPlatformDeleteArgs} args - Arguments to delete one SocialPlatform.
     * @example
     * // Delete one SocialPlatform
     * const SocialPlatform = await prisma.socialPlatform.delete({
     *   where: {
     *     // ... filter to delete one SocialPlatform
     *   }
     * })
     * 
     */
    delete<T extends SocialPlatformDeleteArgs>(args: SelectSubset<T, SocialPlatformDeleteArgs<ExtArgs>>): Prisma__SocialPlatformClient<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialPlatform.
     * @param {SocialPlatformUpdateArgs} args - Arguments to update one SocialPlatform.
     * @example
     * // Update one SocialPlatform
     * const socialPlatform = await prisma.socialPlatform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialPlatformUpdateArgs>(args: SelectSubset<T, SocialPlatformUpdateArgs<ExtArgs>>): Prisma__SocialPlatformClient<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialPlatforms.
     * @param {SocialPlatformDeleteManyArgs} args - Arguments to filter SocialPlatforms to delete.
     * @example
     * // Delete a few SocialPlatforms
     * const { count } = await prisma.socialPlatform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialPlatformDeleteManyArgs>(args?: SelectSubset<T, SocialPlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialPlatforms
     * const socialPlatform = await prisma.socialPlatform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialPlatformUpdateManyArgs>(args: SelectSubset<T, SocialPlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialPlatforms and returns the data updated in the database.
     * @param {SocialPlatformUpdateManyAndReturnArgs} args - Arguments to update many SocialPlatforms.
     * @example
     * // Update many SocialPlatforms
     * const socialPlatform = await prisma.socialPlatform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialPlatforms and only return the `id`
     * const socialPlatformWithIdOnly = await prisma.socialPlatform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialPlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialPlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialPlatform.
     * @param {SocialPlatformUpsertArgs} args - Arguments to update or create a SocialPlatform.
     * @example
     * // Update or create a SocialPlatform
     * const socialPlatform = await prisma.socialPlatform.upsert({
     *   create: {
     *     // ... data to create a SocialPlatform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialPlatform we want to update
     *   }
     * })
     */
    upsert<T extends SocialPlatformUpsertArgs>(args: SelectSubset<T, SocialPlatformUpsertArgs<ExtArgs>>): Prisma__SocialPlatformClient<$Result.GetResult<Prisma.$SocialPlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPlatformCountArgs} args - Arguments to filter SocialPlatforms to count.
     * @example
     * // Count the number of SocialPlatforms
     * const count = await prisma.socialPlatform.count({
     *   where: {
     *     // ... the filter for the SocialPlatforms we want to count
     *   }
     * })
    **/
    count<T extends SocialPlatformCountArgs>(
      args?: Subset<T, SocialPlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialPlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialPlatformAggregateArgs>(args: Subset<T, SocialPlatformAggregateArgs>): Prisma.PrismaPromise<GetSocialPlatformAggregateType<T>>

    /**
     * Group by SocialPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialPlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialPlatformGroupByArgs['orderBy'] }
        : { orderBy?: SocialPlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialPlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialPlatform model
   */
  readonly fields: SocialPlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialPlatform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialPlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialPlatform model
   */
  interface SocialPlatformFieldRefs {
    readonly id: FieldRef<"SocialPlatform", 'String'>
    readonly organizationId: FieldRef<"SocialPlatform", 'String'>
    readonly name: FieldRef<"SocialPlatform", 'String'>
    readonly isSystem: FieldRef<"SocialPlatform", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SocialPlatform findUnique
   */
  export type SocialPlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
    /**
     * Filter, which SocialPlatform to fetch.
     */
    where: SocialPlatformWhereUniqueInput
  }

  /**
   * SocialPlatform findUniqueOrThrow
   */
  export type SocialPlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
    /**
     * Filter, which SocialPlatform to fetch.
     */
    where: SocialPlatformWhereUniqueInput
  }

  /**
   * SocialPlatform findFirst
   */
  export type SocialPlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
    /**
     * Filter, which SocialPlatform to fetch.
     */
    where?: SocialPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPlatforms to fetch.
     */
    orderBy?: SocialPlatformOrderByWithRelationInput | SocialPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialPlatforms.
     */
    cursor?: SocialPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPlatforms.
     */
    distinct?: SocialPlatformScalarFieldEnum | SocialPlatformScalarFieldEnum[]
  }

  /**
   * SocialPlatform findFirstOrThrow
   */
  export type SocialPlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
    /**
     * Filter, which SocialPlatform to fetch.
     */
    where?: SocialPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPlatforms to fetch.
     */
    orderBy?: SocialPlatformOrderByWithRelationInput | SocialPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialPlatforms.
     */
    cursor?: SocialPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPlatforms.
     */
    distinct?: SocialPlatformScalarFieldEnum | SocialPlatformScalarFieldEnum[]
  }

  /**
   * SocialPlatform findMany
   */
  export type SocialPlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
    /**
     * Filter, which SocialPlatforms to fetch.
     */
    where?: SocialPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPlatforms to fetch.
     */
    orderBy?: SocialPlatformOrderByWithRelationInput | SocialPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialPlatforms.
     */
    cursor?: SocialPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPlatforms.
     */
    distinct?: SocialPlatformScalarFieldEnum | SocialPlatformScalarFieldEnum[]
  }

  /**
   * SocialPlatform create
   */
  export type SocialPlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialPlatform.
     */
    data: XOR<SocialPlatformCreateInput, SocialPlatformUncheckedCreateInput>
  }

  /**
   * SocialPlatform createMany
   */
  export type SocialPlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialPlatforms.
     */
    data: SocialPlatformCreateManyInput | SocialPlatformCreateManyInput[]
  }

  /**
   * SocialPlatform createManyAndReturn
   */
  export type SocialPlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * The data used to create many SocialPlatforms.
     */
    data: SocialPlatformCreateManyInput | SocialPlatformCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialPlatform update
   */
  export type SocialPlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialPlatform.
     */
    data: XOR<SocialPlatformUpdateInput, SocialPlatformUncheckedUpdateInput>
    /**
     * Choose, which SocialPlatform to update.
     */
    where: SocialPlatformWhereUniqueInput
  }

  /**
   * SocialPlatform updateMany
   */
  export type SocialPlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialPlatforms.
     */
    data: XOR<SocialPlatformUpdateManyMutationInput, SocialPlatformUncheckedUpdateManyInput>
    /**
     * Filter which SocialPlatforms to update
     */
    where?: SocialPlatformWhereInput
    /**
     * Limit how many SocialPlatforms to update.
     */
    limit?: number
  }

  /**
   * SocialPlatform updateManyAndReturn
   */
  export type SocialPlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * The data used to update SocialPlatforms.
     */
    data: XOR<SocialPlatformUpdateManyMutationInput, SocialPlatformUncheckedUpdateManyInput>
    /**
     * Filter which SocialPlatforms to update
     */
    where?: SocialPlatformWhereInput
    /**
     * Limit how many SocialPlatforms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialPlatform upsert
   */
  export type SocialPlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialPlatform to update in case it exists.
     */
    where: SocialPlatformWhereUniqueInput
    /**
     * In case the SocialPlatform found by the `where` argument doesn't exist, create a new SocialPlatform with this data.
     */
    create: XOR<SocialPlatformCreateInput, SocialPlatformUncheckedCreateInput>
    /**
     * In case the SocialPlatform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialPlatformUpdateInput, SocialPlatformUncheckedUpdateInput>
  }

  /**
   * SocialPlatform delete
   */
  export type SocialPlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
    /**
     * Filter which SocialPlatform to delete.
     */
    where: SocialPlatformWhereUniqueInput
  }

  /**
   * SocialPlatform deleteMany
   */
  export type SocialPlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialPlatforms to delete
     */
    where?: SocialPlatformWhereInput
    /**
     * Limit how many SocialPlatforms to delete.
     */
    limit?: number
  }

  /**
   * SocialPlatform without action
   */
  export type SocialPlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPlatform
     */
    select?: SocialPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPlatform
     */
    omit?: SocialPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPlatformInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    address: string | null
    phone: string | null
    website: string | null
    status: string | null
    isVip: boolean | null
    source: string | null
    ownerUserId: string | null
    createdByUserId: string | null
    nextTouchAt: Date | null
    nextTouchType: string | null
    nextTouchNote: string | null
    industryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    address: string | null
    phone: string | null
    website: string | null
    status: string | null
    isVip: boolean | null
    source: string | null
    ownerUserId: string | null
    createdByUserId: string | null
    nextTouchAt: Date | null
    nextTouchType: string | null
    nextTouchNote: string | null
    industryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    organizationId: number
    name: number
    address: number
    phone: number
    website: number
    status: number
    isVip: number
    source: number
    ownerUserId: number
    createdByUserId: number
    nextTouchAt: number
    nextTouchType: number
    nextTouchNote: number
    industryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    address?: true
    phone?: true
    website?: true
    status?: true
    isVip?: true
    source?: true
    ownerUserId?: true
    createdByUserId?: true
    nextTouchAt?: true
    nextTouchType?: true
    nextTouchNote?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    address?: true
    phone?: true
    website?: true
    status?: true
    isVip?: true
    source?: true
    ownerUserId?: true
    createdByUserId?: true
    nextTouchAt?: true
    nextTouchType?: true
    nextTouchNote?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    address?: true
    phone?: true
    website?: true
    status?: true
    isVip?: true
    source?: true
    ownerUserId?: true
    createdByUserId?: true
    nextTouchAt?: true
    nextTouchType?: true
    nextTouchNote?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    organizationId: string
    name: string
    address: string | null
    phone: string | null
    website: string | null
    status: string
    isVip: boolean
    source: string | null
    ownerUserId: string | null
    createdByUserId: string | null
    nextTouchAt: Date | null
    nextTouchType: string | null
    nextTouchNote: string | null
    industryId: string
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    website?: boolean
    status?: boolean
    isVip?: boolean
    source?: boolean
    ownerUserId?: boolean
    createdByUserId?: boolean
    nextTouchAt?: boolean
    nextTouchType?: boolean
    nextTouchNote?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
    contacts?: boolean | Account$contactsArgs<ExtArgs>
    notes?: boolean | Account$notesArgs<ExtArgs>
    socials?: boolean | Account$socialsArgs<ExtArgs>
    touches?: boolean | Account$touchesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    website?: boolean
    status?: boolean
    isVip?: boolean
    source?: boolean
    ownerUserId?: boolean
    createdByUserId?: boolean
    nextTouchAt?: boolean
    nextTouchType?: boolean
    nextTouchNote?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    website?: boolean
    status?: boolean
    isVip?: boolean
    source?: boolean
    ownerUserId?: boolean
    createdByUserId?: boolean
    nextTouchAt?: boolean
    nextTouchType?: boolean
    nextTouchNote?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    organizationId?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    website?: boolean
    status?: boolean
    isVip?: boolean
    source?: boolean
    ownerUserId?: boolean
    createdByUserId?: boolean
    nextTouchAt?: boolean
    nextTouchType?: boolean
    nextTouchNote?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "name" | "address" | "phone" | "website" | "status" | "isVip" | "source" | "ownerUserId" | "createdByUserId" | "nextTouchAt" | "nextTouchType" | "nextTouchNote" | "industryId" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
    contacts?: boolean | Account$contactsArgs<ExtArgs>
    notes?: boolean | Account$notesArgs<ExtArgs>
    socials?: boolean | Account$socialsArgs<ExtArgs>
    touches?: boolean | Account$touchesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      industry: Prisma.$IndustryPayload<ExtArgs>
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      notes: Prisma.$AccountNotePayload<ExtArgs>[]
      socials: Prisma.$AccountSocialLinkPayload<ExtArgs>[]
      touches: Prisma.$TouchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      name: string
      address: string | null
      phone: string | null
      website: string | null
      /**
       * Pipeline / prospecting state (separate from freshness).
       * Allowed: "NEW" | "CONTACTED" | "QUALIFIED" | "NURTURING" | "LOST"
       */
      status: string
      isVip: boolean
      source: string | null
      /**
       * Responsibility only — does not restrict coworker visibility.
       */
      ownerUserId: string | null
      createdByUserId: string | null
      nextTouchAt: Date | null
      nextTouchType: string | null
      nextTouchNote: string | null
      industryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    industry<T extends IndustryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IndustryDefaultArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contacts<T extends Account$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Account$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Account$notesArgs<ExtArgs> = {}>(args?: Subset<T, Account$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    socials<T extends Account$socialsArgs<ExtArgs> = {}>(args?: Subset<T, Account$socialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    touches<T extends Account$touchesArgs<ExtArgs> = {}>(args?: Subset<T, Account$touchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly organizationId: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly address: FieldRef<"Account", 'String'>
    readonly phone: FieldRef<"Account", 'String'>
    readonly website: FieldRef<"Account", 'String'>
    readonly status: FieldRef<"Account", 'String'>
    readonly isVip: FieldRef<"Account", 'Boolean'>
    readonly source: FieldRef<"Account", 'String'>
    readonly ownerUserId: FieldRef<"Account", 'String'>
    readonly createdByUserId: FieldRef<"Account", 'String'>
    readonly nextTouchAt: FieldRef<"Account", 'DateTime'>
    readonly nextTouchType: FieldRef<"Account", 'String'>
    readonly nextTouchNote: FieldRef<"Account", 'String'>
    readonly industryId: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.contacts
   */
  export type Account$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Account.notes
   */
  export type Account$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    where?: AccountNoteWhereInput
    orderBy?: AccountNoteOrderByWithRelationInput | AccountNoteOrderByWithRelationInput[]
    cursor?: AccountNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountNoteScalarFieldEnum | AccountNoteScalarFieldEnum[]
  }

  /**
   * Account.socials
   */
  export type Account$socialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    where?: AccountSocialLinkWhereInput
    orderBy?: AccountSocialLinkOrderByWithRelationInput | AccountSocialLinkOrderByWithRelationInput[]
    cursor?: AccountSocialLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountSocialLinkScalarFieldEnum | AccountSocialLinkScalarFieldEnum[]
  }

  /**
   * Account.touches
   */
  export type Account$touchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    where?: TouchWhereInput
    orderBy?: TouchOrderByWithRelationInput | TouchOrderByWithRelationInput[]
    cursor?: TouchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TouchScalarFieldEnum | TouchScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model AccountSocialLink
   */

  export type AggregateAccountSocialLink = {
    _count: AccountSocialLinkCountAggregateOutputType | null
    _min: AccountSocialLinkMinAggregateOutputType | null
    _max: AccountSocialLinkMaxAggregateOutputType | null
  }

  export type AccountSocialLinkMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    accountId: string | null
    platform: string | null
    handle: string | null
  }

  export type AccountSocialLinkMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    accountId: string | null
    platform: string | null
    handle: string | null
  }

  export type AccountSocialLinkCountAggregateOutputType = {
    id: number
    organizationId: number
    accountId: number
    platform: number
    handle: number
    _all: number
  }


  export type AccountSocialLinkMinAggregateInputType = {
    id?: true
    organizationId?: true
    accountId?: true
    platform?: true
    handle?: true
  }

  export type AccountSocialLinkMaxAggregateInputType = {
    id?: true
    organizationId?: true
    accountId?: true
    platform?: true
    handle?: true
  }

  export type AccountSocialLinkCountAggregateInputType = {
    id?: true
    organizationId?: true
    accountId?: true
    platform?: true
    handle?: true
    _all?: true
  }

  export type AccountSocialLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountSocialLink to aggregate.
     */
    where?: AccountSocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSocialLinks to fetch.
     */
    orderBy?: AccountSocialLinkOrderByWithRelationInput | AccountSocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountSocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountSocialLinks
    **/
    _count?: true | AccountSocialLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountSocialLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountSocialLinkMaxAggregateInputType
  }

  export type GetAccountSocialLinkAggregateType<T extends AccountSocialLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountSocialLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountSocialLink[P]>
      : GetScalarType<T[P], AggregateAccountSocialLink[P]>
  }




  export type AccountSocialLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountSocialLinkWhereInput
    orderBy?: AccountSocialLinkOrderByWithAggregationInput | AccountSocialLinkOrderByWithAggregationInput[]
    by: AccountSocialLinkScalarFieldEnum[] | AccountSocialLinkScalarFieldEnum
    having?: AccountSocialLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountSocialLinkCountAggregateInputType | true
    _min?: AccountSocialLinkMinAggregateInputType
    _max?: AccountSocialLinkMaxAggregateInputType
  }

  export type AccountSocialLinkGroupByOutputType = {
    id: string
    organizationId: string
    accountId: string
    platform: string
    handle: string
    _count: AccountSocialLinkCountAggregateOutputType | null
    _min: AccountSocialLinkMinAggregateOutputType | null
    _max: AccountSocialLinkMaxAggregateOutputType | null
  }

  type GetAccountSocialLinkGroupByPayload<T extends AccountSocialLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountSocialLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountSocialLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountSocialLinkGroupByOutputType[P]>
            : GetScalarType<T[P], AccountSocialLinkGroupByOutputType[P]>
        }
      >
    >


  export type AccountSocialLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    platform?: boolean
    handle?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountSocialLink"]>

  export type AccountSocialLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    platform?: boolean
    handle?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountSocialLink"]>

  export type AccountSocialLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    platform?: boolean
    handle?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountSocialLink"]>

  export type AccountSocialLinkSelectScalar = {
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    platform?: boolean
    handle?: boolean
  }

  export type AccountSocialLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "accountId" | "platform" | "handle", ExtArgs["result"]["accountSocialLink"]>
  export type AccountSocialLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AccountSocialLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AccountSocialLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $AccountSocialLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountSocialLink"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      accountId: string
      platform: string
      handle: string
    }, ExtArgs["result"]["accountSocialLink"]>
    composites: {}
  }

  type AccountSocialLinkGetPayload<S extends boolean | null | undefined | AccountSocialLinkDefaultArgs> = $Result.GetResult<Prisma.$AccountSocialLinkPayload, S>

  type AccountSocialLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountSocialLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountSocialLinkCountAggregateInputType | true
    }

  export interface AccountSocialLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountSocialLink'], meta: { name: 'AccountSocialLink' } }
    /**
     * Find zero or one AccountSocialLink that matches the filter.
     * @param {AccountSocialLinkFindUniqueArgs} args - Arguments to find a AccountSocialLink
     * @example
     * // Get one AccountSocialLink
     * const accountSocialLink = await prisma.accountSocialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountSocialLinkFindUniqueArgs>(args: SelectSubset<T, AccountSocialLinkFindUniqueArgs<ExtArgs>>): Prisma__AccountSocialLinkClient<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountSocialLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountSocialLinkFindUniqueOrThrowArgs} args - Arguments to find a AccountSocialLink
     * @example
     * // Get one AccountSocialLink
     * const accountSocialLink = await prisma.accountSocialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountSocialLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountSocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountSocialLinkClient<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountSocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSocialLinkFindFirstArgs} args - Arguments to find a AccountSocialLink
     * @example
     * // Get one AccountSocialLink
     * const accountSocialLink = await prisma.accountSocialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountSocialLinkFindFirstArgs>(args?: SelectSubset<T, AccountSocialLinkFindFirstArgs<ExtArgs>>): Prisma__AccountSocialLinkClient<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountSocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSocialLinkFindFirstOrThrowArgs} args - Arguments to find a AccountSocialLink
     * @example
     * // Get one AccountSocialLink
     * const accountSocialLink = await prisma.accountSocialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountSocialLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountSocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountSocialLinkClient<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountSocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountSocialLinks
     * const accountSocialLinks = await prisma.accountSocialLink.findMany()
     * 
     * // Get first 10 AccountSocialLinks
     * const accountSocialLinks = await prisma.accountSocialLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountSocialLinkWithIdOnly = await prisma.accountSocialLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountSocialLinkFindManyArgs>(args?: SelectSubset<T, AccountSocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountSocialLink.
     * @param {AccountSocialLinkCreateArgs} args - Arguments to create a AccountSocialLink.
     * @example
     * // Create one AccountSocialLink
     * const AccountSocialLink = await prisma.accountSocialLink.create({
     *   data: {
     *     // ... data to create a AccountSocialLink
     *   }
     * })
     * 
     */
    create<T extends AccountSocialLinkCreateArgs>(args: SelectSubset<T, AccountSocialLinkCreateArgs<ExtArgs>>): Prisma__AccountSocialLinkClient<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountSocialLinks.
     * @param {AccountSocialLinkCreateManyArgs} args - Arguments to create many AccountSocialLinks.
     * @example
     * // Create many AccountSocialLinks
     * const accountSocialLink = await prisma.accountSocialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountSocialLinkCreateManyArgs>(args?: SelectSubset<T, AccountSocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountSocialLinks and returns the data saved in the database.
     * @param {AccountSocialLinkCreateManyAndReturnArgs} args - Arguments to create many AccountSocialLinks.
     * @example
     * // Create many AccountSocialLinks
     * const accountSocialLink = await prisma.accountSocialLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountSocialLinks and only return the `id`
     * const accountSocialLinkWithIdOnly = await prisma.accountSocialLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountSocialLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountSocialLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountSocialLink.
     * @param {AccountSocialLinkDeleteArgs} args - Arguments to delete one AccountSocialLink.
     * @example
     * // Delete one AccountSocialLink
     * const AccountSocialLink = await prisma.accountSocialLink.delete({
     *   where: {
     *     // ... filter to delete one AccountSocialLink
     *   }
     * })
     * 
     */
    delete<T extends AccountSocialLinkDeleteArgs>(args: SelectSubset<T, AccountSocialLinkDeleteArgs<ExtArgs>>): Prisma__AccountSocialLinkClient<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountSocialLink.
     * @param {AccountSocialLinkUpdateArgs} args - Arguments to update one AccountSocialLink.
     * @example
     * // Update one AccountSocialLink
     * const accountSocialLink = await prisma.accountSocialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountSocialLinkUpdateArgs>(args: SelectSubset<T, AccountSocialLinkUpdateArgs<ExtArgs>>): Prisma__AccountSocialLinkClient<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountSocialLinks.
     * @param {AccountSocialLinkDeleteManyArgs} args - Arguments to filter AccountSocialLinks to delete.
     * @example
     * // Delete a few AccountSocialLinks
     * const { count } = await prisma.accountSocialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountSocialLinkDeleteManyArgs>(args?: SelectSubset<T, AccountSocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountSocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountSocialLinks
     * const accountSocialLink = await prisma.accountSocialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountSocialLinkUpdateManyArgs>(args: SelectSubset<T, AccountSocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountSocialLinks and returns the data updated in the database.
     * @param {AccountSocialLinkUpdateManyAndReturnArgs} args - Arguments to update many AccountSocialLinks.
     * @example
     * // Update many AccountSocialLinks
     * const accountSocialLink = await prisma.accountSocialLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountSocialLinks and only return the `id`
     * const accountSocialLinkWithIdOnly = await prisma.accountSocialLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountSocialLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountSocialLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountSocialLink.
     * @param {AccountSocialLinkUpsertArgs} args - Arguments to update or create a AccountSocialLink.
     * @example
     * // Update or create a AccountSocialLink
     * const accountSocialLink = await prisma.accountSocialLink.upsert({
     *   create: {
     *     // ... data to create a AccountSocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountSocialLink we want to update
     *   }
     * })
     */
    upsert<T extends AccountSocialLinkUpsertArgs>(args: SelectSubset<T, AccountSocialLinkUpsertArgs<ExtArgs>>): Prisma__AccountSocialLinkClient<$Result.GetResult<Prisma.$AccountSocialLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountSocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSocialLinkCountArgs} args - Arguments to filter AccountSocialLinks to count.
     * @example
     * // Count the number of AccountSocialLinks
     * const count = await prisma.accountSocialLink.count({
     *   where: {
     *     // ... the filter for the AccountSocialLinks we want to count
     *   }
     * })
    **/
    count<T extends AccountSocialLinkCountArgs>(
      args?: Subset<T, AccountSocialLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountSocialLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountSocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountSocialLinkAggregateArgs>(args: Subset<T, AccountSocialLinkAggregateArgs>): Prisma.PrismaPromise<GetAccountSocialLinkAggregateType<T>>

    /**
     * Group by AccountSocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSocialLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountSocialLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountSocialLinkGroupByArgs['orderBy'] }
        : { orderBy?: AccountSocialLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountSocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountSocialLink model
   */
  readonly fields: AccountSocialLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountSocialLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountSocialLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountSocialLink model
   */
  interface AccountSocialLinkFieldRefs {
    readonly id: FieldRef<"AccountSocialLink", 'String'>
    readonly organizationId: FieldRef<"AccountSocialLink", 'String'>
    readonly accountId: FieldRef<"AccountSocialLink", 'String'>
    readonly platform: FieldRef<"AccountSocialLink", 'String'>
    readonly handle: FieldRef<"AccountSocialLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AccountSocialLink findUnique
   */
  export type AccountSocialLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which AccountSocialLink to fetch.
     */
    where: AccountSocialLinkWhereUniqueInput
  }

  /**
   * AccountSocialLink findUniqueOrThrow
   */
  export type AccountSocialLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which AccountSocialLink to fetch.
     */
    where: AccountSocialLinkWhereUniqueInput
  }

  /**
   * AccountSocialLink findFirst
   */
  export type AccountSocialLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which AccountSocialLink to fetch.
     */
    where?: AccountSocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSocialLinks to fetch.
     */
    orderBy?: AccountSocialLinkOrderByWithRelationInput | AccountSocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountSocialLinks.
     */
    cursor?: AccountSocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountSocialLinks.
     */
    distinct?: AccountSocialLinkScalarFieldEnum | AccountSocialLinkScalarFieldEnum[]
  }

  /**
   * AccountSocialLink findFirstOrThrow
   */
  export type AccountSocialLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which AccountSocialLink to fetch.
     */
    where?: AccountSocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSocialLinks to fetch.
     */
    orderBy?: AccountSocialLinkOrderByWithRelationInput | AccountSocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountSocialLinks.
     */
    cursor?: AccountSocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountSocialLinks.
     */
    distinct?: AccountSocialLinkScalarFieldEnum | AccountSocialLinkScalarFieldEnum[]
  }

  /**
   * AccountSocialLink findMany
   */
  export type AccountSocialLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which AccountSocialLinks to fetch.
     */
    where?: AccountSocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSocialLinks to fetch.
     */
    orderBy?: AccountSocialLinkOrderByWithRelationInput | AccountSocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountSocialLinks.
     */
    cursor?: AccountSocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountSocialLinks.
     */
    distinct?: AccountSocialLinkScalarFieldEnum | AccountSocialLinkScalarFieldEnum[]
  }

  /**
   * AccountSocialLink create
   */
  export type AccountSocialLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountSocialLink.
     */
    data: XOR<AccountSocialLinkCreateInput, AccountSocialLinkUncheckedCreateInput>
  }

  /**
   * AccountSocialLink createMany
   */
  export type AccountSocialLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountSocialLinks.
     */
    data: AccountSocialLinkCreateManyInput | AccountSocialLinkCreateManyInput[]
  }

  /**
   * AccountSocialLink createManyAndReturn
   */
  export type AccountSocialLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * The data used to create many AccountSocialLinks.
     */
    data: AccountSocialLinkCreateManyInput | AccountSocialLinkCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountSocialLink update
   */
  export type AccountSocialLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountSocialLink.
     */
    data: XOR<AccountSocialLinkUpdateInput, AccountSocialLinkUncheckedUpdateInput>
    /**
     * Choose, which AccountSocialLink to update.
     */
    where: AccountSocialLinkWhereUniqueInput
  }

  /**
   * AccountSocialLink updateMany
   */
  export type AccountSocialLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountSocialLinks.
     */
    data: XOR<AccountSocialLinkUpdateManyMutationInput, AccountSocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which AccountSocialLinks to update
     */
    where?: AccountSocialLinkWhereInput
    /**
     * Limit how many AccountSocialLinks to update.
     */
    limit?: number
  }

  /**
   * AccountSocialLink updateManyAndReturn
   */
  export type AccountSocialLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * The data used to update AccountSocialLinks.
     */
    data: XOR<AccountSocialLinkUpdateManyMutationInput, AccountSocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which AccountSocialLinks to update
     */
    where?: AccountSocialLinkWhereInput
    /**
     * Limit how many AccountSocialLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountSocialLink upsert
   */
  export type AccountSocialLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountSocialLink to update in case it exists.
     */
    where: AccountSocialLinkWhereUniqueInput
    /**
     * In case the AccountSocialLink found by the `where` argument doesn't exist, create a new AccountSocialLink with this data.
     */
    create: XOR<AccountSocialLinkCreateInput, AccountSocialLinkUncheckedCreateInput>
    /**
     * In case the AccountSocialLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountSocialLinkUpdateInput, AccountSocialLinkUncheckedUpdateInput>
  }

  /**
   * AccountSocialLink delete
   */
  export type AccountSocialLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
    /**
     * Filter which AccountSocialLink to delete.
     */
    where: AccountSocialLinkWhereUniqueInput
  }

  /**
   * AccountSocialLink deleteMany
   */
  export type AccountSocialLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountSocialLinks to delete
     */
    where?: AccountSocialLinkWhereInput
    /**
     * Limit how many AccountSocialLinks to delete.
     */
    limit?: number
  }

  /**
   * AccountSocialLink without action
   */
  export type AccountSocialLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSocialLink
     */
    select?: AccountSocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSocialLink
     */
    omit?: AccountSocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSocialLinkInclude<ExtArgs> | null
  }


  /**
   * Model AccountNote
   */

  export type AggregateAccountNote = {
    _count: AccountNoteCountAggregateOutputType | null
    _min: AccountNoteMinAggregateOutputType | null
    _max: AccountNoteMaxAggregateOutputType | null
  }

  export type AccountNoteMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    text: string | null
    accountId: string | null
    createdAt: Date | null
  }

  export type AccountNoteMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    text: string | null
    accountId: string | null
    createdAt: Date | null
  }

  export type AccountNoteCountAggregateOutputType = {
    id: number
    organizationId: number
    text: number
    accountId: number
    createdAt: number
    _all: number
  }


  export type AccountNoteMinAggregateInputType = {
    id?: true
    organizationId?: true
    text?: true
    accountId?: true
    createdAt?: true
  }

  export type AccountNoteMaxAggregateInputType = {
    id?: true
    organizationId?: true
    text?: true
    accountId?: true
    createdAt?: true
  }

  export type AccountNoteCountAggregateInputType = {
    id?: true
    organizationId?: true
    text?: true
    accountId?: true
    createdAt?: true
    _all?: true
  }

  export type AccountNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountNote to aggregate.
     */
    where?: AccountNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountNotes to fetch.
     */
    orderBy?: AccountNoteOrderByWithRelationInput | AccountNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountNotes
    **/
    _count?: true | AccountNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountNoteMaxAggregateInputType
  }

  export type GetAccountNoteAggregateType<T extends AccountNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountNote[P]>
      : GetScalarType<T[P], AggregateAccountNote[P]>
  }




  export type AccountNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountNoteWhereInput
    orderBy?: AccountNoteOrderByWithAggregationInput | AccountNoteOrderByWithAggregationInput[]
    by: AccountNoteScalarFieldEnum[] | AccountNoteScalarFieldEnum
    having?: AccountNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountNoteCountAggregateInputType | true
    _min?: AccountNoteMinAggregateInputType
    _max?: AccountNoteMaxAggregateInputType
  }

  export type AccountNoteGroupByOutputType = {
    id: string
    organizationId: string
    text: string
    accountId: string
    createdAt: Date
    _count: AccountNoteCountAggregateOutputType | null
    _min: AccountNoteMinAggregateOutputType | null
    _max: AccountNoteMaxAggregateOutputType | null
  }

  type GetAccountNoteGroupByPayload<T extends AccountNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountNoteGroupByOutputType[P]>
            : GetScalarType<T[P], AccountNoteGroupByOutputType[P]>
        }
      >
    >


  export type AccountNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    text?: boolean
    accountId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountNote"]>

  export type AccountNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    text?: boolean
    accountId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountNote"]>

  export type AccountNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    text?: boolean
    accountId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountNote"]>

  export type AccountNoteSelectScalar = {
    id?: boolean
    organizationId?: boolean
    text?: boolean
    accountId?: boolean
    createdAt?: boolean
  }

  export type AccountNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "text" | "accountId" | "createdAt", ExtArgs["result"]["accountNote"]>
  export type AccountNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AccountNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AccountNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $AccountNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountNote"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      text: string
      accountId: string
      createdAt: Date
    }, ExtArgs["result"]["accountNote"]>
    composites: {}
  }

  type AccountNoteGetPayload<S extends boolean | null | undefined | AccountNoteDefaultArgs> = $Result.GetResult<Prisma.$AccountNotePayload, S>

  type AccountNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountNoteCountAggregateInputType | true
    }

  export interface AccountNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountNote'], meta: { name: 'AccountNote' } }
    /**
     * Find zero or one AccountNote that matches the filter.
     * @param {AccountNoteFindUniqueArgs} args - Arguments to find a AccountNote
     * @example
     * // Get one AccountNote
     * const accountNote = await prisma.accountNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountNoteFindUniqueArgs>(args: SelectSubset<T, AccountNoteFindUniqueArgs<ExtArgs>>): Prisma__AccountNoteClient<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountNoteFindUniqueOrThrowArgs} args - Arguments to find a AccountNote
     * @example
     * // Get one AccountNote
     * const accountNote = await prisma.accountNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountNoteClient<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountNoteFindFirstArgs} args - Arguments to find a AccountNote
     * @example
     * // Get one AccountNote
     * const accountNote = await prisma.accountNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountNoteFindFirstArgs>(args?: SelectSubset<T, AccountNoteFindFirstArgs<ExtArgs>>): Prisma__AccountNoteClient<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountNoteFindFirstOrThrowArgs} args - Arguments to find a AccountNote
     * @example
     * // Get one AccountNote
     * const accountNote = await prisma.accountNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountNoteClient<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountNotes
     * const accountNotes = await prisma.accountNote.findMany()
     * 
     * // Get first 10 AccountNotes
     * const accountNotes = await prisma.accountNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountNoteWithIdOnly = await prisma.accountNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountNoteFindManyArgs>(args?: SelectSubset<T, AccountNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountNote.
     * @param {AccountNoteCreateArgs} args - Arguments to create a AccountNote.
     * @example
     * // Create one AccountNote
     * const AccountNote = await prisma.accountNote.create({
     *   data: {
     *     // ... data to create a AccountNote
     *   }
     * })
     * 
     */
    create<T extends AccountNoteCreateArgs>(args: SelectSubset<T, AccountNoteCreateArgs<ExtArgs>>): Prisma__AccountNoteClient<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountNotes.
     * @param {AccountNoteCreateManyArgs} args - Arguments to create many AccountNotes.
     * @example
     * // Create many AccountNotes
     * const accountNote = await prisma.accountNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountNoteCreateManyArgs>(args?: SelectSubset<T, AccountNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountNotes and returns the data saved in the database.
     * @param {AccountNoteCreateManyAndReturnArgs} args - Arguments to create many AccountNotes.
     * @example
     * // Create many AccountNotes
     * const accountNote = await prisma.accountNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountNotes and only return the `id`
     * const accountNoteWithIdOnly = await prisma.accountNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountNote.
     * @param {AccountNoteDeleteArgs} args - Arguments to delete one AccountNote.
     * @example
     * // Delete one AccountNote
     * const AccountNote = await prisma.accountNote.delete({
     *   where: {
     *     // ... filter to delete one AccountNote
     *   }
     * })
     * 
     */
    delete<T extends AccountNoteDeleteArgs>(args: SelectSubset<T, AccountNoteDeleteArgs<ExtArgs>>): Prisma__AccountNoteClient<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountNote.
     * @param {AccountNoteUpdateArgs} args - Arguments to update one AccountNote.
     * @example
     * // Update one AccountNote
     * const accountNote = await prisma.accountNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountNoteUpdateArgs>(args: SelectSubset<T, AccountNoteUpdateArgs<ExtArgs>>): Prisma__AccountNoteClient<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountNotes.
     * @param {AccountNoteDeleteManyArgs} args - Arguments to filter AccountNotes to delete.
     * @example
     * // Delete a few AccountNotes
     * const { count } = await prisma.accountNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountNoteDeleteManyArgs>(args?: SelectSubset<T, AccountNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountNotes
     * const accountNote = await prisma.accountNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountNoteUpdateManyArgs>(args: SelectSubset<T, AccountNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountNotes and returns the data updated in the database.
     * @param {AccountNoteUpdateManyAndReturnArgs} args - Arguments to update many AccountNotes.
     * @example
     * // Update many AccountNotes
     * const accountNote = await prisma.accountNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountNotes and only return the `id`
     * const accountNoteWithIdOnly = await prisma.accountNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountNote.
     * @param {AccountNoteUpsertArgs} args - Arguments to update or create a AccountNote.
     * @example
     * // Update or create a AccountNote
     * const accountNote = await prisma.accountNote.upsert({
     *   create: {
     *     // ... data to create a AccountNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountNote we want to update
     *   }
     * })
     */
    upsert<T extends AccountNoteUpsertArgs>(args: SelectSubset<T, AccountNoteUpsertArgs<ExtArgs>>): Prisma__AccountNoteClient<$Result.GetResult<Prisma.$AccountNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountNoteCountArgs} args - Arguments to filter AccountNotes to count.
     * @example
     * // Count the number of AccountNotes
     * const count = await prisma.accountNote.count({
     *   where: {
     *     // ... the filter for the AccountNotes we want to count
     *   }
     * })
    **/
    count<T extends AccountNoteCountArgs>(
      args?: Subset<T, AccountNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountNoteAggregateArgs>(args: Subset<T, AccountNoteAggregateArgs>): Prisma.PrismaPromise<GetAccountNoteAggregateType<T>>

    /**
     * Group by AccountNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountNoteGroupByArgs['orderBy'] }
        : { orderBy?: AccountNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountNote model
   */
  readonly fields: AccountNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountNote model
   */
  interface AccountNoteFieldRefs {
    readonly id: FieldRef<"AccountNote", 'String'>
    readonly organizationId: FieldRef<"AccountNote", 'String'>
    readonly text: FieldRef<"AccountNote", 'String'>
    readonly accountId: FieldRef<"AccountNote", 'String'>
    readonly createdAt: FieldRef<"AccountNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountNote findUnique
   */
  export type AccountNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    /**
     * Filter, which AccountNote to fetch.
     */
    where: AccountNoteWhereUniqueInput
  }

  /**
   * AccountNote findUniqueOrThrow
   */
  export type AccountNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    /**
     * Filter, which AccountNote to fetch.
     */
    where: AccountNoteWhereUniqueInput
  }

  /**
   * AccountNote findFirst
   */
  export type AccountNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    /**
     * Filter, which AccountNote to fetch.
     */
    where?: AccountNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountNotes to fetch.
     */
    orderBy?: AccountNoteOrderByWithRelationInput | AccountNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountNotes.
     */
    cursor?: AccountNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountNotes.
     */
    distinct?: AccountNoteScalarFieldEnum | AccountNoteScalarFieldEnum[]
  }

  /**
   * AccountNote findFirstOrThrow
   */
  export type AccountNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    /**
     * Filter, which AccountNote to fetch.
     */
    where?: AccountNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountNotes to fetch.
     */
    orderBy?: AccountNoteOrderByWithRelationInput | AccountNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountNotes.
     */
    cursor?: AccountNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountNotes.
     */
    distinct?: AccountNoteScalarFieldEnum | AccountNoteScalarFieldEnum[]
  }

  /**
   * AccountNote findMany
   */
  export type AccountNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    /**
     * Filter, which AccountNotes to fetch.
     */
    where?: AccountNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountNotes to fetch.
     */
    orderBy?: AccountNoteOrderByWithRelationInput | AccountNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountNotes.
     */
    cursor?: AccountNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountNotes.
     */
    distinct?: AccountNoteScalarFieldEnum | AccountNoteScalarFieldEnum[]
  }

  /**
   * AccountNote create
   */
  export type AccountNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountNote.
     */
    data: XOR<AccountNoteCreateInput, AccountNoteUncheckedCreateInput>
  }

  /**
   * AccountNote createMany
   */
  export type AccountNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountNotes.
     */
    data: AccountNoteCreateManyInput | AccountNoteCreateManyInput[]
  }

  /**
   * AccountNote createManyAndReturn
   */
  export type AccountNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * The data used to create many AccountNotes.
     */
    data: AccountNoteCreateManyInput | AccountNoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountNote update
   */
  export type AccountNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountNote.
     */
    data: XOR<AccountNoteUpdateInput, AccountNoteUncheckedUpdateInput>
    /**
     * Choose, which AccountNote to update.
     */
    where: AccountNoteWhereUniqueInput
  }

  /**
   * AccountNote updateMany
   */
  export type AccountNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountNotes.
     */
    data: XOR<AccountNoteUpdateManyMutationInput, AccountNoteUncheckedUpdateManyInput>
    /**
     * Filter which AccountNotes to update
     */
    where?: AccountNoteWhereInput
    /**
     * Limit how many AccountNotes to update.
     */
    limit?: number
  }

  /**
   * AccountNote updateManyAndReturn
   */
  export type AccountNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * The data used to update AccountNotes.
     */
    data: XOR<AccountNoteUpdateManyMutationInput, AccountNoteUncheckedUpdateManyInput>
    /**
     * Filter which AccountNotes to update
     */
    where?: AccountNoteWhereInput
    /**
     * Limit how many AccountNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountNote upsert
   */
  export type AccountNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountNote to update in case it exists.
     */
    where: AccountNoteWhereUniqueInput
    /**
     * In case the AccountNote found by the `where` argument doesn't exist, create a new AccountNote with this data.
     */
    create: XOR<AccountNoteCreateInput, AccountNoteUncheckedCreateInput>
    /**
     * In case the AccountNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountNoteUpdateInput, AccountNoteUncheckedUpdateInput>
  }

  /**
   * AccountNote delete
   */
  export type AccountNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
    /**
     * Filter which AccountNote to delete.
     */
    where: AccountNoteWhereUniqueInput
  }

  /**
   * AccountNote deleteMany
   */
  export type AccountNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountNotes to delete
     */
    where?: AccountNoteWhereInput
    /**
     * Limit how many AccountNotes to delete.
     */
    limit?: number
  }

  /**
   * AccountNote without action
   */
  export type AccountNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountNote
     */
    select?: AccountNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountNote
     */
    omit?: AccountNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountNoteInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    accountId: string | null
    firstName: string | null
    lastName: string | null
    title: string | null
    email: string | null
    phone: string | null
    officePhone: string | null
    isVip: boolean | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    accountId: string | null
    firstName: string | null
    lastName: string | null
    title: string | null
    email: string | null
    phone: string | null
    officePhone: string | null
    isVip: boolean | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    organizationId: number
    accountId: number
    firstName: number
    lastName: number
    title: number
    email: number
    phone: number
    officePhone: number
    isVip: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    organizationId?: true
    accountId?: true
    firstName?: true
    lastName?: true
    title?: true
    email?: true
    phone?: true
    officePhone?: true
    isVip?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    organizationId?: true
    accountId?: true
    firstName?: true
    lastName?: true
    title?: true
    email?: true
    phone?: true
    officePhone?: true
    isVip?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    organizationId?: true
    accountId?: true
    firstName?: true
    lastName?: true
    title?: true
    email?: true
    phone?: true
    officePhone?: true
    isVip?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    organizationId: string
    accountId: string
    firstName: string
    lastName: string
    title: string | null
    email: string | null
    phone: string | null
    officePhone: string | null
    isVip: boolean
    source: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    officePhone?: boolean
    isVip?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    touches?: boolean | Contact$touchesArgs<ExtArgs>
    notes?: boolean | Contact$notesArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    officePhone?: boolean
    isVip?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    officePhone?: boolean
    isVip?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    officePhone?: boolean
    isVip?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "accountId" | "firstName" | "lastName" | "title" | "email" | "phone" | "officePhone" | "isVip" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    touches?: boolean | Contact$touchesArgs<ExtArgs>
    notes?: boolean | Contact$notesArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
      touches: Prisma.$TouchPayload<ExtArgs>[]
      notes: Prisma.$ContactNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      accountId: string
      firstName: string
      lastName: string
      title: string | null
      email: string | null
      /**
       * Cell / mobile number.
       */
      phone: string | null
      /**
       * Office / desk number.
       */
      officePhone: string | null
      isVip: boolean
      source: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    touches<T extends Contact$touchesArgs<ExtArgs> = {}>(args?: Subset<T, Contact$touchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Contact$notesArgs<ExtArgs> = {}>(args?: Subset<T, Contact$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly organizationId: FieldRef<"Contact", 'String'>
    readonly accountId: FieldRef<"Contact", 'String'>
    readonly firstName: FieldRef<"Contact", 'String'>
    readonly lastName: FieldRef<"Contact", 'String'>
    readonly title: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly officePhone: FieldRef<"Contact", 'String'>
    readonly isVip: FieldRef<"Contact", 'Boolean'>
    readonly source: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.touches
   */
  export type Contact$touchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    where?: TouchWhereInput
    orderBy?: TouchOrderByWithRelationInput | TouchOrderByWithRelationInput[]
    cursor?: TouchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TouchScalarFieldEnum | TouchScalarFieldEnum[]
  }

  /**
   * Contact.notes
   */
  export type Contact$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    where?: ContactNoteWhereInput
    orderBy?: ContactNoteOrderByWithRelationInput | ContactNoteOrderByWithRelationInput[]
    cursor?: ContactNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactNoteScalarFieldEnum | ContactNoteScalarFieldEnum[]
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model ContactNote
   */

  export type AggregateContactNote = {
    _count: ContactNoteCountAggregateOutputType | null
    _min: ContactNoteMinAggregateOutputType | null
    _max: ContactNoteMaxAggregateOutputType | null
  }

  export type ContactNoteMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    text: string | null
    contactId: string | null
    createdAt: Date | null
  }

  export type ContactNoteMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    text: string | null
    contactId: string | null
    createdAt: Date | null
  }

  export type ContactNoteCountAggregateOutputType = {
    id: number
    organizationId: number
    text: number
    contactId: number
    createdAt: number
    _all: number
  }


  export type ContactNoteMinAggregateInputType = {
    id?: true
    organizationId?: true
    text?: true
    contactId?: true
    createdAt?: true
  }

  export type ContactNoteMaxAggregateInputType = {
    id?: true
    organizationId?: true
    text?: true
    contactId?: true
    createdAt?: true
  }

  export type ContactNoteCountAggregateInputType = {
    id?: true
    organizationId?: true
    text?: true
    contactId?: true
    createdAt?: true
    _all?: true
  }

  export type ContactNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactNote to aggregate.
     */
    where?: ContactNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactNotes to fetch.
     */
    orderBy?: ContactNoteOrderByWithRelationInput | ContactNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactNotes
    **/
    _count?: true | ContactNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactNoteMaxAggregateInputType
  }

  export type GetContactNoteAggregateType<T extends ContactNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateContactNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactNote[P]>
      : GetScalarType<T[P], AggregateContactNote[P]>
  }




  export type ContactNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactNoteWhereInput
    orderBy?: ContactNoteOrderByWithAggregationInput | ContactNoteOrderByWithAggregationInput[]
    by: ContactNoteScalarFieldEnum[] | ContactNoteScalarFieldEnum
    having?: ContactNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactNoteCountAggregateInputType | true
    _min?: ContactNoteMinAggregateInputType
    _max?: ContactNoteMaxAggregateInputType
  }

  export type ContactNoteGroupByOutputType = {
    id: string
    organizationId: string
    text: string
    contactId: string
    createdAt: Date
    _count: ContactNoteCountAggregateOutputType | null
    _min: ContactNoteMinAggregateOutputType | null
    _max: ContactNoteMaxAggregateOutputType | null
  }

  type GetContactNoteGroupByPayload<T extends ContactNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactNoteGroupByOutputType[P]>
            : GetScalarType<T[P], ContactNoteGroupByOutputType[P]>
        }
      >
    >


  export type ContactNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    text?: boolean
    contactId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactNote"]>

  export type ContactNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    text?: boolean
    contactId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactNote"]>

  export type ContactNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    text?: boolean
    contactId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactNote"]>

  export type ContactNoteSelectScalar = {
    id?: boolean
    organizationId?: boolean
    text?: boolean
    contactId?: boolean
    createdAt?: boolean
  }

  export type ContactNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "text" | "contactId" | "createdAt", ExtArgs["result"]["contactNote"]>
  export type ContactNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type ContactNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type ContactNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }

  export type $ContactNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactNote"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      contact: Prisma.$ContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      text: string
      contactId: string
      createdAt: Date
    }, ExtArgs["result"]["contactNote"]>
    composites: {}
  }

  type ContactNoteGetPayload<S extends boolean | null | undefined | ContactNoteDefaultArgs> = $Result.GetResult<Prisma.$ContactNotePayload, S>

  type ContactNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactNoteCountAggregateInputType | true
    }

  export interface ContactNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactNote'], meta: { name: 'ContactNote' } }
    /**
     * Find zero or one ContactNote that matches the filter.
     * @param {ContactNoteFindUniqueArgs} args - Arguments to find a ContactNote
     * @example
     * // Get one ContactNote
     * const contactNote = await prisma.contactNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactNoteFindUniqueArgs>(args: SelectSubset<T, ContactNoteFindUniqueArgs<ExtArgs>>): Prisma__ContactNoteClient<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactNoteFindUniqueOrThrowArgs} args - Arguments to find a ContactNote
     * @example
     * // Get one ContactNote
     * const contactNote = await prisma.contactNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactNoteClient<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactNoteFindFirstArgs} args - Arguments to find a ContactNote
     * @example
     * // Get one ContactNote
     * const contactNote = await prisma.contactNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactNoteFindFirstArgs>(args?: SelectSubset<T, ContactNoteFindFirstArgs<ExtArgs>>): Prisma__ContactNoteClient<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactNoteFindFirstOrThrowArgs} args - Arguments to find a ContactNote
     * @example
     * // Get one ContactNote
     * const contactNote = await prisma.contactNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactNoteClient<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactNotes
     * const contactNotes = await prisma.contactNote.findMany()
     * 
     * // Get first 10 ContactNotes
     * const contactNotes = await prisma.contactNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactNoteWithIdOnly = await prisma.contactNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactNoteFindManyArgs>(args?: SelectSubset<T, ContactNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactNote.
     * @param {ContactNoteCreateArgs} args - Arguments to create a ContactNote.
     * @example
     * // Create one ContactNote
     * const ContactNote = await prisma.contactNote.create({
     *   data: {
     *     // ... data to create a ContactNote
     *   }
     * })
     * 
     */
    create<T extends ContactNoteCreateArgs>(args: SelectSubset<T, ContactNoteCreateArgs<ExtArgs>>): Prisma__ContactNoteClient<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactNotes.
     * @param {ContactNoteCreateManyArgs} args - Arguments to create many ContactNotes.
     * @example
     * // Create many ContactNotes
     * const contactNote = await prisma.contactNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactNoteCreateManyArgs>(args?: SelectSubset<T, ContactNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactNotes and returns the data saved in the database.
     * @param {ContactNoteCreateManyAndReturnArgs} args - Arguments to create many ContactNotes.
     * @example
     * // Create many ContactNotes
     * const contactNote = await prisma.contactNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactNotes and only return the `id`
     * const contactNoteWithIdOnly = await prisma.contactNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactNote.
     * @param {ContactNoteDeleteArgs} args - Arguments to delete one ContactNote.
     * @example
     * // Delete one ContactNote
     * const ContactNote = await prisma.contactNote.delete({
     *   where: {
     *     // ... filter to delete one ContactNote
     *   }
     * })
     * 
     */
    delete<T extends ContactNoteDeleteArgs>(args: SelectSubset<T, ContactNoteDeleteArgs<ExtArgs>>): Prisma__ContactNoteClient<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactNote.
     * @param {ContactNoteUpdateArgs} args - Arguments to update one ContactNote.
     * @example
     * // Update one ContactNote
     * const contactNote = await prisma.contactNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactNoteUpdateArgs>(args: SelectSubset<T, ContactNoteUpdateArgs<ExtArgs>>): Prisma__ContactNoteClient<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactNotes.
     * @param {ContactNoteDeleteManyArgs} args - Arguments to filter ContactNotes to delete.
     * @example
     * // Delete a few ContactNotes
     * const { count } = await prisma.contactNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactNoteDeleteManyArgs>(args?: SelectSubset<T, ContactNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactNotes
     * const contactNote = await prisma.contactNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactNoteUpdateManyArgs>(args: SelectSubset<T, ContactNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactNotes and returns the data updated in the database.
     * @param {ContactNoteUpdateManyAndReturnArgs} args - Arguments to update many ContactNotes.
     * @example
     * // Update many ContactNotes
     * const contactNote = await prisma.contactNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactNotes and only return the `id`
     * const contactNoteWithIdOnly = await prisma.contactNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactNote.
     * @param {ContactNoteUpsertArgs} args - Arguments to update or create a ContactNote.
     * @example
     * // Update or create a ContactNote
     * const contactNote = await prisma.contactNote.upsert({
     *   create: {
     *     // ... data to create a ContactNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactNote we want to update
     *   }
     * })
     */
    upsert<T extends ContactNoteUpsertArgs>(args: SelectSubset<T, ContactNoteUpsertArgs<ExtArgs>>): Prisma__ContactNoteClient<$Result.GetResult<Prisma.$ContactNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactNoteCountArgs} args - Arguments to filter ContactNotes to count.
     * @example
     * // Count the number of ContactNotes
     * const count = await prisma.contactNote.count({
     *   where: {
     *     // ... the filter for the ContactNotes we want to count
     *   }
     * })
    **/
    count<T extends ContactNoteCountArgs>(
      args?: Subset<T, ContactNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactNoteAggregateArgs>(args: Subset<T, ContactNoteAggregateArgs>): Prisma.PrismaPromise<GetContactNoteAggregateType<T>>

    /**
     * Group by ContactNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactNoteGroupByArgs['orderBy'] }
        : { orderBy?: ContactNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactNote model
   */
  readonly fields: ContactNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactNote model
   */
  interface ContactNoteFieldRefs {
    readonly id: FieldRef<"ContactNote", 'String'>
    readonly organizationId: FieldRef<"ContactNote", 'String'>
    readonly text: FieldRef<"ContactNote", 'String'>
    readonly contactId: FieldRef<"ContactNote", 'String'>
    readonly createdAt: FieldRef<"ContactNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactNote findUnique
   */
  export type ContactNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    /**
     * Filter, which ContactNote to fetch.
     */
    where: ContactNoteWhereUniqueInput
  }

  /**
   * ContactNote findUniqueOrThrow
   */
  export type ContactNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    /**
     * Filter, which ContactNote to fetch.
     */
    where: ContactNoteWhereUniqueInput
  }

  /**
   * ContactNote findFirst
   */
  export type ContactNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    /**
     * Filter, which ContactNote to fetch.
     */
    where?: ContactNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactNotes to fetch.
     */
    orderBy?: ContactNoteOrderByWithRelationInput | ContactNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactNotes.
     */
    cursor?: ContactNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactNotes.
     */
    distinct?: ContactNoteScalarFieldEnum | ContactNoteScalarFieldEnum[]
  }

  /**
   * ContactNote findFirstOrThrow
   */
  export type ContactNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    /**
     * Filter, which ContactNote to fetch.
     */
    where?: ContactNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactNotes to fetch.
     */
    orderBy?: ContactNoteOrderByWithRelationInput | ContactNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactNotes.
     */
    cursor?: ContactNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactNotes.
     */
    distinct?: ContactNoteScalarFieldEnum | ContactNoteScalarFieldEnum[]
  }

  /**
   * ContactNote findMany
   */
  export type ContactNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    /**
     * Filter, which ContactNotes to fetch.
     */
    where?: ContactNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactNotes to fetch.
     */
    orderBy?: ContactNoteOrderByWithRelationInput | ContactNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactNotes.
     */
    cursor?: ContactNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactNotes.
     */
    distinct?: ContactNoteScalarFieldEnum | ContactNoteScalarFieldEnum[]
  }

  /**
   * ContactNote create
   */
  export type ContactNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactNote.
     */
    data: XOR<ContactNoteCreateInput, ContactNoteUncheckedCreateInput>
  }

  /**
   * ContactNote createMany
   */
  export type ContactNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactNotes.
     */
    data: ContactNoteCreateManyInput | ContactNoteCreateManyInput[]
  }

  /**
   * ContactNote createManyAndReturn
   */
  export type ContactNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * The data used to create many ContactNotes.
     */
    data: ContactNoteCreateManyInput | ContactNoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactNote update
   */
  export type ContactNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactNote.
     */
    data: XOR<ContactNoteUpdateInput, ContactNoteUncheckedUpdateInput>
    /**
     * Choose, which ContactNote to update.
     */
    where: ContactNoteWhereUniqueInput
  }

  /**
   * ContactNote updateMany
   */
  export type ContactNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactNotes.
     */
    data: XOR<ContactNoteUpdateManyMutationInput, ContactNoteUncheckedUpdateManyInput>
    /**
     * Filter which ContactNotes to update
     */
    where?: ContactNoteWhereInput
    /**
     * Limit how many ContactNotes to update.
     */
    limit?: number
  }

  /**
   * ContactNote updateManyAndReturn
   */
  export type ContactNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * The data used to update ContactNotes.
     */
    data: XOR<ContactNoteUpdateManyMutationInput, ContactNoteUncheckedUpdateManyInput>
    /**
     * Filter which ContactNotes to update
     */
    where?: ContactNoteWhereInput
    /**
     * Limit how many ContactNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactNote upsert
   */
  export type ContactNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactNote to update in case it exists.
     */
    where: ContactNoteWhereUniqueInput
    /**
     * In case the ContactNote found by the `where` argument doesn't exist, create a new ContactNote with this data.
     */
    create: XOR<ContactNoteCreateInput, ContactNoteUncheckedCreateInput>
    /**
     * In case the ContactNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactNoteUpdateInput, ContactNoteUncheckedUpdateInput>
  }

  /**
   * ContactNote delete
   */
  export type ContactNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
    /**
     * Filter which ContactNote to delete.
     */
    where: ContactNoteWhereUniqueInput
  }

  /**
   * ContactNote deleteMany
   */
  export type ContactNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactNotes to delete
     */
    where?: ContactNoteWhereInput
    /**
     * Limit how many ContactNotes to delete.
     */
    limit?: number
  }

  /**
   * ContactNote without action
   */
  export type ContactNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactNote
     */
    select?: ContactNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactNote
     */
    omit?: ContactNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactNoteInclude<ExtArgs> | null
  }


  /**
   * Model Touch
   */

  export type AggregateTouch = {
    _count: TouchCountAggregateOutputType | null
    _avg: TouchAvgAggregateOutputType | null
    _sum: TouchSumAggregateOutputType | null
    _min: TouchMinAggregateOutputType | null
    _max: TouchMaxAggregateOutputType | null
  }

  export type TouchAvgAggregateOutputType = {
    amount: number | null
  }

  export type TouchSumAggregateOutputType = {
    amount: number | null
  }

  export type TouchMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    accountId: string | null
    contactId: string | null
    createdByUserId: string | null
    date: Date | null
    type: string | null
    outcome: string | null
    source: string | null
    isAutomated: boolean | null
    notes: string | null
    amount: number | null
    estimateNumber: string | null
    socialPlatform: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TouchMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    accountId: string | null
    contactId: string | null
    createdByUserId: string | null
    date: Date | null
    type: string | null
    outcome: string | null
    source: string | null
    isAutomated: boolean | null
    notes: string | null
    amount: number | null
    estimateNumber: string | null
    socialPlatform: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TouchCountAggregateOutputType = {
    id: number
    organizationId: number
    accountId: number
    contactId: number
    createdByUserId: number
    date: number
    type: number
    outcome: number
    source: number
    isAutomated: number
    notes: number
    amount: number
    estimateNumber: number
    socialPlatform: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TouchAvgAggregateInputType = {
    amount?: true
  }

  export type TouchSumAggregateInputType = {
    amount?: true
  }

  export type TouchMinAggregateInputType = {
    id?: true
    organizationId?: true
    accountId?: true
    contactId?: true
    createdByUserId?: true
    date?: true
    type?: true
    outcome?: true
    source?: true
    isAutomated?: true
    notes?: true
    amount?: true
    estimateNumber?: true
    socialPlatform?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TouchMaxAggregateInputType = {
    id?: true
    organizationId?: true
    accountId?: true
    contactId?: true
    createdByUserId?: true
    date?: true
    type?: true
    outcome?: true
    source?: true
    isAutomated?: true
    notes?: true
    amount?: true
    estimateNumber?: true
    socialPlatform?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TouchCountAggregateInputType = {
    id?: true
    organizationId?: true
    accountId?: true
    contactId?: true
    createdByUserId?: true
    date?: true
    type?: true
    outcome?: true
    source?: true
    isAutomated?: true
    notes?: true
    amount?: true
    estimateNumber?: true
    socialPlatform?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TouchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Touch to aggregate.
     */
    where?: TouchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Touches to fetch.
     */
    orderBy?: TouchOrderByWithRelationInput | TouchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TouchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Touches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Touches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Touches
    **/
    _count?: true | TouchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TouchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TouchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TouchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TouchMaxAggregateInputType
  }

  export type GetTouchAggregateType<T extends TouchAggregateArgs> = {
        [P in keyof T & keyof AggregateTouch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTouch[P]>
      : GetScalarType<T[P], AggregateTouch[P]>
  }




  export type TouchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TouchWhereInput
    orderBy?: TouchOrderByWithAggregationInput | TouchOrderByWithAggregationInput[]
    by: TouchScalarFieldEnum[] | TouchScalarFieldEnum
    having?: TouchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TouchCountAggregateInputType | true
    _avg?: TouchAvgAggregateInputType
    _sum?: TouchSumAggregateInputType
    _min?: TouchMinAggregateInputType
    _max?: TouchMaxAggregateInputType
  }

  export type TouchGroupByOutputType = {
    id: string
    organizationId: string
    accountId: string
    contactId: string | null
    createdByUserId: string | null
    date: Date
    type: string
    outcome: string | null
    source: string | null
    isAutomated: boolean
    notes: string
    amount: number | null
    estimateNumber: string | null
    socialPlatform: string | null
    createdAt: Date
    updatedAt: Date
    _count: TouchCountAggregateOutputType | null
    _avg: TouchAvgAggregateOutputType | null
    _sum: TouchSumAggregateOutputType | null
    _min: TouchMinAggregateOutputType | null
    _max: TouchMaxAggregateOutputType | null
  }

  type GetTouchGroupByPayload<T extends TouchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TouchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TouchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TouchGroupByOutputType[P]>
            : GetScalarType<T[P], TouchGroupByOutputType[P]>
        }
      >
    >


  export type TouchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    contactId?: boolean
    createdByUserId?: boolean
    date?: boolean
    type?: boolean
    outcome?: boolean
    source?: boolean
    isAutomated?: boolean
    notes?: boolean
    amount?: boolean
    estimateNumber?: boolean
    socialPlatform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    contact?: boolean | Touch$contactArgs<ExtArgs>
  }, ExtArgs["result"]["touch"]>

  export type TouchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    contactId?: boolean
    createdByUserId?: boolean
    date?: boolean
    type?: boolean
    outcome?: boolean
    source?: boolean
    isAutomated?: boolean
    notes?: boolean
    amount?: boolean
    estimateNumber?: boolean
    socialPlatform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    contact?: boolean | Touch$contactArgs<ExtArgs>
  }, ExtArgs["result"]["touch"]>

  export type TouchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    contactId?: boolean
    createdByUserId?: boolean
    date?: boolean
    type?: boolean
    outcome?: boolean
    source?: boolean
    isAutomated?: boolean
    notes?: boolean
    amount?: boolean
    estimateNumber?: boolean
    socialPlatform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    contact?: boolean | Touch$contactArgs<ExtArgs>
  }, ExtArgs["result"]["touch"]>

  export type TouchSelectScalar = {
    id?: boolean
    organizationId?: boolean
    accountId?: boolean
    contactId?: boolean
    createdByUserId?: boolean
    date?: boolean
    type?: boolean
    outcome?: boolean
    source?: boolean
    isAutomated?: boolean
    notes?: boolean
    amount?: boolean
    estimateNumber?: boolean
    socialPlatform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TouchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "accountId" | "contactId" | "createdByUserId" | "date" | "type" | "outcome" | "source" | "isAutomated" | "notes" | "amount" | "estimateNumber" | "socialPlatform" | "createdAt" | "updatedAt", ExtArgs["result"]["touch"]>
  export type TouchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    contact?: boolean | Touch$contactArgs<ExtArgs>
  }
  export type TouchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    contact?: boolean | Touch$contactArgs<ExtArgs>
  }
  export type TouchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    contact?: boolean | Touch$contactArgs<ExtArgs>
  }

  export type $TouchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Touch"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
      contact: Prisma.$ContactPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      accountId: string
      contactId: string | null
      createdByUserId: string | null
      date: Date
      /**
       * Outreach channel — must match a TouchType.name (see Settings).
       */
      type: string
      /**
       * Structured outcome (No answer, Voicemail, etc.). Optional.
       */
      outcome: string | null
      /**
       * Origin of the touch (manual, apollo, import, etc.).
       */
      source: string | null
      /**
       * When true, may later be excluded/weighted in Account freshness.
       */
      isAutomated: boolean
      notes: string
      /**
       * Optional dollar value for Estimate / Sale touches.
       */
      amount: number | null
      estimateNumber: string | null
      socialPlatform: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["touch"]>
    composites: {}
  }

  type TouchGetPayload<S extends boolean | null | undefined | TouchDefaultArgs> = $Result.GetResult<Prisma.$TouchPayload, S>

  type TouchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TouchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TouchCountAggregateInputType | true
    }

  export interface TouchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Touch'], meta: { name: 'Touch' } }
    /**
     * Find zero or one Touch that matches the filter.
     * @param {TouchFindUniqueArgs} args - Arguments to find a Touch
     * @example
     * // Get one Touch
     * const touch = await prisma.touch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TouchFindUniqueArgs>(args: SelectSubset<T, TouchFindUniqueArgs<ExtArgs>>): Prisma__TouchClient<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Touch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TouchFindUniqueOrThrowArgs} args - Arguments to find a Touch
     * @example
     * // Get one Touch
     * const touch = await prisma.touch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TouchFindUniqueOrThrowArgs>(args: SelectSubset<T, TouchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TouchClient<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Touch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchFindFirstArgs} args - Arguments to find a Touch
     * @example
     * // Get one Touch
     * const touch = await prisma.touch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TouchFindFirstArgs>(args?: SelectSubset<T, TouchFindFirstArgs<ExtArgs>>): Prisma__TouchClient<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Touch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchFindFirstOrThrowArgs} args - Arguments to find a Touch
     * @example
     * // Get one Touch
     * const touch = await prisma.touch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TouchFindFirstOrThrowArgs>(args?: SelectSubset<T, TouchFindFirstOrThrowArgs<ExtArgs>>): Prisma__TouchClient<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Touches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Touches
     * const touches = await prisma.touch.findMany()
     * 
     * // Get first 10 Touches
     * const touches = await prisma.touch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const touchWithIdOnly = await prisma.touch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TouchFindManyArgs>(args?: SelectSubset<T, TouchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Touch.
     * @param {TouchCreateArgs} args - Arguments to create a Touch.
     * @example
     * // Create one Touch
     * const Touch = await prisma.touch.create({
     *   data: {
     *     // ... data to create a Touch
     *   }
     * })
     * 
     */
    create<T extends TouchCreateArgs>(args: SelectSubset<T, TouchCreateArgs<ExtArgs>>): Prisma__TouchClient<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Touches.
     * @param {TouchCreateManyArgs} args - Arguments to create many Touches.
     * @example
     * // Create many Touches
     * const touch = await prisma.touch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TouchCreateManyArgs>(args?: SelectSubset<T, TouchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Touches and returns the data saved in the database.
     * @param {TouchCreateManyAndReturnArgs} args - Arguments to create many Touches.
     * @example
     * // Create many Touches
     * const touch = await prisma.touch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Touches and only return the `id`
     * const touchWithIdOnly = await prisma.touch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TouchCreateManyAndReturnArgs>(args?: SelectSubset<T, TouchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Touch.
     * @param {TouchDeleteArgs} args - Arguments to delete one Touch.
     * @example
     * // Delete one Touch
     * const Touch = await prisma.touch.delete({
     *   where: {
     *     // ... filter to delete one Touch
     *   }
     * })
     * 
     */
    delete<T extends TouchDeleteArgs>(args: SelectSubset<T, TouchDeleteArgs<ExtArgs>>): Prisma__TouchClient<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Touch.
     * @param {TouchUpdateArgs} args - Arguments to update one Touch.
     * @example
     * // Update one Touch
     * const touch = await prisma.touch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TouchUpdateArgs>(args: SelectSubset<T, TouchUpdateArgs<ExtArgs>>): Prisma__TouchClient<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Touches.
     * @param {TouchDeleteManyArgs} args - Arguments to filter Touches to delete.
     * @example
     * // Delete a few Touches
     * const { count } = await prisma.touch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TouchDeleteManyArgs>(args?: SelectSubset<T, TouchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Touches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Touches
     * const touch = await prisma.touch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TouchUpdateManyArgs>(args: SelectSubset<T, TouchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Touches and returns the data updated in the database.
     * @param {TouchUpdateManyAndReturnArgs} args - Arguments to update many Touches.
     * @example
     * // Update many Touches
     * const touch = await prisma.touch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Touches and only return the `id`
     * const touchWithIdOnly = await prisma.touch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TouchUpdateManyAndReturnArgs>(args: SelectSubset<T, TouchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Touch.
     * @param {TouchUpsertArgs} args - Arguments to update or create a Touch.
     * @example
     * // Update or create a Touch
     * const touch = await prisma.touch.upsert({
     *   create: {
     *     // ... data to create a Touch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Touch we want to update
     *   }
     * })
     */
    upsert<T extends TouchUpsertArgs>(args: SelectSubset<T, TouchUpsertArgs<ExtArgs>>): Prisma__TouchClient<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Touches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchCountArgs} args - Arguments to filter Touches to count.
     * @example
     * // Count the number of Touches
     * const count = await prisma.touch.count({
     *   where: {
     *     // ... the filter for the Touches we want to count
     *   }
     * })
    **/
    count<T extends TouchCountArgs>(
      args?: Subset<T, TouchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TouchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Touch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TouchAggregateArgs>(args: Subset<T, TouchAggregateArgs>): Prisma.PrismaPromise<GetTouchAggregateType<T>>

    /**
     * Group by Touch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TouchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TouchGroupByArgs['orderBy'] }
        : { orderBy?: TouchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TouchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTouchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Touch model
   */
  readonly fields: TouchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Touch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TouchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contact<T extends Touch$contactArgs<ExtArgs> = {}>(args?: Subset<T, Touch$contactArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Touch model
   */
  interface TouchFieldRefs {
    readonly id: FieldRef<"Touch", 'String'>
    readonly organizationId: FieldRef<"Touch", 'String'>
    readonly accountId: FieldRef<"Touch", 'String'>
    readonly contactId: FieldRef<"Touch", 'String'>
    readonly createdByUserId: FieldRef<"Touch", 'String'>
    readonly date: FieldRef<"Touch", 'DateTime'>
    readonly type: FieldRef<"Touch", 'String'>
    readonly outcome: FieldRef<"Touch", 'String'>
    readonly source: FieldRef<"Touch", 'String'>
    readonly isAutomated: FieldRef<"Touch", 'Boolean'>
    readonly notes: FieldRef<"Touch", 'String'>
    readonly amount: FieldRef<"Touch", 'Float'>
    readonly estimateNumber: FieldRef<"Touch", 'String'>
    readonly socialPlatform: FieldRef<"Touch", 'String'>
    readonly createdAt: FieldRef<"Touch", 'DateTime'>
    readonly updatedAt: FieldRef<"Touch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Touch findUnique
   */
  export type TouchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    /**
     * Filter, which Touch to fetch.
     */
    where: TouchWhereUniqueInput
  }

  /**
   * Touch findUniqueOrThrow
   */
  export type TouchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    /**
     * Filter, which Touch to fetch.
     */
    where: TouchWhereUniqueInput
  }

  /**
   * Touch findFirst
   */
  export type TouchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    /**
     * Filter, which Touch to fetch.
     */
    where?: TouchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Touches to fetch.
     */
    orderBy?: TouchOrderByWithRelationInput | TouchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Touches.
     */
    cursor?: TouchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Touches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Touches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Touches.
     */
    distinct?: TouchScalarFieldEnum | TouchScalarFieldEnum[]
  }

  /**
   * Touch findFirstOrThrow
   */
  export type TouchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    /**
     * Filter, which Touch to fetch.
     */
    where?: TouchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Touches to fetch.
     */
    orderBy?: TouchOrderByWithRelationInput | TouchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Touches.
     */
    cursor?: TouchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Touches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Touches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Touches.
     */
    distinct?: TouchScalarFieldEnum | TouchScalarFieldEnum[]
  }

  /**
   * Touch findMany
   */
  export type TouchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    /**
     * Filter, which Touches to fetch.
     */
    where?: TouchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Touches to fetch.
     */
    orderBy?: TouchOrderByWithRelationInput | TouchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Touches.
     */
    cursor?: TouchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Touches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Touches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Touches.
     */
    distinct?: TouchScalarFieldEnum | TouchScalarFieldEnum[]
  }

  /**
   * Touch create
   */
  export type TouchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    /**
     * The data needed to create a Touch.
     */
    data: XOR<TouchCreateInput, TouchUncheckedCreateInput>
  }

  /**
   * Touch createMany
   */
  export type TouchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Touches.
     */
    data: TouchCreateManyInput | TouchCreateManyInput[]
  }

  /**
   * Touch createManyAndReturn
   */
  export type TouchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * The data used to create many Touches.
     */
    data: TouchCreateManyInput | TouchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Touch update
   */
  export type TouchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    /**
     * The data needed to update a Touch.
     */
    data: XOR<TouchUpdateInput, TouchUncheckedUpdateInput>
    /**
     * Choose, which Touch to update.
     */
    where: TouchWhereUniqueInput
  }

  /**
   * Touch updateMany
   */
  export type TouchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Touches.
     */
    data: XOR<TouchUpdateManyMutationInput, TouchUncheckedUpdateManyInput>
    /**
     * Filter which Touches to update
     */
    where?: TouchWhereInput
    /**
     * Limit how many Touches to update.
     */
    limit?: number
  }

  /**
   * Touch updateManyAndReturn
   */
  export type TouchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * The data used to update Touches.
     */
    data: XOR<TouchUpdateManyMutationInput, TouchUncheckedUpdateManyInput>
    /**
     * Filter which Touches to update
     */
    where?: TouchWhereInput
    /**
     * Limit how many Touches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Touch upsert
   */
  export type TouchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    /**
     * The filter to search for the Touch to update in case it exists.
     */
    where: TouchWhereUniqueInput
    /**
     * In case the Touch found by the `where` argument doesn't exist, create a new Touch with this data.
     */
    create: XOR<TouchCreateInput, TouchUncheckedCreateInput>
    /**
     * In case the Touch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TouchUpdateInput, TouchUncheckedUpdateInput>
  }

  /**
   * Touch delete
   */
  export type TouchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
    /**
     * Filter which Touch to delete.
     */
    where: TouchWhereUniqueInput
  }

  /**
   * Touch deleteMany
   */
  export type TouchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Touches to delete
     */
    where?: TouchWhereInput
    /**
     * Limit how many Touches to delete.
     */
    limit?: number
  }

  /**
   * Touch.contact
   */
  export type Touch$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
  }

  /**
   * Touch without action
   */
  export type TouchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Touch
     */
    select?: TouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Touch
     */
    omit?: TouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouchInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const IndustryScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    isSystem: 'isSystem'
  };

  export type IndustryScalarFieldEnum = (typeof IndustryScalarFieldEnum)[keyof typeof IndustryScalarFieldEnum]


  export const TouchTypeScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    isSystem: 'isSystem'
  };

  export type TouchTypeScalarFieldEnum = (typeof TouchTypeScalarFieldEnum)[keyof typeof TouchTypeScalarFieldEnum]


  export const SocialPlatformScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    isSystem: 'isSystem'
  };

  export type SocialPlatformScalarFieldEnum = (typeof SocialPlatformScalarFieldEnum)[keyof typeof SocialPlatformScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    address: 'address',
    phone: 'phone',
    website: 'website',
    status: 'status',
    isVip: 'isVip',
    source: 'source',
    ownerUserId: 'ownerUserId',
    createdByUserId: 'createdByUserId',
    nextTouchAt: 'nextTouchAt',
    nextTouchType: 'nextTouchType',
    nextTouchNote: 'nextTouchNote',
    industryId: 'industryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AccountSocialLinkScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    accountId: 'accountId',
    platform: 'platform',
    handle: 'handle'
  };

  export type AccountSocialLinkScalarFieldEnum = (typeof AccountSocialLinkScalarFieldEnum)[keyof typeof AccountSocialLinkScalarFieldEnum]


  export const AccountNoteScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    text: 'text',
    accountId: 'accountId',
    createdAt: 'createdAt'
  };

  export type AccountNoteScalarFieldEnum = (typeof AccountNoteScalarFieldEnum)[keyof typeof AccountNoteScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    accountId: 'accountId',
    firstName: 'firstName',
    lastName: 'lastName',
    title: 'title',
    email: 'email',
    phone: 'phone',
    officePhone: 'officePhone',
    isVip: 'isVip',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const ContactNoteScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    text: 'text',
    contactId: 'contactId',
    createdAt: 'createdAt'
  };

  export type ContactNoteScalarFieldEnum = (typeof ContactNoteScalarFieldEnum)[keyof typeof ContactNoteScalarFieldEnum]


  export const TouchScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    accountId: 'accountId',
    contactId: 'contactId',
    createdByUserId: 'createdByUserId',
    date: 'date',
    type: 'type',
    outcome: 'outcome',
    source: 'source',
    isAutomated: 'isAutomated',
    notes: 'notes',
    amount: 'amount',
    estimateNumber: 'estimateNumber',
    socialPlatform: 'socialPlatform',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TouchScalarFieldEnum = (typeof TouchScalarFieldEnum)[keyof typeof TouchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    slug?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    industries?: IndustryListRelationFilter
    touchTypes?: TouchTypeListRelationFilter
    socialPlatforms?: SocialPlatformListRelationFilter
    accounts?: AccountListRelationFilter
    contacts?: ContactListRelationFilter
    touches?: TouchListRelationFilter
    accountNotes?: AccountNoteListRelationFilter
    contactNotes?: ContactNoteListRelationFilter
    accountSocials?: AccountSocialLinkListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    industries?: IndustryOrderByRelationAggregateInput
    touchTypes?: TouchTypeOrderByRelationAggregateInput
    socialPlatforms?: SocialPlatformOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    contacts?: ContactOrderByRelationAggregateInput
    touches?: TouchOrderByRelationAggregateInput
    accountNotes?: AccountNoteOrderByRelationAggregateInput
    contactNotes?: ContactNoteOrderByRelationAggregateInput
    accountSocials?: AccountSocialLinkOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    industries?: IndustryListRelationFilter
    touchTypes?: TouchTypeListRelationFilter
    socialPlatforms?: SocialPlatformListRelationFilter
    accounts?: AccountListRelationFilter
    contacts?: ContactListRelationFilter
    touches?: TouchListRelationFilter
    accountNotes?: AccountNoteListRelationFilter
    contactNotes?: ContactNoteListRelationFilter
    accountSocials?: AccountSocialLinkListRelationFilter
  }, "id" | "slug">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    slug?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type IndustryWhereInput = {
    AND?: IndustryWhereInput | IndustryWhereInput[]
    OR?: IndustryWhereInput[]
    NOT?: IndustryWhereInput | IndustryWhereInput[]
    id?: StringFilter<"Industry"> | string
    organizationId?: StringFilter<"Industry"> | string
    name?: StringFilter<"Industry"> | string
    isSystem?: BoolFilter<"Industry"> | boolean
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    accounts?: AccountListRelationFilter
  }

  export type IndustryOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type IndustryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizationId_name?: IndustryOrganizationIdNameCompoundUniqueInput
    AND?: IndustryWhereInput | IndustryWhereInput[]
    OR?: IndustryWhereInput[]
    NOT?: IndustryWhereInput | IndustryWhereInput[]
    organizationId?: StringFilter<"Industry"> | string
    name?: StringFilter<"Industry"> | string
    isSystem?: BoolFilter<"Industry"> | boolean
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    accounts?: AccountListRelationFilter
  }, "id" | "organizationId_name">

  export type IndustryOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
    _count?: IndustryCountOrderByAggregateInput
    _max?: IndustryMaxOrderByAggregateInput
    _min?: IndustryMinOrderByAggregateInput
  }

  export type IndustryScalarWhereWithAggregatesInput = {
    AND?: IndustryScalarWhereWithAggregatesInput | IndustryScalarWhereWithAggregatesInput[]
    OR?: IndustryScalarWhereWithAggregatesInput[]
    NOT?: IndustryScalarWhereWithAggregatesInput | IndustryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Industry"> | string
    organizationId?: StringWithAggregatesFilter<"Industry"> | string
    name?: StringWithAggregatesFilter<"Industry"> | string
    isSystem?: BoolWithAggregatesFilter<"Industry"> | boolean
  }

  export type TouchTypeWhereInput = {
    AND?: TouchTypeWhereInput | TouchTypeWhereInput[]
    OR?: TouchTypeWhereInput[]
    NOT?: TouchTypeWhereInput | TouchTypeWhereInput[]
    id?: StringFilter<"TouchType"> | string
    organizationId?: StringFilter<"TouchType"> | string
    name?: StringFilter<"TouchType"> | string
    isSystem?: BoolFilter<"TouchType"> | boolean
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type TouchTypeOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type TouchTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizationId_name?: TouchTypeOrganizationIdNameCompoundUniqueInput
    AND?: TouchTypeWhereInput | TouchTypeWhereInput[]
    OR?: TouchTypeWhereInput[]
    NOT?: TouchTypeWhereInput | TouchTypeWhereInput[]
    organizationId?: StringFilter<"TouchType"> | string
    name?: StringFilter<"TouchType"> | string
    isSystem?: BoolFilter<"TouchType"> | boolean
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "organizationId_name">

  export type TouchTypeOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
    _count?: TouchTypeCountOrderByAggregateInput
    _max?: TouchTypeMaxOrderByAggregateInput
    _min?: TouchTypeMinOrderByAggregateInput
  }

  export type TouchTypeScalarWhereWithAggregatesInput = {
    AND?: TouchTypeScalarWhereWithAggregatesInput | TouchTypeScalarWhereWithAggregatesInput[]
    OR?: TouchTypeScalarWhereWithAggregatesInput[]
    NOT?: TouchTypeScalarWhereWithAggregatesInput | TouchTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TouchType"> | string
    organizationId?: StringWithAggregatesFilter<"TouchType"> | string
    name?: StringWithAggregatesFilter<"TouchType"> | string
    isSystem?: BoolWithAggregatesFilter<"TouchType"> | boolean
  }

  export type SocialPlatformWhereInput = {
    AND?: SocialPlatformWhereInput | SocialPlatformWhereInput[]
    OR?: SocialPlatformWhereInput[]
    NOT?: SocialPlatformWhereInput | SocialPlatformWhereInput[]
    id?: StringFilter<"SocialPlatform"> | string
    organizationId?: StringFilter<"SocialPlatform"> | string
    name?: StringFilter<"SocialPlatform"> | string
    isSystem?: BoolFilter<"SocialPlatform"> | boolean
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type SocialPlatformOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type SocialPlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizationId_name?: SocialPlatformOrganizationIdNameCompoundUniqueInput
    AND?: SocialPlatformWhereInput | SocialPlatformWhereInput[]
    OR?: SocialPlatformWhereInput[]
    NOT?: SocialPlatformWhereInput | SocialPlatformWhereInput[]
    organizationId?: StringFilter<"SocialPlatform"> | string
    name?: StringFilter<"SocialPlatform"> | string
    isSystem?: BoolFilter<"SocialPlatform"> | boolean
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "organizationId_name">

  export type SocialPlatformOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
    _count?: SocialPlatformCountOrderByAggregateInput
    _max?: SocialPlatformMaxOrderByAggregateInput
    _min?: SocialPlatformMinOrderByAggregateInput
  }

  export type SocialPlatformScalarWhereWithAggregatesInput = {
    AND?: SocialPlatformScalarWhereWithAggregatesInput | SocialPlatformScalarWhereWithAggregatesInput[]
    OR?: SocialPlatformScalarWhereWithAggregatesInput[]
    NOT?: SocialPlatformScalarWhereWithAggregatesInput | SocialPlatformScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialPlatform"> | string
    organizationId?: StringWithAggregatesFilter<"SocialPlatform"> | string
    name?: StringWithAggregatesFilter<"SocialPlatform"> | string
    isSystem?: BoolWithAggregatesFilter<"SocialPlatform"> | boolean
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    organizationId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    address?: StringNullableFilter<"Account"> | string | null
    phone?: StringNullableFilter<"Account"> | string | null
    website?: StringNullableFilter<"Account"> | string | null
    status?: StringFilter<"Account"> | string
    isVip?: BoolFilter<"Account"> | boolean
    source?: StringNullableFilter<"Account"> | string | null
    ownerUserId?: StringNullableFilter<"Account"> | string | null
    createdByUserId?: StringNullableFilter<"Account"> | string | null
    nextTouchAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    nextTouchType?: StringNullableFilter<"Account"> | string | null
    nextTouchNote?: StringNullableFilter<"Account"> | string | null
    industryId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    industry?: XOR<IndustryScalarRelationFilter, IndustryWhereInput>
    contacts?: ContactListRelationFilter
    notes?: AccountNoteListRelationFilter
    socials?: AccountSocialLinkListRelationFilter
    touches?: TouchListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    status?: SortOrder
    isVip?: SortOrder
    source?: SortOrderInput | SortOrder
    ownerUserId?: SortOrderInput | SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    nextTouchAt?: SortOrderInput | SortOrder
    nextTouchType?: SortOrderInput | SortOrder
    nextTouchNote?: SortOrderInput | SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    industry?: IndustryOrderByWithRelationInput
    contacts?: ContactOrderByRelationAggregateInput
    notes?: AccountNoteOrderByRelationAggregateInput
    socials?: AccountSocialLinkOrderByRelationAggregateInput
    touches?: TouchOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    organizationId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    address?: StringNullableFilter<"Account"> | string | null
    phone?: StringNullableFilter<"Account"> | string | null
    website?: StringNullableFilter<"Account"> | string | null
    status?: StringFilter<"Account"> | string
    isVip?: BoolFilter<"Account"> | boolean
    source?: StringNullableFilter<"Account"> | string | null
    ownerUserId?: StringNullableFilter<"Account"> | string | null
    createdByUserId?: StringNullableFilter<"Account"> | string | null
    nextTouchAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    nextTouchType?: StringNullableFilter<"Account"> | string | null
    nextTouchNote?: StringNullableFilter<"Account"> | string | null
    industryId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    industry?: XOR<IndustryScalarRelationFilter, IndustryWhereInput>
    contacts?: ContactListRelationFilter
    notes?: AccountNoteListRelationFilter
    socials?: AccountSocialLinkListRelationFilter
    touches?: TouchListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    status?: SortOrder
    isVip?: SortOrder
    source?: SortOrderInput | SortOrder
    ownerUserId?: SortOrderInput | SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    nextTouchAt?: SortOrderInput | SortOrder
    nextTouchType?: SortOrderInput | SortOrder
    nextTouchNote?: SortOrderInput | SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    organizationId?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    address?: StringNullableWithAggregatesFilter<"Account"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Account"> | string | null
    website?: StringNullableWithAggregatesFilter<"Account"> | string | null
    status?: StringWithAggregatesFilter<"Account"> | string
    isVip?: BoolWithAggregatesFilter<"Account"> | boolean
    source?: StringNullableWithAggregatesFilter<"Account"> | string | null
    ownerUserId?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdByUserId?: StringNullableWithAggregatesFilter<"Account"> | string | null
    nextTouchAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    nextTouchType?: StringNullableWithAggregatesFilter<"Account"> | string | null
    nextTouchNote?: StringNullableWithAggregatesFilter<"Account"> | string | null
    industryId?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type AccountSocialLinkWhereInput = {
    AND?: AccountSocialLinkWhereInput | AccountSocialLinkWhereInput[]
    OR?: AccountSocialLinkWhereInput[]
    NOT?: AccountSocialLinkWhereInput | AccountSocialLinkWhereInput[]
    id?: StringFilter<"AccountSocialLink"> | string
    organizationId?: StringFilter<"AccountSocialLink"> | string
    accountId?: StringFilter<"AccountSocialLink"> | string
    platform?: StringFilter<"AccountSocialLink"> | string
    handle?: StringFilter<"AccountSocialLink"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type AccountSocialLinkOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
  }

  export type AccountSocialLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountId_platform?: AccountSocialLinkAccountIdPlatformCompoundUniqueInput
    AND?: AccountSocialLinkWhereInput | AccountSocialLinkWhereInput[]
    OR?: AccountSocialLinkWhereInput[]
    NOT?: AccountSocialLinkWhereInput | AccountSocialLinkWhereInput[]
    organizationId?: StringFilter<"AccountSocialLink"> | string
    accountId?: StringFilter<"AccountSocialLink"> | string
    platform?: StringFilter<"AccountSocialLink"> | string
    handle?: StringFilter<"AccountSocialLink"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id" | "accountId_platform">

  export type AccountSocialLinkOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    _count?: AccountSocialLinkCountOrderByAggregateInput
    _max?: AccountSocialLinkMaxOrderByAggregateInput
    _min?: AccountSocialLinkMinOrderByAggregateInput
  }

  export type AccountSocialLinkScalarWhereWithAggregatesInput = {
    AND?: AccountSocialLinkScalarWhereWithAggregatesInput | AccountSocialLinkScalarWhereWithAggregatesInput[]
    OR?: AccountSocialLinkScalarWhereWithAggregatesInput[]
    NOT?: AccountSocialLinkScalarWhereWithAggregatesInput | AccountSocialLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountSocialLink"> | string
    organizationId?: StringWithAggregatesFilter<"AccountSocialLink"> | string
    accountId?: StringWithAggregatesFilter<"AccountSocialLink"> | string
    platform?: StringWithAggregatesFilter<"AccountSocialLink"> | string
    handle?: StringWithAggregatesFilter<"AccountSocialLink"> | string
  }

  export type AccountNoteWhereInput = {
    AND?: AccountNoteWhereInput | AccountNoteWhereInput[]
    OR?: AccountNoteWhereInput[]
    NOT?: AccountNoteWhereInput | AccountNoteWhereInput[]
    id?: StringFilter<"AccountNote"> | string
    organizationId?: StringFilter<"AccountNote"> | string
    text?: StringFilter<"AccountNote"> | string
    accountId?: StringFilter<"AccountNote"> | string
    createdAt?: DateTimeFilter<"AccountNote"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type AccountNoteOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    text?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
  }

  export type AccountNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountNoteWhereInput | AccountNoteWhereInput[]
    OR?: AccountNoteWhereInput[]
    NOT?: AccountNoteWhereInput | AccountNoteWhereInput[]
    organizationId?: StringFilter<"AccountNote"> | string
    text?: StringFilter<"AccountNote"> | string
    accountId?: StringFilter<"AccountNote"> | string
    createdAt?: DateTimeFilter<"AccountNote"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id">

  export type AccountNoteOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    text?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    _count?: AccountNoteCountOrderByAggregateInput
    _max?: AccountNoteMaxOrderByAggregateInput
    _min?: AccountNoteMinOrderByAggregateInput
  }

  export type AccountNoteScalarWhereWithAggregatesInput = {
    AND?: AccountNoteScalarWhereWithAggregatesInput | AccountNoteScalarWhereWithAggregatesInput[]
    OR?: AccountNoteScalarWhereWithAggregatesInput[]
    NOT?: AccountNoteScalarWhereWithAggregatesInput | AccountNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountNote"> | string
    organizationId?: StringWithAggregatesFilter<"AccountNote"> | string
    text?: StringWithAggregatesFilter<"AccountNote"> | string
    accountId?: StringWithAggregatesFilter<"AccountNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AccountNote"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    organizationId?: StringFilter<"Contact"> | string
    accountId?: StringFilter<"Contact"> | string
    firstName?: StringFilter<"Contact"> | string
    lastName?: StringFilter<"Contact"> | string
    title?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    officePhone?: StringNullableFilter<"Contact"> | string | null
    isVip?: BoolFilter<"Contact"> | boolean
    source?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    touches?: TouchListRelationFilter
    notes?: ContactNoteListRelationFilter
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    officePhone?: SortOrderInput | SortOrder
    isVip?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
    touches?: TouchOrderByRelationAggregateInput
    notes?: ContactNoteOrderByRelationAggregateInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    organizationId?: StringFilter<"Contact"> | string
    accountId?: StringFilter<"Contact"> | string
    firstName?: StringFilter<"Contact"> | string
    lastName?: StringFilter<"Contact"> | string
    title?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    officePhone?: StringNullableFilter<"Contact"> | string | null
    isVip?: BoolFilter<"Contact"> | boolean
    source?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    touches?: TouchListRelationFilter
    notes?: ContactNoteListRelationFilter
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    officePhone?: SortOrderInput | SortOrder
    isVip?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    organizationId?: StringWithAggregatesFilter<"Contact"> | string
    accountId?: StringWithAggregatesFilter<"Contact"> | string
    firstName?: StringWithAggregatesFilter<"Contact"> | string
    lastName?: StringWithAggregatesFilter<"Contact"> | string
    title?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    officePhone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    isVip?: BoolWithAggregatesFilter<"Contact"> | boolean
    source?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type ContactNoteWhereInput = {
    AND?: ContactNoteWhereInput | ContactNoteWhereInput[]
    OR?: ContactNoteWhereInput[]
    NOT?: ContactNoteWhereInput | ContactNoteWhereInput[]
    id?: StringFilter<"ContactNote"> | string
    organizationId?: StringFilter<"ContactNote"> | string
    text?: StringFilter<"ContactNote"> | string
    contactId?: StringFilter<"ContactNote"> | string
    createdAt?: DateTimeFilter<"ContactNote"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }

  export type ContactNoteOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    text?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
  }

  export type ContactNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactNoteWhereInput | ContactNoteWhereInput[]
    OR?: ContactNoteWhereInput[]
    NOT?: ContactNoteWhereInput | ContactNoteWhereInput[]
    organizationId?: StringFilter<"ContactNote"> | string
    text?: StringFilter<"ContactNote"> | string
    contactId?: StringFilter<"ContactNote"> | string
    createdAt?: DateTimeFilter<"ContactNote"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
  }, "id">

  export type ContactNoteOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    text?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    _count?: ContactNoteCountOrderByAggregateInput
    _max?: ContactNoteMaxOrderByAggregateInput
    _min?: ContactNoteMinOrderByAggregateInput
  }

  export type ContactNoteScalarWhereWithAggregatesInput = {
    AND?: ContactNoteScalarWhereWithAggregatesInput | ContactNoteScalarWhereWithAggregatesInput[]
    OR?: ContactNoteScalarWhereWithAggregatesInput[]
    NOT?: ContactNoteScalarWhereWithAggregatesInput | ContactNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactNote"> | string
    organizationId?: StringWithAggregatesFilter<"ContactNote"> | string
    text?: StringWithAggregatesFilter<"ContactNote"> | string
    contactId?: StringWithAggregatesFilter<"ContactNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactNote"> | Date | string
  }

  export type TouchWhereInput = {
    AND?: TouchWhereInput | TouchWhereInput[]
    OR?: TouchWhereInput[]
    NOT?: TouchWhereInput | TouchWhereInput[]
    id?: StringFilter<"Touch"> | string
    organizationId?: StringFilter<"Touch"> | string
    accountId?: StringFilter<"Touch"> | string
    contactId?: StringNullableFilter<"Touch"> | string | null
    createdByUserId?: StringNullableFilter<"Touch"> | string | null
    date?: DateTimeFilter<"Touch"> | Date | string
    type?: StringFilter<"Touch"> | string
    outcome?: StringNullableFilter<"Touch"> | string | null
    source?: StringNullableFilter<"Touch"> | string | null
    isAutomated?: BoolFilter<"Touch"> | boolean
    notes?: StringFilter<"Touch"> | string
    amount?: FloatNullableFilter<"Touch"> | number | null
    estimateNumber?: StringNullableFilter<"Touch"> | string | null
    socialPlatform?: StringNullableFilter<"Touch"> | string | null
    createdAt?: DateTimeFilter<"Touch"> | Date | string
    updatedAt?: DateTimeFilter<"Touch"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    contact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
  }

  export type TouchOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    date?: SortOrder
    type?: SortOrder
    outcome?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    isAutomated?: SortOrder
    notes?: SortOrder
    amount?: SortOrderInput | SortOrder
    estimateNumber?: SortOrderInput | SortOrder
    socialPlatform?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
  }

  export type TouchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TouchWhereInput | TouchWhereInput[]
    OR?: TouchWhereInput[]
    NOT?: TouchWhereInput | TouchWhereInput[]
    organizationId?: StringFilter<"Touch"> | string
    accountId?: StringFilter<"Touch"> | string
    contactId?: StringNullableFilter<"Touch"> | string | null
    createdByUserId?: StringNullableFilter<"Touch"> | string | null
    date?: DateTimeFilter<"Touch"> | Date | string
    type?: StringFilter<"Touch"> | string
    outcome?: StringNullableFilter<"Touch"> | string | null
    source?: StringNullableFilter<"Touch"> | string | null
    isAutomated?: BoolFilter<"Touch"> | boolean
    notes?: StringFilter<"Touch"> | string
    amount?: FloatNullableFilter<"Touch"> | number | null
    estimateNumber?: StringNullableFilter<"Touch"> | string | null
    socialPlatform?: StringNullableFilter<"Touch"> | string | null
    createdAt?: DateTimeFilter<"Touch"> | Date | string
    updatedAt?: DateTimeFilter<"Touch"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    contact?: XOR<ContactNullableScalarRelationFilter, ContactWhereInput> | null
  }, "id">

  export type TouchOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    date?: SortOrder
    type?: SortOrder
    outcome?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    isAutomated?: SortOrder
    notes?: SortOrder
    amount?: SortOrderInput | SortOrder
    estimateNumber?: SortOrderInput | SortOrder
    socialPlatform?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TouchCountOrderByAggregateInput
    _avg?: TouchAvgOrderByAggregateInput
    _max?: TouchMaxOrderByAggregateInput
    _min?: TouchMinOrderByAggregateInput
    _sum?: TouchSumOrderByAggregateInput
  }

  export type TouchScalarWhereWithAggregatesInput = {
    AND?: TouchScalarWhereWithAggregatesInput | TouchScalarWhereWithAggregatesInput[]
    OR?: TouchScalarWhereWithAggregatesInput[]
    NOT?: TouchScalarWhereWithAggregatesInput | TouchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Touch"> | string
    organizationId?: StringWithAggregatesFilter<"Touch"> | string
    accountId?: StringWithAggregatesFilter<"Touch"> | string
    contactId?: StringNullableWithAggregatesFilter<"Touch"> | string | null
    createdByUserId?: StringNullableWithAggregatesFilter<"Touch"> | string | null
    date?: DateTimeWithAggregatesFilter<"Touch"> | Date | string
    type?: StringWithAggregatesFilter<"Touch"> | string
    outcome?: StringNullableWithAggregatesFilter<"Touch"> | string | null
    source?: StringNullableWithAggregatesFilter<"Touch"> | string | null
    isAutomated?: BoolWithAggregatesFilter<"Touch"> | boolean
    notes?: StringWithAggregatesFilter<"Touch"> | string
    amount?: FloatNullableWithAggregatesFilter<"Touch"> | number | null
    estimateNumber?: StringNullableWithAggregatesFilter<"Touch"> | string | null
    socialPlatform?: StringNullableWithAggregatesFilter<"Touch"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Touch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Touch"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformCreateNestedManyWithoutOrganizationInput
    accounts?: AccountCreateNestedManyWithoutOrganizationInput
    contacts?: ContactCreateNestedManyWithoutOrganizationInput
    touches?: TouchCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryUncheckedCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeUncheckedCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformUncheckedCreateNestedManyWithoutOrganizationInput
    accounts?: AccountUncheckedCreateNestedManyWithoutOrganizationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutOrganizationInput
    touches?: TouchUncheckedCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteUncheckedCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteUncheckedCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUncheckedUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUncheckedUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUncheckedUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUncheckedUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryCreateInput = {
    id?: string
    name: string
    isSystem?: boolean
    organization: OrganizationCreateNestedOneWithoutIndustriesInput
    accounts?: AccountCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUncheckedCreateInput = {
    id?: string
    organizationId: string
    name: string
    isSystem?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutIndustriesNestedInput
    accounts?: AccountUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryCreateManyInput = {
    id?: string
    organizationId: string
    name: string
    isSystem?: boolean
  }

  export type IndustryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IndustryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TouchTypeCreateInput = {
    id?: string
    name: string
    isSystem?: boolean
    organization: OrganizationCreateNestedOneWithoutTouchTypesInput
  }

  export type TouchTypeUncheckedCreateInput = {
    id?: string
    organizationId: string
    name: string
    isSystem?: boolean
  }

  export type TouchTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutTouchTypesNestedInput
  }

  export type TouchTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TouchTypeCreateManyInput = {
    id?: string
    organizationId: string
    name: string
    isSystem?: boolean
  }

  export type TouchTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TouchTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SocialPlatformCreateInput = {
    id?: string
    name: string
    isSystem?: boolean
    organization: OrganizationCreateNestedOneWithoutSocialPlatformsInput
  }

  export type SocialPlatformUncheckedCreateInput = {
    id?: string
    organizationId: string
    name: string
    isSystem?: boolean
  }

  export type SocialPlatformUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutSocialPlatformsNestedInput
  }

  export type SocialPlatformUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SocialPlatformCreateManyInput = {
    id?: string
    organizationId: string
    name: string
    isSystem?: boolean
  }

  export type SocialPlatformUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SocialPlatformUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAccountsInput
    industry: IndustryCreateNestedOneWithoutAccountsInput
    contacts?: ContactCreateNestedManyWithoutAccountInput
    notes?: AccountNoteCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkCreateNestedManyWithoutAccountInput
    touches?: TouchCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    organizationId: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    notes?: AccountNoteUncheckedCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkUncheckedCreateNestedManyWithoutAccountInput
    touches?: TouchUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAccountsNestedInput
    industry?: IndustryUpdateOneRequiredWithoutAccountsNestedInput
    contacts?: ContactUpdateManyWithoutAccountNestedInput
    notes?: AccountNoteUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUpdateManyWithoutAccountNestedInput
    touches?: TouchUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutAccountNestedInput
    notes?: AccountNoteUncheckedUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUncheckedUpdateManyWithoutAccountNestedInput
    touches?: TouchUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    organizationId: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSocialLinkCreateInput = {
    id?: string
    platform: string
    handle: string
    organization: OrganizationCreateNestedOneWithoutAccountSocialsInput
    account: AccountCreateNestedOneWithoutSocialsInput
  }

  export type AccountSocialLinkUncheckedCreateInput = {
    id?: string
    organizationId: string
    accountId: string
    platform: string
    handle: string
  }

  export type AccountSocialLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationUpdateOneRequiredWithoutAccountSocialsNestedInput
    account?: AccountUpdateOneRequiredWithoutSocialsNestedInput
  }

  export type AccountSocialLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type AccountSocialLinkCreateManyInput = {
    id?: string
    organizationId: string
    accountId: string
    platform: string
    handle: string
  }

  export type AccountSocialLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type AccountSocialLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type AccountNoteCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAccountNotesInput
    account: AccountCreateNestedOneWithoutNotesInput
  }

  export type AccountNoteUncheckedCreateInput = {
    id?: string
    organizationId: string
    text: string
    accountId: string
    createdAt?: Date | string
  }

  export type AccountNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAccountNotesNestedInput
    account?: AccountUpdateOneRequiredWithoutNotesNestedInput
  }

  export type AccountNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountNoteCreateManyInput = {
    id?: string
    organizationId: string
    text: string
    accountId: string
    createdAt?: Date | string
  }

  export type AccountNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContactsInput
    account: AccountCreateNestedOneWithoutContactsInput
    touches?: TouchCreateNestedManyWithoutContactInput
    notes?: ContactNoteCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    organizationId: string
    accountId: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    touches?: TouchUncheckedCreateNestedManyWithoutContactInput
    notes?: ContactNoteUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContactsNestedInput
    account?: AccountUpdateOneRequiredWithoutContactsNestedInput
    touches?: TouchUpdateManyWithoutContactNestedInput
    notes?: ContactNoteUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    touches?: TouchUncheckedUpdateManyWithoutContactNestedInput
    notes?: ContactNoteUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactCreateManyInput = {
    id?: string
    organizationId: string
    accountId: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactNoteCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContactNotesInput
    contact: ContactCreateNestedOneWithoutNotesInput
  }

  export type ContactNoteUncheckedCreateInput = {
    id?: string
    organizationId: string
    text: string
    contactId: string
    createdAt?: Date | string
  }

  export type ContactNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContactNotesNestedInput
    contact?: ContactUpdateOneRequiredWithoutNotesNestedInput
  }

  export type ContactNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactNoteCreateManyInput = {
    id?: string
    organizationId: string
    text: string
    contactId: string
    createdAt?: Date | string
  }

  export type ContactNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouchCreateInput = {
    id?: string
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutTouchesInput
    account: AccountCreateNestedOneWithoutTouchesInput
    contact?: ContactCreateNestedOneWithoutTouchesInput
  }

  export type TouchUncheckedCreateInput = {
    id?: string
    organizationId: string
    accountId: string
    contactId?: string | null
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TouchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutTouchesNestedInput
    account?: AccountUpdateOneRequiredWithoutTouchesNestedInput
    contact?: ContactUpdateOneWithoutTouchesNestedInput
  }

  export type TouchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouchCreateManyInput = {
    id?: string
    organizationId: string
    accountId: string
    contactId?: string | null
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TouchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IndustryListRelationFilter = {
    every?: IndustryWhereInput
    some?: IndustryWhereInput
    none?: IndustryWhereInput
  }

  export type TouchTypeListRelationFilter = {
    every?: TouchTypeWhereInput
    some?: TouchTypeWhereInput
    none?: TouchTypeWhereInput
  }

  export type SocialPlatformListRelationFilter = {
    every?: SocialPlatformWhereInput
    some?: SocialPlatformWhereInput
    none?: SocialPlatformWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type TouchListRelationFilter = {
    every?: TouchWhereInput
    some?: TouchWhereInput
    none?: TouchWhereInput
  }

  export type AccountNoteListRelationFilter = {
    every?: AccountNoteWhereInput
    some?: AccountNoteWhereInput
    none?: AccountNoteWhereInput
  }

  export type ContactNoteListRelationFilter = {
    every?: ContactNoteWhereInput
    some?: ContactNoteWhereInput
    none?: ContactNoteWhereInput
  }

  export type AccountSocialLinkListRelationFilter = {
    every?: AccountSocialLinkWhereInput
    some?: AccountSocialLinkWhereInput
    none?: AccountSocialLinkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IndustryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TouchTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialPlatformOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TouchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountSocialLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type IndustryOrganizationIdNameCompoundUniqueInput = {
    organizationId: string
    name: string
  }

  export type IndustryCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type IndustryMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type IndustryMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TouchTypeOrganizationIdNameCompoundUniqueInput = {
    organizationId: string
    name: string
  }

  export type TouchTypeCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type TouchTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type TouchTypeMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type SocialPlatformOrganizationIdNameCompoundUniqueInput = {
    organizationId: string
    name: string
  }

  export type SocialPlatformCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type SocialPlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type SocialPlatformMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IndustryScalarRelationFilter = {
    is?: IndustryWhereInput
    isNot?: IndustryWhereInput
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    status?: SortOrder
    isVip?: SortOrder
    source?: SortOrder
    ownerUserId?: SortOrder
    createdByUserId?: SortOrder
    nextTouchAt?: SortOrder
    nextTouchType?: SortOrder
    nextTouchNote?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    status?: SortOrder
    isVip?: SortOrder
    source?: SortOrder
    ownerUserId?: SortOrder
    createdByUserId?: SortOrder
    nextTouchAt?: SortOrder
    nextTouchType?: SortOrder
    nextTouchNote?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    status?: SortOrder
    isVip?: SortOrder
    source?: SortOrder
    ownerUserId?: SortOrder
    createdByUserId?: SortOrder
    nextTouchAt?: SortOrder
    nextTouchType?: SortOrder
    nextTouchNote?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type AccountSocialLinkAccountIdPlatformCompoundUniqueInput = {
    accountId: string
    platform: string
  }

  export type AccountSocialLinkCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
  }

  export type AccountSocialLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
  }

  export type AccountSocialLinkMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
  }

  export type AccountNoteCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    text?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    text?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountNoteMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    text?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officePhone?: SortOrder
    isVip?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officePhone?: SortOrder
    isVip?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    officePhone?: SortOrder
    isVip?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactScalarRelationFilter = {
    is?: ContactWhereInput
    isNot?: ContactWhereInput
  }

  export type ContactNoteCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    text?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    text?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactNoteMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    text?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ContactNullableScalarRelationFilter = {
    is?: ContactWhereInput | null
    isNot?: ContactWhereInput | null
  }

  export type TouchCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    contactId?: SortOrder
    createdByUserId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    outcome?: SortOrder
    source?: SortOrder
    isAutomated?: SortOrder
    notes?: SortOrder
    amount?: SortOrder
    estimateNumber?: SortOrder
    socialPlatform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TouchAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TouchMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    contactId?: SortOrder
    createdByUserId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    outcome?: SortOrder
    source?: SortOrder
    isAutomated?: SortOrder
    notes?: SortOrder
    amount?: SortOrder
    estimateNumber?: SortOrder
    socialPlatform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TouchMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    accountId?: SortOrder
    contactId?: SortOrder
    createdByUserId?: SortOrder
    date?: SortOrder
    type?: SortOrder
    outcome?: SortOrder
    source?: SortOrder
    isAutomated?: SortOrder
    notes?: SortOrder
    amount?: SortOrder
    estimateNumber?: SortOrder
    socialPlatform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TouchSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IndustryCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<IndustryCreateWithoutOrganizationInput, IndustryUncheckedCreateWithoutOrganizationInput> | IndustryCreateWithoutOrganizationInput[] | IndustryUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IndustryCreateOrConnectWithoutOrganizationInput | IndustryCreateOrConnectWithoutOrganizationInput[]
    createMany?: IndustryCreateManyOrganizationInputEnvelope
    connect?: IndustryWhereUniqueInput | IndustryWhereUniqueInput[]
  }

  export type TouchTypeCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TouchTypeCreateWithoutOrganizationInput, TouchTypeUncheckedCreateWithoutOrganizationInput> | TouchTypeCreateWithoutOrganizationInput[] | TouchTypeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TouchTypeCreateOrConnectWithoutOrganizationInput | TouchTypeCreateOrConnectWithoutOrganizationInput[]
    createMany?: TouchTypeCreateManyOrganizationInputEnvelope
    connect?: TouchTypeWhereUniqueInput | TouchTypeWhereUniqueInput[]
  }

  export type SocialPlatformCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SocialPlatformCreateWithoutOrganizationInput, SocialPlatformUncheckedCreateWithoutOrganizationInput> | SocialPlatformCreateWithoutOrganizationInput[] | SocialPlatformUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SocialPlatformCreateOrConnectWithoutOrganizationInput | SocialPlatformCreateOrConnectWithoutOrganizationInput[]
    createMany?: SocialPlatformCreateManyOrganizationInputEnvelope
    connect?: SocialPlatformWhereUniqueInput | SocialPlatformWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AccountCreateWithoutOrganizationInput, AccountUncheckedCreateWithoutOrganizationInput> | AccountCreateWithoutOrganizationInput[] | AccountUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutOrganizationInput | AccountCreateOrConnectWithoutOrganizationInput[]
    createMany?: AccountCreateManyOrganizationInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ContactCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput> | ContactCreateWithoutOrganizationInput[] | ContactUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutOrganizationInput | ContactCreateOrConnectWithoutOrganizationInput[]
    createMany?: ContactCreateManyOrganizationInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type TouchCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TouchCreateWithoutOrganizationInput, TouchUncheckedCreateWithoutOrganizationInput> | TouchCreateWithoutOrganizationInput[] | TouchUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutOrganizationInput | TouchCreateOrConnectWithoutOrganizationInput[]
    createMany?: TouchCreateManyOrganizationInputEnvelope
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
  }

  export type AccountNoteCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AccountNoteCreateWithoutOrganizationInput, AccountNoteUncheckedCreateWithoutOrganizationInput> | AccountNoteCreateWithoutOrganizationInput[] | AccountNoteUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountNoteCreateOrConnectWithoutOrganizationInput | AccountNoteCreateOrConnectWithoutOrganizationInput[]
    createMany?: AccountNoteCreateManyOrganizationInputEnvelope
    connect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
  }

  export type ContactNoteCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ContactNoteCreateWithoutOrganizationInput, ContactNoteUncheckedCreateWithoutOrganizationInput> | ContactNoteCreateWithoutOrganizationInput[] | ContactNoteUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactNoteCreateOrConnectWithoutOrganizationInput | ContactNoteCreateOrConnectWithoutOrganizationInput[]
    createMany?: ContactNoteCreateManyOrganizationInputEnvelope
    connect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
  }

  export type AccountSocialLinkCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AccountSocialLinkCreateWithoutOrganizationInput, AccountSocialLinkUncheckedCreateWithoutOrganizationInput> | AccountSocialLinkCreateWithoutOrganizationInput[] | AccountSocialLinkUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountSocialLinkCreateOrConnectWithoutOrganizationInput | AccountSocialLinkCreateOrConnectWithoutOrganizationInput[]
    createMany?: AccountSocialLinkCreateManyOrganizationInputEnvelope
    connect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
  }

  export type IndustryUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<IndustryCreateWithoutOrganizationInput, IndustryUncheckedCreateWithoutOrganizationInput> | IndustryCreateWithoutOrganizationInput[] | IndustryUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IndustryCreateOrConnectWithoutOrganizationInput | IndustryCreateOrConnectWithoutOrganizationInput[]
    createMany?: IndustryCreateManyOrganizationInputEnvelope
    connect?: IndustryWhereUniqueInput | IndustryWhereUniqueInput[]
  }

  export type TouchTypeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TouchTypeCreateWithoutOrganizationInput, TouchTypeUncheckedCreateWithoutOrganizationInput> | TouchTypeCreateWithoutOrganizationInput[] | TouchTypeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TouchTypeCreateOrConnectWithoutOrganizationInput | TouchTypeCreateOrConnectWithoutOrganizationInput[]
    createMany?: TouchTypeCreateManyOrganizationInputEnvelope
    connect?: TouchTypeWhereUniqueInput | TouchTypeWhereUniqueInput[]
  }

  export type SocialPlatformUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SocialPlatformCreateWithoutOrganizationInput, SocialPlatformUncheckedCreateWithoutOrganizationInput> | SocialPlatformCreateWithoutOrganizationInput[] | SocialPlatformUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SocialPlatformCreateOrConnectWithoutOrganizationInput | SocialPlatformCreateOrConnectWithoutOrganizationInput[]
    createMany?: SocialPlatformCreateManyOrganizationInputEnvelope
    connect?: SocialPlatformWhereUniqueInput | SocialPlatformWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AccountCreateWithoutOrganizationInput, AccountUncheckedCreateWithoutOrganizationInput> | AccountCreateWithoutOrganizationInput[] | AccountUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutOrganizationInput | AccountCreateOrConnectWithoutOrganizationInput[]
    createMany?: AccountCreateManyOrganizationInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput> | ContactCreateWithoutOrganizationInput[] | ContactUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutOrganizationInput | ContactCreateOrConnectWithoutOrganizationInput[]
    createMany?: ContactCreateManyOrganizationInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type TouchUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TouchCreateWithoutOrganizationInput, TouchUncheckedCreateWithoutOrganizationInput> | TouchCreateWithoutOrganizationInput[] | TouchUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutOrganizationInput | TouchCreateOrConnectWithoutOrganizationInput[]
    createMany?: TouchCreateManyOrganizationInputEnvelope
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
  }

  export type AccountNoteUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AccountNoteCreateWithoutOrganizationInput, AccountNoteUncheckedCreateWithoutOrganizationInput> | AccountNoteCreateWithoutOrganizationInput[] | AccountNoteUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountNoteCreateOrConnectWithoutOrganizationInput | AccountNoteCreateOrConnectWithoutOrganizationInput[]
    createMany?: AccountNoteCreateManyOrganizationInputEnvelope
    connect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
  }

  export type ContactNoteUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ContactNoteCreateWithoutOrganizationInput, ContactNoteUncheckedCreateWithoutOrganizationInput> | ContactNoteCreateWithoutOrganizationInput[] | ContactNoteUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactNoteCreateOrConnectWithoutOrganizationInput | ContactNoteCreateOrConnectWithoutOrganizationInput[]
    createMany?: ContactNoteCreateManyOrganizationInputEnvelope
    connect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
  }

  export type AccountSocialLinkUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AccountSocialLinkCreateWithoutOrganizationInput, AccountSocialLinkUncheckedCreateWithoutOrganizationInput> | AccountSocialLinkCreateWithoutOrganizationInput[] | AccountSocialLinkUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountSocialLinkCreateOrConnectWithoutOrganizationInput | AccountSocialLinkCreateOrConnectWithoutOrganizationInput[]
    createMany?: AccountSocialLinkCreateManyOrganizationInputEnvelope
    connect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IndustryUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<IndustryCreateWithoutOrganizationInput, IndustryUncheckedCreateWithoutOrganizationInput> | IndustryCreateWithoutOrganizationInput[] | IndustryUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IndustryCreateOrConnectWithoutOrganizationInput | IndustryCreateOrConnectWithoutOrganizationInput[]
    upsert?: IndustryUpsertWithWhereUniqueWithoutOrganizationInput | IndustryUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: IndustryCreateManyOrganizationInputEnvelope
    set?: IndustryWhereUniqueInput | IndustryWhereUniqueInput[]
    disconnect?: IndustryWhereUniqueInput | IndustryWhereUniqueInput[]
    delete?: IndustryWhereUniqueInput | IndustryWhereUniqueInput[]
    connect?: IndustryWhereUniqueInput | IndustryWhereUniqueInput[]
    update?: IndustryUpdateWithWhereUniqueWithoutOrganizationInput | IndustryUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: IndustryUpdateManyWithWhereWithoutOrganizationInput | IndustryUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: IndustryScalarWhereInput | IndustryScalarWhereInput[]
  }

  export type TouchTypeUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TouchTypeCreateWithoutOrganizationInput, TouchTypeUncheckedCreateWithoutOrganizationInput> | TouchTypeCreateWithoutOrganizationInput[] | TouchTypeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TouchTypeCreateOrConnectWithoutOrganizationInput | TouchTypeCreateOrConnectWithoutOrganizationInput[]
    upsert?: TouchTypeUpsertWithWhereUniqueWithoutOrganizationInput | TouchTypeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TouchTypeCreateManyOrganizationInputEnvelope
    set?: TouchTypeWhereUniqueInput | TouchTypeWhereUniqueInput[]
    disconnect?: TouchTypeWhereUniqueInput | TouchTypeWhereUniqueInput[]
    delete?: TouchTypeWhereUniqueInput | TouchTypeWhereUniqueInput[]
    connect?: TouchTypeWhereUniqueInput | TouchTypeWhereUniqueInput[]
    update?: TouchTypeUpdateWithWhereUniqueWithoutOrganizationInput | TouchTypeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TouchTypeUpdateManyWithWhereWithoutOrganizationInput | TouchTypeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TouchTypeScalarWhereInput | TouchTypeScalarWhereInput[]
  }

  export type SocialPlatformUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SocialPlatformCreateWithoutOrganizationInput, SocialPlatformUncheckedCreateWithoutOrganizationInput> | SocialPlatformCreateWithoutOrganizationInput[] | SocialPlatformUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SocialPlatformCreateOrConnectWithoutOrganizationInput | SocialPlatformCreateOrConnectWithoutOrganizationInput[]
    upsert?: SocialPlatformUpsertWithWhereUniqueWithoutOrganizationInput | SocialPlatformUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SocialPlatformCreateManyOrganizationInputEnvelope
    set?: SocialPlatformWhereUniqueInput | SocialPlatformWhereUniqueInput[]
    disconnect?: SocialPlatformWhereUniqueInput | SocialPlatformWhereUniqueInput[]
    delete?: SocialPlatformWhereUniqueInput | SocialPlatformWhereUniqueInput[]
    connect?: SocialPlatformWhereUniqueInput | SocialPlatformWhereUniqueInput[]
    update?: SocialPlatformUpdateWithWhereUniqueWithoutOrganizationInput | SocialPlatformUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SocialPlatformUpdateManyWithWhereWithoutOrganizationInput | SocialPlatformUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SocialPlatformScalarWhereInput | SocialPlatformScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AccountCreateWithoutOrganizationInput, AccountUncheckedCreateWithoutOrganizationInput> | AccountCreateWithoutOrganizationInput[] | AccountUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutOrganizationInput | AccountCreateOrConnectWithoutOrganizationInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutOrganizationInput | AccountUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AccountCreateManyOrganizationInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutOrganizationInput | AccountUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutOrganizationInput | AccountUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ContactUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput> | ContactCreateWithoutOrganizationInput[] | ContactUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutOrganizationInput | ContactCreateOrConnectWithoutOrganizationInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutOrganizationInput | ContactUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ContactCreateManyOrganizationInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutOrganizationInput | ContactUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutOrganizationInput | ContactUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type TouchUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TouchCreateWithoutOrganizationInput, TouchUncheckedCreateWithoutOrganizationInput> | TouchCreateWithoutOrganizationInput[] | TouchUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutOrganizationInput | TouchCreateOrConnectWithoutOrganizationInput[]
    upsert?: TouchUpsertWithWhereUniqueWithoutOrganizationInput | TouchUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TouchCreateManyOrganizationInputEnvelope
    set?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    disconnect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    delete?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    update?: TouchUpdateWithWhereUniqueWithoutOrganizationInput | TouchUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TouchUpdateManyWithWhereWithoutOrganizationInput | TouchUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TouchScalarWhereInput | TouchScalarWhereInput[]
  }

  export type AccountNoteUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AccountNoteCreateWithoutOrganizationInput, AccountNoteUncheckedCreateWithoutOrganizationInput> | AccountNoteCreateWithoutOrganizationInput[] | AccountNoteUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountNoteCreateOrConnectWithoutOrganizationInput | AccountNoteCreateOrConnectWithoutOrganizationInput[]
    upsert?: AccountNoteUpsertWithWhereUniqueWithoutOrganizationInput | AccountNoteUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AccountNoteCreateManyOrganizationInputEnvelope
    set?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    disconnect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    delete?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    connect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    update?: AccountNoteUpdateWithWhereUniqueWithoutOrganizationInput | AccountNoteUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AccountNoteUpdateManyWithWhereWithoutOrganizationInput | AccountNoteUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AccountNoteScalarWhereInput | AccountNoteScalarWhereInput[]
  }

  export type ContactNoteUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ContactNoteCreateWithoutOrganizationInput, ContactNoteUncheckedCreateWithoutOrganizationInput> | ContactNoteCreateWithoutOrganizationInput[] | ContactNoteUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactNoteCreateOrConnectWithoutOrganizationInput | ContactNoteCreateOrConnectWithoutOrganizationInput[]
    upsert?: ContactNoteUpsertWithWhereUniqueWithoutOrganizationInput | ContactNoteUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ContactNoteCreateManyOrganizationInputEnvelope
    set?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    disconnect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    delete?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    connect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    update?: ContactNoteUpdateWithWhereUniqueWithoutOrganizationInput | ContactNoteUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ContactNoteUpdateManyWithWhereWithoutOrganizationInput | ContactNoteUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ContactNoteScalarWhereInput | ContactNoteScalarWhereInput[]
  }

  export type AccountSocialLinkUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AccountSocialLinkCreateWithoutOrganizationInput, AccountSocialLinkUncheckedCreateWithoutOrganizationInput> | AccountSocialLinkCreateWithoutOrganizationInput[] | AccountSocialLinkUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountSocialLinkCreateOrConnectWithoutOrganizationInput | AccountSocialLinkCreateOrConnectWithoutOrganizationInput[]
    upsert?: AccountSocialLinkUpsertWithWhereUniqueWithoutOrganizationInput | AccountSocialLinkUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AccountSocialLinkCreateManyOrganizationInputEnvelope
    set?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    disconnect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    delete?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    connect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    update?: AccountSocialLinkUpdateWithWhereUniqueWithoutOrganizationInput | AccountSocialLinkUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AccountSocialLinkUpdateManyWithWhereWithoutOrganizationInput | AccountSocialLinkUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AccountSocialLinkScalarWhereInput | AccountSocialLinkScalarWhereInput[]
  }

  export type IndustryUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<IndustryCreateWithoutOrganizationInput, IndustryUncheckedCreateWithoutOrganizationInput> | IndustryCreateWithoutOrganizationInput[] | IndustryUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IndustryCreateOrConnectWithoutOrganizationInput | IndustryCreateOrConnectWithoutOrganizationInput[]
    upsert?: IndustryUpsertWithWhereUniqueWithoutOrganizationInput | IndustryUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: IndustryCreateManyOrganizationInputEnvelope
    set?: IndustryWhereUniqueInput | IndustryWhereUniqueInput[]
    disconnect?: IndustryWhereUniqueInput | IndustryWhereUniqueInput[]
    delete?: IndustryWhereUniqueInput | IndustryWhereUniqueInput[]
    connect?: IndustryWhereUniqueInput | IndustryWhereUniqueInput[]
    update?: IndustryUpdateWithWhereUniqueWithoutOrganizationInput | IndustryUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: IndustryUpdateManyWithWhereWithoutOrganizationInput | IndustryUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: IndustryScalarWhereInput | IndustryScalarWhereInput[]
  }

  export type TouchTypeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TouchTypeCreateWithoutOrganizationInput, TouchTypeUncheckedCreateWithoutOrganizationInput> | TouchTypeCreateWithoutOrganizationInput[] | TouchTypeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TouchTypeCreateOrConnectWithoutOrganizationInput | TouchTypeCreateOrConnectWithoutOrganizationInput[]
    upsert?: TouchTypeUpsertWithWhereUniqueWithoutOrganizationInput | TouchTypeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TouchTypeCreateManyOrganizationInputEnvelope
    set?: TouchTypeWhereUniqueInput | TouchTypeWhereUniqueInput[]
    disconnect?: TouchTypeWhereUniqueInput | TouchTypeWhereUniqueInput[]
    delete?: TouchTypeWhereUniqueInput | TouchTypeWhereUniqueInput[]
    connect?: TouchTypeWhereUniqueInput | TouchTypeWhereUniqueInput[]
    update?: TouchTypeUpdateWithWhereUniqueWithoutOrganizationInput | TouchTypeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TouchTypeUpdateManyWithWhereWithoutOrganizationInput | TouchTypeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TouchTypeScalarWhereInput | TouchTypeScalarWhereInput[]
  }

  export type SocialPlatformUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SocialPlatformCreateWithoutOrganizationInput, SocialPlatformUncheckedCreateWithoutOrganizationInput> | SocialPlatformCreateWithoutOrganizationInput[] | SocialPlatformUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SocialPlatformCreateOrConnectWithoutOrganizationInput | SocialPlatformCreateOrConnectWithoutOrganizationInput[]
    upsert?: SocialPlatformUpsertWithWhereUniqueWithoutOrganizationInput | SocialPlatformUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SocialPlatformCreateManyOrganizationInputEnvelope
    set?: SocialPlatformWhereUniqueInput | SocialPlatformWhereUniqueInput[]
    disconnect?: SocialPlatformWhereUniqueInput | SocialPlatformWhereUniqueInput[]
    delete?: SocialPlatformWhereUniqueInput | SocialPlatformWhereUniqueInput[]
    connect?: SocialPlatformWhereUniqueInput | SocialPlatformWhereUniqueInput[]
    update?: SocialPlatformUpdateWithWhereUniqueWithoutOrganizationInput | SocialPlatformUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SocialPlatformUpdateManyWithWhereWithoutOrganizationInput | SocialPlatformUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SocialPlatformScalarWhereInput | SocialPlatformScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AccountCreateWithoutOrganizationInput, AccountUncheckedCreateWithoutOrganizationInput> | AccountCreateWithoutOrganizationInput[] | AccountUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutOrganizationInput | AccountCreateOrConnectWithoutOrganizationInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutOrganizationInput | AccountUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AccountCreateManyOrganizationInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutOrganizationInput | AccountUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutOrganizationInput | AccountUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput> | ContactCreateWithoutOrganizationInput[] | ContactUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutOrganizationInput | ContactCreateOrConnectWithoutOrganizationInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutOrganizationInput | ContactUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ContactCreateManyOrganizationInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutOrganizationInput | ContactUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutOrganizationInput | ContactUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type TouchUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TouchCreateWithoutOrganizationInput, TouchUncheckedCreateWithoutOrganizationInput> | TouchCreateWithoutOrganizationInput[] | TouchUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutOrganizationInput | TouchCreateOrConnectWithoutOrganizationInput[]
    upsert?: TouchUpsertWithWhereUniqueWithoutOrganizationInput | TouchUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TouchCreateManyOrganizationInputEnvelope
    set?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    disconnect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    delete?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    update?: TouchUpdateWithWhereUniqueWithoutOrganizationInput | TouchUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TouchUpdateManyWithWhereWithoutOrganizationInput | TouchUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TouchScalarWhereInput | TouchScalarWhereInput[]
  }

  export type AccountNoteUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AccountNoteCreateWithoutOrganizationInput, AccountNoteUncheckedCreateWithoutOrganizationInput> | AccountNoteCreateWithoutOrganizationInput[] | AccountNoteUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountNoteCreateOrConnectWithoutOrganizationInput | AccountNoteCreateOrConnectWithoutOrganizationInput[]
    upsert?: AccountNoteUpsertWithWhereUniqueWithoutOrganizationInput | AccountNoteUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AccountNoteCreateManyOrganizationInputEnvelope
    set?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    disconnect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    delete?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    connect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    update?: AccountNoteUpdateWithWhereUniqueWithoutOrganizationInput | AccountNoteUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AccountNoteUpdateManyWithWhereWithoutOrganizationInput | AccountNoteUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AccountNoteScalarWhereInput | AccountNoteScalarWhereInput[]
  }

  export type ContactNoteUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ContactNoteCreateWithoutOrganizationInput, ContactNoteUncheckedCreateWithoutOrganizationInput> | ContactNoteCreateWithoutOrganizationInput[] | ContactNoteUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ContactNoteCreateOrConnectWithoutOrganizationInput | ContactNoteCreateOrConnectWithoutOrganizationInput[]
    upsert?: ContactNoteUpsertWithWhereUniqueWithoutOrganizationInput | ContactNoteUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ContactNoteCreateManyOrganizationInputEnvelope
    set?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    disconnect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    delete?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    connect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    update?: ContactNoteUpdateWithWhereUniqueWithoutOrganizationInput | ContactNoteUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ContactNoteUpdateManyWithWhereWithoutOrganizationInput | ContactNoteUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ContactNoteScalarWhereInput | ContactNoteScalarWhereInput[]
  }

  export type AccountSocialLinkUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AccountSocialLinkCreateWithoutOrganizationInput, AccountSocialLinkUncheckedCreateWithoutOrganizationInput> | AccountSocialLinkCreateWithoutOrganizationInput[] | AccountSocialLinkUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AccountSocialLinkCreateOrConnectWithoutOrganizationInput | AccountSocialLinkCreateOrConnectWithoutOrganizationInput[]
    upsert?: AccountSocialLinkUpsertWithWhereUniqueWithoutOrganizationInput | AccountSocialLinkUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AccountSocialLinkCreateManyOrganizationInputEnvelope
    set?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    disconnect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    delete?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    connect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    update?: AccountSocialLinkUpdateWithWhereUniqueWithoutOrganizationInput | AccountSocialLinkUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AccountSocialLinkUpdateManyWithWhereWithoutOrganizationInput | AccountSocialLinkUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AccountSocialLinkScalarWhereInput | AccountSocialLinkScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutIndustriesInput = {
    create?: XOR<OrganizationCreateWithoutIndustriesInput, OrganizationUncheckedCreateWithoutIndustriesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutIndustriesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AccountCreateNestedManyWithoutIndustryInput = {
    create?: XOR<AccountCreateWithoutIndustryInput, AccountUncheckedCreateWithoutIndustryInput> | AccountCreateWithoutIndustryInput[] | AccountUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutIndustryInput | AccountCreateOrConnectWithoutIndustryInput[]
    createMany?: AccountCreateManyIndustryInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutIndustryInput = {
    create?: XOR<AccountCreateWithoutIndustryInput, AccountUncheckedCreateWithoutIndustryInput> | AccountCreateWithoutIndustryInput[] | AccountUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutIndustryInput | AccountCreateOrConnectWithoutIndustryInput[]
    createMany?: AccountCreateManyIndustryInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutIndustriesNestedInput = {
    create?: XOR<OrganizationCreateWithoutIndustriesInput, OrganizationUncheckedCreateWithoutIndustriesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutIndustriesInput
    upsert?: OrganizationUpsertWithoutIndustriesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutIndustriesInput, OrganizationUpdateWithoutIndustriesInput>, OrganizationUncheckedUpdateWithoutIndustriesInput>
  }

  export type AccountUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<AccountCreateWithoutIndustryInput, AccountUncheckedCreateWithoutIndustryInput> | AccountCreateWithoutIndustryInput[] | AccountUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutIndustryInput | AccountCreateOrConnectWithoutIndustryInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutIndustryInput | AccountUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: AccountCreateManyIndustryInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutIndustryInput | AccountUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutIndustryInput | AccountUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<AccountCreateWithoutIndustryInput, AccountUncheckedCreateWithoutIndustryInput> | AccountCreateWithoutIndustryInput[] | AccountUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutIndustryInput | AccountCreateOrConnectWithoutIndustryInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutIndustryInput | AccountUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: AccountCreateManyIndustryInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutIndustryInput | AccountUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutIndustryInput | AccountUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutTouchTypesInput = {
    create?: XOR<OrganizationCreateWithoutTouchTypesInput, OrganizationUncheckedCreateWithoutTouchTypesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTouchTypesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutTouchTypesNestedInput = {
    create?: XOR<OrganizationCreateWithoutTouchTypesInput, OrganizationUncheckedCreateWithoutTouchTypesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTouchTypesInput
    upsert?: OrganizationUpsertWithoutTouchTypesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutTouchTypesInput, OrganizationUpdateWithoutTouchTypesInput>, OrganizationUncheckedUpdateWithoutTouchTypesInput>
  }

  export type OrganizationCreateNestedOneWithoutSocialPlatformsInput = {
    create?: XOR<OrganizationCreateWithoutSocialPlatformsInput, OrganizationUncheckedCreateWithoutSocialPlatformsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSocialPlatformsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutSocialPlatformsNestedInput = {
    create?: XOR<OrganizationCreateWithoutSocialPlatformsInput, OrganizationUncheckedCreateWithoutSocialPlatformsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSocialPlatformsInput
    upsert?: OrganizationUpsertWithoutSocialPlatformsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSocialPlatformsInput, OrganizationUpdateWithoutSocialPlatformsInput>, OrganizationUncheckedUpdateWithoutSocialPlatformsInput>
  }

  export type OrganizationCreateNestedOneWithoutAccountsInput = {
    create?: XOR<OrganizationCreateWithoutAccountsInput, OrganizationUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAccountsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type IndustryCreateNestedOneWithoutAccountsInput = {
    create?: XOR<IndustryCreateWithoutAccountsInput, IndustryUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutAccountsInput
    connect?: IndustryWhereUniqueInput
  }

  export type ContactCreateNestedManyWithoutAccountInput = {
    create?: XOR<ContactCreateWithoutAccountInput, ContactUncheckedCreateWithoutAccountInput> | ContactCreateWithoutAccountInput[] | ContactUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutAccountInput | ContactCreateOrConnectWithoutAccountInput[]
    createMany?: ContactCreateManyAccountInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type AccountNoteCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountNoteCreateWithoutAccountInput, AccountNoteUncheckedCreateWithoutAccountInput> | AccountNoteCreateWithoutAccountInput[] | AccountNoteUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountNoteCreateOrConnectWithoutAccountInput | AccountNoteCreateOrConnectWithoutAccountInput[]
    createMany?: AccountNoteCreateManyAccountInputEnvelope
    connect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
  }

  export type AccountSocialLinkCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountSocialLinkCreateWithoutAccountInput, AccountSocialLinkUncheckedCreateWithoutAccountInput> | AccountSocialLinkCreateWithoutAccountInput[] | AccountSocialLinkUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountSocialLinkCreateOrConnectWithoutAccountInput | AccountSocialLinkCreateOrConnectWithoutAccountInput[]
    createMany?: AccountSocialLinkCreateManyAccountInputEnvelope
    connect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
  }

  export type TouchCreateNestedManyWithoutAccountInput = {
    create?: XOR<TouchCreateWithoutAccountInput, TouchUncheckedCreateWithoutAccountInput> | TouchCreateWithoutAccountInput[] | TouchUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutAccountInput | TouchCreateOrConnectWithoutAccountInput[]
    createMany?: TouchCreateManyAccountInputEnvelope
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<ContactCreateWithoutAccountInput, ContactUncheckedCreateWithoutAccountInput> | ContactCreateWithoutAccountInput[] | ContactUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutAccountInput | ContactCreateOrConnectWithoutAccountInput[]
    createMany?: ContactCreateManyAccountInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type AccountNoteUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountNoteCreateWithoutAccountInput, AccountNoteUncheckedCreateWithoutAccountInput> | AccountNoteCreateWithoutAccountInput[] | AccountNoteUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountNoteCreateOrConnectWithoutAccountInput | AccountNoteCreateOrConnectWithoutAccountInput[]
    createMany?: AccountNoteCreateManyAccountInputEnvelope
    connect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
  }

  export type AccountSocialLinkUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountSocialLinkCreateWithoutAccountInput, AccountSocialLinkUncheckedCreateWithoutAccountInput> | AccountSocialLinkCreateWithoutAccountInput[] | AccountSocialLinkUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountSocialLinkCreateOrConnectWithoutAccountInput | AccountSocialLinkCreateOrConnectWithoutAccountInput[]
    createMany?: AccountSocialLinkCreateManyAccountInputEnvelope
    connect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
  }

  export type TouchUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TouchCreateWithoutAccountInput, TouchUncheckedCreateWithoutAccountInput> | TouchCreateWithoutAccountInput[] | TouchUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutAccountInput | TouchCreateOrConnectWithoutAccountInput[]
    createMany?: TouchCreateManyAccountInputEnvelope
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrganizationUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAccountsInput, OrganizationUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAccountsInput
    upsert?: OrganizationUpsertWithoutAccountsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAccountsInput, OrganizationUpdateWithoutAccountsInput>, OrganizationUncheckedUpdateWithoutAccountsInput>
  }

  export type IndustryUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<IndustryCreateWithoutAccountsInput, IndustryUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutAccountsInput
    upsert?: IndustryUpsertWithoutAccountsInput
    connect?: IndustryWhereUniqueInput
    update?: XOR<XOR<IndustryUpdateToOneWithWhereWithoutAccountsInput, IndustryUpdateWithoutAccountsInput>, IndustryUncheckedUpdateWithoutAccountsInput>
  }

  export type ContactUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ContactCreateWithoutAccountInput, ContactUncheckedCreateWithoutAccountInput> | ContactCreateWithoutAccountInput[] | ContactUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutAccountInput | ContactCreateOrConnectWithoutAccountInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutAccountInput | ContactUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ContactCreateManyAccountInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutAccountInput | ContactUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutAccountInput | ContactUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type AccountNoteUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountNoteCreateWithoutAccountInput, AccountNoteUncheckedCreateWithoutAccountInput> | AccountNoteCreateWithoutAccountInput[] | AccountNoteUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountNoteCreateOrConnectWithoutAccountInput | AccountNoteCreateOrConnectWithoutAccountInput[]
    upsert?: AccountNoteUpsertWithWhereUniqueWithoutAccountInput | AccountNoteUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountNoteCreateManyAccountInputEnvelope
    set?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    disconnect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    delete?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    connect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    update?: AccountNoteUpdateWithWhereUniqueWithoutAccountInput | AccountNoteUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountNoteUpdateManyWithWhereWithoutAccountInput | AccountNoteUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountNoteScalarWhereInput | AccountNoteScalarWhereInput[]
  }

  export type AccountSocialLinkUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountSocialLinkCreateWithoutAccountInput, AccountSocialLinkUncheckedCreateWithoutAccountInput> | AccountSocialLinkCreateWithoutAccountInput[] | AccountSocialLinkUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountSocialLinkCreateOrConnectWithoutAccountInput | AccountSocialLinkCreateOrConnectWithoutAccountInput[]
    upsert?: AccountSocialLinkUpsertWithWhereUniqueWithoutAccountInput | AccountSocialLinkUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountSocialLinkCreateManyAccountInputEnvelope
    set?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    disconnect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    delete?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    connect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    update?: AccountSocialLinkUpdateWithWhereUniqueWithoutAccountInput | AccountSocialLinkUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountSocialLinkUpdateManyWithWhereWithoutAccountInput | AccountSocialLinkUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountSocialLinkScalarWhereInput | AccountSocialLinkScalarWhereInput[]
  }

  export type TouchUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TouchCreateWithoutAccountInput, TouchUncheckedCreateWithoutAccountInput> | TouchCreateWithoutAccountInput[] | TouchUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutAccountInput | TouchCreateOrConnectWithoutAccountInput[]
    upsert?: TouchUpsertWithWhereUniqueWithoutAccountInput | TouchUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TouchCreateManyAccountInputEnvelope
    set?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    disconnect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    delete?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    update?: TouchUpdateWithWhereUniqueWithoutAccountInput | TouchUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TouchUpdateManyWithWhereWithoutAccountInput | TouchUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TouchScalarWhereInput | TouchScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ContactCreateWithoutAccountInput, ContactUncheckedCreateWithoutAccountInput> | ContactCreateWithoutAccountInput[] | ContactUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutAccountInput | ContactCreateOrConnectWithoutAccountInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutAccountInput | ContactUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ContactCreateManyAccountInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutAccountInput | ContactUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutAccountInput | ContactUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type AccountNoteUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountNoteCreateWithoutAccountInput, AccountNoteUncheckedCreateWithoutAccountInput> | AccountNoteCreateWithoutAccountInput[] | AccountNoteUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountNoteCreateOrConnectWithoutAccountInput | AccountNoteCreateOrConnectWithoutAccountInput[]
    upsert?: AccountNoteUpsertWithWhereUniqueWithoutAccountInput | AccountNoteUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountNoteCreateManyAccountInputEnvelope
    set?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    disconnect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    delete?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    connect?: AccountNoteWhereUniqueInput | AccountNoteWhereUniqueInput[]
    update?: AccountNoteUpdateWithWhereUniqueWithoutAccountInput | AccountNoteUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountNoteUpdateManyWithWhereWithoutAccountInput | AccountNoteUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountNoteScalarWhereInput | AccountNoteScalarWhereInput[]
  }

  export type AccountSocialLinkUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountSocialLinkCreateWithoutAccountInput, AccountSocialLinkUncheckedCreateWithoutAccountInput> | AccountSocialLinkCreateWithoutAccountInput[] | AccountSocialLinkUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountSocialLinkCreateOrConnectWithoutAccountInput | AccountSocialLinkCreateOrConnectWithoutAccountInput[]
    upsert?: AccountSocialLinkUpsertWithWhereUniqueWithoutAccountInput | AccountSocialLinkUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountSocialLinkCreateManyAccountInputEnvelope
    set?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    disconnect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    delete?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    connect?: AccountSocialLinkWhereUniqueInput | AccountSocialLinkWhereUniqueInput[]
    update?: AccountSocialLinkUpdateWithWhereUniqueWithoutAccountInput | AccountSocialLinkUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountSocialLinkUpdateManyWithWhereWithoutAccountInput | AccountSocialLinkUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountSocialLinkScalarWhereInput | AccountSocialLinkScalarWhereInput[]
  }

  export type TouchUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TouchCreateWithoutAccountInput, TouchUncheckedCreateWithoutAccountInput> | TouchCreateWithoutAccountInput[] | TouchUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutAccountInput | TouchCreateOrConnectWithoutAccountInput[]
    upsert?: TouchUpsertWithWhereUniqueWithoutAccountInput | TouchUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TouchCreateManyAccountInputEnvelope
    set?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    disconnect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    delete?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    update?: TouchUpdateWithWhereUniqueWithoutAccountInput | TouchUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TouchUpdateManyWithWhereWithoutAccountInput | TouchUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TouchScalarWhereInput | TouchScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutAccountSocialsInput = {
    create?: XOR<OrganizationCreateWithoutAccountSocialsInput, OrganizationUncheckedCreateWithoutAccountSocialsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAccountSocialsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutSocialsInput = {
    create?: XOR<AccountCreateWithoutSocialsInput, AccountUncheckedCreateWithoutSocialsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSocialsInput
    connect?: AccountWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutAccountSocialsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAccountSocialsInput, OrganizationUncheckedCreateWithoutAccountSocialsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAccountSocialsInput
    upsert?: OrganizationUpsertWithoutAccountSocialsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAccountSocialsInput, OrganizationUpdateWithoutAccountSocialsInput>, OrganizationUncheckedUpdateWithoutAccountSocialsInput>
  }

  export type AccountUpdateOneRequiredWithoutSocialsNestedInput = {
    create?: XOR<AccountCreateWithoutSocialsInput, AccountUncheckedCreateWithoutSocialsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSocialsInput
    upsert?: AccountUpsertWithoutSocialsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutSocialsInput, AccountUpdateWithoutSocialsInput>, AccountUncheckedUpdateWithoutSocialsInput>
  }

  export type OrganizationCreateNestedOneWithoutAccountNotesInput = {
    create?: XOR<OrganizationCreateWithoutAccountNotesInput, OrganizationUncheckedCreateWithoutAccountNotesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAccountNotesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutNotesInput = {
    create?: XOR<AccountCreateWithoutNotesInput, AccountUncheckedCreateWithoutNotesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutNotesInput
    connect?: AccountWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutAccountNotesNestedInput = {
    create?: XOR<OrganizationCreateWithoutAccountNotesInput, OrganizationUncheckedCreateWithoutAccountNotesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAccountNotesInput
    upsert?: OrganizationUpsertWithoutAccountNotesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAccountNotesInput, OrganizationUpdateWithoutAccountNotesInput>, OrganizationUncheckedUpdateWithoutAccountNotesInput>
  }

  export type AccountUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<AccountCreateWithoutNotesInput, AccountUncheckedCreateWithoutNotesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutNotesInput
    upsert?: AccountUpsertWithoutNotesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutNotesInput, AccountUpdateWithoutNotesInput>, AccountUncheckedUpdateWithoutNotesInput>
  }

  export type OrganizationCreateNestedOneWithoutContactsInput = {
    create?: XOR<OrganizationCreateWithoutContactsInput, OrganizationUncheckedCreateWithoutContactsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContactsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutContactsInput = {
    create?: XOR<AccountCreateWithoutContactsInput, AccountUncheckedCreateWithoutContactsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutContactsInput
    connect?: AccountWhereUniqueInput
  }

  export type TouchCreateNestedManyWithoutContactInput = {
    create?: XOR<TouchCreateWithoutContactInput, TouchUncheckedCreateWithoutContactInput> | TouchCreateWithoutContactInput[] | TouchUncheckedCreateWithoutContactInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutContactInput | TouchCreateOrConnectWithoutContactInput[]
    createMany?: TouchCreateManyContactInputEnvelope
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
  }

  export type ContactNoteCreateNestedManyWithoutContactInput = {
    create?: XOR<ContactNoteCreateWithoutContactInput, ContactNoteUncheckedCreateWithoutContactInput> | ContactNoteCreateWithoutContactInput[] | ContactNoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactNoteCreateOrConnectWithoutContactInput | ContactNoteCreateOrConnectWithoutContactInput[]
    createMany?: ContactNoteCreateManyContactInputEnvelope
    connect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
  }

  export type TouchUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<TouchCreateWithoutContactInput, TouchUncheckedCreateWithoutContactInput> | TouchCreateWithoutContactInput[] | TouchUncheckedCreateWithoutContactInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutContactInput | TouchCreateOrConnectWithoutContactInput[]
    createMany?: TouchCreateManyContactInputEnvelope
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
  }

  export type ContactNoteUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<ContactNoteCreateWithoutContactInput, ContactNoteUncheckedCreateWithoutContactInput> | ContactNoteCreateWithoutContactInput[] | ContactNoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactNoteCreateOrConnectWithoutContactInput | ContactNoteCreateOrConnectWithoutContactInput[]
    createMany?: ContactNoteCreateManyContactInputEnvelope
    connect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<OrganizationCreateWithoutContactsInput, OrganizationUncheckedCreateWithoutContactsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContactsInput
    upsert?: OrganizationUpsertWithoutContactsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutContactsInput, OrganizationUpdateWithoutContactsInput>, OrganizationUncheckedUpdateWithoutContactsInput>
  }

  export type AccountUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<AccountCreateWithoutContactsInput, AccountUncheckedCreateWithoutContactsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutContactsInput
    upsert?: AccountUpsertWithoutContactsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutContactsInput, AccountUpdateWithoutContactsInput>, AccountUncheckedUpdateWithoutContactsInput>
  }

  export type TouchUpdateManyWithoutContactNestedInput = {
    create?: XOR<TouchCreateWithoutContactInput, TouchUncheckedCreateWithoutContactInput> | TouchCreateWithoutContactInput[] | TouchUncheckedCreateWithoutContactInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutContactInput | TouchCreateOrConnectWithoutContactInput[]
    upsert?: TouchUpsertWithWhereUniqueWithoutContactInput | TouchUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: TouchCreateManyContactInputEnvelope
    set?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    disconnect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    delete?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    update?: TouchUpdateWithWhereUniqueWithoutContactInput | TouchUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: TouchUpdateManyWithWhereWithoutContactInput | TouchUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: TouchScalarWhereInput | TouchScalarWhereInput[]
  }

  export type ContactNoteUpdateManyWithoutContactNestedInput = {
    create?: XOR<ContactNoteCreateWithoutContactInput, ContactNoteUncheckedCreateWithoutContactInput> | ContactNoteCreateWithoutContactInput[] | ContactNoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactNoteCreateOrConnectWithoutContactInput | ContactNoteCreateOrConnectWithoutContactInput[]
    upsert?: ContactNoteUpsertWithWhereUniqueWithoutContactInput | ContactNoteUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ContactNoteCreateManyContactInputEnvelope
    set?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    disconnect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    delete?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    connect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    update?: ContactNoteUpdateWithWhereUniqueWithoutContactInput | ContactNoteUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ContactNoteUpdateManyWithWhereWithoutContactInput | ContactNoteUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ContactNoteScalarWhereInput | ContactNoteScalarWhereInput[]
  }

  export type TouchUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<TouchCreateWithoutContactInput, TouchUncheckedCreateWithoutContactInput> | TouchCreateWithoutContactInput[] | TouchUncheckedCreateWithoutContactInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutContactInput | TouchCreateOrConnectWithoutContactInput[]
    upsert?: TouchUpsertWithWhereUniqueWithoutContactInput | TouchUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: TouchCreateManyContactInputEnvelope
    set?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    disconnect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    delete?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    update?: TouchUpdateWithWhereUniqueWithoutContactInput | TouchUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: TouchUpdateManyWithWhereWithoutContactInput | TouchUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: TouchScalarWhereInput | TouchScalarWhereInput[]
  }

  export type ContactNoteUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<ContactNoteCreateWithoutContactInput, ContactNoteUncheckedCreateWithoutContactInput> | ContactNoteCreateWithoutContactInput[] | ContactNoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactNoteCreateOrConnectWithoutContactInput | ContactNoteCreateOrConnectWithoutContactInput[]
    upsert?: ContactNoteUpsertWithWhereUniqueWithoutContactInput | ContactNoteUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ContactNoteCreateManyContactInputEnvelope
    set?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    disconnect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    delete?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    connect?: ContactNoteWhereUniqueInput | ContactNoteWhereUniqueInput[]
    update?: ContactNoteUpdateWithWhereUniqueWithoutContactInput | ContactNoteUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ContactNoteUpdateManyWithWhereWithoutContactInput | ContactNoteUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ContactNoteScalarWhereInput | ContactNoteScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutContactNotesInput = {
    create?: XOR<OrganizationCreateWithoutContactNotesInput, OrganizationUncheckedCreateWithoutContactNotesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContactNotesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutNotesInput = {
    create?: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutNotesInput
    connect?: ContactWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutContactNotesNestedInput = {
    create?: XOR<OrganizationCreateWithoutContactNotesInput, OrganizationUncheckedCreateWithoutContactNotesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutContactNotesInput
    upsert?: OrganizationUpsertWithoutContactNotesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutContactNotesInput, OrganizationUpdateWithoutContactNotesInput>, OrganizationUncheckedUpdateWithoutContactNotesInput>
  }

  export type ContactUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutNotesInput
    upsert?: ContactUpsertWithoutNotesInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutNotesInput, ContactUpdateWithoutNotesInput>, ContactUncheckedUpdateWithoutNotesInput>
  }

  export type OrganizationCreateNestedOneWithoutTouchesInput = {
    create?: XOR<OrganizationCreateWithoutTouchesInput, OrganizationUncheckedCreateWithoutTouchesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTouchesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutTouchesInput = {
    create?: XOR<AccountCreateWithoutTouchesInput, AccountUncheckedCreateWithoutTouchesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTouchesInput
    connect?: AccountWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutTouchesInput = {
    create?: XOR<ContactCreateWithoutTouchesInput, ContactUncheckedCreateWithoutTouchesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutTouchesInput
    connect?: ContactWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutTouchesNestedInput = {
    create?: XOR<OrganizationCreateWithoutTouchesInput, OrganizationUncheckedCreateWithoutTouchesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTouchesInput
    upsert?: OrganizationUpsertWithoutTouchesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutTouchesInput, OrganizationUpdateWithoutTouchesInput>, OrganizationUncheckedUpdateWithoutTouchesInput>
  }

  export type AccountUpdateOneRequiredWithoutTouchesNestedInput = {
    create?: XOR<AccountCreateWithoutTouchesInput, AccountUncheckedCreateWithoutTouchesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTouchesInput
    upsert?: AccountUpsertWithoutTouchesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTouchesInput, AccountUpdateWithoutTouchesInput>, AccountUncheckedUpdateWithoutTouchesInput>
  }

  export type ContactUpdateOneWithoutTouchesNestedInput = {
    create?: XOR<ContactCreateWithoutTouchesInput, ContactUncheckedCreateWithoutTouchesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutTouchesInput
    upsert?: ContactUpsertWithoutTouchesInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutTouchesInput, ContactUpdateWithoutTouchesInput>, ContactUncheckedUpdateWithoutTouchesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IndustryCreateWithoutOrganizationInput = {
    id?: string
    name: string
    isSystem?: boolean
    accounts?: AccountCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    isSystem?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutIndustryInput
  }

  export type IndustryCreateOrConnectWithoutOrganizationInput = {
    where: IndustryWhereUniqueInput
    create: XOR<IndustryCreateWithoutOrganizationInput, IndustryUncheckedCreateWithoutOrganizationInput>
  }

  export type IndustryCreateManyOrganizationInputEnvelope = {
    data: IndustryCreateManyOrganizationInput | IndustryCreateManyOrganizationInput[]
  }

  export type TouchTypeCreateWithoutOrganizationInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type TouchTypeUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type TouchTypeCreateOrConnectWithoutOrganizationInput = {
    where: TouchTypeWhereUniqueInput
    create: XOR<TouchTypeCreateWithoutOrganizationInput, TouchTypeUncheckedCreateWithoutOrganizationInput>
  }

  export type TouchTypeCreateManyOrganizationInputEnvelope = {
    data: TouchTypeCreateManyOrganizationInput | TouchTypeCreateManyOrganizationInput[]
  }

  export type SocialPlatformCreateWithoutOrganizationInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type SocialPlatformUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type SocialPlatformCreateOrConnectWithoutOrganizationInput = {
    where: SocialPlatformWhereUniqueInput
    create: XOR<SocialPlatformCreateWithoutOrganizationInput, SocialPlatformUncheckedCreateWithoutOrganizationInput>
  }

  export type SocialPlatformCreateManyOrganizationInputEnvelope = {
    data: SocialPlatformCreateManyOrganizationInput | SocialPlatformCreateManyOrganizationInput[]
  }

  export type AccountCreateWithoutOrganizationInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutAccountsInput
    contacts?: ContactCreateNestedManyWithoutAccountInput
    notes?: AccountNoteCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkCreateNestedManyWithoutAccountInput
    touches?: TouchCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    notes?: AccountNoteUncheckedCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkUncheckedCreateNestedManyWithoutAccountInput
    touches?: TouchUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutOrganizationInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutOrganizationInput, AccountUncheckedCreateWithoutOrganizationInput>
  }

  export type AccountCreateManyOrganizationInputEnvelope = {
    data: AccountCreateManyOrganizationInput | AccountCreateManyOrganizationInput[]
  }

  export type ContactCreateWithoutOrganizationInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutContactsInput
    touches?: TouchCreateNestedManyWithoutContactInput
    notes?: ContactNoteCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutOrganizationInput = {
    id?: string
    accountId: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    touches?: TouchUncheckedCreateNestedManyWithoutContactInput
    notes?: ContactNoteUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutOrganizationInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput>
  }

  export type ContactCreateManyOrganizationInputEnvelope = {
    data: ContactCreateManyOrganizationInput | ContactCreateManyOrganizationInput[]
  }

  export type TouchCreateWithoutOrganizationInput = {
    id?: string
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutTouchesInput
    contact?: ContactCreateNestedOneWithoutTouchesInput
  }

  export type TouchUncheckedCreateWithoutOrganizationInput = {
    id?: string
    accountId: string
    contactId?: string | null
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TouchCreateOrConnectWithoutOrganizationInput = {
    where: TouchWhereUniqueInput
    create: XOR<TouchCreateWithoutOrganizationInput, TouchUncheckedCreateWithoutOrganizationInput>
  }

  export type TouchCreateManyOrganizationInputEnvelope = {
    data: TouchCreateManyOrganizationInput | TouchCreateManyOrganizationInput[]
  }

  export type AccountNoteCreateWithoutOrganizationInput = {
    id?: string
    text: string
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutNotesInput
  }

  export type AccountNoteUncheckedCreateWithoutOrganizationInput = {
    id?: string
    text: string
    accountId: string
    createdAt?: Date | string
  }

  export type AccountNoteCreateOrConnectWithoutOrganizationInput = {
    where: AccountNoteWhereUniqueInput
    create: XOR<AccountNoteCreateWithoutOrganizationInput, AccountNoteUncheckedCreateWithoutOrganizationInput>
  }

  export type AccountNoteCreateManyOrganizationInputEnvelope = {
    data: AccountNoteCreateManyOrganizationInput | AccountNoteCreateManyOrganizationInput[]
  }

  export type ContactNoteCreateWithoutOrganizationInput = {
    id?: string
    text: string
    createdAt?: Date | string
    contact: ContactCreateNestedOneWithoutNotesInput
  }

  export type ContactNoteUncheckedCreateWithoutOrganizationInput = {
    id?: string
    text: string
    contactId: string
    createdAt?: Date | string
  }

  export type ContactNoteCreateOrConnectWithoutOrganizationInput = {
    where: ContactNoteWhereUniqueInput
    create: XOR<ContactNoteCreateWithoutOrganizationInput, ContactNoteUncheckedCreateWithoutOrganizationInput>
  }

  export type ContactNoteCreateManyOrganizationInputEnvelope = {
    data: ContactNoteCreateManyOrganizationInput | ContactNoteCreateManyOrganizationInput[]
  }

  export type AccountSocialLinkCreateWithoutOrganizationInput = {
    id?: string
    platform: string
    handle: string
    account: AccountCreateNestedOneWithoutSocialsInput
  }

  export type AccountSocialLinkUncheckedCreateWithoutOrganizationInput = {
    id?: string
    accountId: string
    platform: string
    handle: string
  }

  export type AccountSocialLinkCreateOrConnectWithoutOrganizationInput = {
    where: AccountSocialLinkWhereUniqueInput
    create: XOR<AccountSocialLinkCreateWithoutOrganizationInput, AccountSocialLinkUncheckedCreateWithoutOrganizationInput>
  }

  export type AccountSocialLinkCreateManyOrganizationInputEnvelope = {
    data: AccountSocialLinkCreateManyOrganizationInput | AccountSocialLinkCreateManyOrganizationInput[]
  }

  export type IndustryUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: IndustryWhereUniqueInput
    update: XOR<IndustryUpdateWithoutOrganizationInput, IndustryUncheckedUpdateWithoutOrganizationInput>
    create: XOR<IndustryCreateWithoutOrganizationInput, IndustryUncheckedCreateWithoutOrganizationInput>
  }

  export type IndustryUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: IndustryWhereUniqueInput
    data: XOR<IndustryUpdateWithoutOrganizationInput, IndustryUncheckedUpdateWithoutOrganizationInput>
  }

  export type IndustryUpdateManyWithWhereWithoutOrganizationInput = {
    where: IndustryScalarWhereInput
    data: XOR<IndustryUpdateManyMutationInput, IndustryUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type IndustryScalarWhereInput = {
    AND?: IndustryScalarWhereInput | IndustryScalarWhereInput[]
    OR?: IndustryScalarWhereInput[]
    NOT?: IndustryScalarWhereInput | IndustryScalarWhereInput[]
    id?: StringFilter<"Industry"> | string
    organizationId?: StringFilter<"Industry"> | string
    name?: StringFilter<"Industry"> | string
    isSystem?: BoolFilter<"Industry"> | boolean
  }

  export type TouchTypeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: TouchTypeWhereUniqueInput
    update: XOR<TouchTypeUpdateWithoutOrganizationInput, TouchTypeUncheckedUpdateWithoutOrganizationInput>
    create: XOR<TouchTypeCreateWithoutOrganizationInput, TouchTypeUncheckedCreateWithoutOrganizationInput>
  }

  export type TouchTypeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: TouchTypeWhereUniqueInput
    data: XOR<TouchTypeUpdateWithoutOrganizationInput, TouchTypeUncheckedUpdateWithoutOrganizationInput>
  }

  export type TouchTypeUpdateManyWithWhereWithoutOrganizationInput = {
    where: TouchTypeScalarWhereInput
    data: XOR<TouchTypeUpdateManyMutationInput, TouchTypeUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type TouchTypeScalarWhereInput = {
    AND?: TouchTypeScalarWhereInput | TouchTypeScalarWhereInput[]
    OR?: TouchTypeScalarWhereInput[]
    NOT?: TouchTypeScalarWhereInput | TouchTypeScalarWhereInput[]
    id?: StringFilter<"TouchType"> | string
    organizationId?: StringFilter<"TouchType"> | string
    name?: StringFilter<"TouchType"> | string
    isSystem?: BoolFilter<"TouchType"> | boolean
  }

  export type SocialPlatformUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: SocialPlatformWhereUniqueInput
    update: XOR<SocialPlatformUpdateWithoutOrganizationInput, SocialPlatformUncheckedUpdateWithoutOrganizationInput>
    create: XOR<SocialPlatformCreateWithoutOrganizationInput, SocialPlatformUncheckedCreateWithoutOrganizationInput>
  }

  export type SocialPlatformUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: SocialPlatformWhereUniqueInput
    data: XOR<SocialPlatformUpdateWithoutOrganizationInput, SocialPlatformUncheckedUpdateWithoutOrganizationInput>
  }

  export type SocialPlatformUpdateManyWithWhereWithoutOrganizationInput = {
    where: SocialPlatformScalarWhereInput
    data: XOR<SocialPlatformUpdateManyMutationInput, SocialPlatformUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type SocialPlatformScalarWhereInput = {
    AND?: SocialPlatformScalarWhereInput | SocialPlatformScalarWhereInput[]
    OR?: SocialPlatformScalarWhereInput[]
    NOT?: SocialPlatformScalarWhereInput | SocialPlatformScalarWhereInput[]
    id?: StringFilter<"SocialPlatform"> | string
    organizationId?: StringFilter<"SocialPlatform"> | string
    name?: StringFilter<"SocialPlatform"> | string
    isSystem?: BoolFilter<"SocialPlatform"> | boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutOrganizationInput, AccountUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AccountCreateWithoutOrganizationInput, AccountUncheckedCreateWithoutOrganizationInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutOrganizationInput, AccountUncheckedUpdateWithoutOrganizationInput>
  }

  export type AccountUpdateManyWithWhereWithoutOrganizationInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    organizationId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    address?: StringNullableFilter<"Account"> | string | null
    phone?: StringNullableFilter<"Account"> | string | null
    website?: StringNullableFilter<"Account"> | string | null
    status?: StringFilter<"Account"> | string
    isVip?: BoolFilter<"Account"> | boolean
    source?: StringNullableFilter<"Account"> | string | null
    ownerUserId?: StringNullableFilter<"Account"> | string | null
    createdByUserId?: StringNullableFilter<"Account"> | string | null
    nextTouchAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    nextTouchType?: StringNullableFilter<"Account"> | string | null
    nextTouchNote?: StringNullableFilter<"Account"> | string | null
    industryId?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type ContactUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutOrganizationInput, ContactUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ContactCreateWithoutOrganizationInput, ContactUncheckedCreateWithoutOrganizationInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutOrganizationInput, ContactUncheckedUpdateWithoutOrganizationInput>
  }

  export type ContactUpdateManyWithWhereWithoutOrganizationInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: StringFilter<"Contact"> | string
    organizationId?: StringFilter<"Contact"> | string
    accountId?: StringFilter<"Contact"> | string
    firstName?: StringFilter<"Contact"> | string
    lastName?: StringFilter<"Contact"> | string
    title?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    officePhone?: StringNullableFilter<"Contact"> | string | null
    isVip?: BoolFilter<"Contact"> | boolean
    source?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type TouchUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: TouchWhereUniqueInput
    update: XOR<TouchUpdateWithoutOrganizationInput, TouchUncheckedUpdateWithoutOrganizationInput>
    create: XOR<TouchCreateWithoutOrganizationInput, TouchUncheckedCreateWithoutOrganizationInput>
  }

  export type TouchUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: TouchWhereUniqueInput
    data: XOR<TouchUpdateWithoutOrganizationInput, TouchUncheckedUpdateWithoutOrganizationInput>
  }

  export type TouchUpdateManyWithWhereWithoutOrganizationInput = {
    where: TouchScalarWhereInput
    data: XOR<TouchUpdateManyMutationInput, TouchUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type TouchScalarWhereInput = {
    AND?: TouchScalarWhereInput | TouchScalarWhereInput[]
    OR?: TouchScalarWhereInput[]
    NOT?: TouchScalarWhereInput | TouchScalarWhereInput[]
    id?: StringFilter<"Touch"> | string
    organizationId?: StringFilter<"Touch"> | string
    accountId?: StringFilter<"Touch"> | string
    contactId?: StringNullableFilter<"Touch"> | string | null
    createdByUserId?: StringNullableFilter<"Touch"> | string | null
    date?: DateTimeFilter<"Touch"> | Date | string
    type?: StringFilter<"Touch"> | string
    outcome?: StringNullableFilter<"Touch"> | string | null
    source?: StringNullableFilter<"Touch"> | string | null
    isAutomated?: BoolFilter<"Touch"> | boolean
    notes?: StringFilter<"Touch"> | string
    amount?: FloatNullableFilter<"Touch"> | number | null
    estimateNumber?: StringNullableFilter<"Touch"> | string | null
    socialPlatform?: StringNullableFilter<"Touch"> | string | null
    createdAt?: DateTimeFilter<"Touch"> | Date | string
    updatedAt?: DateTimeFilter<"Touch"> | Date | string
  }

  export type AccountNoteUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AccountNoteWhereUniqueInput
    update: XOR<AccountNoteUpdateWithoutOrganizationInput, AccountNoteUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AccountNoteCreateWithoutOrganizationInput, AccountNoteUncheckedCreateWithoutOrganizationInput>
  }

  export type AccountNoteUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AccountNoteWhereUniqueInput
    data: XOR<AccountNoteUpdateWithoutOrganizationInput, AccountNoteUncheckedUpdateWithoutOrganizationInput>
  }

  export type AccountNoteUpdateManyWithWhereWithoutOrganizationInput = {
    where: AccountNoteScalarWhereInput
    data: XOR<AccountNoteUpdateManyMutationInput, AccountNoteUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AccountNoteScalarWhereInput = {
    AND?: AccountNoteScalarWhereInput | AccountNoteScalarWhereInput[]
    OR?: AccountNoteScalarWhereInput[]
    NOT?: AccountNoteScalarWhereInput | AccountNoteScalarWhereInput[]
    id?: StringFilter<"AccountNote"> | string
    organizationId?: StringFilter<"AccountNote"> | string
    text?: StringFilter<"AccountNote"> | string
    accountId?: StringFilter<"AccountNote"> | string
    createdAt?: DateTimeFilter<"AccountNote"> | Date | string
  }

  export type ContactNoteUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ContactNoteWhereUniqueInput
    update: XOR<ContactNoteUpdateWithoutOrganizationInput, ContactNoteUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ContactNoteCreateWithoutOrganizationInput, ContactNoteUncheckedCreateWithoutOrganizationInput>
  }

  export type ContactNoteUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ContactNoteWhereUniqueInput
    data: XOR<ContactNoteUpdateWithoutOrganizationInput, ContactNoteUncheckedUpdateWithoutOrganizationInput>
  }

  export type ContactNoteUpdateManyWithWhereWithoutOrganizationInput = {
    where: ContactNoteScalarWhereInput
    data: XOR<ContactNoteUpdateManyMutationInput, ContactNoteUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ContactNoteScalarWhereInput = {
    AND?: ContactNoteScalarWhereInput | ContactNoteScalarWhereInput[]
    OR?: ContactNoteScalarWhereInput[]
    NOT?: ContactNoteScalarWhereInput | ContactNoteScalarWhereInput[]
    id?: StringFilter<"ContactNote"> | string
    organizationId?: StringFilter<"ContactNote"> | string
    text?: StringFilter<"ContactNote"> | string
    contactId?: StringFilter<"ContactNote"> | string
    createdAt?: DateTimeFilter<"ContactNote"> | Date | string
  }

  export type AccountSocialLinkUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AccountSocialLinkWhereUniqueInput
    update: XOR<AccountSocialLinkUpdateWithoutOrganizationInput, AccountSocialLinkUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AccountSocialLinkCreateWithoutOrganizationInput, AccountSocialLinkUncheckedCreateWithoutOrganizationInput>
  }

  export type AccountSocialLinkUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AccountSocialLinkWhereUniqueInput
    data: XOR<AccountSocialLinkUpdateWithoutOrganizationInput, AccountSocialLinkUncheckedUpdateWithoutOrganizationInput>
  }

  export type AccountSocialLinkUpdateManyWithWhereWithoutOrganizationInput = {
    where: AccountSocialLinkScalarWhereInput
    data: XOR<AccountSocialLinkUpdateManyMutationInput, AccountSocialLinkUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AccountSocialLinkScalarWhereInput = {
    AND?: AccountSocialLinkScalarWhereInput | AccountSocialLinkScalarWhereInput[]
    OR?: AccountSocialLinkScalarWhereInput[]
    NOT?: AccountSocialLinkScalarWhereInput | AccountSocialLinkScalarWhereInput[]
    id?: StringFilter<"AccountSocialLink"> | string
    organizationId?: StringFilter<"AccountSocialLink"> | string
    accountId?: StringFilter<"AccountSocialLink"> | string
    platform?: StringFilter<"AccountSocialLink"> | string
    handle?: StringFilter<"AccountSocialLink"> | string
  }

  export type OrganizationCreateWithoutIndustriesInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    touchTypes?: TouchTypeCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformCreateNestedManyWithoutOrganizationInput
    accounts?: AccountCreateNestedManyWithoutOrganizationInput
    contacts?: ContactCreateNestedManyWithoutOrganizationInput
    touches?: TouchCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutIndustriesInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    touchTypes?: TouchTypeUncheckedCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformUncheckedCreateNestedManyWithoutOrganizationInput
    accounts?: AccountUncheckedCreateNestedManyWithoutOrganizationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutOrganizationInput
    touches?: TouchUncheckedCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteUncheckedCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteUncheckedCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutIndustriesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutIndustriesInput, OrganizationUncheckedCreateWithoutIndustriesInput>
  }

  export type AccountCreateWithoutIndustryInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAccountsInput
    contacts?: ContactCreateNestedManyWithoutAccountInput
    notes?: AccountNoteCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkCreateNestedManyWithoutAccountInput
    touches?: TouchCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutIndustryInput = {
    id?: string
    organizationId: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    notes?: AccountNoteUncheckedCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkUncheckedCreateNestedManyWithoutAccountInput
    touches?: TouchUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutIndustryInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutIndustryInput, AccountUncheckedCreateWithoutIndustryInput>
  }

  export type AccountCreateManyIndustryInputEnvelope = {
    data: AccountCreateManyIndustryInput | AccountCreateManyIndustryInput[]
  }

  export type OrganizationUpsertWithoutIndustriesInput = {
    update: XOR<OrganizationUpdateWithoutIndustriesInput, OrganizationUncheckedUpdateWithoutIndustriesInput>
    create: XOR<OrganizationCreateWithoutIndustriesInput, OrganizationUncheckedCreateWithoutIndustriesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutIndustriesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutIndustriesInput, OrganizationUncheckedUpdateWithoutIndustriesInput>
  }

  export type OrganizationUpdateWithoutIndustriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    touchTypes?: TouchTypeUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutIndustriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    touchTypes?: TouchTypeUncheckedUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUncheckedUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUncheckedUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AccountUpsertWithWhereUniqueWithoutIndustryInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutIndustryInput, AccountUncheckedUpdateWithoutIndustryInput>
    create: XOR<AccountCreateWithoutIndustryInput, AccountUncheckedCreateWithoutIndustryInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutIndustryInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutIndustryInput, AccountUncheckedUpdateWithoutIndustryInput>
  }

  export type AccountUpdateManyWithWhereWithoutIndustryInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutIndustryInput>
  }

  export type OrganizationCreateWithoutTouchTypesInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformCreateNestedManyWithoutOrganizationInput
    accounts?: AccountCreateNestedManyWithoutOrganizationInput
    contacts?: ContactCreateNestedManyWithoutOrganizationInput
    touches?: TouchCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutTouchTypesInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryUncheckedCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformUncheckedCreateNestedManyWithoutOrganizationInput
    accounts?: AccountUncheckedCreateNestedManyWithoutOrganizationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutOrganizationInput
    touches?: TouchUncheckedCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteUncheckedCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteUncheckedCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutTouchTypesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutTouchTypesInput, OrganizationUncheckedCreateWithoutTouchTypesInput>
  }

  export type OrganizationUpsertWithoutTouchTypesInput = {
    update: XOR<OrganizationUpdateWithoutTouchTypesInput, OrganizationUncheckedUpdateWithoutTouchTypesInput>
    create: XOR<OrganizationCreateWithoutTouchTypesInput, OrganizationUncheckedCreateWithoutTouchTypesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutTouchTypesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutTouchTypesInput, OrganizationUncheckedUpdateWithoutTouchTypesInput>
  }

  export type OrganizationUpdateWithoutTouchTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutTouchTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUncheckedUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUncheckedUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUncheckedUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutSocialPlatformsInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeCreateNestedManyWithoutOrganizationInput
    accounts?: AccountCreateNestedManyWithoutOrganizationInput
    contacts?: ContactCreateNestedManyWithoutOrganizationInput
    touches?: TouchCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSocialPlatformsInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryUncheckedCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeUncheckedCreateNestedManyWithoutOrganizationInput
    accounts?: AccountUncheckedCreateNestedManyWithoutOrganizationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutOrganizationInput
    touches?: TouchUncheckedCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteUncheckedCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteUncheckedCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSocialPlatformsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSocialPlatformsInput, OrganizationUncheckedCreateWithoutSocialPlatformsInput>
  }

  export type OrganizationUpsertWithoutSocialPlatformsInput = {
    update: XOR<OrganizationUpdateWithoutSocialPlatformsInput, OrganizationUncheckedUpdateWithoutSocialPlatformsInput>
    create: XOR<OrganizationCreateWithoutSocialPlatformsInput, OrganizationUncheckedCreateWithoutSocialPlatformsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSocialPlatformsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSocialPlatformsInput, OrganizationUncheckedUpdateWithoutSocialPlatformsInput>
  }

  export type OrganizationUpdateWithoutSocialPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSocialPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUncheckedUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUncheckedUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUncheckedUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutAccountsInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformCreateNestedManyWithoutOrganizationInput
    contacts?: ContactCreateNestedManyWithoutOrganizationInput
    touches?: TouchCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryUncheckedCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeUncheckedCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformUncheckedCreateNestedManyWithoutOrganizationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutOrganizationInput
    touches?: TouchUncheckedCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteUncheckedCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteUncheckedCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAccountsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAccountsInput, OrganizationUncheckedCreateWithoutAccountsInput>
  }

  export type IndustryCreateWithoutAccountsInput = {
    id?: string
    name: string
    isSystem?: boolean
    organization: OrganizationCreateNestedOneWithoutIndustriesInput
  }

  export type IndustryUncheckedCreateWithoutAccountsInput = {
    id?: string
    organizationId: string
    name: string
    isSystem?: boolean
  }

  export type IndustryCreateOrConnectWithoutAccountsInput = {
    where: IndustryWhereUniqueInput
    create: XOR<IndustryCreateWithoutAccountsInput, IndustryUncheckedCreateWithoutAccountsInput>
  }

  export type ContactCreateWithoutAccountInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContactsInput
    touches?: TouchCreateNestedManyWithoutContactInput
    notes?: ContactNoteCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutAccountInput = {
    id?: string
    organizationId: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    touches?: TouchUncheckedCreateNestedManyWithoutContactInput
    notes?: ContactNoteUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutAccountInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutAccountInput, ContactUncheckedCreateWithoutAccountInput>
  }

  export type ContactCreateManyAccountInputEnvelope = {
    data: ContactCreateManyAccountInput | ContactCreateManyAccountInput[]
  }

  export type AccountNoteCreateWithoutAccountInput = {
    id?: string
    text: string
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAccountNotesInput
  }

  export type AccountNoteUncheckedCreateWithoutAccountInput = {
    id?: string
    organizationId: string
    text: string
    createdAt?: Date | string
  }

  export type AccountNoteCreateOrConnectWithoutAccountInput = {
    where: AccountNoteWhereUniqueInput
    create: XOR<AccountNoteCreateWithoutAccountInput, AccountNoteUncheckedCreateWithoutAccountInput>
  }

  export type AccountNoteCreateManyAccountInputEnvelope = {
    data: AccountNoteCreateManyAccountInput | AccountNoteCreateManyAccountInput[]
  }

  export type AccountSocialLinkCreateWithoutAccountInput = {
    id?: string
    platform: string
    handle: string
    organization: OrganizationCreateNestedOneWithoutAccountSocialsInput
  }

  export type AccountSocialLinkUncheckedCreateWithoutAccountInput = {
    id?: string
    organizationId: string
    platform: string
    handle: string
  }

  export type AccountSocialLinkCreateOrConnectWithoutAccountInput = {
    where: AccountSocialLinkWhereUniqueInput
    create: XOR<AccountSocialLinkCreateWithoutAccountInput, AccountSocialLinkUncheckedCreateWithoutAccountInput>
  }

  export type AccountSocialLinkCreateManyAccountInputEnvelope = {
    data: AccountSocialLinkCreateManyAccountInput | AccountSocialLinkCreateManyAccountInput[]
  }

  export type TouchCreateWithoutAccountInput = {
    id?: string
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutTouchesInput
    contact?: ContactCreateNestedOneWithoutTouchesInput
  }

  export type TouchUncheckedCreateWithoutAccountInput = {
    id?: string
    organizationId: string
    contactId?: string | null
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TouchCreateOrConnectWithoutAccountInput = {
    where: TouchWhereUniqueInput
    create: XOR<TouchCreateWithoutAccountInput, TouchUncheckedCreateWithoutAccountInput>
  }

  export type TouchCreateManyAccountInputEnvelope = {
    data: TouchCreateManyAccountInput | TouchCreateManyAccountInput[]
  }

  export type OrganizationUpsertWithoutAccountsInput = {
    update: XOR<OrganizationUpdateWithoutAccountsInput, OrganizationUncheckedUpdateWithoutAccountsInput>
    create: XOR<OrganizationCreateWithoutAccountsInput, OrganizationUncheckedCreateWithoutAccountsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAccountsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAccountsInput, OrganizationUncheckedUpdateWithoutAccountsInput>
  }

  export type OrganizationUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUncheckedUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUncheckedUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUncheckedUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUncheckedUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type IndustryUpsertWithoutAccountsInput = {
    update: XOR<IndustryUpdateWithoutAccountsInput, IndustryUncheckedUpdateWithoutAccountsInput>
    create: XOR<IndustryCreateWithoutAccountsInput, IndustryUncheckedCreateWithoutAccountsInput>
    where?: IndustryWhereInput
  }

  export type IndustryUpdateToOneWithWhereWithoutAccountsInput = {
    where?: IndustryWhereInput
    data: XOR<IndustryUpdateWithoutAccountsInput, IndustryUncheckedUpdateWithoutAccountsInput>
  }

  export type IndustryUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutIndustriesNestedInput
  }

  export type IndustryUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactUpsertWithWhereUniqueWithoutAccountInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutAccountInput, ContactUncheckedUpdateWithoutAccountInput>
    create: XOR<ContactCreateWithoutAccountInput, ContactUncheckedCreateWithoutAccountInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutAccountInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutAccountInput, ContactUncheckedUpdateWithoutAccountInput>
  }

  export type ContactUpdateManyWithWhereWithoutAccountInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutAccountInput>
  }

  export type AccountNoteUpsertWithWhereUniqueWithoutAccountInput = {
    where: AccountNoteWhereUniqueInput
    update: XOR<AccountNoteUpdateWithoutAccountInput, AccountNoteUncheckedUpdateWithoutAccountInput>
    create: XOR<AccountNoteCreateWithoutAccountInput, AccountNoteUncheckedCreateWithoutAccountInput>
  }

  export type AccountNoteUpdateWithWhereUniqueWithoutAccountInput = {
    where: AccountNoteWhereUniqueInput
    data: XOR<AccountNoteUpdateWithoutAccountInput, AccountNoteUncheckedUpdateWithoutAccountInput>
  }

  export type AccountNoteUpdateManyWithWhereWithoutAccountInput = {
    where: AccountNoteScalarWhereInput
    data: XOR<AccountNoteUpdateManyMutationInput, AccountNoteUncheckedUpdateManyWithoutAccountInput>
  }

  export type AccountSocialLinkUpsertWithWhereUniqueWithoutAccountInput = {
    where: AccountSocialLinkWhereUniqueInput
    update: XOR<AccountSocialLinkUpdateWithoutAccountInput, AccountSocialLinkUncheckedUpdateWithoutAccountInput>
    create: XOR<AccountSocialLinkCreateWithoutAccountInput, AccountSocialLinkUncheckedCreateWithoutAccountInput>
  }

  export type AccountSocialLinkUpdateWithWhereUniqueWithoutAccountInput = {
    where: AccountSocialLinkWhereUniqueInput
    data: XOR<AccountSocialLinkUpdateWithoutAccountInput, AccountSocialLinkUncheckedUpdateWithoutAccountInput>
  }

  export type AccountSocialLinkUpdateManyWithWhereWithoutAccountInput = {
    where: AccountSocialLinkScalarWhereInput
    data: XOR<AccountSocialLinkUpdateManyMutationInput, AccountSocialLinkUncheckedUpdateManyWithoutAccountInput>
  }

  export type TouchUpsertWithWhereUniqueWithoutAccountInput = {
    where: TouchWhereUniqueInput
    update: XOR<TouchUpdateWithoutAccountInput, TouchUncheckedUpdateWithoutAccountInput>
    create: XOR<TouchCreateWithoutAccountInput, TouchUncheckedCreateWithoutAccountInput>
  }

  export type TouchUpdateWithWhereUniqueWithoutAccountInput = {
    where: TouchWhereUniqueInput
    data: XOR<TouchUpdateWithoutAccountInput, TouchUncheckedUpdateWithoutAccountInput>
  }

  export type TouchUpdateManyWithWhereWithoutAccountInput = {
    where: TouchScalarWhereInput
    data: XOR<TouchUpdateManyMutationInput, TouchUncheckedUpdateManyWithoutAccountInput>
  }

  export type OrganizationCreateWithoutAccountSocialsInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformCreateNestedManyWithoutOrganizationInput
    accounts?: AccountCreateNestedManyWithoutOrganizationInput
    contacts?: ContactCreateNestedManyWithoutOrganizationInput
    touches?: TouchCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAccountSocialsInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryUncheckedCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeUncheckedCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformUncheckedCreateNestedManyWithoutOrganizationInput
    accounts?: AccountUncheckedCreateNestedManyWithoutOrganizationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutOrganizationInput
    touches?: TouchUncheckedCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteUncheckedCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAccountSocialsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAccountSocialsInput, OrganizationUncheckedCreateWithoutAccountSocialsInput>
  }

  export type AccountCreateWithoutSocialsInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAccountsInput
    industry: IndustryCreateNestedOneWithoutAccountsInput
    contacts?: ContactCreateNestedManyWithoutAccountInput
    notes?: AccountNoteCreateNestedManyWithoutAccountInput
    touches?: TouchCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSocialsInput = {
    id?: string
    organizationId: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    notes?: AccountNoteUncheckedCreateNestedManyWithoutAccountInput
    touches?: TouchUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSocialsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSocialsInput, AccountUncheckedCreateWithoutSocialsInput>
  }

  export type OrganizationUpsertWithoutAccountSocialsInput = {
    update: XOR<OrganizationUpdateWithoutAccountSocialsInput, OrganizationUncheckedUpdateWithoutAccountSocialsInput>
    create: XOR<OrganizationCreateWithoutAccountSocialsInput, OrganizationUncheckedCreateWithoutAccountSocialsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAccountSocialsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAccountSocialsInput, OrganizationUncheckedUpdateWithoutAccountSocialsInput>
  }

  export type OrganizationUpdateWithoutAccountSocialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAccountSocialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUncheckedUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUncheckedUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUncheckedUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUncheckedUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AccountUpsertWithoutSocialsInput = {
    update: XOR<AccountUpdateWithoutSocialsInput, AccountUncheckedUpdateWithoutSocialsInput>
    create: XOR<AccountCreateWithoutSocialsInput, AccountUncheckedCreateWithoutSocialsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutSocialsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutSocialsInput, AccountUncheckedUpdateWithoutSocialsInput>
  }

  export type AccountUpdateWithoutSocialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAccountsNestedInput
    industry?: IndustryUpdateOneRequiredWithoutAccountsNestedInput
    contacts?: ContactUpdateManyWithoutAccountNestedInput
    notes?: AccountNoteUpdateManyWithoutAccountNestedInput
    touches?: TouchUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSocialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutAccountNestedInput
    notes?: AccountNoteUncheckedUpdateManyWithoutAccountNestedInput
    touches?: TouchUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type OrganizationCreateWithoutAccountNotesInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformCreateNestedManyWithoutOrganizationInput
    accounts?: AccountCreateNestedManyWithoutOrganizationInput
    contacts?: ContactCreateNestedManyWithoutOrganizationInput
    touches?: TouchCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAccountNotesInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryUncheckedCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeUncheckedCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformUncheckedCreateNestedManyWithoutOrganizationInput
    accounts?: AccountUncheckedCreateNestedManyWithoutOrganizationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutOrganizationInput
    touches?: TouchUncheckedCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteUncheckedCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAccountNotesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAccountNotesInput, OrganizationUncheckedCreateWithoutAccountNotesInput>
  }

  export type AccountCreateWithoutNotesInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAccountsInput
    industry: IndustryCreateNestedOneWithoutAccountsInput
    contacts?: ContactCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkCreateNestedManyWithoutAccountInput
    touches?: TouchCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutNotesInput = {
    id?: string
    organizationId: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkUncheckedCreateNestedManyWithoutAccountInput
    touches?: TouchUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutNotesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutNotesInput, AccountUncheckedCreateWithoutNotesInput>
  }

  export type OrganizationUpsertWithoutAccountNotesInput = {
    update: XOR<OrganizationUpdateWithoutAccountNotesInput, OrganizationUncheckedUpdateWithoutAccountNotesInput>
    create: XOR<OrganizationCreateWithoutAccountNotesInput, OrganizationUncheckedCreateWithoutAccountNotesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAccountNotesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAccountNotesInput, OrganizationUncheckedUpdateWithoutAccountNotesInput>
  }

  export type OrganizationUpdateWithoutAccountNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAccountNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUncheckedUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUncheckedUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUncheckedUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUncheckedUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AccountUpsertWithoutNotesInput = {
    update: XOR<AccountUpdateWithoutNotesInput, AccountUncheckedUpdateWithoutNotesInput>
    create: XOR<AccountCreateWithoutNotesInput, AccountUncheckedCreateWithoutNotesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutNotesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutNotesInput, AccountUncheckedUpdateWithoutNotesInput>
  }

  export type AccountUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAccountsNestedInput
    industry?: IndustryUpdateOneRequiredWithoutAccountsNestedInput
    contacts?: ContactUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUpdateManyWithoutAccountNestedInput
    touches?: TouchUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUncheckedUpdateManyWithoutAccountNestedInput
    touches?: TouchUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type OrganizationCreateWithoutContactsInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformCreateNestedManyWithoutOrganizationInput
    accounts?: AccountCreateNestedManyWithoutOrganizationInput
    touches?: TouchCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutContactsInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryUncheckedCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeUncheckedCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformUncheckedCreateNestedManyWithoutOrganizationInput
    accounts?: AccountUncheckedCreateNestedManyWithoutOrganizationInput
    touches?: TouchUncheckedCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteUncheckedCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteUncheckedCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutContactsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutContactsInput, OrganizationUncheckedCreateWithoutContactsInput>
  }

  export type AccountCreateWithoutContactsInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAccountsInput
    industry: IndustryCreateNestedOneWithoutAccountsInput
    notes?: AccountNoteCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkCreateNestedManyWithoutAccountInput
    touches?: TouchCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutContactsInput = {
    id?: string
    organizationId: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: AccountNoteUncheckedCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkUncheckedCreateNestedManyWithoutAccountInput
    touches?: TouchUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutContactsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutContactsInput, AccountUncheckedCreateWithoutContactsInput>
  }

  export type TouchCreateWithoutContactInput = {
    id?: string
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutTouchesInput
    account: AccountCreateNestedOneWithoutTouchesInput
  }

  export type TouchUncheckedCreateWithoutContactInput = {
    id?: string
    organizationId: string
    accountId: string
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TouchCreateOrConnectWithoutContactInput = {
    where: TouchWhereUniqueInput
    create: XOR<TouchCreateWithoutContactInput, TouchUncheckedCreateWithoutContactInput>
  }

  export type TouchCreateManyContactInputEnvelope = {
    data: TouchCreateManyContactInput | TouchCreateManyContactInput[]
  }

  export type ContactNoteCreateWithoutContactInput = {
    id?: string
    text: string
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContactNotesInput
  }

  export type ContactNoteUncheckedCreateWithoutContactInput = {
    id?: string
    organizationId: string
    text: string
    createdAt?: Date | string
  }

  export type ContactNoteCreateOrConnectWithoutContactInput = {
    where: ContactNoteWhereUniqueInput
    create: XOR<ContactNoteCreateWithoutContactInput, ContactNoteUncheckedCreateWithoutContactInput>
  }

  export type ContactNoteCreateManyContactInputEnvelope = {
    data: ContactNoteCreateManyContactInput | ContactNoteCreateManyContactInput[]
  }

  export type OrganizationUpsertWithoutContactsInput = {
    update: XOR<OrganizationUpdateWithoutContactsInput, OrganizationUncheckedUpdateWithoutContactsInput>
    create: XOR<OrganizationCreateWithoutContactsInput, OrganizationUncheckedCreateWithoutContactsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutContactsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutContactsInput, OrganizationUncheckedUpdateWithoutContactsInput>
  }

  export type OrganizationUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUncheckedUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUncheckedUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUncheckedUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUncheckedUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AccountUpsertWithoutContactsInput = {
    update: XOR<AccountUpdateWithoutContactsInput, AccountUncheckedUpdateWithoutContactsInput>
    create: XOR<AccountCreateWithoutContactsInput, AccountUncheckedCreateWithoutContactsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutContactsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutContactsInput, AccountUncheckedUpdateWithoutContactsInput>
  }

  export type AccountUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAccountsNestedInput
    industry?: IndustryUpdateOneRequiredWithoutAccountsNestedInput
    notes?: AccountNoteUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUpdateManyWithoutAccountNestedInput
    touches?: TouchUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: AccountNoteUncheckedUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUncheckedUpdateManyWithoutAccountNestedInput
    touches?: TouchUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type TouchUpsertWithWhereUniqueWithoutContactInput = {
    where: TouchWhereUniqueInput
    update: XOR<TouchUpdateWithoutContactInput, TouchUncheckedUpdateWithoutContactInput>
    create: XOR<TouchCreateWithoutContactInput, TouchUncheckedCreateWithoutContactInput>
  }

  export type TouchUpdateWithWhereUniqueWithoutContactInput = {
    where: TouchWhereUniqueInput
    data: XOR<TouchUpdateWithoutContactInput, TouchUncheckedUpdateWithoutContactInput>
  }

  export type TouchUpdateManyWithWhereWithoutContactInput = {
    where: TouchScalarWhereInput
    data: XOR<TouchUpdateManyMutationInput, TouchUncheckedUpdateManyWithoutContactInput>
  }

  export type ContactNoteUpsertWithWhereUniqueWithoutContactInput = {
    where: ContactNoteWhereUniqueInput
    update: XOR<ContactNoteUpdateWithoutContactInput, ContactNoteUncheckedUpdateWithoutContactInput>
    create: XOR<ContactNoteCreateWithoutContactInput, ContactNoteUncheckedCreateWithoutContactInput>
  }

  export type ContactNoteUpdateWithWhereUniqueWithoutContactInput = {
    where: ContactNoteWhereUniqueInput
    data: XOR<ContactNoteUpdateWithoutContactInput, ContactNoteUncheckedUpdateWithoutContactInput>
  }

  export type ContactNoteUpdateManyWithWhereWithoutContactInput = {
    where: ContactNoteScalarWhereInput
    data: XOR<ContactNoteUpdateManyMutationInput, ContactNoteUncheckedUpdateManyWithoutContactInput>
  }

  export type OrganizationCreateWithoutContactNotesInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformCreateNestedManyWithoutOrganizationInput
    accounts?: AccountCreateNestedManyWithoutOrganizationInput
    contacts?: ContactCreateNestedManyWithoutOrganizationInput
    touches?: TouchCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutContactNotesInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryUncheckedCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeUncheckedCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformUncheckedCreateNestedManyWithoutOrganizationInput
    accounts?: AccountUncheckedCreateNestedManyWithoutOrganizationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutOrganizationInput
    touches?: TouchUncheckedCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteUncheckedCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutContactNotesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutContactNotesInput, OrganizationUncheckedCreateWithoutContactNotesInput>
  }

  export type ContactCreateWithoutNotesInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContactsInput
    account: AccountCreateNestedOneWithoutContactsInput
    touches?: TouchCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutNotesInput = {
    id?: string
    organizationId: string
    accountId: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    touches?: TouchUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutNotesInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
  }

  export type OrganizationUpsertWithoutContactNotesInput = {
    update: XOR<OrganizationUpdateWithoutContactNotesInput, OrganizationUncheckedUpdateWithoutContactNotesInput>
    create: XOR<OrganizationCreateWithoutContactNotesInput, OrganizationUncheckedCreateWithoutContactNotesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutContactNotesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutContactNotesInput, OrganizationUncheckedUpdateWithoutContactNotesInput>
  }

  export type OrganizationUpdateWithoutContactNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutContactNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUncheckedUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUncheckedUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUncheckedUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutOrganizationNestedInput
    touches?: TouchUncheckedUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ContactUpsertWithoutNotesInput = {
    update: XOR<ContactUpdateWithoutNotesInput, ContactUncheckedUpdateWithoutNotesInput>
    create: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutNotesInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutNotesInput, ContactUncheckedUpdateWithoutNotesInput>
  }

  export type ContactUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContactsNestedInput
    account?: AccountUpdateOneRequiredWithoutContactsNestedInput
    touches?: TouchUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    touches?: TouchUncheckedUpdateManyWithoutContactNestedInput
  }

  export type OrganizationCreateWithoutTouchesInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformCreateNestedManyWithoutOrganizationInput
    accounts?: AccountCreateNestedManyWithoutOrganizationInput
    contacts?: ContactCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutTouchesInput = {
    id?: string
    name: string
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industries?: IndustryUncheckedCreateNestedManyWithoutOrganizationInput
    touchTypes?: TouchTypeUncheckedCreateNestedManyWithoutOrganizationInput
    socialPlatforms?: SocialPlatformUncheckedCreateNestedManyWithoutOrganizationInput
    accounts?: AccountUncheckedCreateNestedManyWithoutOrganizationInput
    contacts?: ContactUncheckedCreateNestedManyWithoutOrganizationInput
    accountNotes?: AccountNoteUncheckedCreateNestedManyWithoutOrganizationInput
    contactNotes?: ContactNoteUncheckedCreateNestedManyWithoutOrganizationInput
    accountSocials?: AccountSocialLinkUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutTouchesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutTouchesInput, OrganizationUncheckedCreateWithoutTouchesInput>
  }

  export type AccountCreateWithoutTouchesInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAccountsInput
    industry: IndustryCreateNestedOneWithoutAccountsInput
    contacts?: ContactCreateNestedManyWithoutAccountInput
    notes?: AccountNoteCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutTouchesInput = {
    id?: string
    organizationId: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutAccountInput
    notes?: AccountNoteUncheckedCreateNestedManyWithoutAccountInput
    socials?: AccountSocialLinkUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutTouchesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTouchesInput, AccountUncheckedCreateWithoutTouchesInput>
  }

  export type ContactCreateWithoutTouchesInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutContactsInput
    account: AccountCreateNestedOneWithoutContactsInput
    notes?: ContactNoteCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutTouchesInput = {
    id?: string
    organizationId: string
    accountId: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: ContactNoteUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutTouchesInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutTouchesInput, ContactUncheckedCreateWithoutTouchesInput>
  }

  export type OrganizationUpsertWithoutTouchesInput = {
    update: XOR<OrganizationUpdateWithoutTouchesInput, OrganizationUncheckedUpdateWithoutTouchesInput>
    create: XOR<OrganizationCreateWithoutTouchesInput, OrganizationUncheckedCreateWithoutTouchesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutTouchesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutTouchesInput, OrganizationUncheckedUpdateWithoutTouchesInput>
  }

  export type OrganizationUpdateWithoutTouchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutTouchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industries?: IndustryUncheckedUpdateManyWithoutOrganizationNestedInput
    touchTypes?: TouchTypeUncheckedUpdateManyWithoutOrganizationNestedInput
    socialPlatforms?: SocialPlatformUncheckedUpdateManyWithoutOrganizationNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutOrganizationNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutOrganizationNestedInput
    accountNotes?: AccountNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    contactNotes?: ContactNoteUncheckedUpdateManyWithoutOrganizationNestedInput
    accountSocials?: AccountSocialLinkUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AccountUpsertWithoutTouchesInput = {
    update: XOR<AccountUpdateWithoutTouchesInput, AccountUncheckedUpdateWithoutTouchesInput>
    create: XOR<AccountCreateWithoutTouchesInput, AccountUncheckedCreateWithoutTouchesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTouchesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTouchesInput, AccountUncheckedUpdateWithoutTouchesInput>
  }

  export type AccountUpdateWithoutTouchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAccountsNestedInput
    industry?: IndustryUpdateOneRequiredWithoutAccountsNestedInput
    contacts?: ContactUpdateManyWithoutAccountNestedInput
    notes?: AccountNoteUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTouchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutAccountNestedInput
    notes?: AccountNoteUncheckedUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ContactUpsertWithoutTouchesInput = {
    update: XOR<ContactUpdateWithoutTouchesInput, ContactUncheckedUpdateWithoutTouchesInput>
    create: XOR<ContactCreateWithoutTouchesInput, ContactUncheckedCreateWithoutTouchesInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutTouchesInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutTouchesInput, ContactUncheckedUpdateWithoutTouchesInput>
  }

  export type ContactUpdateWithoutTouchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContactsNestedInput
    account?: AccountUpdateOneRequiredWithoutContactsNestedInput
    notes?: ContactNoteUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutTouchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: ContactNoteUncheckedUpdateManyWithoutContactNestedInput
  }

  export type IndustryCreateManyOrganizationInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type TouchTypeCreateManyOrganizationInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type SocialPlatformCreateManyOrganizationInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type AccountCreateManyOrganizationInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactCreateManyOrganizationInput = {
    id?: string
    accountId: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TouchCreateManyOrganizationInput = {
    id?: string
    accountId: string
    contactId?: string | null
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountNoteCreateManyOrganizationInput = {
    id?: string
    text: string
    accountId: string
    createdAt?: Date | string
  }

  export type ContactNoteCreateManyOrganizationInput = {
    id?: string
    text: string
    contactId: string
    createdAt?: Date | string
  }

  export type AccountSocialLinkCreateManyOrganizationInput = {
    id?: string
    accountId: string
    platform: string
    handle: string
  }

  export type IndustryUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TouchTypeUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TouchTypeUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TouchTypeUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SocialPlatformUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SocialPlatformUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SocialPlatformUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutAccountsNestedInput
    contacts?: ContactUpdateManyWithoutAccountNestedInput
    notes?: AccountNoteUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUpdateManyWithoutAccountNestedInput
    touches?: TouchUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutAccountNestedInput
    notes?: AccountNoteUncheckedUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUncheckedUpdateManyWithoutAccountNestedInput
    touches?: TouchUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutContactsNestedInput
    touches?: TouchUpdateManyWithoutContactNestedInput
    notes?: ContactNoteUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    touches?: TouchUncheckedUpdateManyWithoutContactNestedInput
    notes?: ContactNoteUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouchUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutTouchesNestedInput
    contact?: ContactUpdateOneWithoutTouchesNestedInput
  }

  export type TouchUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouchUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountNoteUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutNotesNestedInput
  }

  export type AccountNoteUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountNoteUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactNoteUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneRequiredWithoutNotesNestedInput
  }

  export type ContactNoteUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactNoteUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSocialLinkUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutSocialsNestedInput
  }

  export type AccountSocialLinkUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type AccountSocialLinkUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyIndustryInput = {
    id?: string
    organizationId: string
    name: string
    address?: string | null
    phone?: string | null
    website?: string | null
    status?: string
    isVip?: boolean
    source?: string | null
    ownerUserId?: string | null
    createdByUserId?: string | null
    nextTouchAt?: Date | string | null
    nextTouchType?: string | null
    nextTouchNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAccountsNestedInput
    contacts?: ContactUpdateManyWithoutAccountNestedInput
    notes?: AccountNoteUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUpdateManyWithoutAccountNestedInput
    touches?: TouchUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutAccountNestedInput
    notes?: AccountNoteUncheckedUpdateManyWithoutAccountNestedInput
    socials?: AccountSocialLinkUncheckedUpdateManyWithoutAccountNestedInput
    touches?: TouchUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextTouchType?: NullableStringFieldUpdateOperationsInput | string | null
    nextTouchNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyAccountInput = {
    id?: string
    organizationId: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    officePhone?: string | null
    isVip?: boolean
    source?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountNoteCreateManyAccountInput = {
    id?: string
    organizationId: string
    text: string
    createdAt?: Date | string
  }

  export type AccountSocialLinkCreateManyAccountInput = {
    id?: string
    organizationId: string
    platform: string
    handle: string
  }

  export type TouchCreateManyAccountInput = {
    id?: string
    organizationId: string
    contactId?: string | null
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContactsNestedInput
    touches?: TouchUpdateManyWithoutContactNestedInput
    notes?: ContactNoteUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    touches?: TouchUncheckedUpdateManyWithoutContactNestedInput
    notes?: ContactNoteUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    officePhone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountNoteUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAccountNotesNestedInput
  }

  export type AccountNoteUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountNoteUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSocialLinkUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationUpdateOneRequiredWithoutAccountSocialsNestedInput
  }

  export type AccountSocialLinkUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type AccountSocialLinkUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
  }

  export type TouchUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutTouchesNestedInput
    contact?: ContactUpdateOneWithoutTouchesNestedInput
  }

  export type TouchUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouchUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouchCreateManyContactInput = {
    id?: string
    organizationId: string
    accountId: string
    createdByUserId?: string | null
    date?: Date | string
    type: string
    outcome?: string | null
    source?: string | null
    isAutomated?: boolean
    notes?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactNoteCreateManyContactInput = {
    id?: string
    organizationId: string
    text: string
    createdAt?: Date | string
  }

  export type TouchUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutTouchesNestedInput
    account?: AccountUpdateOneRequiredWithoutTouchesNestedInput
  }

  export type TouchUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouchUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomated?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    estimateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    socialPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactNoteUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutContactNotesNestedInput
  }

  export type ContactNoteUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactNoteUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}