
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
 * Model Industry
 * Core industry taxonomy used when creating companies.
 * Seeded values: Commercial Real Estate, Apartments/Property Management,
 * Construction, Healthcare, Education, Retail, Manufacturing, Religious, Other.
 */
export type Industry = $Result.DefaultSelection<Prisma.$IndustryPayload>
/**
 * Model TouchType
 * Outreach channel labels used by Touch.type.
 * Seeded defaults: Phone, Email, Networking, Canvassing, Cold Call, Face to Face,
 * LinkedIn, Retreva, Text, Voicemail, Video Message, Post Card, Social Media,
 * Estimate, Invoice. Additional types can be added in Settings.
 */
export type TouchType = $Result.DefaultSelection<Prisma.$TouchTypePayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model CompanyNote
 * 
 */
export type CompanyNote = $Result.DefaultSelection<Prisma.$CompanyNotePayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model LeadNote
 * 
 */
export type LeadNote = $Result.DefaultSelection<Prisma.$LeadNotePayload>
/**
 * Model Touch
 * 
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
 * // Fetch zero or more Industries
 * const industries = await prisma.industry.findMany()
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
   * // Fetch zero or more Industries
   * const industries = await prisma.industry.findMany()
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
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyNote`: Exposes CRUD operations for the **CompanyNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyNotes
    * const companyNotes = await prisma.companyNote.findMany()
    * ```
    */
  get companyNote(): Prisma.CompanyNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadNote`: Exposes CRUD operations for the **LeadNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadNotes
    * const leadNotes = await prisma.leadNote.findMany()
    * ```
    */
  get leadNote(): Prisma.LeadNoteDelegate<ExtArgs, ClientOptions>;

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
    Industry: 'Industry',
    TouchType: 'TouchType',
    Company: 'Company',
    CompanyNote: 'CompanyNote',
    Lead: 'Lead',
    LeadNote: 'LeadNote',
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
      modelProps: "industry" | "touchType" | "company" | "companyNote" | "lead" | "leadNote" | "touch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      CompanyNote: {
        payload: Prisma.$CompanyNotePayload<ExtArgs>
        fields: Prisma.CompanyNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload>
          }
          findFirst: {
            args: Prisma.CompanyNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload>
          }
          findMany: {
            args: Prisma.CompanyNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload>[]
          }
          create: {
            args: Prisma.CompanyNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload>
          }
          createMany: {
            args: Prisma.CompanyNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload>[]
          }
          delete: {
            args: Prisma.CompanyNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload>
          }
          update: {
            args: Prisma.CompanyNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload>
          }
          deleteMany: {
            args: Prisma.CompanyNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload>[]
          }
          upsert: {
            args: Prisma.CompanyNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyNotePayload>
          }
          aggregate: {
            args: Prisma.CompanyNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyNote>
          }
          groupBy: {
            args: Prisma.CompanyNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyNoteCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyNoteCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      LeadNote: {
        payload: Prisma.$LeadNotePayload<ExtArgs>
        fields: Prisma.LeadNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          findFirst: {
            args: Prisma.LeadNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          findMany: {
            args: Prisma.LeadNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          create: {
            args: Prisma.LeadNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          createMany: {
            args: Prisma.LeadNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          delete: {
            args: Prisma.LeadNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          update: {
            args: Prisma.LeadNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          deleteMany: {
            args: Prisma.LeadNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          upsert: {
            args: Prisma.LeadNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          aggregate: {
            args: Prisma.LeadNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadNote>
          }
          groupBy: {
            args: Prisma.LeadNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadNoteCountArgs<ExtArgs>
            result: $Utils.Optional<LeadNoteCountAggregateOutputType> | number
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
    industry?: IndustryOmit
    touchType?: TouchTypeOmit
    company?: CompanyOmit
    companyNote?: CompanyNoteOmit
    lead?: LeadOmit
    leadNote?: LeadNoteOmit
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
   * Count Type IndustryCountOutputType
   */

  export type IndustryCountOutputType = {
    companies: number
  }

  export type IndustryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | IndustryCountOutputTypeCountCompaniesArgs
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
  export type IndustryCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    leads: number
    notes: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | CompanyCountOutputTypeCountLeadsArgs
    notes?: boolean | CompanyCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyNoteWhereInput
  }


  /**
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    touches: number
    notes: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    touches?: boolean | LeadCountOutputTypeCountTouchesArgs
    notes?: boolean | LeadCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountTouchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TouchWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadNoteWhereInput
  }


  /**
   * Models
   */

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
    name: string | null
    isSystem: boolean | null
  }

  export type IndustryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isSystem: boolean | null
  }

  export type IndustryCountAggregateOutputType = {
    id: number
    name: number
    isSystem: number
    _all: number
  }


  export type IndustryMinAggregateInputType = {
    id?: true
    name?: true
    isSystem?: true
  }

  export type IndustryMaxAggregateInputType = {
    id?: true
    name?: true
    isSystem?: true
  }

  export type IndustryCountAggregateInputType = {
    id?: true
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
    name?: boolean
    isSystem?: boolean
    companies?: boolean | Industry$companiesArgs<ExtArgs>
    _count?: boolean | IndustryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isSystem?: boolean
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isSystem?: boolean
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectScalar = {
    id?: boolean
    name?: boolean
    isSystem?: boolean
  }

  export type IndustryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isSystem", ExtArgs["result"]["industry"]>
  export type IndustryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | Industry$companiesArgs<ExtArgs>
    _count?: boolean | IndustryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndustryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IndustryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndustryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Industry"
    objects: {
      companies: Prisma.$CompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
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
    companies<T extends Industry$companiesArgs<ExtArgs> = {}>(args?: Subset<T, Industry$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Industry.companies
   */
  export type Industry$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
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
    name: string | null
    isSystem: boolean | null
  }

  export type TouchTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isSystem: boolean | null
  }

  export type TouchTypeCountAggregateOutputType = {
    id: number
    name: number
    isSystem: number
    _all: number
  }


  export type TouchTypeMinAggregateInputType = {
    id?: true
    name?: true
    isSystem?: true
  }

  export type TouchTypeMaxAggregateInputType = {
    id?: true
    name?: true
    isSystem?: true
  }

  export type TouchTypeCountAggregateInputType = {
    id?: true
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
    name?: boolean
    isSystem?: boolean
  }, ExtArgs["result"]["touchType"]>

  export type TouchTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isSystem?: boolean
  }, ExtArgs["result"]["touchType"]>

  export type TouchTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isSystem?: boolean
  }, ExtArgs["result"]["touchType"]>

  export type TouchTypeSelectScalar = {
    id?: boolean
    name?: boolean
    isSystem?: boolean
  }

  export type TouchTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isSystem", ExtArgs["result"]["touchType"]>

  export type $TouchTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TouchType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
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
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    isVip: boolean | null
    industryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    isVip: boolean | null
    industryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    isVip: number
    industryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    isVip?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    isVip?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    isVip?: true
    industryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    address: string | null
    phone: string | null
    isVip: boolean
    industryId: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isVip?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
    leads?: boolean | Company$leadsArgs<ExtArgs>
    notes?: boolean | Company$notesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isVip?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isVip?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    isVip?: boolean
    industryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "isVip" | "industryId" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
    leads?: boolean | Company$leadsArgs<ExtArgs>
    notes?: boolean | Company$notesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industry?: boolean | IndustryDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      industry: Prisma.$IndustryPayload<ExtArgs>
      leads: Prisma.$LeadPayload<ExtArgs>[]
      notes: Prisma.$CompanyNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      phone: string | null
      isVip: boolean
      industryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    industry<T extends IndustryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IndustryDefaultArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leads<T extends Company$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Company$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Company$notesArgs<ExtArgs> = {}>(args?: Subset<T, Company$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly isVip: FieldRef<"Company", 'Boolean'>
    readonly industryId: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.leads
   */
  export type Company$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Company.notes
   */
  export type Company$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
    where?: CompanyNoteWhereInput
    orderBy?: CompanyNoteOrderByWithRelationInput | CompanyNoteOrderByWithRelationInput[]
    cursor?: CompanyNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyNoteScalarFieldEnum | CompanyNoteScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model CompanyNote
   */

  export type AggregateCompanyNote = {
    _count: CompanyNoteCountAggregateOutputType | null
    _min: CompanyNoteMinAggregateOutputType | null
    _max: CompanyNoteMaxAggregateOutputType | null
  }

  export type CompanyNoteMinAggregateOutputType = {
    id: string | null
    text: string | null
    companyId: string | null
    createdAt: Date | null
  }

  export type CompanyNoteMaxAggregateOutputType = {
    id: string | null
    text: string | null
    companyId: string | null
    createdAt: Date | null
  }

  export type CompanyNoteCountAggregateOutputType = {
    id: number
    text: number
    companyId: number
    createdAt: number
    _all: number
  }


  export type CompanyNoteMinAggregateInputType = {
    id?: true
    text?: true
    companyId?: true
    createdAt?: true
  }

  export type CompanyNoteMaxAggregateInputType = {
    id?: true
    text?: true
    companyId?: true
    createdAt?: true
  }

  export type CompanyNoteCountAggregateInputType = {
    id?: true
    text?: true
    companyId?: true
    createdAt?: true
    _all?: true
  }

  export type CompanyNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyNote to aggregate.
     */
    where?: CompanyNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyNotes to fetch.
     */
    orderBy?: CompanyNoteOrderByWithRelationInput | CompanyNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyNotes
    **/
    _count?: true | CompanyNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyNoteMaxAggregateInputType
  }

  export type GetCompanyNoteAggregateType<T extends CompanyNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyNote[P]>
      : GetScalarType<T[P], AggregateCompanyNote[P]>
  }




  export type CompanyNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyNoteWhereInput
    orderBy?: CompanyNoteOrderByWithAggregationInput | CompanyNoteOrderByWithAggregationInput[]
    by: CompanyNoteScalarFieldEnum[] | CompanyNoteScalarFieldEnum
    having?: CompanyNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyNoteCountAggregateInputType | true
    _min?: CompanyNoteMinAggregateInputType
    _max?: CompanyNoteMaxAggregateInputType
  }

  export type CompanyNoteGroupByOutputType = {
    id: string
    text: string
    companyId: string
    createdAt: Date
    _count: CompanyNoteCountAggregateOutputType | null
    _min: CompanyNoteMinAggregateOutputType | null
    _max: CompanyNoteMaxAggregateOutputType | null
  }

  type GetCompanyNoteGroupByPayload<T extends CompanyNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyNoteGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyNoteGroupByOutputType[P]>
        }
      >
    >


  export type CompanyNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyNote"]>

  export type CompanyNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyNote"]>

  export type CompanyNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyNote"]>

  export type CompanyNoteSelectScalar = {
    id?: boolean
    text?: boolean
    companyId?: boolean
    createdAt?: boolean
  }

  export type CompanyNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "companyId" | "createdAt", ExtArgs["result"]["companyNote"]>
  export type CompanyNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanyNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanyNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyNote"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      companyId: string
      createdAt: Date
    }, ExtArgs["result"]["companyNote"]>
    composites: {}
  }

  type CompanyNoteGetPayload<S extends boolean | null | undefined | CompanyNoteDefaultArgs> = $Result.GetResult<Prisma.$CompanyNotePayload, S>

  type CompanyNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyNoteCountAggregateInputType | true
    }

  export interface CompanyNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyNote'], meta: { name: 'CompanyNote' } }
    /**
     * Find zero or one CompanyNote that matches the filter.
     * @param {CompanyNoteFindUniqueArgs} args - Arguments to find a CompanyNote
     * @example
     * // Get one CompanyNote
     * const companyNote = await prisma.companyNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyNoteFindUniqueArgs>(args: SelectSubset<T, CompanyNoteFindUniqueArgs<ExtArgs>>): Prisma__CompanyNoteClient<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyNoteFindUniqueOrThrowArgs} args - Arguments to find a CompanyNote
     * @example
     * // Get one CompanyNote
     * const companyNote = await prisma.companyNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyNoteClient<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyNoteFindFirstArgs} args - Arguments to find a CompanyNote
     * @example
     * // Get one CompanyNote
     * const companyNote = await prisma.companyNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyNoteFindFirstArgs>(args?: SelectSubset<T, CompanyNoteFindFirstArgs<ExtArgs>>): Prisma__CompanyNoteClient<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyNoteFindFirstOrThrowArgs} args - Arguments to find a CompanyNote
     * @example
     * // Get one CompanyNote
     * const companyNote = await prisma.companyNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyNoteClient<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyNotes
     * const companyNotes = await prisma.companyNote.findMany()
     * 
     * // Get first 10 CompanyNotes
     * const companyNotes = await prisma.companyNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyNoteWithIdOnly = await prisma.companyNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyNoteFindManyArgs>(args?: SelectSubset<T, CompanyNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyNote.
     * @param {CompanyNoteCreateArgs} args - Arguments to create a CompanyNote.
     * @example
     * // Create one CompanyNote
     * const CompanyNote = await prisma.companyNote.create({
     *   data: {
     *     // ... data to create a CompanyNote
     *   }
     * })
     * 
     */
    create<T extends CompanyNoteCreateArgs>(args: SelectSubset<T, CompanyNoteCreateArgs<ExtArgs>>): Prisma__CompanyNoteClient<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyNotes.
     * @param {CompanyNoteCreateManyArgs} args - Arguments to create many CompanyNotes.
     * @example
     * // Create many CompanyNotes
     * const companyNote = await prisma.companyNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyNoteCreateManyArgs>(args?: SelectSubset<T, CompanyNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyNotes and returns the data saved in the database.
     * @param {CompanyNoteCreateManyAndReturnArgs} args - Arguments to create many CompanyNotes.
     * @example
     * // Create many CompanyNotes
     * const companyNote = await prisma.companyNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyNotes and only return the `id`
     * const companyNoteWithIdOnly = await prisma.companyNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyNote.
     * @param {CompanyNoteDeleteArgs} args - Arguments to delete one CompanyNote.
     * @example
     * // Delete one CompanyNote
     * const CompanyNote = await prisma.companyNote.delete({
     *   where: {
     *     // ... filter to delete one CompanyNote
     *   }
     * })
     * 
     */
    delete<T extends CompanyNoteDeleteArgs>(args: SelectSubset<T, CompanyNoteDeleteArgs<ExtArgs>>): Prisma__CompanyNoteClient<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyNote.
     * @param {CompanyNoteUpdateArgs} args - Arguments to update one CompanyNote.
     * @example
     * // Update one CompanyNote
     * const companyNote = await prisma.companyNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyNoteUpdateArgs>(args: SelectSubset<T, CompanyNoteUpdateArgs<ExtArgs>>): Prisma__CompanyNoteClient<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyNotes.
     * @param {CompanyNoteDeleteManyArgs} args - Arguments to filter CompanyNotes to delete.
     * @example
     * // Delete a few CompanyNotes
     * const { count } = await prisma.companyNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyNoteDeleteManyArgs>(args?: SelectSubset<T, CompanyNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyNotes
     * const companyNote = await prisma.companyNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyNoteUpdateManyArgs>(args: SelectSubset<T, CompanyNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyNotes and returns the data updated in the database.
     * @param {CompanyNoteUpdateManyAndReturnArgs} args - Arguments to update many CompanyNotes.
     * @example
     * // Update many CompanyNotes
     * const companyNote = await prisma.companyNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyNotes and only return the `id`
     * const companyNoteWithIdOnly = await prisma.companyNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyNote.
     * @param {CompanyNoteUpsertArgs} args - Arguments to update or create a CompanyNote.
     * @example
     * // Update or create a CompanyNote
     * const companyNote = await prisma.companyNote.upsert({
     *   create: {
     *     // ... data to create a CompanyNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyNote we want to update
     *   }
     * })
     */
    upsert<T extends CompanyNoteUpsertArgs>(args: SelectSubset<T, CompanyNoteUpsertArgs<ExtArgs>>): Prisma__CompanyNoteClient<$Result.GetResult<Prisma.$CompanyNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyNoteCountArgs} args - Arguments to filter CompanyNotes to count.
     * @example
     * // Count the number of CompanyNotes
     * const count = await prisma.companyNote.count({
     *   where: {
     *     // ... the filter for the CompanyNotes we want to count
     *   }
     * })
    **/
    count<T extends CompanyNoteCountArgs>(
      args?: Subset<T, CompanyNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyNoteAggregateArgs>(args: Subset<T, CompanyNoteAggregateArgs>): Prisma.PrismaPromise<GetCompanyNoteAggregateType<T>>

    /**
     * Group by CompanyNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyNoteGroupByArgs} args - Group by arguments.
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
      T extends CompanyNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyNoteGroupByArgs['orderBy'] }
        : { orderBy?: CompanyNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyNote model
   */
  readonly fields: CompanyNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompanyNote model
   */
  interface CompanyNoteFieldRefs {
    readonly id: FieldRef<"CompanyNote", 'String'>
    readonly text: FieldRef<"CompanyNote", 'String'>
    readonly companyId: FieldRef<"CompanyNote", 'String'>
    readonly createdAt: FieldRef<"CompanyNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyNote findUnique
   */
  export type CompanyNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
    /**
     * Filter, which CompanyNote to fetch.
     */
    where: CompanyNoteWhereUniqueInput
  }

  /**
   * CompanyNote findUniqueOrThrow
   */
  export type CompanyNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
    /**
     * Filter, which CompanyNote to fetch.
     */
    where: CompanyNoteWhereUniqueInput
  }

  /**
   * CompanyNote findFirst
   */
  export type CompanyNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
    /**
     * Filter, which CompanyNote to fetch.
     */
    where?: CompanyNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyNotes to fetch.
     */
    orderBy?: CompanyNoteOrderByWithRelationInput | CompanyNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyNotes.
     */
    cursor?: CompanyNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyNotes.
     */
    distinct?: CompanyNoteScalarFieldEnum | CompanyNoteScalarFieldEnum[]
  }

  /**
   * CompanyNote findFirstOrThrow
   */
  export type CompanyNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
    /**
     * Filter, which CompanyNote to fetch.
     */
    where?: CompanyNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyNotes to fetch.
     */
    orderBy?: CompanyNoteOrderByWithRelationInput | CompanyNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyNotes.
     */
    cursor?: CompanyNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyNotes.
     */
    distinct?: CompanyNoteScalarFieldEnum | CompanyNoteScalarFieldEnum[]
  }

  /**
   * CompanyNote findMany
   */
  export type CompanyNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
    /**
     * Filter, which CompanyNotes to fetch.
     */
    where?: CompanyNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyNotes to fetch.
     */
    orderBy?: CompanyNoteOrderByWithRelationInput | CompanyNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyNotes.
     */
    cursor?: CompanyNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyNotes.
     */
    distinct?: CompanyNoteScalarFieldEnum | CompanyNoteScalarFieldEnum[]
  }

  /**
   * CompanyNote create
   */
  export type CompanyNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyNote.
     */
    data: XOR<CompanyNoteCreateInput, CompanyNoteUncheckedCreateInput>
  }

  /**
   * CompanyNote createMany
   */
  export type CompanyNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyNotes.
     */
    data: CompanyNoteCreateManyInput | CompanyNoteCreateManyInput[]
  }

  /**
   * CompanyNote createManyAndReturn
   */
  export type CompanyNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyNotes.
     */
    data: CompanyNoteCreateManyInput | CompanyNoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyNote update
   */
  export type CompanyNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyNote.
     */
    data: XOR<CompanyNoteUpdateInput, CompanyNoteUncheckedUpdateInput>
    /**
     * Choose, which CompanyNote to update.
     */
    where: CompanyNoteWhereUniqueInput
  }

  /**
   * CompanyNote updateMany
   */
  export type CompanyNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyNotes.
     */
    data: XOR<CompanyNoteUpdateManyMutationInput, CompanyNoteUncheckedUpdateManyInput>
    /**
     * Filter which CompanyNotes to update
     */
    where?: CompanyNoteWhereInput
    /**
     * Limit how many CompanyNotes to update.
     */
    limit?: number
  }

  /**
   * CompanyNote updateManyAndReturn
   */
  export type CompanyNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * The data used to update CompanyNotes.
     */
    data: XOR<CompanyNoteUpdateManyMutationInput, CompanyNoteUncheckedUpdateManyInput>
    /**
     * Filter which CompanyNotes to update
     */
    where?: CompanyNoteWhereInput
    /**
     * Limit how many CompanyNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyNote upsert
   */
  export type CompanyNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyNote to update in case it exists.
     */
    where: CompanyNoteWhereUniqueInput
    /**
     * In case the CompanyNote found by the `where` argument doesn't exist, create a new CompanyNote with this data.
     */
    create: XOR<CompanyNoteCreateInput, CompanyNoteUncheckedCreateInput>
    /**
     * In case the CompanyNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyNoteUpdateInput, CompanyNoteUncheckedUpdateInput>
  }

  /**
   * CompanyNote delete
   */
  export type CompanyNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
    /**
     * Filter which CompanyNote to delete.
     */
    where: CompanyNoteWhereUniqueInput
  }

  /**
   * CompanyNote deleteMany
   */
  export type CompanyNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyNotes to delete
     */
    where?: CompanyNoteWhereInput
    /**
     * Limit how many CompanyNotes to delete.
     */
    limit?: number
  }

  /**
   * CompanyNote without action
   */
  export type CompanyNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyNote
     */
    select?: CompanyNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyNote
     */
    omit?: CompanyNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyNoteInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    title: string | null
    email: string | null
    phone: string | null
    status: string | null
    isVip: boolean | null
    companyId: string | null
    createdAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    title: string | null
    email: string | null
    phone: string | null
    status: string | null
    isVip: boolean | null
    companyId: string | null
    createdAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    title: number
    email: number
    phone: number
    status: number
    isVip: number
    companyId: number
    createdAt: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    title?: true
    email?: true
    phone?: true
    status?: true
    isVip?: true
    companyId?: true
    createdAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    title?: true
    email?: true
    phone?: true
    status?: true
    isVip?: true
    companyId?: true
    createdAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    title?: true
    email?: true
    phone?: true
    status?: true
    isVip?: true
    companyId?: true
    createdAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    title: string | null
    email: string | null
    phone: string | null
    status: string
    isVip: boolean
    companyId: string
    createdAt: Date
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    isVip?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    touches?: boolean | Lead$touchesArgs<ExtArgs>
    notes?: boolean | Lead$notesArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    isVip?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    isVip?: boolean
    companyId?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    isVip?: boolean
    companyId?: boolean
    createdAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "title" | "email" | "phone" | "status" | "isVip" | "companyId" | "createdAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    touches?: boolean | Lead$touchesArgs<ExtArgs>
    notes?: boolean | Lead$notesArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      touches: Prisma.$TouchPayload<ExtArgs>[]
      notes: Prisma.$LeadNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      title: string | null
      email: string | null
      phone: string | null
      /**
       * Pipeline stage.
       * Allowed values: "NEW" | "CONTACTED" | "QUALIFIED" | "NURTURING" | "LOST"
       */
      status: string
      isVip: boolean
      companyId: string
      createdAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    touches<T extends Lead$touchesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$touchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Lead$notesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly firstName: FieldRef<"Lead", 'String'>
    readonly lastName: FieldRef<"Lead", 'String'>
    readonly title: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly status: FieldRef<"Lead", 'String'>
    readonly isVip: FieldRef<"Lead", 'Boolean'>
    readonly companyId: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.touches
   */
  export type Lead$touchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Lead.notes
   */
  export type Lead$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    where?: LeadNoteWhereInput
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    cursor?: LeadNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model LeadNote
   */

  export type AggregateLeadNote = {
    _count: LeadNoteCountAggregateOutputType | null
    _min: LeadNoteMinAggregateOutputType | null
    _max: LeadNoteMaxAggregateOutputType | null
  }

  export type LeadNoteMinAggregateOutputType = {
    id: string | null
    text: string | null
    leadId: string | null
    createdAt: Date | null
  }

  export type LeadNoteMaxAggregateOutputType = {
    id: string | null
    text: string | null
    leadId: string | null
    createdAt: Date | null
  }

  export type LeadNoteCountAggregateOutputType = {
    id: number
    text: number
    leadId: number
    createdAt: number
    _all: number
  }


  export type LeadNoteMinAggregateInputType = {
    id?: true
    text?: true
    leadId?: true
    createdAt?: true
  }

  export type LeadNoteMaxAggregateInputType = {
    id?: true
    text?: true
    leadId?: true
    createdAt?: true
  }

  export type LeadNoteCountAggregateInputType = {
    id?: true
    text?: true
    leadId?: true
    createdAt?: true
    _all?: true
  }

  export type LeadNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadNote to aggregate.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadNotes
    **/
    _count?: true | LeadNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadNoteMaxAggregateInputType
  }

  export type GetLeadNoteAggregateType<T extends LeadNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadNote[P]>
      : GetScalarType<T[P], AggregateLeadNote[P]>
  }




  export type LeadNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadNoteWhereInput
    orderBy?: LeadNoteOrderByWithAggregationInput | LeadNoteOrderByWithAggregationInput[]
    by: LeadNoteScalarFieldEnum[] | LeadNoteScalarFieldEnum
    having?: LeadNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadNoteCountAggregateInputType | true
    _min?: LeadNoteMinAggregateInputType
    _max?: LeadNoteMaxAggregateInputType
  }

  export type LeadNoteGroupByOutputType = {
    id: string
    text: string
    leadId: string
    createdAt: Date
    _count: LeadNoteCountAggregateOutputType | null
    _min: LeadNoteMinAggregateOutputType | null
    _max: LeadNoteMaxAggregateOutputType | null
  }

  type GetLeadNoteGroupByPayload<T extends LeadNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadNoteGroupByOutputType[P]>
            : GetScalarType<T[P], LeadNoteGroupByOutputType[P]>
        }
      >
    >


  export type LeadNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    leadId?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    leadId?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    leadId?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectScalar = {
    id?: boolean
    text?: boolean
    leadId?: boolean
    createdAt?: boolean
  }

  export type LeadNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "leadId" | "createdAt", ExtArgs["result"]["leadNote"]>
  export type LeadNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $LeadNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadNote"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      leadId: string
      createdAt: Date
    }, ExtArgs["result"]["leadNote"]>
    composites: {}
  }

  type LeadNoteGetPayload<S extends boolean | null | undefined | LeadNoteDefaultArgs> = $Result.GetResult<Prisma.$LeadNotePayload, S>

  type LeadNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadNoteCountAggregateInputType | true
    }

  export interface LeadNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadNote'], meta: { name: 'LeadNote' } }
    /**
     * Find zero or one LeadNote that matches the filter.
     * @param {LeadNoteFindUniqueArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadNoteFindUniqueArgs>(args: SelectSubset<T, LeadNoteFindUniqueArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadNoteFindUniqueOrThrowArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindFirstArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadNoteFindFirstArgs>(args?: SelectSubset<T, LeadNoteFindFirstArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindFirstOrThrowArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadNotes
     * const leadNotes = await prisma.leadNote.findMany()
     * 
     * // Get first 10 LeadNotes
     * const leadNotes = await prisma.leadNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadNoteFindManyArgs>(args?: SelectSubset<T, LeadNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadNote.
     * @param {LeadNoteCreateArgs} args - Arguments to create a LeadNote.
     * @example
     * // Create one LeadNote
     * const LeadNote = await prisma.leadNote.create({
     *   data: {
     *     // ... data to create a LeadNote
     *   }
     * })
     * 
     */
    create<T extends LeadNoteCreateArgs>(args: SelectSubset<T, LeadNoteCreateArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadNotes.
     * @param {LeadNoteCreateManyArgs} args - Arguments to create many LeadNotes.
     * @example
     * // Create many LeadNotes
     * const leadNote = await prisma.leadNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadNoteCreateManyArgs>(args?: SelectSubset<T, LeadNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadNotes and returns the data saved in the database.
     * @param {LeadNoteCreateManyAndReturnArgs} args - Arguments to create many LeadNotes.
     * @example
     * // Create many LeadNotes
     * const leadNote = await prisma.leadNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadNotes and only return the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadNote.
     * @param {LeadNoteDeleteArgs} args - Arguments to delete one LeadNote.
     * @example
     * // Delete one LeadNote
     * const LeadNote = await prisma.leadNote.delete({
     *   where: {
     *     // ... filter to delete one LeadNote
     *   }
     * })
     * 
     */
    delete<T extends LeadNoteDeleteArgs>(args: SelectSubset<T, LeadNoteDeleteArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadNote.
     * @param {LeadNoteUpdateArgs} args - Arguments to update one LeadNote.
     * @example
     * // Update one LeadNote
     * const leadNote = await prisma.leadNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadNoteUpdateArgs>(args: SelectSubset<T, LeadNoteUpdateArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadNotes.
     * @param {LeadNoteDeleteManyArgs} args - Arguments to filter LeadNotes to delete.
     * @example
     * // Delete a few LeadNotes
     * const { count } = await prisma.leadNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadNoteDeleteManyArgs>(args?: SelectSubset<T, LeadNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadNotes
     * const leadNote = await prisma.leadNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadNoteUpdateManyArgs>(args: SelectSubset<T, LeadNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadNotes and returns the data updated in the database.
     * @param {LeadNoteUpdateManyAndReturnArgs} args - Arguments to update many LeadNotes.
     * @example
     * // Update many LeadNotes
     * const leadNote = await prisma.leadNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadNotes and only return the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadNote.
     * @param {LeadNoteUpsertArgs} args - Arguments to update or create a LeadNote.
     * @example
     * // Update or create a LeadNote
     * const leadNote = await prisma.leadNote.upsert({
     *   create: {
     *     // ... data to create a LeadNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadNote we want to update
     *   }
     * })
     */
    upsert<T extends LeadNoteUpsertArgs>(args: SelectSubset<T, LeadNoteUpsertArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteCountArgs} args - Arguments to filter LeadNotes to count.
     * @example
     * // Count the number of LeadNotes
     * const count = await prisma.leadNote.count({
     *   where: {
     *     // ... the filter for the LeadNotes we want to count
     *   }
     * })
    **/
    count<T extends LeadNoteCountArgs>(
      args?: Subset<T, LeadNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadNoteAggregateArgs>(args: Subset<T, LeadNoteAggregateArgs>): Prisma.PrismaPromise<GetLeadNoteAggregateType<T>>

    /**
     * Group by LeadNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteGroupByArgs} args - Group by arguments.
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
      T extends LeadNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadNoteGroupByArgs['orderBy'] }
        : { orderBy?: LeadNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadNote model
   */
  readonly fields: LeadNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeadNote model
   */
  interface LeadNoteFieldRefs {
    readonly id: FieldRef<"LeadNote", 'String'>
    readonly text: FieldRef<"LeadNote", 'String'>
    readonly leadId: FieldRef<"LeadNote", 'String'>
    readonly createdAt: FieldRef<"LeadNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeadNote findUnique
   */
  export type LeadNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote findUniqueOrThrow
   */
  export type LeadNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote findFirst
   */
  export type LeadNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote findFirstOrThrow
   */
  export type LeadNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote findMany
   */
  export type LeadNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNotes to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote create
   */
  export type LeadNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadNote.
     */
    data: XOR<LeadNoteCreateInput, LeadNoteUncheckedCreateInput>
  }

  /**
   * LeadNote createMany
   */
  export type LeadNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadNotes.
     */
    data: LeadNoteCreateManyInput | LeadNoteCreateManyInput[]
  }

  /**
   * LeadNote createManyAndReturn
   */
  export type LeadNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * The data used to create many LeadNotes.
     */
    data: LeadNoteCreateManyInput | LeadNoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadNote update
   */
  export type LeadNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadNote.
     */
    data: XOR<LeadNoteUpdateInput, LeadNoteUncheckedUpdateInput>
    /**
     * Choose, which LeadNote to update.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote updateMany
   */
  export type LeadNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadNotes.
     */
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyInput>
    /**
     * Filter which LeadNotes to update
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to update.
     */
    limit?: number
  }

  /**
   * LeadNote updateManyAndReturn
   */
  export type LeadNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * The data used to update LeadNotes.
     */
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyInput>
    /**
     * Filter which LeadNotes to update
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadNote upsert
   */
  export type LeadNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadNote to update in case it exists.
     */
    where: LeadNoteWhereUniqueInput
    /**
     * In case the LeadNote found by the `where` argument doesn't exist, create a new LeadNote with this data.
     */
    create: XOR<LeadNoteCreateInput, LeadNoteUncheckedCreateInput>
    /**
     * In case the LeadNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadNoteUpdateInput, LeadNoteUncheckedUpdateInput>
  }

  /**
   * LeadNote delete
   */
  export type LeadNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter which LeadNote to delete.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote deleteMany
   */
  export type LeadNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadNotes to delete
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to delete.
     */
    limit?: number
  }

  /**
   * LeadNote without action
   */
  export type LeadNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
  }


  /**
   * Model Touch
   */

  export type AggregateTouch = {
    _count: TouchCountAggregateOutputType | null
    _min: TouchMinAggregateOutputType | null
    _max: TouchMaxAggregateOutputType | null
  }

  export type TouchMinAggregateOutputType = {
    id: string | null
    date: Date | null
    type: string | null
    notes: string | null
    leadId: string | null
  }

  export type TouchMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    type: string | null
    notes: string | null
    leadId: string | null
  }

  export type TouchCountAggregateOutputType = {
    id: number
    date: number
    type: number
    notes: number
    leadId: number
    _all: number
  }


  export type TouchMinAggregateInputType = {
    id?: true
    date?: true
    type?: true
    notes?: true
    leadId?: true
  }

  export type TouchMaxAggregateInputType = {
    id?: true
    date?: true
    type?: true
    notes?: true
    leadId?: true
  }

  export type TouchCountAggregateInputType = {
    id?: true
    date?: true
    type?: true
    notes?: true
    leadId?: true
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
    _min?: TouchMinAggregateInputType
    _max?: TouchMaxAggregateInputType
  }

  export type TouchGroupByOutputType = {
    id: string
    date: Date
    type: string
    notes: string
    leadId: string
    _count: TouchCountAggregateOutputType | null
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
    date?: boolean
    type?: boolean
    notes?: boolean
    leadId?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["touch"]>

  export type TouchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    notes?: boolean
    leadId?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["touch"]>

  export type TouchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    notes?: boolean
    leadId?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["touch"]>

  export type TouchSelectScalar = {
    id?: boolean
    date?: boolean
    type?: boolean
    notes?: boolean
    leadId?: boolean
  }

  export type TouchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "type" | "notes" | "leadId", ExtArgs["result"]["touch"]>
  export type TouchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type TouchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type TouchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $TouchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Touch"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      /**
       * Outreach channel — must match a TouchType.name (see Settings).
       */
      type: string
      notes: string
      leadId: string
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
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly date: FieldRef<"Touch", 'DateTime'>
    readonly type: FieldRef<"Touch", 'String'>
    readonly notes: FieldRef<"Touch", 'String'>
    readonly leadId: FieldRef<"Touch", 'String'>
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


  export const IndustryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isSystem: 'isSystem'
  };

  export type IndustryScalarFieldEnum = (typeof IndustryScalarFieldEnum)[keyof typeof IndustryScalarFieldEnum]


  export const TouchTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isSystem: 'isSystem'
  };

  export type TouchTypeScalarFieldEnum = (typeof TouchTypeScalarFieldEnum)[keyof typeof TouchTypeScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    isVip: 'isVip',
    industryId: 'industryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CompanyNoteScalarFieldEnum: {
    id: 'id',
    text: 'text',
    companyId: 'companyId',
    createdAt: 'createdAt'
  };

  export type CompanyNoteScalarFieldEnum = (typeof CompanyNoteScalarFieldEnum)[keyof typeof CompanyNoteScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    title: 'title',
    email: 'email',
    phone: 'phone',
    status: 'status',
    isVip: 'isVip',
    companyId: 'companyId',
    createdAt: 'createdAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const LeadNoteScalarFieldEnum: {
    id: 'id',
    text: 'text',
    leadId: 'leadId',
    createdAt: 'createdAt'
  };

  export type LeadNoteScalarFieldEnum = (typeof LeadNoteScalarFieldEnum)[keyof typeof LeadNoteScalarFieldEnum]


  export const TouchScalarFieldEnum: {
    id: 'id',
    date: 'date',
    type: 'type',
    notes: 'notes',
    leadId: 'leadId'
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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type IndustryWhereInput = {
    AND?: IndustryWhereInput | IndustryWhereInput[]
    OR?: IndustryWhereInput[]
    NOT?: IndustryWhereInput | IndustryWhereInput[]
    id?: StringFilter<"Industry"> | string
    name?: StringFilter<"Industry"> | string
    isSystem?: BoolFilter<"Industry"> | boolean
    companies?: CompanyListRelationFilter
  }

  export type IndustryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
    companies?: CompanyOrderByRelationAggregateInput
  }

  export type IndustryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: IndustryWhereInput | IndustryWhereInput[]
    OR?: IndustryWhereInput[]
    NOT?: IndustryWhereInput | IndustryWhereInput[]
    isSystem?: BoolFilter<"Industry"> | boolean
    companies?: CompanyListRelationFilter
  }, "id" | "name">

  export type IndustryOrderByWithAggregationInput = {
    id?: SortOrder
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
    name?: StringWithAggregatesFilter<"Industry"> | string
    isSystem?: BoolWithAggregatesFilter<"Industry"> | boolean
  }

  export type TouchTypeWhereInput = {
    AND?: TouchTypeWhereInput | TouchTypeWhereInput[]
    OR?: TouchTypeWhereInput[]
    NOT?: TouchTypeWhereInput | TouchTypeWhereInput[]
    id?: StringFilter<"TouchType"> | string
    name?: StringFilter<"TouchType"> | string
    isSystem?: BoolFilter<"TouchType"> | boolean
  }

  export type TouchTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type TouchTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TouchTypeWhereInput | TouchTypeWhereInput[]
    OR?: TouchTypeWhereInput[]
    NOT?: TouchTypeWhereInput | TouchTypeWhereInput[]
    isSystem?: BoolFilter<"TouchType"> | boolean
  }, "id" | "name">

  export type TouchTypeOrderByWithAggregationInput = {
    id?: SortOrder
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
    name?: StringWithAggregatesFilter<"TouchType"> | string
    isSystem?: BoolWithAggregatesFilter<"TouchType"> | boolean
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    address?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    isVip?: BoolFilter<"Company"> | boolean
    industryId?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    industry?: XOR<IndustryScalarRelationFilter, IndustryWhereInput>
    leads?: LeadListRelationFilter
    notes?: CompanyNoteListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isVip?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    industry?: IndustryOrderByWithRelationInput
    leads?: LeadOrderByRelationAggregateInput
    notes?: CompanyNoteOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    address?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    isVip?: BoolFilter<"Company"> | boolean
    industryId?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    industry?: XOR<IndustryScalarRelationFilter, IndustryWhereInput>
    leads?: LeadListRelationFilter
    notes?: CompanyNoteListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    isVip?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    address?: StringNullableWithAggregatesFilter<"Company"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Company"> | string | null
    isVip?: BoolWithAggregatesFilter<"Company"> | boolean
    industryId?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type CompanyNoteWhereInput = {
    AND?: CompanyNoteWhereInput | CompanyNoteWhereInput[]
    OR?: CompanyNoteWhereInput[]
    NOT?: CompanyNoteWhereInput | CompanyNoteWhereInput[]
    id?: StringFilter<"CompanyNote"> | string
    text?: StringFilter<"CompanyNote"> | string
    companyId?: StringFilter<"CompanyNote"> | string
    createdAt?: DateTimeFilter<"CompanyNote"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompanyNoteOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanyNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyNoteWhereInput | CompanyNoteWhereInput[]
    OR?: CompanyNoteWhereInput[]
    NOT?: CompanyNoteWhereInput | CompanyNoteWhereInput[]
    text?: StringFilter<"CompanyNote"> | string
    companyId?: StringFilter<"CompanyNote"> | string
    createdAt?: DateTimeFilter<"CompanyNote"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type CompanyNoteOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    _count?: CompanyNoteCountOrderByAggregateInput
    _max?: CompanyNoteMaxOrderByAggregateInput
    _min?: CompanyNoteMinOrderByAggregateInput
  }

  export type CompanyNoteScalarWhereWithAggregatesInput = {
    AND?: CompanyNoteScalarWhereWithAggregatesInput | CompanyNoteScalarWhereWithAggregatesInput[]
    OR?: CompanyNoteScalarWhereWithAggregatesInput[]
    NOT?: CompanyNoteScalarWhereWithAggregatesInput | CompanyNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyNote"> | string
    text?: StringWithAggregatesFilter<"CompanyNote"> | string
    companyId?: StringWithAggregatesFilter<"CompanyNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CompanyNote"> | Date | string
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    firstName?: StringFilter<"Lead"> | string
    lastName?: StringFilter<"Lead"> | string
    title?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    status?: StringFilter<"Lead"> | string
    isVip?: BoolFilter<"Lead"> | boolean
    companyId?: StringFilter<"Lead"> | string
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    touches?: TouchListRelationFilter
    notes?: LeadNoteListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    isVip?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    touches?: TouchOrderByRelationAggregateInput
    notes?: LeadNoteOrderByRelationAggregateInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    firstName?: StringFilter<"Lead"> | string
    lastName?: StringFilter<"Lead"> | string
    title?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    status?: StringFilter<"Lead"> | string
    isVip?: BoolFilter<"Lead"> | boolean
    companyId?: StringFilter<"Lead"> | string
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    touches?: TouchListRelationFilter
    notes?: LeadNoteListRelationFilter
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    isVip?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    firstName?: StringWithAggregatesFilter<"Lead"> | string
    lastName?: StringWithAggregatesFilter<"Lead"> | string
    title?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    email?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    status?: StringWithAggregatesFilter<"Lead"> | string
    isVip?: BoolWithAggregatesFilter<"Lead"> | boolean
    companyId?: StringWithAggregatesFilter<"Lead"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type LeadNoteWhereInput = {
    AND?: LeadNoteWhereInput | LeadNoteWhereInput[]
    OR?: LeadNoteWhereInput[]
    NOT?: LeadNoteWhereInput | LeadNoteWhereInput[]
    id?: StringFilter<"LeadNote"> | string
    text?: StringFilter<"LeadNote"> | string
    leadId?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type LeadNoteOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type LeadNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadNoteWhereInput | LeadNoteWhereInput[]
    OR?: LeadNoteWhereInput[]
    NOT?: LeadNoteWhereInput | LeadNoteWhereInput[]
    text?: StringFilter<"LeadNote"> | string
    leadId?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type LeadNoteOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    _count?: LeadNoteCountOrderByAggregateInput
    _max?: LeadNoteMaxOrderByAggregateInput
    _min?: LeadNoteMinOrderByAggregateInput
  }

  export type LeadNoteScalarWhereWithAggregatesInput = {
    AND?: LeadNoteScalarWhereWithAggregatesInput | LeadNoteScalarWhereWithAggregatesInput[]
    OR?: LeadNoteScalarWhereWithAggregatesInput[]
    NOT?: LeadNoteScalarWhereWithAggregatesInput | LeadNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadNote"> | string
    text?: StringWithAggregatesFilter<"LeadNote"> | string
    leadId?: StringWithAggregatesFilter<"LeadNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeadNote"> | Date | string
  }

  export type TouchWhereInput = {
    AND?: TouchWhereInput | TouchWhereInput[]
    OR?: TouchWhereInput[]
    NOT?: TouchWhereInput | TouchWhereInput[]
    id?: StringFilter<"Touch"> | string
    date?: DateTimeFilter<"Touch"> | Date | string
    type?: StringFilter<"Touch"> | string
    notes?: StringFilter<"Touch"> | string
    leadId?: StringFilter<"Touch"> | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type TouchOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    leadId?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type TouchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TouchWhereInput | TouchWhereInput[]
    OR?: TouchWhereInput[]
    NOT?: TouchWhereInput | TouchWhereInput[]
    date?: DateTimeFilter<"Touch"> | Date | string
    type?: StringFilter<"Touch"> | string
    notes?: StringFilter<"Touch"> | string
    leadId?: StringFilter<"Touch"> | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type TouchOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    leadId?: SortOrder
    _count?: TouchCountOrderByAggregateInput
    _max?: TouchMaxOrderByAggregateInput
    _min?: TouchMinOrderByAggregateInput
  }

  export type TouchScalarWhereWithAggregatesInput = {
    AND?: TouchScalarWhereWithAggregatesInput | TouchScalarWhereWithAggregatesInput[]
    OR?: TouchScalarWhereWithAggregatesInput[]
    NOT?: TouchScalarWhereWithAggregatesInput | TouchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Touch"> | string
    date?: DateTimeWithAggregatesFilter<"Touch"> | Date | string
    type?: StringWithAggregatesFilter<"Touch"> | string
    notes?: StringWithAggregatesFilter<"Touch"> | string
    leadId?: StringWithAggregatesFilter<"Touch"> | string
  }

  export type IndustryCreateInput = {
    id?: string
    name: string
    isSystem?: boolean
    companies?: CompanyCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUncheckedCreateInput = {
    id?: string
    name: string
    isSystem?: boolean
    companies?: CompanyUncheckedCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    companies?: CompanyUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
    companies?: CompanyUncheckedUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryCreateManyInput = {
    id?: string
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
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TouchTypeCreateInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type TouchTypeUncheckedCreateInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type TouchTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TouchTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TouchTypeCreateManyInput = {
    id?: string
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
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isVip?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutCompaniesInput
    leads?: LeadCreateNestedManyWithoutCompanyInput
    notes?: CompanyNoteCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isVip?: boolean
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCompanyInput
    notes?: CompanyNoteUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutCompaniesNestedInput
    leads?: LeadUpdateManyWithoutCompanyNestedInput
    notes?: CompanyNoteUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCompanyNestedInput
    notes?: CompanyNoteUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isVip?: boolean
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyNoteCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutNotesInput
  }

  export type CompanyNoteUncheckedCreateInput = {
    id?: string
    text: string
    companyId: string
    createdAt?: Date | string
  }

  export type CompanyNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutNotesNestedInput
  }

  export type CompanyNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyNoteCreateManyInput = {
    id?: string
    text: string
    companyId: string
    createdAt?: Date | string
  }

  export type CompanyNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    status?: string
    isVip?: boolean
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutLeadsInput
    touches?: TouchCreateNestedManyWithoutLeadInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    status?: string
    isVip?: boolean
    companyId: string
    createdAt?: Date | string
    touches?: TouchUncheckedCreateNestedManyWithoutLeadInput
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutLeadsNestedInput
    touches?: TouchUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    touches?: TouchUncheckedUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    status?: string
    isVip?: boolean
    companyId: string
    createdAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutNotesInput
  }

  export type LeadNoteUncheckedCreateInput = {
    id?: string
    text: string
    leadId: string
    createdAt?: Date | string
  }

  export type LeadNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutNotesNestedInput
  }

  export type LeadNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteCreateManyInput = {
    id?: string
    text: string
    leadId: string
    createdAt?: Date | string
  }

  export type LeadNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouchCreateInput = {
    id?: string
    date?: Date | string
    type: string
    notes?: string
    lead: LeadCreateNestedOneWithoutTouchesInput
  }

  export type TouchUncheckedCreateInput = {
    id?: string
    date?: Date | string
    type: string
    notes?: string
    leadId: string
  }

  export type TouchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    lead?: LeadUpdateOneRequiredWithoutTouchesNestedInput
  }

  export type TouchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
  }

  export type TouchCreateManyInput = {
    id?: string
    date?: Date | string
    type: string
    notes?: string
    leadId: string
  }

  export type TouchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type TouchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndustryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type IndustryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type IndustryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TouchTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type TouchTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
  }

  export type TouchTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isSystem?: SortOrder
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

  export type IndustryScalarRelationFilter = {
    is?: IndustryWhereInput
    isNot?: IndustryWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type CompanyNoteListRelationFilter = {
    every?: CompanyNoteWhereInput
    some?: CompanyNoteWhereInput
    none?: CompanyNoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isVip?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isVip?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isVip?: SortOrder
    industryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CompanyNoteCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyNoteMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type TouchListRelationFilter = {
    every?: TouchWhereInput
    some?: TouchWhereInput
    none?: TouchWhereInput
  }

  export type LeadNoteListRelationFilter = {
    every?: LeadNoteWhereInput
    some?: LeadNoteWhereInput
    none?: LeadNoteWhereInput
  }

  export type TouchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    isVip?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    isVip?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    isVip?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type LeadNoteCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadNoteMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
  }

  export type TouchCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    leadId?: SortOrder
  }

  export type TouchMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    leadId?: SortOrder
  }

  export type TouchMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    notes?: SortOrder
    leadId?: SortOrder
  }

  export type CompanyCreateNestedManyWithoutIndustryInput = {
    create?: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput> | CompanyCreateWithoutIndustryInput[] | CompanyUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutIndustryInput | CompanyCreateOrConnectWithoutIndustryInput[]
    createMany?: CompanyCreateManyIndustryInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutIndustryInput = {
    create?: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput> | CompanyCreateWithoutIndustryInput[] | CompanyUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutIndustryInput | CompanyCreateOrConnectWithoutIndustryInput[]
    createMany?: CompanyCreateManyIndustryInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput> | CompanyCreateWithoutIndustryInput[] | CompanyUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutIndustryInput | CompanyCreateOrConnectWithoutIndustryInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutIndustryInput | CompanyUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: CompanyCreateManyIndustryInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutIndustryInput | CompanyUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutIndustryInput | CompanyUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput> | CompanyCreateWithoutIndustryInput[] | CompanyUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutIndustryInput | CompanyCreateOrConnectWithoutIndustryInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutIndustryInput | CompanyUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: CompanyCreateManyIndustryInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutIndustryInput | CompanyUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutIndustryInput | CompanyUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type IndustryCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<IndustryCreateWithoutCompaniesInput, IndustryUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutCompaniesInput
    connect?: IndustryWhereUniqueInput
  }

  export type LeadCreateNestedManyWithoutCompanyInput = {
    create?: XOR<LeadCreateWithoutCompanyInput, LeadUncheckedCreateWithoutCompanyInput> | LeadCreateWithoutCompanyInput[] | LeadUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCompanyInput | LeadCreateOrConnectWithoutCompanyInput[]
    createMany?: LeadCreateManyCompanyInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CompanyNoteCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyNoteCreateWithoutCompanyInput, CompanyNoteUncheckedCreateWithoutCompanyInput> | CompanyNoteCreateWithoutCompanyInput[] | CompanyNoteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyNoteCreateOrConnectWithoutCompanyInput | CompanyNoteCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyNoteCreateManyCompanyInputEnvelope
    connect?: CompanyNoteWhereUniqueInput | CompanyNoteWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<LeadCreateWithoutCompanyInput, LeadUncheckedCreateWithoutCompanyInput> | LeadCreateWithoutCompanyInput[] | LeadUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCompanyInput | LeadCreateOrConnectWithoutCompanyInput[]
    createMany?: LeadCreateManyCompanyInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CompanyNoteUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyNoteCreateWithoutCompanyInput, CompanyNoteUncheckedCreateWithoutCompanyInput> | CompanyNoteCreateWithoutCompanyInput[] | CompanyNoteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyNoteCreateOrConnectWithoutCompanyInput | CompanyNoteCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyNoteCreateManyCompanyInputEnvelope
    connect?: CompanyNoteWhereUniqueInput | CompanyNoteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IndustryUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<IndustryCreateWithoutCompaniesInput, IndustryUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutCompaniesInput
    upsert?: IndustryUpsertWithoutCompaniesInput
    connect?: IndustryWhereUniqueInput
    update?: XOR<XOR<IndustryUpdateToOneWithWhereWithoutCompaniesInput, IndustryUpdateWithoutCompaniesInput>, IndustryUncheckedUpdateWithoutCompaniesInput>
  }

  export type LeadUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<LeadCreateWithoutCompanyInput, LeadUncheckedCreateWithoutCompanyInput> | LeadCreateWithoutCompanyInput[] | LeadUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCompanyInput | LeadCreateOrConnectWithoutCompanyInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCompanyInput | LeadUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: LeadCreateManyCompanyInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCompanyInput | LeadUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCompanyInput | LeadUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CompanyNoteUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyNoteCreateWithoutCompanyInput, CompanyNoteUncheckedCreateWithoutCompanyInput> | CompanyNoteCreateWithoutCompanyInput[] | CompanyNoteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyNoteCreateOrConnectWithoutCompanyInput | CompanyNoteCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyNoteUpsertWithWhereUniqueWithoutCompanyInput | CompanyNoteUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyNoteCreateManyCompanyInputEnvelope
    set?: CompanyNoteWhereUniqueInput | CompanyNoteWhereUniqueInput[]
    disconnect?: CompanyNoteWhereUniqueInput | CompanyNoteWhereUniqueInput[]
    delete?: CompanyNoteWhereUniqueInput | CompanyNoteWhereUniqueInput[]
    connect?: CompanyNoteWhereUniqueInput | CompanyNoteWhereUniqueInput[]
    update?: CompanyNoteUpdateWithWhereUniqueWithoutCompanyInput | CompanyNoteUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyNoteUpdateManyWithWhereWithoutCompanyInput | CompanyNoteUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyNoteScalarWhereInput | CompanyNoteScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<LeadCreateWithoutCompanyInput, LeadUncheckedCreateWithoutCompanyInput> | LeadCreateWithoutCompanyInput[] | LeadUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCompanyInput | LeadCreateOrConnectWithoutCompanyInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCompanyInput | LeadUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: LeadCreateManyCompanyInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCompanyInput | LeadUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCompanyInput | LeadUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CompanyNoteUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyNoteCreateWithoutCompanyInput, CompanyNoteUncheckedCreateWithoutCompanyInput> | CompanyNoteCreateWithoutCompanyInput[] | CompanyNoteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyNoteCreateOrConnectWithoutCompanyInput | CompanyNoteCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyNoteUpsertWithWhereUniqueWithoutCompanyInput | CompanyNoteUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyNoteCreateManyCompanyInputEnvelope
    set?: CompanyNoteWhereUniqueInput | CompanyNoteWhereUniqueInput[]
    disconnect?: CompanyNoteWhereUniqueInput | CompanyNoteWhereUniqueInput[]
    delete?: CompanyNoteWhereUniqueInput | CompanyNoteWhereUniqueInput[]
    connect?: CompanyNoteWhereUniqueInput | CompanyNoteWhereUniqueInput[]
    update?: CompanyNoteUpdateWithWhereUniqueWithoutCompanyInput | CompanyNoteUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyNoteUpdateManyWithWhereWithoutCompanyInput | CompanyNoteUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyNoteScalarWhereInput | CompanyNoteScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutNotesInput = {
    create?: XOR<CompanyCreateWithoutNotesInput, CompanyUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutNotesInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<CompanyCreateWithoutNotesInput, CompanyUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutNotesInput
    upsert?: CompanyUpsertWithoutNotesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutNotesInput, CompanyUpdateWithoutNotesInput>, CompanyUncheckedUpdateWithoutNotesInput>
  }

  export type CompanyCreateNestedOneWithoutLeadsInput = {
    create?: XOR<CompanyCreateWithoutLeadsInput, CompanyUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutLeadsInput
    connect?: CompanyWhereUniqueInput
  }

  export type TouchCreateNestedManyWithoutLeadInput = {
    create?: XOR<TouchCreateWithoutLeadInput, TouchUncheckedCreateWithoutLeadInput> | TouchCreateWithoutLeadInput[] | TouchUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutLeadInput | TouchCreateOrConnectWithoutLeadInput[]
    createMany?: TouchCreateManyLeadInputEnvelope
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
  }

  export type LeadNoteCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
  }

  export type TouchUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<TouchCreateWithoutLeadInput, TouchUncheckedCreateWithoutLeadInput> | TouchCreateWithoutLeadInput[] | TouchUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutLeadInput | TouchCreateOrConnectWithoutLeadInput[]
    createMany?: TouchCreateManyLeadInputEnvelope
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
  }

  export type LeadNoteUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<CompanyCreateWithoutLeadsInput, CompanyUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutLeadsInput
    upsert?: CompanyUpsertWithoutLeadsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutLeadsInput, CompanyUpdateWithoutLeadsInput>, CompanyUncheckedUpdateWithoutLeadsInput>
  }

  export type TouchUpdateManyWithoutLeadNestedInput = {
    create?: XOR<TouchCreateWithoutLeadInput, TouchUncheckedCreateWithoutLeadInput> | TouchCreateWithoutLeadInput[] | TouchUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutLeadInput | TouchCreateOrConnectWithoutLeadInput[]
    upsert?: TouchUpsertWithWhereUniqueWithoutLeadInput | TouchUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: TouchCreateManyLeadInputEnvelope
    set?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    disconnect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    delete?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    update?: TouchUpdateWithWhereUniqueWithoutLeadInput | TouchUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: TouchUpdateManyWithWhereWithoutLeadInput | TouchUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: TouchScalarWhereInput | TouchScalarWhereInput[]
  }

  export type LeadNoteUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    upsert?: LeadNoteUpsertWithWhereUniqueWithoutLeadInput | LeadNoteUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    set?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    disconnect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    delete?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    update?: LeadNoteUpdateWithWhereUniqueWithoutLeadInput | LeadNoteUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadNoteUpdateManyWithWhereWithoutLeadInput | LeadNoteUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
  }

  export type TouchUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<TouchCreateWithoutLeadInput, TouchUncheckedCreateWithoutLeadInput> | TouchCreateWithoutLeadInput[] | TouchUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: TouchCreateOrConnectWithoutLeadInput | TouchCreateOrConnectWithoutLeadInput[]
    upsert?: TouchUpsertWithWhereUniqueWithoutLeadInput | TouchUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: TouchCreateManyLeadInputEnvelope
    set?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    disconnect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    delete?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    connect?: TouchWhereUniqueInput | TouchWhereUniqueInput[]
    update?: TouchUpdateWithWhereUniqueWithoutLeadInput | TouchUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: TouchUpdateManyWithWhereWithoutLeadInput | TouchUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: TouchScalarWhereInput | TouchScalarWhereInput[]
  }

  export type LeadNoteUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    upsert?: LeadNoteUpsertWithWhereUniqueWithoutLeadInput | LeadNoteUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    set?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    disconnect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    delete?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    update?: LeadNoteUpdateWithWhereUniqueWithoutLeadInput | LeadNoteUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadNoteUpdateManyWithWhereWithoutLeadInput | LeadNoteUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
  }

  export type LeadCreateNestedOneWithoutNotesInput = {
    create?: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutNotesInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutNotesInput
    upsert?: LeadUpsertWithoutNotesInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutNotesInput, LeadUpdateWithoutNotesInput>, LeadUncheckedUpdateWithoutNotesInput>
  }

  export type LeadCreateNestedOneWithoutTouchesInput = {
    create?: XOR<LeadCreateWithoutTouchesInput, LeadUncheckedCreateWithoutTouchesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutTouchesInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutTouchesNestedInput = {
    create?: XOR<LeadCreateWithoutTouchesInput, LeadUncheckedCreateWithoutTouchesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutTouchesInput
    upsert?: LeadUpsertWithoutTouchesInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutTouchesInput, LeadUpdateWithoutTouchesInput>, LeadUncheckedUpdateWithoutTouchesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CompanyCreateWithoutIndustryInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isVip?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutCompanyInput
    notes?: CompanyNoteCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutIndustryInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isVip?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCompanyInput
    notes?: CompanyNoteUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutIndustryInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput>
  }

  export type CompanyCreateManyIndustryInputEnvelope = {
    data: CompanyCreateManyIndustryInput | CompanyCreateManyIndustryInput[]
  }

  export type CompanyUpsertWithWhereUniqueWithoutIndustryInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutIndustryInput, CompanyUncheckedUpdateWithoutIndustryInput>
    create: XOR<CompanyCreateWithoutIndustryInput, CompanyUncheckedCreateWithoutIndustryInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutIndustryInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutIndustryInput, CompanyUncheckedUpdateWithoutIndustryInput>
  }

  export type CompanyUpdateManyWithWhereWithoutIndustryInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutIndustryInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    address?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    isVip?: BoolFilter<"Company"> | boolean
    industryId?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
  }

  export type IndustryCreateWithoutCompaniesInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type IndustryUncheckedCreateWithoutCompaniesInput = {
    id?: string
    name: string
    isSystem?: boolean
  }

  export type IndustryCreateOrConnectWithoutCompaniesInput = {
    where: IndustryWhereUniqueInput
    create: XOR<IndustryCreateWithoutCompaniesInput, IndustryUncheckedCreateWithoutCompaniesInput>
  }

  export type LeadCreateWithoutCompanyInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    status?: string
    isVip?: boolean
    createdAt?: Date | string
    touches?: TouchCreateNestedManyWithoutLeadInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutCompanyInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    status?: string
    isVip?: boolean
    createdAt?: Date | string
    touches?: TouchUncheckedCreateNestedManyWithoutLeadInput
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutCompanyInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCompanyInput, LeadUncheckedCreateWithoutCompanyInput>
  }

  export type LeadCreateManyCompanyInputEnvelope = {
    data: LeadCreateManyCompanyInput | LeadCreateManyCompanyInput[]
  }

  export type CompanyNoteCreateWithoutCompanyInput = {
    id?: string
    text: string
    createdAt?: Date | string
  }

  export type CompanyNoteUncheckedCreateWithoutCompanyInput = {
    id?: string
    text: string
    createdAt?: Date | string
  }

  export type CompanyNoteCreateOrConnectWithoutCompanyInput = {
    where: CompanyNoteWhereUniqueInput
    create: XOR<CompanyNoteCreateWithoutCompanyInput, CompanyNoteUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyNoteCreateManyCompanyInputEnvelope = {
    data: CompanyNoteCreateManyCompanyInput | CompanyNoteCreateManyCompanyInput[]
  }

  export type IndustryUpsertWithoutCompaniesInput = {
    update: XOR<IndustryUpdateWithoutCompaniesInput, IndustryUncheckedUpdateWithoutCompaniesInput>
    create: XOR<IndustryCreateWithoutCompaniesInput, IndustryUncheckedCreateWithoutCompaniesInput>
    where?: IndustryWhereInput
  }

  export type IndustryUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: IndustryWhereInput
    data: XOR<IndustryUpdateWithoutCompaniesInput, IndustryUncheckedUpdateWithoutCompaniesInput>
  }

  export type IndustryUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IndustryUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isSystem?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeadUpsertWithWhereUniqueWithoutCompanyInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutCompanyInput, LeadUncheckedUpdateWithoutCompanyInput>
    create: XOR<LeadCreateWithoutCompanyInput, LeadUncheckedCreateWithoutCompanyInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutCompanyInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutCompanyInput, LeadUncheckedUpdateWithoutCompanyInput>
  }

  export type LeadUpdateManyWithWhereWithoutCompanyInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutCompanyInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    firstName?: StringFilter<"Lead"> | string
    lastName?: StringFilter<"Lead"> | string
    title?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    status?: StringFilter<"Lead"> | string
    isVip?: BoolFilter<"Lead"> | boolean
    companyId?: StringFilter<"Lead"> | string
    createdAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type CompanyNoteUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyNoteWhereUniqueInput
    update: XOR<CompanyNoteUpdateWithoutCompanyInput, CompanyNoteUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyNoteCreateWithoutCompanyInput, CompanyNoteUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyNoteUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyNoteWhereUniqueInput
    data: XOR<CompanyNoteUpdateWithoutCompanyInput, CompanyNoteUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyNoteUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyNoteScalarWhereInput
    data: XOR<CompanyNoteUpdateManyMutationInput, CompanyNoteUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyNoteScalarWhereInput = {
    AND?: CompanyNoteScalarWhereInput | CompanyNoteScalarWhereInput[]
    OR?: CompanyNoteScalarWhereInput[]
    NOT?: CompanyNoteScalarWhereInput | CompanyNoteScalarWhereInput[]
    id?: StringFilter<"CompanyNote"> | string
    text?: StringFilter<"CompanyNote"> | string
    companyId?: StringFilter<"CompanyNote"> | string
    createdAt?: DateTimeFilter<"CompanyNote"> | Date | string
  }

  export type CompanyCreateWithoutNotesInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isVip?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutCompaniesInput
    leads?: LeadCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isVip?: boolean
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutNotesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutNotesInput, CompanyUncheckedCreateWithoutNotesInput>
  }

  export type CompanyUpsertWithoutNotesInput = {
    update: XOR<CompanyUpdateWithoutNotesInput, CompanyUncheckedUpdateWithoutNotesInput>
    create: XOR<CompanyCreateWithoutNotesInput, CompanyUncheckedCreateWithoutNotesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutNotesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutNotesInput, CompanyUncheckedUpdateWithoutNotesInput>
  }

  export type CompanyUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutCompaniesNestedInput
    leads?: LeadUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutLeadsInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isVip?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    industry: IndustryCreateNestedOneWithoutCompaniesInput
    notes?: CompanyNoteCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isVip?: boolean
    industryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: CompanyNoteUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutLeadsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutLeadsInput, CompanyUncheckedCreateWithoutLeadsInput>
  }

  export type TouchCreateWithoutLeadInput = {
    id?: string
    date?: Date | string
    type: string
    notes?: string
  }

  export type TouchUncheckedCreateWithoutLeadInput = {
    id?: string
    date?: Date | string
    type: string
    notes?: string
  }

  export type TouchCreateOrConnectWithoutLeadInput = {
    where: TouchWhereUniqueInput
    create: XOR<TouchCreateWithoutLeadInput, TouchUncheckedCreateWithoutLeadInput>
  }

  export type TouchCreateManyLeadInputEnvelope = {
    data: TouchCreateManyLeadInput | TouchCreateManyLeadInput[]
  }

  export type LeadNoteCreateWithoutLeadInput = {
    id?: string
    text: string
    createdAt?: Date | string
  }

  export type LeadNoteUncheckedCreateWithoutLeadInput = {
    id?: string
    text: string
    createdAt?: Date | string
  }

  export type LeadNoteCreateOrConnectWithoutLeadInput = {
    where: LeadNoteWhereUniqueInput
    create: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput>
  }

  export type LeadNoteCreateManyLeadInputEnvelope = {
    data: LeadNoteCreateManyLeadInput | LeadNoteCreateManyLeadInput[]
  }

  export type CompanyUpsertWithoutLeadsInput = {
    update: XOR<CompanyUpdateWithoutLeadsInput, CompanyUncheckedUpdateWithoutLeadsInput>
    create: XOR<CompanyCreateWithoutLeadsInput, CompanyUncheckedCreateWithoutLeadsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutLeadsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutLeadsInput, CompanyUncheckedUpdateWithoutLeadsInput>
  }

  export type CompanyUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneRequiredWithoutCompaniesNestedInput
    notes?: CompanyNoteUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    industryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: CompanyNoteUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type TouchUpsertWithWhereUniqueWithoutLeadInput = {
    where: TouchWhereUniqueInput
    update: XOR<TouchUpdateWithoutLeadInput, TouchUncheckedUpdateWithoutLeadInput>
    create: XOR<TouchCreateWithoutLeadInput, TouchUncheckedCreateWithoutLeadInput>
  }

  export type TouchUpdateWithWhereUniqueWithoutLeadInput = {
    where: TouchWhereUniqueInput
    data: XOR<TouchUpdateWithoutLeadInput, TouchUncheckedUpdateWithoutLeadInput>
  }

  export type TouchUpdateManyWithWhereWithoutLeadInput = {
    where: TouchScalarWhereInput
    data: XOR<TouchUpdateManyMutationInput, TouchUncheckedUpdateManyWithoutLeadInput>
  }

  export type TouchScalarWhereInput = {
    AND?: TouchScalarWhereInput | TouchScalarWhereInput[]
    OR?: TouchScalarWhereInput[]
    NOT?: TouchScalarWhereInput | TouchScalarWhereInput[]
    id?: StringFilter<"Touch"> | string
    date?: DateTimeFilter<"Touch"> | Date | string
    type?: StringFilter<"Touch"> | string
    notes?: StringFilter<"Touch"> | string
    leadId?: StringFilter<"Touch"> | string
  }

  export type LeadNoteUpsertWithWhereUniqueWithoutLeadInput = {
    where: LeadNoteWhereUniqueInput
    update: XOR<LeadNoteUpdateWithoutLeadInput, LeadNoteUncheckedUpdateWithoutLeadInput>
    create: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput>
  }

  export type LeadNoteUpdateWithWhereUniqueWithoutLeadInput = {
    where: LeadNoteWhereUniqueInput
    data: XOR<LeadNoteUpdateWithoutLeadInput, LeadNoteUncheckedUpdateWithoutLeadInput>
  }

  export type LeadNoteUpdateManyWithWhereWithoutLeadInput = {
    where: LeadNoteScalarWhereInput
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyWithoutLeadInput>
  }

  export type LeadNoteScalarWhereInput = {
    AND?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
    OR?: LeadNoteScalarWhereInput[]
    NOT?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
    id?: StringFilter<"LeadNote"> | string
    text?: StringFilter<"LeadNote"> | string
    leadId?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
  }

  export type LeadCreateWithoutNotesInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    status?: string
    isVip?: boolean
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutLeadsInput
    touches?: TouchCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutNotesInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    status?: string
    isVip?: boolean
    companyId: string
    createdAt?: Date | string
    touches?: TouchUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutNotesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
  }

  export type LeadUpsertWithoutNotesInput = {
    update: XOR<LeadUpdateWithoutNotesInput, LeadUncheckedUpdateWithoutNotesInput>
    create: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutNotesInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutNotesInput, LeadUncheckedUpdateWithoutNotesInput>
  }

  export type LeadUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutLeadsNestedInput
    touches?: TouchUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    touches?: TouchUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateWithoutTouchesInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    status?: string
    isVip?: boolean
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutLeadsInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutTouchesInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    status?: string
    isVip?: boolean
    companyId: string
    createdAt?: Date | string
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutTouchesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutTouchesInput, LeadUncheckedCreateWithoutTouchesInput>
  }

  export type LeadUpsertWithoutTouchesInput = {
    update: XOR<LeadUpdateWithoutTouchesInput, LeadUncheckedUpdateWithoutTouchesInput>
    create: XOR<LeadCreateWithoutTouchesInput, LeadUncheckedCreateWithoutTouchesInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutTouchesInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutTouchesInput, LeadUncheckedUpdateWithoutTouchesInput>
  }

  export type LeadUpdateWithoutTouchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutLeadsNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutTouchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type CompanyCreateManyIndustryInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    isVip?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateWithoutIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutCompanyNestedInput
    notes?: CompanyNoteUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCompanyNestedInput
    notes?: CompanyNoteUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyCompanyInput = {
    id?: string
    firstName: string
    lastName: string
    title?: string | null
    email?: string | null
    phone?: string | null
    status?: string
    isVip?: boolean
    createdAt?: Date | string
  }

  export type CompanyNoteCreateManyCompanyInput = {
    id?: string
    text: string
    createdAt?: Date | string
  }

  export type LeadUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    touches?: TouchUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    touches?: TouchUncheckedUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyNoteUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyNoteUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyNoteUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouchCreateManyLeadInput = {
    id?: string
    date?: Date | string
    type: string
    notes?: string
  }

  export type LeadNoteCreateManyLeadInput = {
    id?: string
    text: string
    createdAt?: Date | string
  }

  export type TouchUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type TouchUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type TouchUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type LeadNoteUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
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