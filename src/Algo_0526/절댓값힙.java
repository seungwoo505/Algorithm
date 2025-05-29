package Algo_0526;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;

public class 절댓값힙 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();
        PriorityQueue<Integer> queue = new PriorityQueue<>((a, b) -> {
            int x1 = Math.abs(a), x2 = Math.abs(b);

            return x1 == x2 ? a - b : x1 - x2;
        });

        for (int n = 0; n < N; n++) {
            int x = Integer.parseInt(br.readLine());
            if (x == 0) {
                sb.append(queue.isEmpty() ? 0 : queue.poll()).append("\n");
            } else {
                queue.offer(x);
            }
        }

        System.out.println(sb);
    }
}
