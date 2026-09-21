import assert from 'node:assert'
import { add } from './app.js'

assert.strictEqual(add(2, 3), 5)

console.log('All tests passed!')