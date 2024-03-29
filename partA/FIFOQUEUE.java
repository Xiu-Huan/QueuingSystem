package partA;

import java.util.ArrayList;


public class FIFOQUEUE implements IQueuable {
    private ArrayList<String> queue;

    public FIFOQUEUE() {
        queue = new ArrayList<>();
    }

    @Override
    public String[] enqueue(String value) {
        queue.add(value);
        return queue.toArray(new String[0]);
    }

    @Override
    public String dequeue() {
        if (queue.isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return queue.remove(0);
    }

    @Override
    public String[] getQueue() {
        return queue.toArray(new String[0]);
    }

    @Override
    public int size() {
        return queue.size();
    }
}