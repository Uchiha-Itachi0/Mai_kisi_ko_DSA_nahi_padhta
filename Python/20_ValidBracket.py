def validBracket(s: str) -> bool:
    stack = []
    for bracket in s:
        if bracket is "(":
            stack.append(")")
        elif bracket is "{":
            stack.append("}")
        elif bracket is "[":
            stack.append("[")
        elif not stack or stack.pop() is not bracket:
            return False

    return not stack
