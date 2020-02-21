<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/util](./util.md) &gt; [Deferred](./util.deferred.md)

## Deferred class

 Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<b>Signature:</b>

```typescript
export declare class Deferred<R> 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)()](./util.deferred._constructor_.md) |  | Constructs a new instance of the <code>Deferred</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [promise](./util.deferred.promise.md) |  | <code>Promise&lt;R&gt;</code> |  |
|  [reject](./util.deferred.reject.md) |  | <code>(value?: unknown) =&gt; void</code> |  |
|  [resolve](./util.deferred.resolve.md) |  | <code>(value?: unknown) =&gt; void</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [wrapCallback(callback)](./util.deferred.wrapcallback.md) |  | Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback and returns a node-style callback which will resolve or reject the Deferred's promise. |
