class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    const poppedItem = this.items[this.top];
    delete this.items[this.top];
    this.top -= 1;
    return poppedItem;
  }

  isEmpty() {
    return this.top === -1;
  }
}

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('🥑');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');

    stack.push('🌽');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('🌽');
  });


//implement a feature that can pop of stack 
  it('can pop off', () => {
    stack.push('🥑');
    stack.push('🌽');

    const poppedItem = stack.pop();
    expect(poppedItem).toBe('🌽');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('🥑');
  });

  it('throws an error if popped from an empty stack', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
  });
});
