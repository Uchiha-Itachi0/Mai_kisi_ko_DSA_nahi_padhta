# Implementing a Linked list so that we can solve linked list questions

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    # For inserting data in linked list
    def append(self, data):
        new_node = Node(data)
        if self.head:
            self.tail.next, self.tail = new_node, new_node
        else:
            self.head, self.tail = new_node, new_node

    # Converting list of data into linked list
    def linked_list(self, data: list):
        for value in data:
            self.append(value)

    # Finding length
    def size(self):
        length, current = 0, self.head
        while current:
            length += 1
            current = current.next
        return length

    # For printing data
    def print(self):
        current, storage = self.head, []
        while current:
            storage.append(current.data)
            current = current.next
        print(storage)


if __name__ == "__main__":
    l1 = LinkedList()
    l1.linked_list([1, 2, 3, 4])
    l1.print()
    print(l1.size())

