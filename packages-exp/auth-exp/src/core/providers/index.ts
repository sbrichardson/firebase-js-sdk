/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Supported providers
 */
export enum ProviderId {
  ANONYMOUS = 'anonymous',
  CUSTOM = 'custom',
  FACEBOOK = 'facebook.com',
  FIREBASE = 'firebase',
  GITHUB = 'github.com',
  GOOGLE = 'google.com',
  PASSWORD = 'password',
  PHONE = 'phone',
  TWITTER = 'twitter.com'
}

/**
 * Supported sign in methods
 */
export enum SignInMethod {
  ANONYMOUS = 'anonymous',
  EMAIL_LINK = 'emailLink',
  EMAIL_PASSWORD = 'password',
  FACEBOOK = 'facebook.com',
  GITHUB = 'github.com',
  GOOGLE = 'google.com',
  PHONE = 'phone',
  TWITTER = 'twitter.com'
}

/**
 * A provider for generating credentials
 */
export interface AuthProvider {
  readonly providerId: ProviderId;
}