/*
* This program test stack class.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-09
*/

'use strict'

const ps = require('prompt-sync')
const prompt = ps()

class MrCoxallStack {
  private stack: unknown[] = []

  push (pushValue: unknown) {
    this.stack.push(pushValue)
  }

  showStack () {
    for (let counter = this.stack.length - 1; counter >= 0; counter--) {
      console.log(this.stack[counter])
    }
  }

  pop () {
    let returnValue: unknown
    if (this.stack.length !== 0) {
      returnValue = this.stack.pop()
    } else {
      returnValue = null
    }
    return returnValue
  }
}

const aStack = new MrCoxallStack()

let input: string = prompt('Insert input:')
try {
  if (isNaN(Number(input))) {
    throw new Error('the input was not a number')
  } else {
    aStack.push(Number(input))
    aStack.showStack()
  }
} catch (Expetion) {
  console.log('the input wasNot a number.')
}

input = prompt('Another input:')

console.log('If put the input raw in the stack:')

aStack.push(input)
aStack.showStack()

console.log('If we pop it once:')
aStack.pop()
aStack.showStack()

console.log('If we pop it again:')
aStack.pop()
aStack.showStack()

console.log('If we pop it empty:')
const temp: unknown = aStack.pop()

console.log('The output would be :\n' + temp)

console.log('\nDone.')
