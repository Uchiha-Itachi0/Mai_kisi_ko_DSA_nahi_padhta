# Implementation of stack using Linked list

class Node:
    def __init__(self, data):
        self.next = None
        self.data = data


class Stack:
    def __init__(self):
        self.head = None

    # For adding data
    def push(self, data):
        node = Node(data)
        node.next, self.head = self.head, node

    # For fetching the data
    def pop(self):
        if not self.head:
            raise Exception("Popping from the empty stack []")
        storage = self.head.data
        self.head = self.head.next
        return storage

    # For displaying stack
    def print_stack(self):
        storage, current = [], self.head
        while current:
            storage.append(current.data)
            current = current.next
        print(storage)


if __name__ == '__main__':
    stack = Stack()
    stack.push(1)
    stack.push(2)
    stack.print_stack()
    print(stack.pop())
    stack.print_stack()
