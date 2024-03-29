package partA;

public class Main {
    public static void main(String[] args) {
        // Creating instances of LIFOQUEUE and FIFOQUEUE
        LIFOQUEUE lifoQueue = new LIFOQUEUE();
        FIFOQUEUE fifoQueue = new FIFOQUEUE();

        // Enqueue some values
        lifoQueue.enqueue("1");
        lifoQueue.enqueue("2");
        lifoQueue.enqueue("3");

        fifoQueue.enqueue("A");
        fifoQueue.enqueue("B");
        fifoQueue.enqueue("C");

        // Dequeue values and print them
        System.out.println("Dequeuing from LIFOQUEUE:");
        while (lifoQueue.size() > 0) {
            System.out.println(lifoQueue.dequeue());
        }

        System.out.println("Dequeuing from FIFOQUEUE:");
        while (fifoQueue.size() > 0) {
            System.out.println(fifoQueue.dequeue());
        }
    }
}


/*

Question B
@Override
public String[] enqueue(String value) {
    String[] newArray = new String[queue.length + 1];
    for (int i = 0; i < queue.length; i++) {
        newArray[i] = queue[i];
    }
    newArray[newArray.length - 1] = value;
    queue = newArray;
    return queue;
}

@Override
public String dequeue() {
    if (queue.length == 0) {
        throw new IllegalStateException("Queue is empty");
    }
    String removedItem = queue[0];
    String[] newArray = new String[queue.length - 1];
    for (int i = 1; i < queue.length; i++) {
        newArray[i - 1] = queue[i];
    }
    queue = newArray;
    return removedItem;
}
 */

/*
 * Encapsulation: Currently, the classes expose their internal array directly 
 * through the getQueue method. It would be better to encapsulate the array 
 * and expose only the necessary functionality.
 * 
 * 
 */