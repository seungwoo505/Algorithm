package Algo_0412;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.PriorityQueue;

public class 최대힙 {
    public static void main(String[] args) throws IOException {
        StringBuilder sb = new StringBuilder();

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder());

        for (int n = 0; n < N; n++) {
            int x = Integer.parseInt(br.readLine());

            if (x == 0) {
                sb.append(queue.isEmpty() ? 0 : queue.poll())
                        .append("\n");
            } else {
                queue.offer(x);
            }
        }

        System.out.println(sb);
    }
}
