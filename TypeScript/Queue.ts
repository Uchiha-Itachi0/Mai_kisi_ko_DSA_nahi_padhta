export default class Queue<T>{
    private array: T[] = [];

    public add = (data: T) => this.array.push(data);

    public pop = (): T => {
        if(this.isEmpty()){
            throw new Error("Popping from the empty queue");
        }
        else{
            return this.array.shift() as T;
        }
    };

    public isEmpty = (): boolean => this.array.length === 0;

    public print = (): void => console.log(this.array);
}
